<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">Projek Detail</h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/crm/projects-list/" class="hover:underline text-gray-700"
                  >Beranda</router-link
                >
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Projek</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Dropdown -->
          <!-- <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor rounded p-2 bg-white shadow inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="export-dropdown">
                    <i class="ti ti-package-export me-2"></i>Export<i class="ti ti-chevron-down ml-1"></i>
                </a>
                <ul id="export-dropdown"
                    class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
                    <li>
                        <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-file-type-pdf me-1"></i>Export as PDF</a>
                    </li>
                    <li>
                        <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><i
                                class="ti ti-file-type-xls me-1"></i>Export as Excel </a>
                    </li>
                </ul>
            </div> -->
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
      <div class="mb-4">
        <router-link to="/crm/projects-list" class="inline-flex items-center text-dark"
          ><i class="ti ti-arrow-narrow-left mr-1"></i>Kembali</router-link
        >
      </div>

      <!-- start user -->
      <div class="bg-white border border-borderColor rounded mb-4">
        <div class="p-4 pb-3">
          <div class="flex items-start justify-between flex-wrap">
            <!-- SKELETON LOADING -->
            <div class="w-full animate-pulse" v-if="loading">
              <!-- Judul & Reward -->
              <div class="flex items-center mb-3">
                <div class="h-6 w-52 bg-gray-200 rounded mr-3"></div>
                <div class="h-5 w-10 bg-gray-200 rounded"></div>
              </div>

              <!-- Progress -->
              <div class="mb-4 flex items-center gap-2">
                <div class="w-full bg-gray-200 h-3 rounded"></div>
                <div class="h-4 w-10 bg-gray-200 rounded"></div>
              </div>

              <!-- Detail Informasi -->
              <ul class="border-b border-borderColor mb-5 pb-5 space-y-3">
                <!-- 7 items skeleton -->
                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>

                <li class="grid grid-cols-12 gap-2">
                  <div class="h-4 bg-gray-200 rounded col-span-4"></div>
                  <div class="h-4 bg-gray-200 rounded col-span-6"></div>
                </li>
              </ul>
            </div>

            <div class="w-full" v-else>
              <!-- Judul & Reward -->
              <div class="flex items-center mb-2">
                <h5 class="mb-1 me-2 text-primary-700">
                  {{ project.title }}
                </h5>

                <p class="inline-flex items-center mb-0">
                  <i class="ti ti-award-filled text-warning me-1"></i>
                  {{ project.rewards ?? 0 }}
                </p>
              </div>

              <!-- Progress Bar -->
              <div class="mb-3">
                <div class="flex items-center gap-2">
                  <div class="w-full bg-gray-200 rounded h-3 overflow-hidden">
                    <div class="bg-primary h-3" :style="{ width: project.progress + '%' }"></div>
                  </div>
                  <span class="text-dark font-medium text-sm">{{ project.progress }}%</span>
                </div>
              </div>

              <!-- Detail Informasi -->
              <!-- <ul class="border-b border-borderColor mb-5 pb-5"> -->
              <ul class="border-borderColor pb-5">
                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Status</span>
                  <span class="col-span-6 flex justify-start">
                    <span
                      class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold text-white"
                      :class="{
                        'bg-success': project.status == 'selesai',
                        'bg-warning': project.status == 'proses',
                        'bg-danger': project.status == 'belum',
                      }"
                    >
                      {{ project.status.charAt(0).toUpperCase() + project.status.slice(1) }}
                    </span>
                  </span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Kode SPK</span>
                  <span class="col-span-6 text-dark">{{ project.spk_code }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">PIC Projek</span>
                  <span class="col-span-6 text-dark">{{ project.pic_project_user_id }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Nama Perusahaan</span>
                  <span class="col-span-6 text-dark">{{ project.company_name }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">PIC Perusahaan</span>
                  <span class="col-span-6 text-dark">{{ project.pic_company_user_id }}</span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Tanggal SPK</span>
                  <span class="col-span-6 text-dark">
                    {{ project.inv_date_format }}
                  </span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Tanggal Kontrak Selesai</span>
                  <span class="col-span-6 text-dark">
                    {{ project.inv_contract_date_format }}
                  </span>
                </li>

                <li class="grid grid-cols-12 mb-2">
                  <span class="col-span-4">Pembayaran</span>
                  <span class="col-span-6 flex justify-start">
                    <span
                      class="inline-flex items-center py-1 px-2 rounded text-xs leading-none font-semibold text-white"
                      :class="paymentStatusClass"
                    >
                      {{ paymentStatusText }}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end user -->

      <!-- start grid -->
      <div class="grid grid-cols-1 xl:grid-cols-12 gap-y-4 gap-x-4">
        <!-- Start right column -->
        <div class="xl:col-span-12">
          <div class="w-full">
            <!-- start tab -->
            <ul
              class="flex-wrap flex bg-white rounded border border-borderColor gap-x-2 px-3 py-4 mb-4"
              id="default-styled-tab3"
              data-tabs-toggle="#company-tab-content3"
              data-tabs-active-classes="text-primary hover:text-primary border-primary"
              data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
              role="tablist"
            >
              <li class="me-3" role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#pembayaran"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-wallet me-1"></i>Pembayaran
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#notes-list"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-notes me-1"></i>Open Ticket
                </button>
              </li>
              <!-- <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#calls"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-phone me-1"></i>Calls
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#files"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-file me-1"></i>Files
                </button>
              </li>
              <li role="presentation">
                <button
                  class="inline-block py-2 px-4 border-b-2 font-medium"
                  data-tabs-target="#email"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <i class="ti ti-mail me-1"></i>Email
                </button>
              </li> -->
            </ul>

            <!-- start tab content -->
            <div id="company-tab-content3">
              <!-- Item 1 -->
              <div class="hidden" id="pembayaran" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div
                    class="flex items-center justify-between gap-3 p-4 border-b border-borderColor"
                  >
                    <h5 class="m-0 font-semibold">Riwayat Pembayaran</h5>
                  </div>
                  <div class="col-span-6">
                    <div class="card-body p-5">
                      <div class="table-responsive">
                        <table class="table-auto table-borderless mb-0">
                          <thead class="table-head">
                            <tr>
                              <!-- <th class="w-[50px]">No</th> -->
                              <th class="w-[50px]">Termin</th>
                              <th class="w-[100px]">No. Invoices</th>
                              <th class="w-[100px]">Tanggal Pembayaran</th>
                              <th class="w-[100px]">Status</th>
                              <th class="w-[100px]">Total</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-if="project.payments.length === 0">
                              <td colspan="5" class="py-6">
                                <div class="flex justify-center items-center text-dark">
                                  Tidak ada data pembayaran
                                </div>
                              </td>
                            </tr>
                            <tr v-else v-for="(pay, index) in project.payments" :key="pay.id">
                              <td class="border border-dark-100 text-dark">{{ index + 1 }}.</td>
                              <td class="border border-dark-100 text-dark">{{ pay.invoice_code }}</td>
                              <td class="border border-dark-100 text-dark">{{ pay.payment_date }}</td>

                              <td class="border border-dark-100">
                                <span class="flex justify-start">
                                  <span
                                    v-if="pay.status === 'terbayar'"
                                    class="inline-flex items-center py-1 px-2 rounded text-xs font-semibold bg-success text-white"
                                  >
                                    Terbayar
                                  </span>
                                  <span
                                    v-else
                                    class="inline-flex items-center py-1 px-2 rounded text-xs font-semibold bg-danger text-white"
                                  >
                                    Belum Terbayar
                                  </span>
                                </span>
                              </td>

                              <td class="border border-dark-100 text-dark">Rp {{ formatNumber(pay.total) }}</td>
                            </tr>
                            <!-- SUBTOTAL -->
                            <tr v-if="project.invoice_total_summary.tax > 1 || project.invoice_total_summary.diskon > 0"
                                class="font-semibold text-gray-800 bg-gray-50">
                              <td class="text-left pr-2 border border-dark-100" colspan="4">DPP</td>
                              <td>Rp. {{ formatNumber(project.invoice_total_summary.invoice_subtotal) }}</td>
                            </tr>

                            <!-- TAX / PPN -->
                            <tr v-if="project.invoice_total_summary.tax > 1"
                                class="font-semibold text-gray-800  bg-gray-50">
                              <td class="text-right pr-2 border border-dark-100" colspan="4">
                                {{ project.invoice_total_summary.tax_name }} (11%)
                              </td>
                              <td>Rp. {{ formatNumber(project.invoice_total_summary.tax) }}</td>
                            </tr>

                            <!-- PPH -->
                            <tr v-if="project.invoice_total_summary.diskon > 0"
                                class="font-semibold text-gray-800 bg-gray-50">
                              <td class="text-right pr-2 border border-dark-100" colspan="4">PPH</td>
                              <td>Rp. {{ formatNumber(project.invoice_total_summary.potongan) }}</td>
                            </tr>

                            <!-- GRAND TOTAL -->
                            <tr class="font-bold text-gray-800 bg-gray-100">
                              <td class="text-right pr-2 border border-dark-100" colspan="4">Grand Total</td>
                              <td>Rp. {{ formatNumber(project.invoice_total_summary.grand_total) }}</td>
                            </tr>

                            <!-- TOTAL TERBAYAR -->
                            <tr class="font-bold text-gray-800 bg-gray-100">
                              <td class="text-right pr-2 border border-dark-100" colspan="4">Total Terbayar</td>
                              <td>Rp. {{ formatNumber(project.invoice_total_summary.payment_subtotal) }}</td>
                            </tr>

                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 2 -->
              <div class="hidden" id="notes-list" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div
                    class="flex items-center justify-between gap-3 p-4 border-b border-borderColor"
                  >
                    <h5 class="m-0 font-semibold">Notes</h5>
                    <!-- Dropdown -->
                    <div class="flex items-center gap-3 flex-wrap">
                      <div>
                        <a
                          href="javascript:void(0);"
                          class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                          data-dropdown-toggle="notes-dropdown"
                        >
                          <i class="ti ti-sort-ascending-2 me-2"></i>Sort By<i
                            class="ti ti-chevron-down ms-2"
                          ></i>
                        </a>
                        <ul
                          id="notes-dropdown"
                          class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
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
                      </div>
                      <button
                        class="inline-flex items-center font-medium text-danger hover:text-dark"
                        data-modal-target="add_new_notes"
                        data-modal-toggle="add_new_notes"
                      >
                        <i class="ti ti-circle-plus me-1"></i>Add New
                      </button>
                    </div>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div
                        class="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4"
                      >
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div
                            class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0"
                          >
                            <img
                              src="@/assets/img/users/avatar-1.jpg"
                              alt="avatar-1"
                              class="img-fluid rounded"
                            />
                          </div>
                          <h6 class="font-medium text-[14px] mb-0 flex flex-col gap-1">
                            Darlee Robertson
                            <span class="text-[14px] font-normal text-body"
                              >15 Sep 2023, 12:10 pm</span
                            >
                          </h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[1] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(1, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 1 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="edit_notes"
                                data-modal-toggle="edit_notes"
                                ><i class="ti ti-edit me-1"></i> Edit</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 class="font-medium text-[14px] mb-1">Notes added by Antony</h6>
                      <p>
                        A project review evaluates the success of an initiative and identifies areas
                        for improvement. It can also evaluate a current project to determine whether
                        it's on the right track. Or, it can determine the success of a completed
                        project.
                      </p>

                      <!-- start row -->
                      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                        <div class="lg:col-span-5">
                          <div class="border border-borderColor rounded p-4 rounded relative">
                            <div class="flex items-center gap-3 flex-wrap">
                              <div
                                class="flex items-center justify-center w-10 h-10 rounded bg-success shrink-0"
                              >
                                <i class="ti ti-file-spreadsheet text-[18px] text-white"></i>
                              </div>
                              <div>
                                <h6 class="font-medium text-[14px] mb-1">Project Specs.xls.</h6>
                                <p class="mb-0">365 KB</p>
                              </div>
                            </div>
                            <button
                              class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200"
                            >
                              <i class="ti ti-arrow-down"></i>
                            </button>
                          </div>
                        </div>
                        <div class="lg:col-span-5">
                          <div class="border border-borderColor rounded p-4 rounded relative">
                            <div class="flex items-center gap-3 flex-wrap">
                              <div
                                class="flex items-center justify-center w-10 h-10 rounded bg-info shrink-0"
                              >
                                <img
                                  src="@/assets/img/users/avatar-10.jpg"
                                  alt="avatar-10"
                                  class="img-fluid rounded"
                                />
                              </div>
                              <div>
                                <h6 class="font-medium text-[14px] mb-1">637.jpg</h6>
                                <p class="mb-0">365 KB</p>
                              </div>
                            </div>
                            <button
                              class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200"
                            >
                              <i class="ti ti-arrow-down"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div class="mt-4 notes-editor">
                        <div
                          class="mb-4 note-edit-wrap"
                          :style="{ display: isEditorVisible ? 'block' : 'none' }"
                        >
                          <div class="editor pages-editor">
                            <div class="editor pages-editor ql-container ql-snow">
                              <div ref="editorRef" class="quill-editor"></div>
                            </div>
                          </div>
                          <div class="flex items-center justify-end mt-3">
                            <a
                              href="javascript:void(0);"
                              class="btn btn-sm btn-light me-3 hover:bg-primary add-cancel"
                              >Cancel</a
                            >
                            <a
                              href="javascript:void(0);"
                              class="btn btn-sm btn-primary hover:bg-danger"
                              >Save</a
                            >
                          </div>
                        </div>
                        <div>
                          <a
                            href="javascript:void(0);"
                            class="flex items-center justify-end text-primary font-medium hover:text-dark add-comment"
                            @click="toggleEditor"
                          >
                            <i class="ti ti-circle-plus me-1"></i>
                            Add Comment
                          </a>
                        </div>
                      </div>
                    </div>
                    <!-- Item 2 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div
                        class="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4"
                      >
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div
                            class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0"
                          >
                            <img
                              src="@/assets/img/users/avatar-1.jpg"
                              alt="avatar-1"
                              class="img-fluid rounded"
                            />
                          </div>
                          <h6 class="font-medium text-[14px] mb-0 flex flex-col gap-1">
                            Sharon Roy<span class="text-[14px] font-normal text-body"
                              >18 Sep 2023, 12:10 pm</span
                            >
                          </h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[2] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(2, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 2 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="edit_notes"
                                data-modal-toggle="edit_notes"
                                ><i class="ti ti-edit me-1"></i> Edit</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <h6 class="font-medium text-[14px] mb-1">Notes added by Antony</h6>
                      <p>
                        A project plan typically contains a list of the essential elements of a
                        project, such as stakeholders, scope, timelines, estimated cost and
                        communication methods. The project manager typically lists the information
                        based on the assignment.
                      </p>

                      <!-- start row -->
                      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
                        <div class="lg:col-span-5">
                          <div class="border border-borderColor rounded p-4 rounded relative">
                            <div class="flex items-center gap-3 flex-wrap">
                              <div
                                class="flex items-center justify-center w-10 h-10 rounded bg-dark shrink-0"
                              >
                                <i class="ti ti-file-spreadsheet text-[18px] text-white"></i>
                              </div>
                              <div>
                                <h6 class="font-medium text-[14px] mb-1">Andewpass.txt</h6>
                                <p class="mb-0">365 KB</p>
                              </div>
                            </div>
                            <button
                              class="w-6 h-6 rounded-full absolute right-2 top-5 bg-light text-dark flex items-center justify-center hover:bg-gray-200"
                            >
                              <i class="ti ti-arrow-down"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 bg-light rounded mt-4">
                        <p class="mb-2">
                          The best way to get a project done faster is to start sooner. A goal
                          without a timeline is just a dream.The goal you set must be challenging.
                          At the same time, it should be realistic and attainable, not impossible to
                          reach.
                        </p>
                        <p class="mb-4">
                          Commented by <a href="javascript:void(0);" class="text-info">Aeron</a> on
                          15 Sep 2024, 11:15 pm
                        </p>
                        <a href="#" class="btn border border-borderColor bg-white btn-sm"
                          ><i class="ti ti-arrow-back-up-double me-1"></i>Reply</a
                        >
                      </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="border border-borderColor rounded p-4">
                      <div
                        class="flex items-center justify-between gap-3 lg:flex-nowrap flex-wrap mb-4"
                      >
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div
                            class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0"
                          >
                            <img
                              src="@/assets/img/users/avatar-1.jpg"
                              alt="avatar-1"
                              class="img-fluid rounded"
                            />
                          </div>
                          <h6 class="font-medium text-[14px] mb-0 flex flex-col gap-1">
                            Vaughan Lewis
                            <span class="text-[14px] font-normal text-body"
                              >20 Sep 2023, 10:26 pm</span
                            >
                          </h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[3] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(3, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 3 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="edit_notes"
                                data-modal-toggle="edit_notes"
                                ><i class="ti ti-edit me-1"></i> Edit</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Projects play a crucial role in the success of organizations, and their
                        importance cannot be overstated. Whether it's launching a new product,
                        improving an existing
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 3 -->
              <div class="hidden" id="calls" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div
                    class="flex items-center justify-between gap-3 p-4 border-b border-borderColor"
                  >
                    <h5 class="m-0 font-semibold">Calls</h5>
                    <!-- Dropdown -->
                    <a
                      href="javascript:void(0);"
                      class="inline-flex items-center font-medium text-danger hover:text-dark transition"
                      data-modal-target="add_call"
                      data-modal-toggle="add_call"
                    >
                      <i class="ti ti-circle-plus me-1"></i>Add New
                    </a>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div
                        class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4"
                      >
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div
                            class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0"
                          >
                            <img
                              src="@/assets/img/users/avatar-1.jpg"
                              alt="avatar-1"
                              class="img-fluid rounded"
                            />
                          </div>
                          <h6 class="font-medium text-[14px] mb-0">
                            Darlee Robertson
                            <span class="text-[14px] font-normal text-body"
                              >logged a call on 23 Jul 2023, 10:00 pm</span
                            >
                          </h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                              data-dropdown-toggle="call-dropdown"
                            >
                              Busy<i class="ti ti-chevron-down ms-2"></i>
                            </a>
                            <ul
                              id="call-dropdown"
                              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                            >
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Busy</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >No Answer</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Unavailable</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Wrong Number</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Left Voice Message</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Moving Forward</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[4] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(4, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 4 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="edit_call"
                                data-modal-toggle="edit_call"
                                ><i class="ti ti-edit me-1"></i> Edit</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        A project review evaluates the success of an initiative and identifies areas
                        for improvement. It can also evaluate a current project to determine whether
                        it's on the right track. Or, it can determine the success of a completed
                        project.
                      </p>
                    </div>

                    <!-- Item 2 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div
                        class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4"
                      >
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div
                            class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0"
                          >
                            <img
                              src="@/assets/img/users/avatar-2.jpg"
                              alt="avatar-1"
                              class="img-fluid rounded"
                            />
                          </div>
                          <h6 class="font-medium text-[14px] mb-0">
                            Sharon Roy
                            <span class="text-[14px] font-normal text-body"
                              >logged a call on 18 Sep 2025, 09:52AM</span
                            >
                          </h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                              data-dropdown-toggle="call-dropdown2"
                            >
                              No Answer<i class="ti ti-chevron-down ms-2"></i>
                            </a>
                            <ul
                              id="call-dropdown2"
                              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                            >
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >No Answer</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Unavailable</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Wrong Number</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Left Voice Message</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Moving Forward</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[5] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(5, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 5 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="edit_call"
                                data-modal-toggle="edit_call"
                                ><i class="ti ti-edit me-1"></i> Edit</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        A project plan typically contains a list of the essential elements of a
                        project, such as stakeholders, scope, timelines, estimated cost and
                        communication methods. The project manager typically lists the information
                        based on the assignment.
                      </p>
                    </div>

                    <!-- Item 3 -->
                    <div class="border border-borderColor rounded p-4">
                      <div
                        class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap mb-4"
                      >
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div
                            class="flex items-center justify-center w-10 h-10 rounded bg-danger shrink-0"
                          >
                            <img
                              src="@/assets/img/users/avatar-3.jpg"
                              alt="avatar-1"
                              class="img-fluid rounded"
                            />
                          </div>
                          <h6 class="font-medium text-[14px] mb-0">
                            Vaughan
                            <span class="text-[14px] font-normal text-body"
                              >logged a call on 20 Sep 2025, 10:26 PM</span
                            >
                          </h6>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <a
                              href="javascript:void(0);"
                              class="border border-borderColor shadow rounded p-2 h-8 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                              data-dropdown-toggle="call-dropdown3"
                            >
                              No Answer<i class="ti ti-chevron-down ms-2"></i>
                            </a>
                            <ul
                              id="call-dropdown3"
                              class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg w-[200px]"
                            >
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >No Answer</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Unavailable</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Wrong Number</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Left Voice Message</a
                                >
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                  >Moving Forward</a
                                >
                              </li>
                            </ul>
                          </div>
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[6] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(6, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 6 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="edit_call"
                                data-modal-toggle="edit_call"
                                ><i class="ti ti-edit me-1"></i> Edit</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <p>
                        Projects play a crucial role in the success of organizations, and their
                        importance cannot be overstated. Whether it's launching a new product,
                        improving an existing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 4 -->
              <div class="hidden" id="files" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div
                    class="flex items-center justify-between gap-3 p-4 border-b border-borderColor"
                  >
                    <h5 class="m-0 font-semibold">Files</h5>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div>
                          <h6 class="mb-1">Manage Documents</h6>
                          <p>
                            Send customizable quotes, proposals and contracts to close deals faster
                          </p>
                        </div>
                        <a
                          class="btn btn-primary rounded"
                          href="javascript:void(0);"
                          data-modal-target="create_account"
                          data-modal-toggle="create_account"
                          >Create Documents</a
                        >
                      </div>
                    </div>

                    <!-- Item 2 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div class="flex items-center gap-3 xl:flex-nowrap flex-wrap">
                          <div>
                            <h6 class="mb-1 text-[14px] font-semibold">Collier-Turner Proposal</h6>
                            <p class="mb-3">
                              Send customizable quotes, proposals and contracts to close deals
                              faster.
                            </p>
                            <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                              <div
                                class="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                              >
                                <img
                                  src="@/assets/img/users/avatar-2.jpg"
                                  alt="avatar-1"
                                  class="img-fluid rounded-full"
                                />
                              </div>
                              <h6 class="font-medium text-[14px] mb-0">
                                Sharon Roy
                                <span
                                  class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body"
                                  >Owner</span
                                >
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div class="flex items-center gap-2 flex-wrap">
                            <span
                              class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-danger-100 border-b text-danger"
                              >Proposal</span
                            >
                            <span
                              class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-info text-white"
                              >Draft</span
                            >
                          </div>
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[7] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(7, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 7 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"
                                ><i class="ti ti-download me-1"></i> Download</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Item 3 -->
                    <div class="border border-borderColor rounded p-4 mb-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div>
                            <h6 class="mb-1 text-[14px] font-semibold">Collier-Turner Proposal</h6>
                            <p class="mb-3">
                              Send customizable quotes, proposals and contracts to close deals
                              faster.
                            </p>
                            <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                              <div
                                class="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                              >
                                <img
                                  src="@/assets/img/users/avatar-4.jpg"
                                  alt="avatar-1"
                                  class="img-fluid rounded-full"
                                />
                              </div>
                              <h6 class="font-medium text-[14px] mb-0">
                                Jessica Louise
                                <span
                                  class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body"
                                  >Owner</span
                                >
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div>
                            <span
                              class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-success text-white"
                              >sent</span
                            >
                          </div>
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[8] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(8, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 8 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"
                                ><i class="ti ti-download me-1"></i> Download</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Item 4 -->
                    <div class="border border-borderColor rounded p-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                          <div>
                            <h6 class="mb-1 text-[14px] font-semibold">Collier-Turner Proposal</h6>
                            <p class="mb-3">
                              Send customizable quotes, proposals and contracts to close deals
                              faster.
                            </p>
                            <div class="flex items-center gap-3 lg:flex-nowrap flex-wrap">
                              <div
                                class="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                              >
                                <img
                                  src="@/assets/img/users/avatar-5.jpg"
                                  alt="avatar-1"
                                  class="img-fluid rounded-full"
                                />
                              </div>
                              <h6 class="font-medium text-[14px] mb-0">
                                Dawn Merhca<span
                                  class="badge badge-pill badge-status px-1.5 py-0.5 rounded text-[12px] bg-light text-body ms-2"
                                  >Owner</span
                                >
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center gap-2 flex-wrap">
                          <div
                            class="dropdown relative table-action"
                            ref="el => dropdownRefs[9] = el"
                          >
                            <a
                              href="javascript:void(0);"
                              class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                              @click="toggleDropdown(9, $event)"
                              ><i class="ti ti-dots-vertical"></i
                            ></a>
                            <div
                              class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                              :class="{ hidden: openDropdown !== 9 }"
                            >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"
                                data-modal-target="delete_modal"
                                data-modal-toggle="delete_modal"
                                ><i class="ti ti-trash me-1"></i> Delete</a
                              >
                              <a
                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-600"
                                href="javascript:void(0);"
                                ><i class="ti ti-download me-1"></i> Download</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Item 5 -->
              <div class="hidden" id="email" role="tabpanel">
                <div class="bg-white border-borderColor rounded-lg shadow-sm flex flex-col w-full">
                  <div
                    class="flex items-center justify-between gap-3 p-4 border-b border-borderColor"
                  >
                    <h5 class="m-0 font-semibold">Email</h5>
                    <a
                      href="javascript:void(0);"
                      class="inline-flex items-center font-medium text-danger hover:text-dark transition"
                    >
                      <i class="ti ti-circle-plus me-1"></i>Add New
                    </a>
                  </div>
                  <div class="p-4">
                    <!-- Item 1 -->
                    <div class="border border-borderColor rounded p-4">
                      <div class="flex items-center justify-between gap-3 xl:flex-nowrap flex-wrap">
                        <div>
                          <h6 class="mb-1">Manage Email</h6>
                          <p>You can send and reply to emails directly via this section.</p>
                        </div>
                        <a
                          class="btn btn-primary rounded"
                          href="javascript:void(0);"
                          data-modal-target="manage_email"
                          data-modal-toggle="manage_email"
                          >Connect Account</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- end tab content -->
          </div>
        </div>
      </div>
      <!-- end grid -->
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->

  <!-- <contact-details-modal></contact-details-modal> -->
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { initFlowbite } from 'flowbite'
import { onMounted, onUnmounted, ref } from 'vue'
import api from '../../../../api/api'
export default {
  data() {
    return {
      project:{
        payments: [],
        invoice_total_summary: [],
      },
      loading: true,
      isEditorVisible: false,
      selected: '1 hr',
      selectedOne: 'High',
      selectedTwo: 'Jerald Sen',
      Reminder: [
        { label: 'Select', value: 'Select' },
        { label: '1 hr', value: '1 hr' },
        { label: 'Reminder', value: 'Reminder' },
        { label: '10hr', value: '10hr' },
      ],
      Task: [
        { label: 'Select', value: 'Select' },
        { label: 'High', value: 'High' },
        { label: 'Low', value: 'Low' },
      ],
      Assigned: [
        { label: 'Select', value: 'Select' },
        { label: 'Jerald Sen', value: 'Jerald Sen' },
        { label: 'Jackson Daniel', value: 'Jackson Daniel' },
      ],
    }
  },
  computed: {
    paidCount() {
      if (!this.project?.payments) return 0;

      return this.project.payments.filter(
        (p) => p.status === "terbayar"
      ).length;
    },

    paymentStatusText() {
      const totalTermin = parseInt(this.project?.termin) || 0;
      const paid = this.paidCount;

      if (totalTermin === 0) return "-";
      if (paid >= totalTermin) return "Lunas";

      return `${paid} / ${totalTermin}`;
    },

    paymentStatusClass() {
      const totalTermin = parseInt(this.project?.termin) || 0;
      const paid = this.paidCount;

      // "-" case
      if (totalTermin === 0) return "bg-gray-400";

      // LUNAS
      if (paid >= totalTermin) return "bg-success";

      // BELUM LUNAS (1 / 2, 0 / 2, 2 / 3 etc)
      return "bg-danger";
    }
  },
  methods: {
    formatNumber(value) {
      return Number(value || 0).toLocaleString("id-ID");
    },
    toggleEditor() {
      this.isEditorVisible = !this.isEditorVisible
    },
    toggleHeader() {
      document.getElementById('collapse-header').classList.toggle('active')
      document.body.classList.toggle('header-collapse')
    },
    initQuill() {
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: 'snow',
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ['bold', 'italic', 'underline'],
              ['image', 'code-block'],
            ],
          },
        })

        quill.on('text-change', () => {
          this.content = quill.root.innerHTML
        })
      }
    },
    async fetchProject() {
      this.loading = true

      try {
        const id = this.$route.params.id

        const response = await api.get(`/projects/detail/${id}`)

        const item = response.data.data || response.data.project || response.data

        if (!item) {
          console.error('Data project tidak ditemukan')
          return
        }

        // mapping sesuai kebutuhan kamu
        this.project = {
          id: item.id || '-',
          title: item.title || '-',
          code: item.code || '-',
          spk_code: item.spk_code || '-',

          // customer
          fid_cust: item.fid_cust || '-',
          company_name: item.company_name || '-',

          // invoice
          no_inv: item.no_inv || '-',
          coa_sales: item.coa_sales || '-',
          inv_address: item.inv_address || '-',
          status: item.status || '-',
          paid: item.paid || '-',
          fid_tax: item.fid_tax || '-',
          termin: item.termin || '-',
          currency: item.currency || '-',
          sub_total: item.sub_total || '-',
          penjualan: item.penjualan || '-',
          potongan: item.potongan || '-',
          amount: item.amount || '-',
          residual: item.residual || '-',

          // tanggal
          inv_date: item.inv_date || '-',
          inv_date_format: item.inv_date_format || '-',
          inv_contract_date: item.inv_contract_date || '-',
          inv_contract_date_format: item.inv_contract_date_format || '-',
          created_at: item.created_at || '-',
          created_at_format: item.created_at_format || '-',

          is_verified: item.is_verified || '-',
          dikirim: item.dikirim || '-',
          tgl_dikirim: item.tgl_dikirim || '-',
          keterangan: item.keterangan || '-',
          deleted: item.deleted || '-',

          // project extension
          pic_project_user_id: item.pic_project_user_id || '-',
          pic_project_name: item.pic_project_name || '-',
          pic_company_user_id: item.pic_company_user_id || '-',
          pic_company_name: item.pic_company_name || '-',
          rewards: item.rewards || 0,
          feedback_point: item.feedback_point || '-',
          feedback_text: item.feedback_text || '-',
          is_active: item.is_active ?? '-',

          // tambahan lama (untuk Company Bukukas jika masih perlu)
          jenis: item.jenis || '-',
          bentuk: item.bentuk || '-',
          npwp: item.npwp || '-',
          address: item.address || '-',
          email: item.email || '-',
          memo: item.memo || '-',
          pic_contact_id: item.pic_contact_id || '-',

          progress: item.progress || '-',
          payments: item.payments || [],
          invoice_total_summary: item.invoice_total_summary || [],
        }
      } catch (error) {
        console.error('Gagal:', error)
      } finally {
        this.loading = false
      }
    },
  },
  mounted() {
    initFlowbite()
    this.fetchProject()
    this.initQuill()
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

    onMounted(() => {
      initFlowbite()
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      openDropdown,
      dropdownRefs,
      toggleDropdown,
      closeAllDropdowns,
    }
  },
}
</script>
