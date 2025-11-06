<template>
  <div class="kanban-drag">
    <div class="md:col-span-12">
      <div class="flex overflow-x-auto items-start min-w-[265px]">

        <!-- Loop through kanban columns -->
        <draggable v-for="column in kanbanColumns" :key="column.id" :list="column.items" group="kanban" @end="onDragEnd"
          class="p-3 rounded bg-secondary-transparent w-200 me-3">
          <div class="bg-white p-4 border border-borderColor rounded mb-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <span :class="`bg-${column.status}-100 p-1 flex rounded-full me-2`">
                  <span :class="`bg-${column.status} rounded-full block p-1`"></span>
                </span>
                <h6 class="me-2 text-dark mt-2">{{ column.title }}</h6>
                <span
                  class="inline-flex items-center p-1.5 rounded-full text-xs leading-none font-semibold bg-light rounded-full text-dark">
                  {{ column.count }}
                </span>
              </div>
              <div>
                <a href="javascript:void(0);" :data-dropdown-toggle="`storage-dropdown-${column.id}`">
                  <i class="ti ti-dots-vertical text-dark"></i>
                </a>
                <ul :id="`storage-dropdown-${column.id}`"
                  class="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg">
                  <li>
                    <a href="javascript:void(0);"
                      class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                        class="ti ti-trash me-1"></i>Delete</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Draggable items within each column -->
          <div class="kanban-drag-wrap min-w-[230px] min-h-[50px] kanban-drag">
            <div v-for="item in column.items" :key="item.id" class="mb-2">
              <draggable
                :list="[item]"
                :group="{ name: 'kanban' }"
                :sort="false"
                @end="onDragEnd"
                class="draggable-card"
                :data-column-id="column.id"
              >
                <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white kanban-card mb-0">
                  <div class="card-body p-5">
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <span
                          :class="`inline-flex items-center py-1 px-2 rounded text-xs leading-none font-medium bg-${item.priorityClass} text-white`">
                          <i class="fas fa-circle text-[6px] me-1"></i>{{ item.priority }}
                        </span>
                      </div>
                      <div class="dropdown">
                        <a href="javascript:void(0);" :data-dropdown-toggle="`storage-dropdown-${item.id}`">
                          <i class="ti ti-dots-vertical text-dark"></i>
                        </a>
                        <ul :id="`storage-dropdown-${item.id}`"
                          class="hidden p-2 z-[1] w-[150px] border border-borderColor rounded bg-white shadow-lg">
                          <li>
                            <a href="javascript:void(0);"
                              class="rounded text-body p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                              data-modal-target="delete_modal" data-modal-toggle="delete_modal"><i
                                class="ti ti-trash me-1"></i>Delete</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <!-- Rest of your card content using item data -->
                    <div class="flex items-center mb-4">
                      <span class="size-6 rounded-full flex items-center justify-center bg-warning me-2">
                        <img :src="getIconUrl('kanban-arrow.svg')" class="w-auto h-auto" alt="Img">
                      </span>
                      <h6 class="flex items-center">{{ item.title }}</h6>
                    </div>
                    <!-- Continue with the rest of your card structure using item properties -->
                    <div class="flex items-center border-b border-borderColor mb-4 pb-4">
                      <div class="me-3 pe-3 border-r border-borderColor">
                        <span class="font-medium text-[12px] block mb-1">Budget</span>
                        <p class="text-[13px] text-dark">{{ item.budget }}</p>
                      </div>
                      <div class="me-3 pe-3 border-r border-borderColor">
                        <span class="font-medium text-[12px] block mb-1">Tasks</span>
                        <p class="text-[13px] text-dark">{{ item.tasks }}</p>
                      </div>
                      <div>
                        <span class="font-medium text-[12px] block mb-1">Due on</span>
                        <p class="text-[13px] text-dark">{{ item.dueDate }}</p>
                      </div>
                    </div>
                    <!-- Team avatars section -->
                    <div class="flex items-center justify-between">
                      <div class="flex -space-x-3 rtl:space-x-reverse me-3">
                        <img v-for="(avatar, index) in item.team.slice(0, 6)" :key="index"
                          class="size-6 border border-white rounded-full hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                          :src="getProfileImageUrl(avatar)" :alt="avatar" />
                        <a v-if="item.team.length > 6"
                          class="flex items-center justify-center size-6 text-xs font-medium text-white bg-primary border border-white rounded-full hover:bg-primary shrink-0 hover:-translate-y-[0.188rem] hover:z-[1] transition-transform duration-150 ease-in-out"
                          href="#">
                          +{{ item.team.length - 6 }}
                        </a>
                      </div>
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="flex items-center text-dark me-2">
                          <i class="ti ti-message-circle text-gray me-1"></i>
                        </a>
                        <a href="javascript:void(0);" class="flex items-center text-dark">
                          <i class="ti ti-paperclip text-gray me-1"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </draggable>
            </div>
          </div>
          <!-- Add new project button -->
          <div class="pt-2">
            <a href="#" class="btn bg-warning text-white hover:bg-primary flex items-center justify-center"
              data-modal-target="add_new_project" data-modal-toggle="add_new_project">
              <i class="ti ti-plus me-2"></i>
              New Project
            </a>
          </div>
        </draggable>

      </div>
    </div>
  </div>
</template>
<script>
import { VueDraggableNext } from 'vue-draggable-next'

export default {
  name: 'AllKanban',
  components: {
    draggable: VueDraggableNext,
  },
  data() {
    return {
      kanbanColumns: [
        {
          id: 'new',
          title: 'New',
          status: 'warning',
          count: 2,
          items: [
            {
              id: 1,
              title: 'Doccure',
              priority: 'Low',
              priorityClass: 'success',
              budget: '$24,000',
              tasks: '12/15',
              dueDate: '15 Apr 2024',
              team: ['avatar-19.jpg', 'avatar-12.jpg', 'avatar-16.jpg', 'avatar-01.jpg', 'avatar-02.jpg', 'avatar-03.jpg']
            },
            {
              id: 2,
              title: 'Dreams Tour',
              priority: 'High',
              priorityClass: 'danger',
              budget: '$24,000',
              tasks: '12/15',
              dueDate: '15 Apr 2024',
              team: ['avatar-19.jpg', 'avatar-12.jpg', 'avatar-16.jpg', 'avatar-01.jpg', 'avatar-02.jpg', 'avatar-03.jpg']
            }
          ]
        },
        {
          id: 'inprogress',
          title: 'Inprogress',
          status: 'primary',
          count: 13,
          items: [
            {
              id: 3,
              title: 'Dreams Gigs',
              priority: 'High',
              priorityClass: 'primary',
              budget: '$24,000',
              tasks: '12/15',
              dueDate: '15 Apr 2024',
              team: ['avatar-19.jpg', 'avatar-12.jpg', 'avatar-16.jpg', 'avatar-01.jpg', 'avatar-02.jpg', 'avatar-03.jpg']
            },
            {
              id: 4,
              title: 'Dreams Rent',
              priority: 'Medium',
              priorityClass: 'warning',
              budget: '$24,000',
              tasks: '12/15',
              dueDate: '15 Apr 2024',
              team: ['avatar-19.jpg', 'avatar-12.jpg', 'avatar-16.jpg', 'avatar-01.jpg', 'avatar-02.jpg', 'avatar-03.jpg']
            }
          ]
        },
        {
          id: 'onhold',
          title: 'On-hold',
          status: 'primary',
          count: 4,
          items: [
            {
              id: 5,
              title: 'Dreams Sports',
              priority: 'Low',
              priorityClass: 'success',
              budget: '$24,000',
              tasks: '12/15',
              dueDate: '15 Apr 2024',
              team: ['avatar-19.jpg', 'avatar-12.jpg', 'avatar-16.jpg', 'avatar-01.jpg', 'avatar-02.jpg', 'avatar-03.jpg']
            },
            {
              id: 6,
              title: 'Dreams Estate',
              priority: 'Low',
              priorityClass: 'success',
              budget: '$24,000',
              tasks: '12/15',
              dueDate: '15 Apr 2024',
              team: ['avatar-19.jpg', 'avatar-12.jpg', 'avatar-16.jpg', 'avatar-01.jpg', 'avatar-02.jpg', 'avatar-03.jpg']
            }
          ]
        },
        {
          id: 'completed',
          title: 'Completed',
          status: 'primary',
          count: 10,
          items: [
            {
              id: 7,
              title: 'Dreams Rent',
              priority: 'Medium',
              priorityClass: 'warning',
              budget: '$24,000',
              tasks: '12/15',
              dueDate: '15 Apr 2024',
              team: ['avatar-19.jpg', 'avatar-12.jpg', 'avatar-16.jpg', 'avatar-01.jpg', 'avatar-02.jpg', 'avatar-03.jpg']
            }
          ]
        }
      ]
    }
  },
  methods: {
    onDragEnd(event) {
      // Handle drag end event and move items between columns
      const { from, to, item, oldIndex, newIndex } = event

      // Find source and target columns using a more reliable method
      if (from && to && from !== to) {
        // Extract column IDs from the draggable wrapper elements
        const sourceColumnId = from.closest('[data-column-id]')?.getAttribute('data-column-id')
        const targetColumnId = to.closest('[data-column-id]')?.getAttribute('data-column-id')

        if (sourceColumnId && targetColumnId && sourceColumnId !== targetColumnId) {
          // Find the source column and item
          const sourceColumn = this.kanbanColumns.find(col => col.id === sourceColumnId)
          const targetColumn = this.kanbanColumns.find(col => col.id === targetColumnId)

          if (sourceColumn && targetColumn) {
            const movedItem = sourceColumn.items[oldIndex]

            // Remove from source column
            sourceColumn.items.splice(oldIndex, 1)

            // Add to target column
            targetColumn.items.splice(newIndex, 0, movedItem)

            // Update counts
            this.updateColumnCounts()
          }
        }
      }

      console.log()
    },
    onModuleDragEnd() {},
    getProfileImageUrl(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
    },
    getIconUrl(imageName) {
      return new URL(`/src/assets/img/icons/${imageName}`, import.meta.url).href;
    },
    updateColumnCounts() {
      // Update the count for each column based on current items
      this.kanbanColumns.forEach(column => {
        column.count = column.items.length
      })
    }
  }
}
</script>