<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Helpdesk
            <span
              class="ml-2 text-primary bg-primary-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-primary text-[12px]"
            >
              {{ data.length }}</span
            >
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700"
                  >Home</router-link
                >
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Helpdesk</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Dropdown -->
          <div>
            <a
              href="javascript:void(0);"
              class="border border-borderColor rounded p-2 bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
              data-dropdown-toggle="export-dropdown"
            >
              <i class="ti ti-package-export me-2"></i>Export<i class="ti ti-chevron-down ml-1"></i>
            </a>
            <ul
              id="export-dropdown"
              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg"
            >
              <li>
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                >
              </li>
              <li>
                <a
                  href="javascript:void(0);"
                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                  ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                </a>
              </li>
            </ul>
          </div>
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh"
          >
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse"
            id="collapse-header"
            @click="toggleHeader"
          >
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="card">
        <div
          class="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t"
        >
          <div class="relative">
            <span
              class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none"
            >
              <i class="ti ti-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search"
              v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
            />
          </div>

          <!-- Add New Button -->
          <template v-if="canAddTickets">
            <a
              href="javascript:void(0);"
              class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition"
              @click="openCreateModal"
            >
              <i class="ti ti-square-rounded-plus-filled"></i>
              Tambahkan Baru
            </a>
          </template>
        </div>
        <div class="bg-white p-4">
          <div class="flex items-center justify-between flex-wrap gap-y-3">
            <div class="flex items-center flex-wrap gap-y-3">
              <div class="me-3">
                <button
                  class="border border-borderColor rounded p-2 shadow bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="filter-dropdown"
                  data-dropdown-placement="bottom-start"
                >
                  <i class="ti ti-filter me-1"></i>Filter<i class="ti ti-chevron-down ml-1"></i>
                </button>
                <div
                  id="filter-dropdown"
                  class="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px]"
                >
                  <div
                    class="filter-header flex items-center justify-between border-b border-borderColor p-3"
                  >
                    <h6 class="mb-0"><i class="ti ti-filter me-1"></i>Filter</h6>
                    <button
                      data-dropdown-hide="filter-dropdown"
                      @click="closeFilterDropdown"
                      class="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none focus:ring-0"
                    >
                      <i class="ti ti-x"></i>
                    </button>
                  </div>
                  <div id="accordionExample" data-accordion="collapse" class="p-4">
                    <div class="mb-4">
                      <h2 id="accordion-heading-1">
                        <button
                          type="button"
                          class="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                          data-accordion-target="#accordion-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-body-1"
                        >
                          <span class="text-dark"
                            ><i class="ti ti-chevron-right me-2"></i>Name</span
                          >
                        </button>
                      </h2>
                      <div
                        id="accordion-body-1"
                        class="hidden p-4 bg-light border border-borderColor rounded"
                        aria-labelledby="accordion-heading-1"
                        data-accordion-body
                      >
                        <div class="relative mb-4">
                          <span
                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none"
                          >
                            <i class="ti ti-search"></i>
                          </span>
                          <input
                            type="text"
                            placeholder="Search"
                            class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm"
                          />
                        </div>

                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-06.jpg"
                                  alt="Elizabeth"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Elizabeth Morgan</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-40.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Katherine Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-05.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Sophia Lopez</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-10.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>John Michael</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-15.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Natalie Brooks</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-01.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>William Turner</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-13.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Ava Martinez</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-12.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Nathan Reed</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-03.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Lily Anderson</span>
                              </span>
                            </label>
                          </li>
                          <li>
                            <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                              <input
                                type="checkbox"
                                class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                              />
                              <span class="flex items-center space-x-2">
                                <img
                                  src="@/assets/img/users/user-18.jpg"
                                  alt="Katherine"
                                  class="h-6 w-6 rounded-full"
                                />
                                <span>Ryan Coleman</span>
                              </span>
                            </label>
                          </li>
                        </ul>

                        <!-- Load More -->
                        <div class="mt-4">
                          <button class="text-primary hover:underline">Load More</button>
                        </div>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <a
                        href="javascript:void(0);"
                        class="btn border border-borderColor text-center w-full"
                        >Reset</a
                      >
                      <a href="javascript:void(0);" class="btn btn-primary w-full">Filter</a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Search Input with Icon -->
              <div class="relative">
                <input
                  type="text"
                  class="block flex-1 border border-borderColor shadow bg-white rounded-[5px] py-1.5 pr-2.5 pl-8 text-gray-900 focus:ring-0 focus:border-borderColor h-[38px] placeholder:text-gray-400 text-sm date-range bookingrange"
                  ref="dateRangeInput"
                  placeholder="dd/mm/yyyy - dd/mm/yyyy"
                />
                <span
                  class="absolute inset-y-1/2 start-[10px] flex items-center me-2.5 pointer-events-none"
                >
                  <i class="ti ti-calendar-due text-dark text-[14px] me-1"></i>
                </span>
              </div>
            </div>
            <div class="flex items-center flex-wrap gap-y-3">
              <!-- Dropdown -->
              <!-- <div class="me-3">
                <a
                  href="javascript:void(0);"
                  class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                  data-dropdown-toggle="sort-dropdown"
                >
                  <i class="ti ti-sort-ascending-2 me-2"></i>Sort By<i
                    class="ti ti-chevron-down ml-1"
                  ></i>
                </a>
                <ul
                  id="sort-dropdown"
                  class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[150px]"
                >
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      >Newest</a
                    >
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                      >Oldest</a
                    >
                  </li>
                </ul>
              </div> -->
            </div>
          </div>
          <!-- Table List -->
          <div class="table-responsive custom-table">
            <div v-if="isLoading" class="flex justify-center items-center py-10 mt-20">
              <div class="spinner-grow bg-primary me-3" role="status">
                <span class="sr-only">Loading...</span>
              </div>
              <span>Memuat data...</span>
            </div>
            <div
              v-else
              id="projectslist_wrapper"
              class="dt-container dt-tailwindcss dt-empty-footer"
            >
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start"></div>
                <div class="col-start-2 justify-self-end"></div>
              </div>
              <div class="grid grid-cols-1 gap-4 mb-4">
                <div class="col-span-2 table-responsive">
                  <a-table
                    class="table table-nowrap border border-borderColor dataTable text-sm align-middle whitespace-nowrap"
                    :columns="columns"
                    :data-source="paginatedData"
                    row-key="id"
                    :pagination="false"
                    :scroll="{ x: tableScrollX, y: 500 }"
                    table-layout="fixed"
                  >
                    <template #bodyCell="{ column, record, index }">
                      <!-- Index -->
                      <template v-if="column.key === 'index'">
                        {{ (currentPage - 1) * pageSize + index + 1 }}
                      </template>

                      <template v-if="column.key === 'ticket_number'">
                        <router-link
                          :to="`/support/ticket-details/${record.id}`"
                          class="text-gray-900 hover:text-primary"
                          >{{ record.ticket_number }}</router-link
                        >
                      </template>
                      <!-- <template v-if="column.key === 'title'">
                        {{ record.title }}
                      </template> -->
                      <template v-if="column.key === 'title'">
                        <div class="relative">
                          <span
                            class="font-medium block truncate cursor-pointer"
                            style="max-width: 200px"
                            :data-popover-target="'popover-title-' + record.id"
                            data-popover-placement="right"
                          >
                            {{ record.title }}
                          </span>
                          <!-- POPOVER -->
                          <div
                            data-popover
                            :id="'popover-title-' + record.id"
                            role="tooltip"
                            class="absolute z-[2000] invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0"
                          >
                            <div class="px-3 py-2">
                              <p class="whitespace-normal text-black break-words max-w-[230px]">
                                {{ record.title }}
                              </p>
                            </div>

                            <div data-popper-arrow></div>
                          </div>
                        </div>
                      </template>
                      <template v-if="column.key === 'reporter_name'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <!-- <a href="javascript:void(0);" class="avatar avatar-xs me-2">
                            <img
                              class="img-fluid rounded-full"
                              :src="getImageUrl(record.AssignedImage)"
                              alt="User Image"
                            />
                          </a> -->
                          <a href="javascript:void(0);" class="flex flex-col hover:text-primary">{{
                            record.reporter_name
                          }}</a>
                        </h6>
                      </template>
                      <template v-if="column.key === 'assigned_name'">
                        <h6 class="flex items-center text-[14px] font-medium mb-0">
                          <!-- <a href="javascript:void(0);" class="avatar me-2">
                            <img
                              class="img-fluid rounded-full"
                              :src="getImageUrlOne(record.AssigneeImage)"
                              alt="User Image"
                            />
                          </a> -->
                          <a href="javascript:void(0);" class="flex flex-col hover:text-primary"
                            >{{ record.assigned_name }}
                            <!-- <span class="text-default text-[13px] font-normal mt-1">{{
                              record.Role
                            }}</span> -->
                          </a>
                        </h6>
                      </template>
                      <template v-if="column.key === 'created_at_format'">
                        {{ record.created_at_format }}
                      </template>
                      <template v-if="column.key === 'type'">
                        {{ record.type }}
                      </template>
                      <template v-if="column.key === 'priority'">
                        <span
                          :class="{
                            'bg-success-100 text-success border-success':
                              record.priority_slug == 'low',
                            'bg-warning-100 text-warning border-warning':
                              record.priority_slug == 'medium',
                            'bg-danger-100 text-danger border-danger':
                              record.priority_slug == 'high',
                          }"
                          class="badge badge-tag badge px-1.5 py-0.5 rounded text-[12px]"
                        >
                          {{ record.priority }}
                        </span>
                      </template>
                      <template v-if="column.key === 'status'">
                        <span
                          :class="{
                            'bg-orange': record.status_slug == 'waiting-approval',
                            'bg-blue-700': record.status_slug == 'on-progress',
                            'bg-secondary': record.status_slug == 'approval-done',
                            'bg-danger': record.status_slug == 'rejected',
                            'bg-success': record.status_slug == 'closed',
                          }"
                          class="badge badge-pill badge-status"
                        >
                          {{ record.status }}
                        </span>
                      </template>
                      <template v-if="column.key === 'action'">
                        <template v-if="canManageTickets">
                          <div class="dropdown relative table-action">
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-6 h-6 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(record.id, $event)"
                              :class="{ active: openDropdown === record.id }"
                            >
                              <i class="ti ti-dots-vertical"></i>
                            </a>

                            <div
                              class="dropdown-menu absolute end-0 w-[175px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg"
                              :class="{
                                hidden: openDropdown !== record.id,
                                block: openDropdown === record.id,
                              }"
                              style="top: 100%; right: 0"
                            >
                              <a
                                v-if="
                                  canApproveTickets && record.status_slug === 'waiting-approval'
                                "
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                @click.stop="openApprovalModal(record)"
                              >
                                <i class="ti ti-checkbox text-blue me-1"></i> Persetujuan
                              </a>
                              <a
                                v-if="
                                  canApprovalDoneTickets(record.assigned_user_id) && record.status_slug === 'on-progress' && ['question','support'].includes(record.type_slug)
                                "
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                href="javascript:void(0);"
                                @click.stop="sendApprovalComplete(record)"
                              >
                                <i class="ti ti-user-check me-1"></i> Ajukan Selesai
                              </a>
                              <a
                                v-if="
                                  canValidateDoneTickets && record.status_slug === 'approval-done'
                                "
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary"
                                href="javascript:void(0);"
                                @click.stop="sendCompleted(record)"
                              >
                                <i class="ti ti-user-check me-1"></i> Persetujuan Selesai
                              </a>
                              <!-- <a
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                @click.stop="openFollowUpModal(record)"
                              >
                                <i class="ti ti-checkbox text-blue me-1"></i> Tindak Lanjut
                              </a> -->
                              <router-link
                                class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                :to="{ path: `/support/ticket-details/${record.id}` }"
                              >
                                <i class="ti ti-eye text-blue-light me-1"></i> Detail
                              </router-link>
                            </div>
                          </div>
                        </template>

                        <template v-else>
                          <router-link
                            class="dropdown-item inline-flex items-center justify-center border border-primary bg-skyblue-transparent rounded-md px-2 py-1 text-primary hover:bg-primary hover:text-white transition text-xs"
                            :to="{ path: `/support/ticket-details/${record.id}` }"
                          >
                            <i class="ti ti-eye text-sm"></i>
                          </router-link>
                        </template>
                      </template>
                    </template>
                  </a-table>
                </div>
              </div>
              <BasePagination
                :currentPage="currentPage"
                :pageSize="pageSize"
                :pageSizeOptions="pageSizeOptions"
                :totalItems="filteredPages.length"
                @page-change="onPageChange"
                @page-size-change="onPageSizeChange"
              />
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="justify-self-start"></div>
                <div class="col-start-2 justify-self-end"></div>
              </div>
            </div>
          </div>
          <!-- /Table List -->
        </div>
      </div>
    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->
  <!-- <ticket-modal></ticket-modal> -->
  <component
    v-if="TicketsCreateModal && showCreateModal"
    :is="TicketsCreateModal"
    :isOpen="showCreateModal"
    :projects="projects"
    @close="closeCreateModal"
    @refresh-list="fetchTickets"
  />

  <component
    v-if="TicketsApprovalModal && showApprovalModal"
    :is="TicketsApprovalModal"
    :isOpen="showApprovalModal"
    :ticket="selectedTicket"
    :projects="projects"
    @close="closeApprovalModal"
    @refresh-list="fetchTickets"
  />

  <!-- <component
    v-if="TicketsFollowUpModal && showFollowUpModal"
    :is="TicketsFollowUpModal"
    :isOpen="showFollowUpModal"
    :ticket="selectedTicket"
    :employees="employees"
    @close="closeFollowUpModal"
    @refresh-list="fetchTickets"
  /> -->
</template>
<script>
import BasePagination from '@/components/BasePagination.vue'
import 'daterangepicker/daterangepicker.css'
import 'daterangepicker/daterangepicker.js'
import moment from 'moment'
import DateRangePicker from 'daterangepicker'
import { onMounted, onUnmounted, ref, defineAsyncComponent } from 'vue'
import { initFlowbite } from 'flowbite'
import api from '../../../../api/api'

const columns = [
  {
    title: 'No',
    key: 'index',
    dataIndex: 'index',
    width: 60,
    sorter: {
      compare: (a, b) => a.index - b.index,
    },
  },
  {
    title: 'Ticket ID',
    key: 'ticket_number',
    dataIndex: 'ticket_number',
    width: 100,
    sorter: {
      compare: (a, b) =>
        (a.ticket_number || '').toLowerCase().localeCompare((b.ticket_number || '').toLowerCase()),
    },
  },
  {
    title: 'Subjek',
    key: 'title',
    dataIndex: 'title',
    width: 150,
    sorter: {
      compare: (a, b) => (a.title || '').toLowerCase().localeCompare((b.title || '').toLowerCase()),
    },
  },
  {
    title: 'Pembuat',
    key: 'reporter_name',
    dataIndex: 'reporter_name',
    width: 120,
    sorter: {
      compare: (a, b) =>
        (a.reporter_name || '').toLowerCase().localeCompare((b.reporter_name || '').toLowerCase()),
    },
  },
  {
    title: 'PIC',
    key: 'assigned_name',
    dataIndex: 'assigned_name',
    width: 120,
    sorter: {
      compare: (a, b) =>
        (a.assigned_name || '').toLowerCase().localeCompare((b.assigned_name || '').toLowerCase()),
    },
  },
  {
    title: 'Waktu Dibuat',
    key: 'created_at_format',
    dataIndex: 'created_at_format',
    width: 120,
    sorter: {
      compare: (a, b) =>
        (a.created_at_format || '')
          .toLowerCase()
          .localeCompare((b.created_at_format || '').toLowerCase()),
    },
  },
  {
    title: 'Tipe',
    key: 'type',
    dataIndex: 'type',
    width: 80,
    sorter: {
      compare: (a, b) => (a.type || '').toLowerCase().localeCompare((b.type || '').toLowerCase()),
    },
  },
  {
    title: 'Prioritas',
    key: 'priority',
    dataIndex: 'priority',
    width: 80,
    sorter: {
      compare: (a, b) =>
        (a.priority || '').toLowerCase().localeCompare((b.priority || '').toLowerCase()),
    },
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    width: 80,
    sorter: {
      compare: (a, b) =>
        (a.status || '').toLowerCase().localeCompare((b.status || '').toLowerCase()),
    },
  },
  {
    title: 'Aksi',
    key: 'action',
    width: 80,
  },
]
const rowSelection = {
  onChange: () => {},
  onSelect: () => {},
  onSelectAll: () => {},
}
export default {
  components: {
    BasePagination,
  },
  data() {
    return {
      searchQuery: '',
      title: 'Tickets',
      projects: [],
      employees: [],
      data: [],
      columns,
      rowSelection,
      currentPage: 1,
      pageSize: 10,
      pageSizeOptions: [5, 10, 20, 50],
      showCreateModal: false,
      isLoading: false,
      TicketsCreateModal: defineAsyncComponent(() =>
        import('./components/tickets-create-modal.vue')
      ),
      TicketsApprovalModal: null,
      showApprovalModal: false,
      TicketsFollowUpModal: null,
      showFollowUpModal: false,
      selectedTicket: null,
      roleSlug: '',
      userId: '',
    }
  },
  created() {
    // <-- aman di sini
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    this.roleSlug = (user.role_slug || '').toLowerCase()
    this.userId = user.id || ''
  },
  computed: {
    canManageTickets() {
      return ['superadmin', 'marketing', 'pic-project'].includes(this.roleSlug)
    },
    canUpdateTickets() {
      return ['pic-project'].includes(this.roleSlug)
    },
    canAddTickets() {
      return ['pic-customer'].includes(this.roleSlug)
    },
    canApproveTickets() {
      return ['marketing'].includes(this.roleSlug)
    },
    canValidateDoneTickets() {
      return ['marketing'].includes(this.roleSlug)
    },
    filteredPages() {
      const query = this.searchQuery.toLowerCase()
      return this.data.filter((record) => {
        return (
          record.ticket_number.toLowerCase().includes(query) ||
          record.title.toLowerCase().includes(query) ||
          record.reporter_name.toLowerCase().includes(query) ||
          record.assigned_name.toLowerCase().includes(query) ||
          record.created_at_format.toLowerCase().includes(query) ||
          record.type.toLowerCase().includes(query) ||
          record.priority.toLowerCase().includes(query) ||
          record.status.toLowerCase().includes(query)
        )
      })
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize
      return this.filteredPages.slice(start, start + this.pageSize)
    },
    totalPages() {
      return Math.ceil(this.filteredPages.length / this.pageSize) || 1
    },
    tableScrollX() {
      return this.data.length === 0 ? false : 'max-content'
    },
  },
  methods: {
    canApprovalDoneTickets(assignedUserId) {
      if (
        assignedUserId === null ||
        assignedUserId === undefined ||
        typeof assignedUserId === 'object'
      ) {
        return false
      }

      return Number(assignedUserId) === Number(this.userId)
    },
    async fetchTickets() {
      this.isLoading = true
      try {
        const params = {
          // daterange: this.filters.dateRange || '',
          // owners: this.selectedFilterOwners.join(',') || '',
          // tags: this.selectedFilterTags.join(',') || '',
        }

        const response = await api.get('/tickets', { params })
        const tickets = response.data

        this.data = tickets.map((item) => ({
          id: item.id,
          ticket_number: item.ticket_number || '',
          title: item.title || '',
          description: item.description || '',
          priority: item.priority || '',
          priority_slug: item.priority_slug || '',
          status: item.status || '',
          status_slug: item.status_slug || '',
          type: item.type || '',
          type_slug: item.type_slug || '',
          project_id: item.project_id || '',
          project_bukukas_id: item.project_bukukas_id || '',
          project_name: item.project_name || '',
          reporter_user_id: item.reporter_user_id || '',
          reporter_name: item.reporter_name || '',
          assigned_user_id: item.assigned_user_id || '',
          assigned_name: item.assigned_name || '-',
          created_at: item.created_at || '',
          created_at_format: item.created_at_format || '',
        }))
      } catch (error) {
        console.error('Gagal memuat data tickets:', error)
      } finally {
        this.isLoading = false // selesai loading
      }
    },
    async fetchProjects() {
      try {
        const response = await api.get('/projects', {
          // params: { no_company: true },
        })

        this.projects = [
          {
            label: 'Non-Project',
            value: null,
          },
          ...(response.data || []).map(item => ({
            label: item.title || '-',
            value: item.id,
          })),
        ]

      } catch (error) {
        console.error('Gagal memuat data Projek:', error)
      }
    },
    // async fetchEmployees() {
    //   try {
    //     const response = await api.get('/users', {
    //       params: { roles: ['direktur', 'manager', 'admin', 'pic-project', 'marketing'] },
    //     })

    //     this.employees = (response.data || []).map((item) => ({
    //       label: item.name,
    //       value: item.id,
    //     }))
    //   } catch (error) {
    //     console.error('Gagal memuat data karyawan:', error)
    //   }
    // },
    sendApprovalComplete(record) {
      this.$swal({
        title: 'Ajukan Penyelesaian?',
        html: `
          <p class="text-sm text-gray-600 mt-2">
            Apakah Anda yakin ingin mengajukan penyelesaian ${record.type} untuk
            <strong>${record.ticket_number}</strong>?
          </p>
        `,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#03C95A',
        cancelButtonText: 'Batal',
        confirmButtonText: 'Ya, Ajukan!',
        reverseButtons: true,
      }).then((result) => {
        if (!result.isConfirmed) return

        api
          .put(`/tickets/update-status/${record.id}`, {
            status: 'approval-done',   // ✅ PARAM DIKIRIM
          })
          .then(() => {
            this.$swal({
              icon: 'success',
              title: 'Pengajuan Terkirim',
            })
            this.fetchTickets()
          })
          .catch(() => {
            this.$swal({
              icon: 'error',
              title: 'Gagal mengirim Pengajuan',
            })
          })
      })
    },
    sendCompleted(record) {
      this.$swal({
        title: 'Persetujuan Penyelesaian Tiket',
        html: `
          <p class="text-sm text-gray-600 mt-2">
            Setujui atau tolak penyelesaian tiket
          </p>
        `,
        icon: 'question',

        showCancelButton: false,
        showDenyButton: true,

        confirmButtonText: 'Setujui',
        denyButtonText: 'Tolak',

        confirmButtonColor: '#22C55E',
        denyButtonColor: '#EF4444',

        showCloseButton: true,
        reverseButtons: true,

        customClass: {
          actions: 'swal-actions-equal',
          confirmButton: 'swal-btn-equal',
          denyButton: 'swal-btn-equal',
        },
      }).then((result) => {
        if (result.isConfirmed) this.submitCompletion(record, 'approve')
        if (result.isDenied) this.submitCompletion(record, 'reject')
      })
    },
    submitCompletion(record, status) {
      api
        .put(`/tickets/update-approval-done/${record.id}`, {
          status: status, // 'approve' | 'reject'
        })
        .then(() => {
          this.$swal({
            icon: 'success',
            title:
              status === 'approve'
                ? 'Pengajuan disetujui'
                : 'Pengajuan ditolak',
          })
          this.fetchTickets()
        })
        .catch(() => {
          this.$swal({
            icon: 'error',
            title:
              status === 'approve'
                ? 'Gagal menyetujui pengajuan'
                : 'Gagal menolak pengajuan',
          })
        })
    },
    openCreateModal() {
      document.body.classList.add('overflow-hidden')
      this.showCreateModal = true
    },
    closeCreateModal() {
      document.body.classList.remove('overflow-hidden')
      this.showCreateModal = false
    },
    // openApprovalModal() {
    //   document.body.classList.add('overflow-hidden')
    //   this.showApprovalModal = true
    // },
    // closeApprovalModal() {
    //   document.body.classList.remove('overflow-hidden')
    //   this.showApprovalModal = false
    // },
    async openApprovalModal(record) {
      if (!this.TicketsApprovalModal) {
        const module = await import('./components/tickets-approval-modal.vue')
        this.TicketsApprovalModal = module.default
      }
      this.selectedTicket = record

      document.body.classList.add('overflow-hidden')
      this.showApprovalModal = true
    },
    closeApprovalModal() {
      document.body.classList.remove('overflow-hidden')
      this.showApprovalModal = false
    },
    async openFollowUpModal(record) {
      if (!this.TicketsFollowUpModal) {
        const module = await import('./components/tickets-followup-modal.vue')
        this.TicketsFollowUpModal = module.default
      }
      this.selectedTicket = record

      document.body.classList.add('overflow-hidden')
      this.showFollowUpModal = true
    },
    closeFollowUpModal() {
      document.body.classList.remove('overflow-hidden')
      this.showFollowUpModal = false
    },
    closeFilterDropdown() {
      const dropdown = document.getElementById('filter-dropdown')
      if (dropdown) {
        dropdown.classList.add('hidden')
      }
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href
    },
    getImageUrlOne(imageName) {
      return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href
    },
    toggleHeader() {
      document.getElementById('collapse-header').classList.toggle('active')
      document.body.classList.toggle('header-collapse')
    },
    onPageChange(page) {
      this.currentPage = page
    },
    onPageSizeChange(size) {
      this.pageSize = Number(size)
      this.currentPage = 1
    },
  },
  setup() {
    const openDropdown = ref(null)
    const dropdownRefs = ref([])

    const toggleDropdown = (index, event) => {
      event.stopPropagation()
      if (openDropdown.value === index) {
        openDropdown.value = null
      } else {
        openDropdown.value = index
      }
    }

    const closeAllDropdowns = () => {
      openDropdown.value = null
    }

    const handleClickOutside = (event) => {
      if (
        dropdownRefs.value &&
        dropdownRefs.value.some((ref) => ref && ref.contains(event.target))
      ) {
        return
      }
      closeAllDropdowns()
    }
    const dateRangeInput = ref(null)
    const dateRangeInputOne = ref(null)

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format('M/D/YYYY') + ' - ' + end.format('M/D/YYYY')
    }

    onMounted(() => {
      if (dateRangeInputOne.value) {
        const start = moment().subtract(6, 'days')
        const end = moment()

        new DateRangePicker(
          dateRangeInputOne.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
              'Last 7 Days': [moment().subtract(6, 'days'), moment()],
              'Last 30 Days': [moment().subtract(29, 'days'), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
              'Last Month': [
                moment().subtract(1, 'month').startOf('month'),
                moment().subtract(1, 'month').endOf('month'),
              ],
            },
          },
          booking_range
        )

        booking_range(start, end)
      }
      if (dateRangeInput.value) {
        const start = moment().subtract(6, 'days')
        const end = moment()

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
              'Last 7 Days': [moment().subtract(6, 'days'), moment()],
              'Last 30 Days': [moment().subtract(29, 'days'), moment()],
              'This Month': [moment().startOf('month'), moment().endOf('month')],
              'Last Month': [
                moment().subtract(1, 'month').startOf('month'),
                moment().subtract(1, 'month').endOf('month'),
              ],
            },
          },
          booking_range
        )

        booking_range(start, end)
      }

      initFlowbite()
      document.addEventListener('click', handleClickOutside)
    })

    return {
      dateRangeInput,
      dateRangeInputOne,
      openDropdown,
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns,
      handleClickOutside,
    }
  },
  mounted() {
    this.fetchProjects()
    this.fetchTickets()
    // this.fetchEmployees()
  },
  updated() {
    initFlowbite()
  },
}
</script>
