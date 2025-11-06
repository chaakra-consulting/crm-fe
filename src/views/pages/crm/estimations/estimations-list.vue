<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- ========================
			Start Page Content
		========================= -->

  <div class="page-wrapper">
    <!-- Start Content -->
    <div class="content pb-0">
      <!-- Page Header -->
      <div class="d-flex align-items-center justify-content-between gap-2 mb-4 flex-wrap">
        <div>
          <h4 class="mb-1">
            Estimations<span class="badge badge-soft-primary ms-2">123</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0 p-0">
              <li class="breadcrumb-item">
                <router-link to="/dashboard">Home</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Estimations</li>
            </ol>
          </nav>
        </div>
        <div class="gap-2 d-flex align-items-center flex-wrap">
          <div class="dropdown">
            <a
              href="javascript:void(0);"
              class="dropdown-toggle btn btn-outline-light px-2 shadow"
              data-bs-toggle="dropdown"
              ><i class="ti ti-package-export me-2"></i>Export</a
            >
            <div class="dropdown-menu dropdown-menu-end">
              <ul>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><i class="ti ti-file-type-pdf me-1"></i>Export as PDF</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="dropdown-item"
                    ><i class="ti ti-file-type-xls me-1"></i>Export as Excel
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-icon btn-outline-light shadow"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            aria-label="Refresh"
            data-bs-original-title="Refresh"
            ><i class="ti ti-refresh"></i
          ></a>
          <a
            href="javascript:void(0);"
            class="btn btn-icon btn-outline-light shadow"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            aria-label="Collapse"
            data-bs-original-title="Collapse"
            id="collapse-header"
            @click="toggleHeader"
            ><i class="ti ti-transition-top"></i
          ></a>
        </div>
      </div>
      <!-- End Page Header -->

      <!-- card start -->
      <div class="card border-0 rounded-0">
        <div
          class="card-header d-flex align-items-center justify-content-between gap-2 flex-wrap"
        >
          <div class="input-icon input-icon-start position-relative">
            <span class="input-icon-addon text-dark"><i class="ti ti-search"></i></span>
            <input type="text" class="form-control" placeholder="Search" />
          </div>
          <a
            href="javascript:void(0);"
            class="btn btn-primary"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvas_add"
            ><i class="ti ti-square-rounded-plus-filled me-1"></i>Add Estimation</a
          >
        </div>
        <div class="card-body">
          <!-- table header -->
          <div
            class="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3"
          >
            <div class="d-flex align-items-center gap-2 flex-wrap">
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="dropdown-toggle btn btn-outline-light px-2 shadow"
                  data-bs-toggle="dropdown"
                  ><i class="ti ti-sort-ascending-2 me-2"></i>Sort By</a
                >
                <div class="dropdown-menu">
                  <ul>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">Newest</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="dropdown-item">Oldest</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                id="reportrange"
                class="reportrange-picker d-flex align-items-center shadow"
                ref="dateRangeInput"
              >
                <i class="ti ti-calendar-due text-dark fs-14 me-1"></i
                ><span class="reportrange-picker-field">9 Jun 25 - 9 Jun 25</span>
              </div>
            </div>
            <div class="d-flex align-items-center gap-2 flex-wrap">
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="btn btn-outline-light shadow px-2"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  ><i class="ti ti-filter me-2"></i>Filter<i
                    class="ti ti-chevron-down ms-2"
                  ></i
                ></a>
                <div class="filter-dropdown-menu dropdown-menu dropdown-menu-lg p-0">
                  <div
                    class="filter-header d-flex align-items-center justify-content-between border-bottom"
                  >
                    <h6 class="mb-0"><i class="ti ti-filter me-1"></i>Filter</h6>
                    <button
                      type="button"
                      class="btn-close close-filter-btn"
                      data-bs-dismiss="dropdown-menu"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="filter-set-view p-3">
                    <div class="accordion" id="accordionExample">
                      <div class="filter-set-content">
                        <div class="filter-set-content-head">
                          <a
                            href="javascript:void(0);"
                            class="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#project"
                            aria-expanded="false"
                            aria-controls="project"
                            >Project</a
                          >
                        </div>
                        <div
                          class="filter-set-contents accordion-collapse collapse"
                          id="project"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            class="filter-content-list bg-light rounded border p-2 shadow mt-2"
                          >
                            <div class="mb-1">
                              <div class="input-icon-start input-icon position-relative">
                                <span class="input-icon-addon fs-12">
                                  <i class="ti ti-search"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Truelysell
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Dreamsports
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Best@laundry
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Doccure
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="filter-set-content">
                        <div class="filter-set-content-head">
                          <a
                            href="javascript:void(0);"
                            class="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            >Client Name</a
                          >
                        </div>
                        <div
                          class="filter-set-contents accordion-collapse collapse"
                          id="collapseThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            class="filter-content-list bg-light rounded border p-2 shadow mt-2"
                          >
                            <div class="mb-1">
                              <div class="input-icon-start input-icon position-relative">
                                <span class="input-icon-addon fs-12">
                                  <i class="ti ti-search"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  NovaWave LLC
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  BlueSky Industries
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Silver Hawk
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Summit Peak
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  RiverStone Ltd
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Bright Bridge Grp
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  CoastalStar Co.
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  HarborView
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Golden Gate Ltd
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Redwood Inc
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="filter-set-content">
                        <div class="filter-set-content-head">
                          <a
                            href="javascript:void(0);"
                            class="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#date"
                            aria-expanded="false"
                            aria-controls="date"
                            >Date of Estimation</a
                          >
                        </div>
                        <div
                          class="filter-set-contents accordion-collapse collapse"
                          id="date"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            class="filter-content-list bg-light rounded border p-2 shadow mt-2"
                          >
                            <div class="input-group w-auto input-group-flat">
                              <input
                                type="text"
                                class="form-control"
                                data-provider="flatpickr"
                                data-date-format="d M, Y"
                              />
                              <span class="input-group-text">
                                <i class="ti ti-calendar"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="filter-set-content">
                        <div class="filter-set-content-head">
                          <a
                            href="javascript:void(0);"
                            class="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            >Estimated By</a
                          >
                        </div>
                        <div
                          class="filter-set-contents accordion-collapse collapse"
                          id="collapseTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            class="filter-content-list bg-light rounded border p-2 shadow mt-2"
                          >
                            <div class="mb-2">
                              <div class="input-icon-start input-icon position-relative">
                                <span class="input-icon-addon fs-12">
                                  <i class="ti ti-search"></i>
                                </span>
                                <input
                                  type="text"
                                  class="form-control form-control-md"
                                  placeholder="Search"
                                />
                              </div>
                            </div>
                            <ul class="mb-0">
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-06.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Elizabeth Morgan
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-40.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Katherine Brooks
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-05.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Sophia Lopez
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-10.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >John Michael
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-15.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Natalie Brooks
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-01.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >William Turner
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-13.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Ava Martinez
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-12.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Nathan Reed
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-03.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Lily Anderson
                                </label>
                              </li>
                              <li class="mb-1">
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  <span class="avatar avatar-xs rounded-circle me-2"
                                    ><img
                                      src="@/assets/img/users/user-18.jpg"
                                      class="flex-shrink-0 rounded-circle"
                                      alt="img" /></span
                                  >Ryan Coleman
                                </label>
                              </li>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  class="link-primary text-decoration-underline p-2 d-flex"
                                  >Load More</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="filter-set-content">
                        <div class="filter-set-content-head">
                          <a
                            href="javascript:void(0);"
                            class="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#date2"
                            aria-expanded="false"
                            aria-controls="date2"
                            >Expiry Date</a
                          >
                        </div>
                        <div
                          class="filter-set-contents accordion-collapse collapse"
                          id="date2"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            class="filter-content-list bg-light rounded border p-2 shadow mt-2"
                          >
                            <div class="input-group w-auto input-group-flat">
                              <input
                                type="text"
                                class="form-control"
                                data-provider="flatpickr"
                                data-date-format="d M, Y"
                              />
                              <span class="input-group-text">
                                <i class="ti ti-calendar"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="filter-set-content">
                        <div class="filter-set-content-head">
                          <a
                            href="javascript:void(0);"
                            class="collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#Status"
                            aria-expanded="false"
                            aria-controls="Status"
                            >Status</a
                          >
                        </div>
                        <div
                          class="filter-set-contents accordion-collapse collapse"
                          id="Status"
                          data-bs-parent="#accordionExample"
                        >
                          <div
                            class="filter-content-list bg-light rounded border p-2 shadow mt-2"
                          >
                            <ul>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Active
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Accepted
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Draft
                                </label>
                              </li>
                              <li>
                                <label
                                  class="dropdown-item px-2 d-flex align-items-center"
                                >
                                  <input
                                    class="form-check-input m-0 me-1"
                                    type="checkbox"
                                  />
                                  Declined
                                </label>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <a href="javascript:void(0);" class="btn btn-outline-light w-100"
                        >Reset</a
                      >
                      <a href="" class="btn btn-primary w-100">Filter</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <a
                  href="javascript:void(0);"
                  class="btn bg-soft-indigo px-2 border-0"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  ><i class="ti ti-columns-3 me-2"></i>Manage Columns</a
                >
                <div class="dropdown-menu dropdown-menu-md dropdown-md p-3">
                  <ul>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Estimations ID</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Client</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Amount</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Project</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Date</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Expiry Date</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Project</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Estimation By</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-2">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Status</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                    <li class="gap-1 d-flex align-items-center mb-0">
                      <i class="ti ti-columns me-1"></i>
                      <div class="form-check form-switch w-100 ps-0">
                        <label
                          class="form-check-label d-flex align-items-center gap-2 w-100"
                        >
                          <span>Action</span>
                          <input
                            class="form-check-input switchCheckDefault ms-auto"
                            type="checkbox"
                            role="switch"
                            checked
                          />
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                class="d-flex align-items-center shadow p-1 rounded border view-icons bg-white"
              >
                <router-link
                  to="/crm/estimations-list"
                  class="btn btn-sm p-1 border-0 fs-14 active"
                  ><i class="ti ti-list-tree"></i
                ></router-link>
                <router-link
                  to="/crm/estimations"
                  class="flex-shrink-0 btn btn-sm p-1 border-0 ms-1 fs-14"
                  ><i class="ti ti-grid-dots"></i
                ></router-link>
              </div>
            </div>
          </div>
          <!-- table header -->

          <!-- Projects List -->
          <a-table
            :columns="columns"
            :data-source="paginatedData"
            :row-selection="rowSelection"
            :pagination="false"
            row-key="id"
            class="custom-table no-filter"
            @change="handleTableChange"
          >
            <template #bodyCell="{ column, record }">
              <template v-if="column.key === 'star'">
                <div class="set-star rating-select">
                  <i class="ti ti-star-filled"></i>
                </div>
              </template>
              <template v-else-if="column.key === 'client'">
                <h2 class="d-flex align-items-center">
                  <router-link
                    to="/crm/company-details"
                    class="avatar rounded-circle border me-2"
                  >
                    <img
                      class="w-auto h-auto"
                      :src="getCompanyIcon(record.clientIcon)"
                      alt="User Image"
                    />
                  </router-link>
                  <router-link to="/crm/company-details" class="fs-14 fw-medium">
                    {{ record.client }}
                  </router-link>
                </h2>
              </template>
              <template v-else-if="column.key === 'project'">
                <h2 class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar rounded-circle border me-2">
                    <img
                      class="w-auto h-auto"
                      :src="getProjectIcon(record.projectIcon)"
                      alt="User Image"
                    />
                  </a>
                  <a href="javascript:void(0);" class="fs-14 fw-medium">{{
                    record.project
                  }}</a>
                </h2>
              </template>
              <template v-else-if="column.key === 'estimationBy'">
                <h2 class="d-flex align-items-center">
                  <a href="javascript:void(0);" class="avatar avatar-sm me-2">
                    <img
                      :src="getProfileImage(record.estimationByAvatar)"
                      alt="User Image"
                      class="rounded-circle"
                    />
                  </a>
                  <a
                    href="javascript:void(0);"
                    class="d-flex flex-column fs-14 fw-medium d-flex"
                  >
                    {{ record.estimationBy }}
                    <span class="text-body d-flex mt-1 fs-13 fw-normal">
                      {{ record.estimationByRole }}
                    </span>
                  </a>
                </h2>
              </template>
              <template v-else-if="column.key === 'status'">
                <span :class="['badge', 'badge-status', record.statusClass]">
                  {{ record.status }}
                </span>
              </template>
              <template v-else-if="column.key === 'action'">
                <div class="dropdown table-action">
                  <a
                    href="javascript:void(0);"
                    class="action-icon btn btn-xs shadow btn-icon btn-outline-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="ti ti-dots-vertical"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right">
                    <a
                      class="dropdown-item"
                      href="javascript:void(0);"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas_edit"
                    >
                      <i class="ti ti-edit text-blue"></i> Edit
                    </a>
                    <a
                      class="dropdown-item"
                      href="javascript:void(0);"
                      data-bs-toggle="modal"
                      data-bs-target="#delete_estimations"
                    >
                      <i class="ti ti-trash"></i> Delete
                    </a>
                    <a
                      class="dropdown-item"
                      href="javascript:void(0);"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvas_view"
                    >
                      <i class="ti ti-clipboard-copy text-violet"></i> View Estimation
                    </a>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="ti ti-checks text-green"></i> Mark as Accepted
                    </a>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="ti ti-file"></i> Mark as Draft
                    </a>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="ti ti-sticker text-blue"></i> Mark as Declined
                    </a>
                    <a class="dropdown-item" href="javascript:void(0);">
                      <i class="ti ti-printer"></i> Print
                    </a>
                  </div>
                </div>
              </template>
              <template v-else>
                {{ record[column.dataIndex] }}
              </template>
            </template>
          </a-table>
          <BasePagination
            :currentPage="currentPage"
            :pageSize="pageSize"
            :pageSizeOptions="pageSizeOptions"
            :totalPages="totalPages"
            @update:currentPage="onPageChange"
            @update:pageSize="onPageSizeChange"
          />
        </div>
      </div>
      <!-- card end -->
    </div>
    <!-- End Content -->
    <layouts-footer></layouts-footer>
    <estimations-modal></estimations-modal>
  </div>

  <!-- ========================
			End Page Content
		========================= -->
</template>
<script>
import "daterangepicker/daterangepicker.css";
import "daterangepicker/daterangepicker.js";
import { onMounted } from "vue";
import moment from "moment";
import DateRangePicker from "daterangepicker";
import { defineComponent, ref, computed } from "vue";
import {
  Table as ATable,
  Pagination as APagination,
  Select as ASelect,
  SelectOption as ASelectOption,
} from "ant-design-vue";
import BasePagination from "@/components/BasePagination.vue";

export default {
  components: {
    BasePagination,
  },
  data() {
    return {};
  },
  setup() {
    const dateRangeInput = ref(null);

    // Move the function declaration outside of the onMounted callback
    function booking_range(start, end) {
      return start.format("M/D/YYYY") + " - " + end.format("M/D/YYYY");
    }

    onMounted(() => {
      if (dateRangeInput.value) {
        const start = moment().subtract(6, "days");
        const end = moment();

        new DateRangePicker(
          dateRangeInput.value,
          {
            startDate: start,
            endDate: end,
            ranges: {
              Today: [moment(), moment()],
              Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
              "Last 7 Days": [moment().subtract(6, "days"), moment()],
              "Last 30 Days": [moment().subtract(29, "days"), moment()],
              "This Month": [moment().startOf("month"), moment().endOf("month")],
              "Last Month": [
                moment().subtract(1, "month").startOf("month"),
                moment().subtract(1, "month").endOf("month"),
              ],
            },
          },
          booking_range
        );

        booking_range(start, end);
      }
    });

    // Example data, replace with your local JSON import or data
    const dataSource = ref([
      {
        id: 1,
        estimationId: "#274738",
        client: "NovaWave LLC",
        clientIcon: "company-icon-01.svg",
        amount: "$2,15,000",
        project: "Truelysell",
        projectIcon: "truellysel.svg",
        estimationBy: "Darlee Robertson",
        estimationByAvatar: "avatar-19.jpg",
        estimationByRole: "Facility Manager",
        status: "Sent",
        statusClass: "bg-teal",
      },
      {
        id: 2,
        estimationId: "#274737",
        client: "BlueSky Industries",
        clientIcon: "company-icon-02.svg",
        amount: "$1,45,000",
        project: "Dreamschat",
        projectIcon: "dreamchat.svg",
        estimationBy: "Sharon Roy",
        estimationByAvatar: "avatar-20.jpg",
        estimationByRole: "Installer",
        status: "Accepted",
        statusClass: "bg-success",
      },
      {
        id: 3,
        estimationId: "#274736",
        client: "Silver Hawk",
        clientIcon: "company-icon-03.svg",
        amount: "$2,15,000",
        project: "Truelysell",
        projectIcon: "truellysell.svg",
        estimationBy: "Vaughan Lewis",
        estimationByAvatar: "avatar-21.jpg",
        estimationByRole: "Senior Manager",
        status: "Draft",
        statusClass: "bg-warning",
      },
      {
        id: 4,
        estimationId: "#274735",
        client: "Summit Peak",
        clientIcon: "company-icon-04.svg",
        amount: "$4,80,380",
        project: "Servbook",
        projectIcon: "servbook.svg",
        estimationBy: "Jessica Louise",
        estimationByAvatar: "avatar-23.jpg",
        estimationByRole: "Test Engineer",
        status: "Accepted",
        statusClass: "bg-success",
      },
      {
        id: 5,
        estimationId: "#274734",
        client: "RiverStone Ventur",
        clientIcon: "company-icon-05.svg",
        amount: "$2,12,000",
        project: "DreamPOS",
        projectIcon: "dream-pos.svg",
        estimationBy: "Carol Thomas",
        estimationByAvatar: "avatar-16.jpg",
        estimationByRole: "UI /UX Designer",
        status: "Declined",
        statusClass: "bg-danger",
      },
      {
        id: 6,
        estimationId: "#274733",
        client: "CoastalStar Co.",
        clientIcon: "company-icon-07.svg",
        amount: "$3,50,000",
        project: "Kofejob",
        projectIcon: "project-01.svg",
        estimationBy: "Dawn Mercha",
        estimationByAvatar: "avatar-22.jpg",
        estimationByRole: "Technician",
        status: "Draft",
        statusClass: "bg-warning",
      },
      {
        id: 7,
        estimationId: "#274732",
        client: "HarborView",
        clientIcon: "company-icon-08.svg",
        amount: "$1,23,000",
        project: "Doccure",
        projectIcon: "project-02.svg",
        estimationBy: "Rachel Hampton",
        estimationByAvatar: "avatar-24.jpg",
        estimationByRole: "Software Developer",
        status: "Sent",
        statusClass: "bg-teal",
      },
      {
        id: 8,
        estimationId: "#274731",
        client: "Golden Gate Ltd",
        clientIcon: "company-icon-09.svg",
        amount: "$3,12,50",
        project: "Best@laundry",
        projectIcon: "best.svg",
        estimationBy: "Jonelle Curtiss",
        estimationByAvatar: "avatar-24.jpg",
        estimationByRole: "Supervisor",
        status: "Accepted",
        statusClass: "bg-success",
      },
      {
        id: 9,
        estimationId: "#274730",
        client: "Golden Gate Ltd",
        clientIcon: "company-icon-10.svg",
        amount: "$4,18,000",
        project: "Dreamsports",
        projectIcon: "project-01.svg",
        estimationBy: "Jonathan Smith",
        estimationByAvatar: "avatar-26.jpg",
        estimationByRole: "Team Lead Dev",
        status: "Declined",
        statusClass: "bg-danger",
      },
      {
        id: 10,
        estimationId: "#274729",
        client: "NovaWave LLC",
        clientIcon: "company-icon-01.svg",
        amount: "$4,80,380",
        project: "Truelysell",
        projectIcon: "truellysel.svg",
        estimationBy: "Brook Carter",
        estimationByAvatar: "avatar-01.jpg",
        estimationByRole: "Team Lead Dev",
        status: "Accepted",
        statusClass: "bg-success",
      },
    ]);

    const columns = [
      {
        title: "",
        key: "star",
        dataIndex: "star",
        width: 50,
        sorter: false,
      },
      {
        title: "Estimation ID",
        key: "estimationId",
        dataIndex: "estimationId",
        sorter: (a, b) => a.estimationId.localeCompare(b.estimationId),
      },
      {
        title: "Client",
        key: "client",
        dataIndex: "client",
        sorter: (a, b) => a.client.localeCompare(b.client),
      },
      {
        title: "Amount",
        key: "amount",
        dataIndex: "amount",
        sorter: (a, b) => {
          // Remove non-numeric chars for comparison
          const numA = parseFloat(a.amount.replace(/[^\d.]/g, ""));
          const numB = parseFloat(b.amount.replace(/[^\d.]/g, ""));
          return numA - numB;
        },
      },
      {
        title: "Project",
        key: "project",
        dataIndex: "project",
        sorter: (a, b) => a.project.localeCompare(b.project),
      },
      {
        title: "Estimation By",
        key: "estimationBy",
        dataIndex: "estimationBy",
        sorter: (a, b) => a.estimationBy.localeCompare(b.estimationBy),
      },
      {
        title: "Status",
        key: "status",
        dataIndex: "status",
        sorter: (a, b) => a.status.localeCompare(b.status),
      },
      {
        title: "Action",
        key: "action",
        dataIndex: "action",
        sorter: false,
      },
    ];

    // Sorting state
    const sortState = ref({ columnKey: "", order: "" });

    // Handle table change (sort)
    function handleTableChange(pagination, filters, sorter) {
      if (sorter && sorter.columnKey) {
        sortState.value = {
          columnKey: sorter.columnKey,
          order: sorter.order,
        };
      } else {
        sortState.value = { columnKey: "", order: "" };
      }
    }

    // Sorted and paginated data
    const paginatedData = computed(() => {
      let sorted = [...dataSource.value];
      if (sortState.value.columnKey && sortState.value.order) {
        const col = columns.find((c) => c.key === sortState.value.columnKey);
        if (col && typeof col.sorter === "function") {
          sorted.sort(col.sorter);
          if (sortState.value.order === "descend") {
            sorted.reverse();
          }
        }
      }
      const start = (currentPage.value - 1) * pageSize.value;
      return sorted.slice(start, start + pageSize.value);
    });

    // Pagination
    const currentPage = ref(1);
    const pageSize = ref(10);
    const pageSizeOptions = [5, 10, 20, 50];
    const totalPages = computed(() =>
      Math.ceil(dataSource.value.length / pageSize.value)
    );
    const onPageChange = (page) => {
      currentPage.value = page;
    };
    const onPageSizeChange = (size) => {
      pageSize.value = size;
      currentPage.value = 1;
    };

    // Row selection (optional, can be customized)
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        // handle selection
      },
    };

    // Image helpers for Vite
    const getCompanyIcon = (icon) =>
      new URL(`/src/assets/img/icons/${icon}`, import.meta.url).href;
    const getProjectIcon = (icon) =>
      new URL(`/src/assets/img/priority/${icon}`, import.meta.url).href;
    const getProfileImage = (img) =>
      new URL(`/src/assets/img/profiles/${img}`, import.meta.url).href;

    return {
      dateRangeInput,
      columns,
      paginatedData,
      sortState,
      handleTableChange,
      currentPage,
      pageSize,
      pageSizeOptions,
      totalPages,
      onPageChange,
      onPageSizeChange,
      rowSelection,
      getCompanyIcon,
      getProjectIcon,
      getProfileImage,
    };
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getUserImg(filename) {
      return new URL(`/src/assets/img/users/${filename}`, import.meta.url).href;
    },
  },
};
</script>
