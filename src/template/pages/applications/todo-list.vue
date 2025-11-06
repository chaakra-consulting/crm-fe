<template>
  <layouts-header />
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">
    <div class="content p-5">
      <!-- Page Header -->
      <div class="flex flex-wrap items-center justify-between gap-2 mb-7">
        <div>
          <h4 class="mb-1 text-xl font-bold flex items-center">
            Todo List
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li>
                <a href="javascript:void(0);" class="hover:underline text-gray-700">Applications</a>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">Todo List</li>
            </ol>
          </nav>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <!-- Refresh Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Refresh">
            <i class="ti ti-refresh"></i>
          </button>
          <!-- Collapse Button -->
          <button
            class="border border-borderColor w-9 h-9 rounded shadow bg-white hover:bg-light flex items-center justify-center"
            title="Collapse" id="collapse-header" @click="toggleHeader">
            <i class="ti ti-transition-top"></i>
          </button>
        </div>
      </div>
      <!-- End Page Header -->

      <div class="flex items-center justify-between mb-5">
        <button class="btn bg-primary border-primary text-white text-start" data-modal-toggle="add_new_todo"
          data-modal-target="add_new_todo">
          <i class="ti ti-circle-plus me-1"></i>Create New
        </button>
        <div class="flex items-center rounded gap-2 icon-list">
          <router-link to="/application/todo"
            class="w-7 h-7 flex items-center justify-center rounded text-dark border border-borderColor me-1"><i
              class="ti ti-layout-grid"></i></router-link>
          <router-link to="/application/todo-list" class="w-7 h-7 flex items-center justify-center rounded bg-primary text-white"><i
              class="ti ti-list-tree"></i></router-link>
        </div>
      </div>

      <!-- start table responsive -->
      <div class="table-responsive custom-table">
        <table class="table table w-full border-b border-borderColor">
          <thead class="table-light">
            <tr>
              <th class="no-sort px-5 py-2.5">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </th>
              <th></th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Company Name</th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Tags</th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Assignee</th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Created On</th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Progress</th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Due Date</th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Status</th>
              <th
                class="text-sm leading-normal px-5 py-2.5 bg-gray-200 text-gray-900 border-borderColor font-medium text-start">
                Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all1">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select mx-3"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Respond to any pending messages</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-info">Social</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-01.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-02.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">14 Jan 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 100%</span>
                <div class="progress progress-xs flex-grow-1 mb-2 h-1" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-success rounded h-1" role="progressbar" style="width: 100%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">14 Jan 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                  Completed
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all2">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Update calendar and schedule</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-primary">Meetings</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-01.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-02.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-03.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">21 Jan 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 15%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-danger rounded" role="progressbar" style="width: 15%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">21 Jan 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                  Pending
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-allone">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Respond to any pending messages</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-danger">Research</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-04.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-06.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">20 Feb 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 45%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 45%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">20 Feb 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span
                  class="text-xs bg-secondary-100  text-secondary rounded border-b border-secondary px-2 py-0.5 me-2">
                  Inprogress
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-alltwo">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Attend team meeting at 10:00 AM</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-primary">Web Design</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-05.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-06.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-07.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">15 Mar 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 40%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-warning rounded" role="progressbar" style="width: 40%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">15 Mar 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span
                  class="text-xs bg-secondary-100  text-secondary rounded border-b border-secondary px-2 py-0.5 me-2">
                  Inprogress
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Check and respond to emails</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-info">Reminder</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-08.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-09.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-10.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">12 Apr 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 65%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-purple rounded" role="progressbar" style="width: 65%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">12 Apr 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                  Pending
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Coordinate with department head</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-danger">Internal</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-11.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-12.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-13.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">20 Apr 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 85%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-pink rounded" role="progressbar" style="width: 85%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">20 Apr 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                  Onhold
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Plan tasks for the next day</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-info">Social</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-14.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-15.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-16.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">06 Jul 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 100%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-success rounded" role="progressbar" style="width: 100%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">06 Jul 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">
                  Completed
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Finalize project proposal</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-success">Projects</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-17.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-18.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-19.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">02 Sep 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 65%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-danger rounded" role="progressbar" style="width: 65%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">02 Sep 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="text-xs bg-danger-100  text-danger rounded border-b border-danger px-2 py-0.5 me-2">
                  Onhold
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Submit to supervisor by EOD</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-info">Reminder</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-01.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-02.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-03.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">15 Nov 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 75%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-purple rounded" role="progressbar" style="width: 75%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">15 Nov 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span
                  class="text-xs bg-secondary-100  text-secondary rounded border-b border-secondary px-2 py-0.5 me-2">
                  Inprogress
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="form-check form-check-md">
                  <input class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0"
                    type="checkbox" id="select-all">
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="set-star rating-select"><i class="ti ti-star-filled fs-16"></i></div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <p class="fw-medium text-dark mb-0">Prepare presentation slides</p>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="badge bg-danger">Research</span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="avatar-list-stacked avatar-group-sm">
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-01.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-02.jpg" alt="img">
                  </span>
                  <span class="avatar avatar-rounded">
                    <img class="border border-white" src="@/assets/img/profiles/avatar-03.jpg" alt="img">
                  </span>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">10 Dec 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="d-block mb-1">Progress : 90%</span>
                <div class="progress progress-xs flex-grow-1 mb-2" style="width: 190px; height: 5px;">
                  <div class="progress-bar bg-pink rounded" role="progressbar" style="width: 90%; height: 5px;"
                    aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </td>
              <td class="px-5 py-2.5 text-gray-500">10 Dec 2024</td>
              <td class="px-5 py-2.5 text-gray-500">
                <span class="text-xs bg-warning-100  text-warning rounded border-b border-warning px-2 py-0.5 me-2">
                  Pending
                </span>
              </td>
              <td class="px-5 py-2.5 text-gray-500">
                <div class="inline-flex items-center">
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-toggle="edit_todo"
                    data-modal-target="edit_todo">
                    <i class="ti ti-edit"></i>
                  </a>
                  <a href="#" class="btn btn-icon btn-sm btn-outline-white border-0" data-modal-target="delete_modal"
                    data-modal-toggle="delete_modal">
                    <i class="ti ti-trash"></i>
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- end table responsive -->
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->

  <!-- start add notes  modal -->
  <div id="add_new_todo"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Add New Todo</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="add_new_todo">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input type="text" class="form-control">
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Tag</label>
                  </div>
                  <vue3-select v-model="selected" :options="TodoTag" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select v-model="selectedOne" :options="Priority" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="quill-editor">
                    <div class="editor pages-editor ql-container ql-snow">
                        <div ref="editorRefone" class="quill-editor"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select v-model="selectedTwo" :options="Assignee" placeholder="Select" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select v-model="selectedThree" :options="Status" placeholder="Select" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_new_todo" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Add New Todo</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add new modal -->

  <!-- start edit notes  modal -->
  <div id="edit_todo"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full transition-all duration-300 ease-in-out p-4">
    <div class="relative p-4 w-full max-w-[500px] max-h-full">
      <div class="relative bg-white rounded-defaultradius">
        <div class="flex items-center justify-between p-4 border-b border-borderColor">
          <div class="flex item-center gap-2">
            <h5 class="font-bold text-[18px]">Edit Todo</h5>
          </div>
          <button type="button"
            class="text-danger hover:text-danger text-sm w-5 h-5 border m-0 border-borderColor bg-danger-100 rounded-full absolute top-4 end-3 flex items-center justify-center"
            data-modal-hide="edit_todo">
            <i class="ti ti-x"></i>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="p-4">
          <form>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-x-5 gap-y-1">
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Todo Title</label>
                  <input type="text" class="form-control" value="Update calendar and schedule">
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <div class="flex items-center justify-between">
                    <label class="form-label">Tag</label>
                  </div>
                  <vue3-select v-model="selectedFour" :options="TodoTag" placeholder="Internal" />
                </div>
              </div>
              <div class="md:col-span-6">
                <div class="mb-3">
                  <label class="form-label">Priority</label>
                  <vue3-select v-model="selectedFive" :options="Priority" placeholder="Medium" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Descriptions</label>
                  <div class="editor pages-editor ql-container ql-snow">
                      <div ref="editorRef" class="quill-editor"></div>
                  </div>
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Add Assignee</label>
                  <vue3-select v-model="selectedSix" :options="Assignee" placeholder="Sophie" />
                </div>
              </div>
              <div class="md:col-span-12">
                <div class="mb-3">
                  <label class="form-label">Status</label>
                  <vue3-select v-model="selectedSeven" :options="Status" placeholder="Completed" />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="flex items-center justify-end p-4 gap-x-2 border-t border-borderColor">
          <button type="button" data-modal-hide="add_new_todo" class="btn btn-light">Cancel</button>
          <button type="button" class="btn btn-primary">Add New Todo</button>
        </div>
      </div>
    </div>
  </div>
  <!-- end add new modal -->

  <!-- delete modal -->
  <div
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-[1055] justify-center items-center flex-wrap w-full md:inset-0 h-[calc(100%-1rem)] max-h-full  transition-all duration-300 ease-in-out modal p-4"
    id="delete_modal">
    <div class="relative bg-white rounded-defaultradius p-5">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center">
          <div class="mb-3 relative z-[1]">
            <span
              class="w-[50px] h-[50px] rounded-full bg-danger-100 text-danger inline-flex items-center justify-center"><i
                class="ti ti-trash text-[24px]"></i></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove contract you selected.</p>
          <div class="flex justify-center items-center">
            <a href="javascript:void(0);" class="btn btn-light z-1 me-2 w-full"
              data-modal-hide="delete_modal">Cancel</a>
            <a href="javascript:void(0);" class="btn btn-primary z-1 w-full" data-modal-hide="delete_modal">Yes,
              Delete</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->
</template>

<script>
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { initFlowbite } from 'flowbite';

export default {
  data() {
    return {
      valueOne: null,
      content: "",
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      selectedSix: null,
      selectedSeven: null,
      TodoTag: [
        { label: "Select", value: "Select" },
        { label: "Internal", value: "Internal" },
        { label: "Projects", value: "Projects" },
        { label: "Meetings", value: "Meetings" },
        { label: "Reminder", value: "Reminder" },
      ],
      Priority: [
        { label: "Select", value: "Select" },
        { label: "Medium", value: "Medium" },
        { label: "High", value: "High" },
        { label: "Low", value: "Low" },
      ],
      Assignee: [
        { label: "Select", value: "Select" },
        { label: "Sophie", value: "Sophie" },
        { label: "Cameron", value: "Cameron" },
        { label: "Doris", value: "Doris" },
        { label: "Rufana", value: "Rufana" },
      ],
      Status: [
        { label: "Select", value: "Select" },
        { label: "Completed", value: "Completed" },
        { label: "Pending", value: "Pending" },
        { label: "Onhold", value: "Onhold" },
        { label: "Inprogress", value: "Inprogress" },
      ],
      isClicked: false,
      isClickedOne: false,
      isClickedTwo: true,
      isClickedThree: false,
      isClickedFour: false,
      isClickedFive: false,
    };
  },
  mounted() {
    this.initQuill();
    initFlowbite();
  },
  methods: {
    initQuill() {
      if (this.$refs.editorRef) {
        const quill = new Quill(this.$refs.editorRef, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quill.on("text-change", () => {
          this.content = quill.root.innerHTML;
        });
      }
      if (this.$refs.editorRefone) {
        const quillone = new Quill(this.$refs.editorRefone, {
          theme: "snow",
          modules: {
            toolbar: [
              [{ header: [1, 2, false] }],
              ["bold", "italic", "underline"],
              ["image", "code-block"],
            ],
          },
        });

        quillone.on("text-change", () => {
          this.content = quillone.root.innerHTML;
        });
      }
    },
    toggleHeader() {
      const button = document.getElementById("collapse-header");
      if (button) {
        button.classList.toggle("active");
        document.body.classList.toggle("header-collapse");
      }
    },
    toggleClicked() {
      this.isClicked = !this.isClicked;
    },
    toggleClickedOne() {
      this.isClickedOne = !this.isClickedOne;
    },
    toggleClickedTwo() {
      this.isClickedTwo = !this.isClickedTwo;
    },
    toggleClickedThree() {
      this.isClickedThree = !this.isClickedThree;
    },
    toggleClickedFour() {
      this.isClickedFour = !this.isClickedFour;
    },
    toggleClickedFive() {
      this.isClickedFive = !this.isClickedFive;
    },
  },
};
</script>
