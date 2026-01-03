<template>
  <div class="flex flex-col md:flex-row items-center justify-between">
    <div class="w-full md:w-1/2">
      <div class="datatable-length">
        <div class="dt-length">
          <label>Show
            <select
              v-model="localPageSize"
              class="border px-3 py-2 rounded-lg border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 dark:focus:border-blue-500"
              @change="onPageSizeChange"
            >
              <option v-for="size in pageSizeOptions" :key="size" :value="size">
                {{ size }}
              </option>
            </select>
            entries
          </label>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 mt-4 md:mt-0 text-end">
      <div class="datatable-paginate">
        <div class="dt-paging">
          <nav aria-label="pagination">
            <ul class="pagination">
              <!-- First Page -->
              <a
                :class="['relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 first rounded-l-lg',
                  currentPage === 1 ?
                    'bg-white text-gray-300 dark:text-gray-600 cursor-not-allowed' :
                    'bg-white text-gray-800 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 cursor-pointer',
                  'border-gray-200 dark:border-gray-700'
                ]"
                @click="goToPage(1)"
                :disabled="currentPage === 1"
                aria-label="First"
              >«</a>

              <!-- Previous Page -->
              <a
                :class="['relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6',
                  currentPage === 1 ?
                    'bg-white text-gray-300 dark:text-gray-600 cursor-not-allowed' :
                    'bg-white text-gray-800 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 cursor-pointer',
                  'border-gray-200 dark:border-gray-700'
                ]"
                @click="goToPage(currentPage - 1)"
                :disabled="currentPage === 1"
                aria-label="Previous"
              >
                <i class="ti ti-chevron-left"></i>
              </a>

              <!-- Page Numbers -->
              <template v-for="page in visiblePages" :key="page">
                <a
                  href="#"
                  :class="['relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6',
                    currentPage === page ?
                      'font-semibold bg-primary-100 dark:bg-primary-700/75 text-primary-800 dark:text-primary-300' :
                      'bg-white text-primary-800 hover:text-primary-900 hover:border-primary-300 hover:shadow-sm dark:text-primary-300 dark:hover:border-primary-600 dark:hover:text-primary-200',
                    'border-primary-200 dark:border-primary-700'
                  ]"
                  @click.prevent="goToPage(page)"
                  :aria-current="currentPage === page ? 'page' : undefined"
                >{{ page }}</a>
              </template>

              <!-- Next Page -->
              <a
                :class="['relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6',
                  currentPage === totalPages ?
                    'bg-white text-gray-300 dark:text-gray-600 cursor-not-allowed' :
                    'bg-white text-gray-800 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 cursor-pointer',
                  'border-gray-200 dark:border-gray-700'
                ]"
                @click="goToPage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                aria-label="Next"
              >
                <i class="ti ti-chevron-right"></i>
              </a>

              <!-- Last Page -->
              <a
                :class="['relative inline-flex justify-center items-center space-x-2 border px-4 py-2 -mr-px leading-6 last rounded-r-lg',
                  currentPage === totalPages ?
                    'bg-white text-gray-300 dark:text-gray-600 cursor-not-allowed' :
                    'bg-white text-gray-800 hover:text-gray-900 hover:border-gray-300 hover:shadow-sm dark:text-gray-300 dark:hover:border-gray-600 dark:hover:text-gray-200 cursor-pointer',
                  'border-gray-200 dark:border-gray-700'
                ]"
                @click="goToPage(totalPages)"
                :disabled="currentPage === totalPages"
                aria-label="Last"
              >»</a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasePagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalItems: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 25, 50, 100]
    },
    maxVisibleButtons: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      localPageSize: this.pageSize
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.totalItems / this.localPageSize)
    },
    visiblePages() {
      if (this.totalPages <= this.maxVisibleButtons) {
        return Array.from({ length: this.totalPages }, (_, i) => i + 1)
      }

      const half = Math.floor(this.maxVisibleButtons / 2)
      let start = Math.max(1, this.currentPage - half)
      let end = Math.min(this.totalPages, start + this.maxVisibleButtons - 1)

      if (end - start + 1 < this.maxVisibleButtons) {
        start = Math.max(1, end - this.maxVisibleButtons + 1)
      }

      const range = []
      for (let i = start; i <= end; i++) {
        range.push(i)
      }

      return range
    }
  },
  methods: {
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
        this.$emit('page-change', page)
      }
    },
    onPageSizeChange() {
      this.$emit('page-size-change', Number(this.localPageSize))
      // Reset to first page when changing page size
      if (this.currentPage !== 1) {
        this.$emit('page-change', 1)
      }
    }
  },
  watch: {
    pageSize(newVal) {
      this.localPageSize = newVal
    }
  }
}
</script>

<!-- <style scoped>
.pagination {
  @apply flex items-center -space-x-px;
}

.pagination a {
  @apply border-gray-200 dark:border-gray-700;
  min-width: 2.5rem;
  text-align: center;
}

.pagination a:first-child {
  @apply rounded-l-lg;
}

.pagination a:last-child {
  @apply rounded-r-lg;
}

.pagination a:not(:first-child) {
  @apply -ml-px;
}

.pagination a:not(:last-child) {
  @apply -mr-px;
}

.pagination a:hover:not(.disabled) {
  @apply z-10 border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600;
}

.pagination a.active {
  @apply z-10 bg-blue-50 border-blue-500 text-blue-600 dark:bg-blue-900/50 dark:border-blue-800 dark:text-blue-300;
}

.pagination a.disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style> -->
