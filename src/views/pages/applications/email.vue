<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-0">
      <div class="md:flex">
        <div class="email-sidebar max-w-[300px] border-r border-b border-borderColor">
          <div class="active slimscroll h-full">
            <div class="slimscroll-active-sidebar">
              <div class="p-4">
                <div class="shadow-md bg-white rounded p-2 mb-4">
                  <div class="flex items-center">
                    <a href="javascript:void(0);" class="w-8 h-8 flex flex-shrink-0 me-2">
                      <img src="@/assets/img/profiles/avatar-02.jpg" class="rounded-full" alt="Img">
                    </a>
                    <div>
                      <h6 class="mb-1"><a href="javascript:void(0);">James Hong</a></h6>
                      <p>jnh343@example.com</p>
                    </div>
                  </div>
                </div>
                <a href="javascript:void(0);" @click="openComposeModal()" class="btn bg-primary w-full text-white text-center" id="compose_mail"><i
                    class="ti ti-edit me-2"></i>Compose</a>
                <div class="mt-4">
                  <h5 class="mb-2">Emails</h5>
                  <div class="block mb-4 pb-4 border-b border-borderColor email-tags">
                    <a href="javascript:void(0);"
                      class="flex items-center justify-between p-2 text-gray-900 rounded bg-dark-transparent hover:bg-dark-transparent active">
                      <span class="flex items-center font-medium"><i class="ti ti-inbox text-gray me-2"></i>Inbox</span>
                      <span
                        class="bg-danger rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">56</span>
                    </a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent">
                      <span class="flex items-center font-medium"><i
                          class="ti ti-star text-gray me-2"></i>Starred</span>
                      <span
                        class="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">46</span>
                    </a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent">
                      <span class="flex items-center font-medium"><i class="ti ti-rocket text-gray me-2"></i>Sent</span>
                      <span
                        class="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">14</span>
                    </a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent">
                      <span class="flex items-center font-medium"><i class="ti ti-file text-gray me-2"></i>Drafts</span>
                      <span
                        class="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">12</span>
                    </a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent">
                      <span class="flex items-center font-medium"><i
                          class="ti ti-trash text-gray me-2"></i>Deleted</span>
                      <span
                        class="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">08</span>
                    </a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-between p-2 text-gray-900 rounded hover:bg-dark-transparent">
                      <span class="flex items-center font-medium"><i
                          class="ti ti-info-octagon text-gray me-2"></i>Spam</span>
                      <span
                        class="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">0</span>
                    </a>
                    <div>
                      <div class="more-menu">
                        <a href="javascript:void(0);"
                          class="flex items-center justify-between text-gray-900 p-2 rounded hover:bg-dark-transparent">
                          <span class="flex items-center font-medium"><i
                              class="ti ti-location-up text-gray me-2"></i>Important</span>
                          <span
                            class="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">12</span>
                        </a>
                        <a href="javascript:void(0);"
                          class="flex items-center justify-between text-gray-900 p-2 rounded hover:bg-dark-transparent">
                          <span class="flex items-center font-medium"><i
                              class="ti ti-transition-top text-gray me-2"></i>All Emails</span>
                          <span
                            class="rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 px-[0.45rem] inline-block">34</span>
                        </a>
                      </div>
                      <div class="view-all mt-2">
                        <a href="javascript:void(0);" class="viewall-button font-medium"><span>Show More</span><i
                            class="fa fa-chevron-down fs-10 ms-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-borderColor mb-4 pb-4">
                  <div class="flex items-center justify-between mb-2">
                    <h5>Labels</h5>
                    <a href="javascript:void(0);"><i
                        class="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                  </div>
                  <div>
                    <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                      <i class="ti ti-square-rounded text-success me-2"></i>
                      Team Events
                    </a>
                    <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                      <i class="ti ti-square-rounded text-warning me-2"></i>
                      Work
                    </a>
                    <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                      <i class="ti ti-square-rounded text-danger me-2"></i>
                      External
                    </a>
                    <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                      <i class="ti ti-square-rounded text-skyblue me-2"></i>
                      Projects
                    </a>
                    <div>
                      <div class="more-menu-2">
                        <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                          <i class="ti ti-square-rounded text-purple me-2"></i>
                          Applications
                        </a>
                        <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                          <i class="ti ti-square-rounded text-info me-2"></i>
                          Desgin
                        </a>
                      </div>
                      <div class="view-all mt-2">
                        <a href="javascript:void(0);" class="viewall-button-2 font-medium"><span>Show More</span><i
                            class="fa fa-chevron-down fs-10 ms-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="border-b border-borderColor mb-4 pb-4">
                  <div class="flex items-center justify-between mb-2">
                    <h5>Folders</h5>
                    <a href="javascript:void(0);"><i
                        class="ti ti-square-rounded-plus-filled text-primary fs-16"></i></a>
                  </div>
                  <div>
                    <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                      <i class="ti ti-folder-filled text-danger me-2"></i>
                      Projects
                    </a>
                    <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                      <i class="ti ti-folder-filled text-warning me-2"></i>
                      Personal
                    </a>
                    <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                      <i class="ti ti-folder-filled text-success me-2"></i>
                      Finance
                    </a>
                    <div>
                      <div class="more-menu-3">
                        <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                          <i class="ti ti-folder-filled text-info me-2"></i>
                          Projects
                        </a>
                        <a href="javascript:void(0);" class="font-medium flex items-center text-dark py-1">
                          <i class="ti ti-folder-filled text-primary me-2"></i>
                          Personal
                        </a>
                      </div>
                      <div class="view-all mt-2">
                        <a href="javascript:void(0);" class="viewall-button-3 font-medium"><span>Show More</span><i
                            class="fa fa-chevron-down fs-10 ms-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-dark rounded text-center relative z-[1] p-4">
                  <span class="w-11 h-11 mx-auto rounded-full flex items-center justify-center bg-white mb-2">
                    <i class="ti ti-alert-triangle text-dark"></i>
                  </span>
                  <h6 class="text-white mb-3">Enjoy Unlimited Access on a small price monthly.</h6>
                  <a href="javascript:void(0);" class="btn bg-white text-gray-900">Upgrade Now <i
                      class="ti ti-arrow-right"></i></a>
                  <div class="box-bg">
                    <span class="absolute top-0 right-0 z-[-1]"><img src="@/assets/img/bg/email-bg-01.png"
                        alt="Img"></span>
                    <span class="absolute left-0 bottom-0 z-[-1]"><img src="@/assets/img/bg/email-bg-02.png"
                        alt="Img"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white flex-1 border-b border-borderColor mail-notifications">
          <div class="active slimscroll h-full">
            <div class="slimscroll-active-sidebar">
              <div class="p-4">
                <div class="flex items-center justify-between flex-wrap gap-y-3">
                  <div>
                    <h5 class="mb-1">Inbox</h5>
                    <div class="flex items-center">
                      <span>2345 Emails</span>
                      <i class="ti ti-point-filled text-primary mx-1"></i>
                      <span>56 Unread</span>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <div class="relative input-icon me-3">
                      <span class="input-icon-addon absolute left-[10px] top-[10px] text-gray-400">
                        <i class="ti ti-search"></i>
                      </span>
                      <input type="text"
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full py-2 px-2.5 h-[38px] ps-8 placeholder:text-gray-400"
                        placeholder="Search Email">
                    </div>
                    <div class="flex items-center">
                      <a href="javascript:void(0);"
                        class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                          class="ti ti-filter-edit"></i></a>
                      <a href="javascript:void(0);"
                        class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                          class="ti ti-settings"></i></a>
                      <a href="javascript:void(0);"
                        class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                          class="ti ti-refresh"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-group list-group-flush mails-list">
                <div class="list-group-item border-b p-4 border-borderColor border-borderColor">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply"
                        class="w-11 h-11 flex items-center justify-center text-white bg-purple rounded-full me-2">
                        <span class="avatar-title">CD</span>
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Justin Lapointe</router-link></h6>
                            <span class="font-semibold">Client Dashboard</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown1">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown1" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-success"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>It seems that recipients are receiving...</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent me-2"><i
                          class="ti ti-folder-open me-2"></i>3</span>
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent"><i
                          class="ti ti-photo me-2"></i>+24</span>
                    </div>
                    <div class="flex items-center">
                      <span><i class="ti ti-star-filled text-warning"></i></span>
                      <span
                        class="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2"><i
                          class="ti ti-square me-1"></i>Projects</span>
                      <a href="javascript:void(0);"
                        class="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">+1</a>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-b p-4 border-borderColor">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply" class="w-10 h-10 rounded-full me-2">
                        <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-full" alt="Img">
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Rufana</router-link></h6>
                            <span class="font-semibold">UI project</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown2">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown2" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>Regardless, you can usually expect an increase</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <a href="javascript:void(0);"><img src="@/assets/img/icons/google-meet.svg" alt="Img"></a>
                    <div class="flex items-center">
                      <span><i class="ti ti-star-filled text-warning"></i></span>
                      <span
                        class="bg-primary-100 text-purple rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2"><i
                          class="ti ti-square me-1"></i>Applications</span>
                      <a href="javascript:void(0);"
                        class="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">+1</a>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-b p-4 border-borderColor">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply" class="w-10 h-10 rounded-full me-2">
                        <img src="@/assets/img/profiles/avatar-03.jpg" class="rounded-full" alt="Img">
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Cameron Drake</router-link></h6>
                            <span class="font-semibold">You’re missing</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown3">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown3" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>Here are a few catchy email subject line examples </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent fs-14"><i
                          class="ti ti-video me-2"></i>1</span>
                    </div>
                    <div class="flex items-center">
                      <span><i class="ti ti-star-filled text-warning"></i></span>
                      <span
                        class="bg-danger-100 text-danger rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2"><i
                          class="ti ti-square me-1"></i>External</span>
                      <a href="javascript:void(0);"
                        class="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">+1</a>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-b p-4 border-borderColor">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply" class="w-10 h-10 rounded-full me-2">
                        <img src="@/assets/img/profiles/avatar-04.jpg" class="rounded-full" alt="Img">
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Sean Hill</router-link></h6>
                            <span class="font-semibold">How Have You Progressed</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown4">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown4" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>You can write effective retargeting subject</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent"><i
                          class="ti ti-photo me-2"></i>1</span>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="bg-success-100 text-success rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs"><i
                          class="ti ti-square me-1"></i>Team Events</span>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-b p-4 border-borderColor">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply" class="w-10 h-10 rounded-full me-2">
                        <img src="@/assets/img/profiles/avatar-05.jpg" class="rounded-full" alt="Img">
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Kevin Alley</router-link></h6>
                            <span class="font-semibold">Flash. Sale. Alert.</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown5">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown5" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>You can also use casual language,</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent"><i
                          class="ti ti-link me-2"></i>1</span>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="bg-danger-100 text-danger rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                          class="ti ti-square me-1"></i>External</span>
                      <a href="javascript:void(0);"
                        class="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">+1</a>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-b p-4 border-borderColor">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply" class="w-10 h-10 rounded-full me-2">
                        <img src="@/assets/img/profiles/avatar-08.jpg" class="rounded-full" alt="Img">
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Linda Zimmer</router-link></h6>
                            <span class="font-semibold">Products the celebs are</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown6">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown6" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>It seems that recipients are receiving...</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent"><i
                          class="ti ti-link me-2"></i>1</span>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="bg-warning-100 text-warning rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs me-2"><i
                          class="ti ti-square me-1"></i>Work</span>
                      <a href="javascript:void(0);"
                        class="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">+1</a>
                    </div>
                  </div>
                </div>
                <div class="list-group-item border-b p-4 border-borderColor">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply"
                        class="w-11 h-11 rounded-full flex items-center justify-center bg-success text-white me-2">
                        <span class="avatar-title">ER</span>
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Emly Reachel</router-link></h6>
                            <span class="font-semibold">No Subject</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown7">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown7" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>Announcing Fake Name Generator Premium</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent"><i
                          class="ti ti-folder-open me-2"></i>3</span>
                    </div>
                    <div class="flex items-center">
                      <span
                        class="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs"><i
                          class="ti ti-square me-1"></i>Projects</span>
                    </div>
                  </div>
                </div>
                <div class="list-group-item p-4">
                  <div class="flex items-center mb-2">
                    <div class="flex items-center me-3">
                      <input class="size-5 bg-white border border-borderColor rounded text-primary focus:ring-0"
                        type="checkbox">
                    </div>
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <router-link to="/application/email-reply" class="w-10 h-10 rounded-full me-2">
                        <img src="@/assets/img/profiles/avatar-07.jpg" class="rounded-full" alt="Img">
                      </router-link>
                      <div class="flex-1">
                        <div class="flex items-start justify-between">
                          <div>
                            <h6 class="mb-1"><router-link to="/application/email-reply">Sean Hill</router-link></h6>
                            <span class="font-semibold">You’re missing</span>
                          </div>
                          <div class="flex items-center">
                            <div>
                              <a href="javascript:void(0);"
                                class="size-7 rounded-full bg-white inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown8">
                                <i class="ti ti-dots"></i>
                              </a>
                              <ul id="grid-dropdown8" class="hidden p-4 border rounded bg-white shadow-lg w-50 z-[1]">
                                <li>
                                  <router-link to="/application/email-reply"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Open
                                    Email</router-link>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Reply
                                    All</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Forward
                                    As Attachment</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mark
                                    As Unread</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    to Junk</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Mute</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Delete</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Archive</a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);"
                                    class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Move
                                    To</a>
                                </li>
                              </ul>
                            </div>
                            <span><i class="ti ti-point-filled text-danger"></i>3:13 PM</span>
                          </div>
                        </div>
                        <p>Regardless, you can usually expect an increase</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent me-2"><i
                          class="ti ti-folder-open me-2"></i>3</span>
                      <span class="flex items-center rounded px-2 py-1 text-gray-900 bg-dark-transparent"><i
                          class="ti ti-photo me-2"></i>+24</span>
                    </div>
                    <div class="flex items-center">
                      <span><i class="ti ti-star-filled text-warning"></i></span>
                      <span
                        class="bg-info-100 text-info rounded text-[10px] font-medium leading-4 py-0.5 px-1.5 inline-flex items-center badge-xs mx-2"><i
                          class="ti ti-square me-1"></i>Applications</span>
                      <a href="javascript:void(0);"
                        class="bg-dark rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">+1</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->
  </div>
  <!-- /Page Wrapper -->

  <!-- Compose Mail -->
  <div id="compose-view" class="hidden z-[9999]" :class="showCompose ? 'show' : ''"
       :style="isMinimized ? 'height: 50px; overflow: hidden;' : isMaximized ? 'width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0;' : ''">
    <div :class="isMaximized ? 'bg-white border-0 rounded compose-view w-full h-full relative' : 'bg-white border-0 rounded compose_mail max-w-[500px] w-full absolute right-[10px] bottom-[10px] me-10'">
      <div class="compose-header flex items-center justify-between bg-dark p-3">
        <h5 class="text-white">Compose New Email</h5>
        <div class="flex items-center">
          <a href="javascript:void(0);" @click="minimizeComposeModal()" class="inline-flex me-2 text-white fs-16"><i class="ti ti-minus"></i></a>
          <a href="javascript:void(0);" @click="maximizeComposeModal()" class="inline-flex me-2 fs-16 text-white"><i class="ti ti-maximize"></i></a>
          <button type="button" @click="closeComposeModal()" class="btn-close custom-btn-close bg-transparent fs-16 text-white position-static"
            id="compose-close">
            <i class="ti ti-x"></i>
          </button>
        </div>
      </div>
      <form>
        <div class="p-3 relative pb-2 border-b">
          <div class="tag-with-img flex items-center">
            <label class="form-label me-2">To</label>
            <vue3-tags-input class="input-tags form-control border-0 h-100" type="text" id="inputBox"
            data-role="tagsinput" name="specialist" value="Tag1" :tags="tagsOne" />
          </div>
          <div class="d-flex items-center email-cc absolute right-[10px] top-1/2 me-3">
            <a href="javascript:void(0);" class="inline-flex me-2">Cc</a>
            <a href="javascript:void(0);" class="inline-flex">Bcc</a>
          </div>
        </div>
        <div class="p-3 border-b">
          <div class="mb-3">
            <input type="text"
              class="block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-12 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-borderColor w-full text-xs"
              placeholder="Subject">
          </div>
          <div class="mb-0">
            <textarea rows="7"
              class="block flex-1 border border-borderColor bg-white rounded-[5px] py-1.5 pr-12 text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:border-borderColor w-full text-xs"
              placeholder="Compose Email"></textarea>
          </div>
        </div>
        <div class="p-3 flex items-center justify-between">
          <div class="flex items-center">
            <a href="javascript:void(0);"
              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                class="ti ti-paperclip"></i></a>
            <a href="javascript:void(0);"
              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                class="ti ti-photo"></i></a>
            <a href="javascript:void(0);"
              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                class="ti ti-link"></i></a>
            <a href="javascript:void(0);"
              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                class="ti ti-pencil"></i></a>
            <a href="javascript:void(0);"
              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                class="ti ti-mood-smile"></i></a>
          </div>
          <div class="flex items-center compose-footer">
            <a href="javascript:void(0);"
              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                class="ti ti-calendar-repeat"></i></a>
            <a href="javascript:void(0);"
              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                class="ti ti-trash"></i></a>
            <button type="submit" class="btn btn-primary inline-flex items-center ms-2">Send <i
                class="ti ti-arrow-right ms-2"></i></button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <!-- /Compose Mail -->
  <div :class="showCompose ? 'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 overlay-email z-[9997]' : ''"></div>
</template>

<script>
import simplebar from "simplebar-vue";
import "simplebar-vue/dist/simplebar.min.css";
import Vue3TagsInput from "vue3-tags-input";
import { initFlowbite } from "flowbite";
export default {
  components: {
    simplebar,
    Vue3TagsInput,
  },
  data() {
    return {
      tagsOne: ["Angela Thomas"],
      showMore: false,
      showMoreOne: false,
      showMoreFolders: false,
      showCompose: false,
      isMinimized: false,
      isMaximized: false,
    };
  },
  methods: {
    toggleMoreFolders() {
      this.showMoreFolders = !this.showMoreFolders;
    },
    toggleMore() {
      this.showMore = !this.showMore;
    },
    toggleMoreOne() {
      this.showMoreOne = !this.showMoreOne;
    },
    openComposeModal() {
      this.showCompose = true;
      this.isMinimized = false;
      this.isMaximized = false;
    },
    closeComposeModal() {
      this.showCompose = false;
      this.isMinimized = false;
      this.isMaximized = false;
    },
    minimizeComposeModal() {
      this.isMinimized = !this.isMinimized;
    },
    maximizeComposeModal() {
      this.isMaximized = !this.isMaximized;
    },
  },
  mounted() {
    initFlowbite();
  },
};
</script>
