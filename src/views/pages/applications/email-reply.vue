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
                    <router-link to="/application/email"
                      class="flex items-center justify-between p-2 text-gray-900 rounded bg-dark-transparent hover:bg-dark-transparent active">
                      <span class="flex items-center font-medium"><i class="ti ti-inbox text-gray me-2"></i>Inbox</span>
                      <span
                        class="bg-danger rounded-s-full rounded-e-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block">56</span>
                    </router-link>
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
        <div class="mail-detail bg-white border-b border-borderColor flex-1 p-4">
          <div class="active slimscroll h-full">
            <div class="slimscroll-active-sidebar">
              <div class="flex items-center justify-between flex-wrap gap-y-2 border-b mb-3 pb-3">
                <div>
                  <a href="javascript:void(0);"
                    class="border border-borderColor rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                    data-dropdown-toggle="days-dropdown">
                    <span
                      class="bg-dark rounded-full text-[10px] font-medium py-0.5 text-white px-[0.45rem] inline-block me-2">5</span>Peoples<i
                      class="ti ti-chevron-down ml-1"></i>
                  </a>
                  <ul id="days-dropdown"
                    class="hidden p-4 border border-borderColor rounded bg-white shadow-lg w-40 z-[1]">
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Peoples</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Rufana</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Sean
                        Hill</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);"
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Cameron
                        Drake</a>
                    </li>
                  </ul>
                </div>
                <div class="flex items-center">
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-arrow-back-up"></i></a>
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-arrow-back-up-double"></i></a>
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-arrow-forward"></i></a>
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-bookmarks-filled"></i></a>
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-archive-filled"></i></a>
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-mail-opened-filled"></i></a>
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-printer"></i></a>
                  <a href="javascript:void(0);"
                    class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                      class="ti ti-star-filled text-warning"></i></a>
                </div>
              </div>
              <div class="bg-light-500 rounded p-3 mb-3">
                <div class="flex items-center flex-1 border-b border-borderColor mb-3 pb-3">
                  <a href="javascript:void(0);" class="w-8 h-8 flex flex-shrink-0 me-2">
                    <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-full" alt="Img">
                  </a>
                  <div class="flex-1">
                    <div class="flex items-start justify-between flex-wrap gap-y-2">
                      <div>
                        <h6 class="mb-1"><a href="javascript:void(0);">Angela Thomas</a></h6>
                        <p>Subject: Client Dashboard</p>
                      </div>
                      <div class="flex items-center">
                        <p class="me-2 mb-0">12:45 AM</p>
                        <a href="javascript:void(0);"
                          class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                            class="ti ti-arrow-back-up"></i></a>
                        <a href="javascript:void(0);"
                          class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                            class="ti ti-arrow-back-up-double"></i></a>
                        <a href="javascript:void(0);"
                          class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                            class="ti ti-printer"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex items-center flex-wrap gap-y-2">
                  <p class="text-[12px] mb-0 text-dark me-3"><span class="text-gray">From: </span> Arman Janes</p>
                  <p class="text-[12px] mb-0 text-dark me-3"><span class="text-gray">To: </span> Angela Thomas</p>
                  <p class="text-[12px] mb-0 text-dark"><span class="text-gray">Cc: </span> Angela Thomas, Justin
                    Lapointe</p>
                </div>
              </div>
              <div class="card border rounded shadow-none mb-4">
                <div class="card-body p-5">
                  <div>
                    <h6 class="mb-3">Dear Angela</h6>
                    <p class="text-dark">I am writing to request a meeting to discuss the progress and next steps for
                      Project.
                      We have reached a critical milestone, and I believe a
                      discussion will help align our efforts and ensure we are on track to meet our goals.
                    </p>
                    <p class="text-dark">
                      am available on Tuesday and Thursday afternoons,
                      but I am flexible and can adjust to a time that suits you best
                    </p>
                    <p class="text-dark">
                      Looking forward to your response.
                    </p>
                    <p class="text-dark">Best regards, <br><b class="font-medium flex mt-1">Arman</b> </p>
                  </div>
                  <div class="flex items-center justify-between my-3 pt-3 border-t">
                    <h5>Attachments</h5>
                    <a href="javascript:void(0);" class="text-primary font-medium">Download All</a>
                  </div>
                  <div class="flex items-center email-attach">
                    <div @click="openLightbox(0)"
                      class="w-16 h-16 me-3 relative gallery-item cursor-pointer hover:opacity-80 transition-opacity">
                      <img :src="getImageUrl('email-attach-01.jpg')" class="rounded w-full h-full object-cover" alt="img">
                      <span
                        class="w-7 h-7 rounded-full items-center justify-center absolute top-0 opacity-0 hover:opacity-100 bg-white left-5 transform transition-all duration-200"><i
                          class="ti ti-eye"></i></span>
                    </div>
                    <div @click="openLightbox(1)"
                      class="w-16 h-16 me-3 relative gallery-item cursor-pointer hover:opacity-80 transition-opacity">
                      <img :src="getImageUrl('email-attach-02.jpg')" class="rounded w-full h-full object-cover" alt="img">
                      <span
                        class="w-7 h-7 rounded-full items-center justify-center absolute top-0 opacity-0 hover:opacity-100 bg-white left-5 transform transition-all duration-200"><i
                          class="ti ti-eye"></i></span>
                    </div>
                    <div @click="openLightbox(2)"
                      class="w-16 h-16 me-3 relative gallery-item cursor-pointer hover:opacity-80 transition-opacity">
                      <img :src="getImageUrl('email-attach-03.jpg')" class="rounded w-full h-full object-cover" alt="img">
                      <span
                        class="w-7 h-7 rounded-full items-center justify-center absolute top-0 opacity-0 hover:opacity-100 bg-white left-5 transform transition-all duration-200"><i
                          class="ti ti-eye"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card border rounded shadow-none mb-4">
                <div class="card-body p-5">
                  <div class="bg-light-500 rounded p-3 mb-3">
                    <div class="flex items-center flex-wrap gap-y-2 flex-1">
                      <a href="javascript:void(0);" class="w-7 h-7 flex flex-shrink-0 me-2">
                        <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-full" alt="Img">
                      </a>
                      <div class="flex-1">
                        <div class="flex items-start justify-between flex-wrap gap-y-2">
                          <div>
                            <h6 class="mb-1"><a href="javascript:void(0);">Arman Janes</a></h6>
                            <div class="flex items-center">
                              <p class="mb-0"><span>To: </span> Me</p>
                              <div>
                                <a href="javascript:void(0);"
                                  class="rounded-full bg-transparent inline-flex items-center justify-center  text-gray-900 ms-2"
                                  data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdowns">
                                  <i class="ti ti-chevron-down"></i>
                                </a>
                                <ul id="grid-dropdowns"
                                  class="hidden p-4 border rounded bg-white shadow-lg w-100 z-[1]">
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><span
                                        class="text-gray me-1">From : </span> Arman Janes arman343@example.com</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><span
                                        class="text-gray me-1">To : </span> Angela Thomas ange4565@example.com</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);"
                                      class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"><span
                                        class="text-gray me-1">Date : </span> 12 May 2025, 09:45 PM </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="flex items-center">
                            <p class="me-2 mb-0">Yesterday 01:22 AM</p>
                            <a href="javascript:void(0);"
                              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                                class="ti ti-arrow-back-up"></i></a>
                            <a href="javascript:void(0);"
                              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                                class="ti ti-arrow-back-up-double"></i></a>
                            <a href="javascript:void(0);"
                              class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                                class="ti ti-printer"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h6 class="mb-2">Dear Arman</h6>
                    <p class="text-dark mb-5">Introduction Mail from Techsolutions!!!</p>
                    <p class="text-dark">Best regards <br><b class="font-medium inline-flex mt-1">Arman</b></p>
                  </div>
                  <form>
                    <div class="border rounded mt-3">
                      <div class="p-3 relative pb-2 border-b border-borderColor">
                        <div class="tag-with-img flex items-center">
                          <label class="form-label me-2">To</label>
                          <vue3-tags-input
                            class="input-tags form-control border-0 h-100"
                            placeholder=""
                            type="text"
                            data-role="tagsinput"
                            name="Label"
                            value="Tag1"
                            :tags="tags2"
                          />
                        </div>
                        <div
                          class="flex items-center email-cc absolute right-[10px] me-5 top-1/2 transform -translate-y-1/2">
                          <a href="javascript:void(0);" class="inline-flex me-2">Cc</a>
                          <a href="javascript:void(0);" class="inline-flex">Bcc</a>
                        </div>
                      </div>
                      <div class="p-3">
                        <div class="mb-3">
                          <textarea rows="2" class="form-control border-0 w-full focus:ring-0 outline-0 p-0"></textarea>
                        </div>
                      </div>
                      <div class="flex items-center justify-between border-t p-3">
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
                        <div class="flex items-center">
                          <a href="javascript:void(0);"
                            class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                              class="ti ti-calendar-repeat"></i></a>
                          <a href="javascript:void(0);"
                            class="w-7 h-7 flex items-center justify-center rounded-full hover:bg-dark-transparent"><i
                              class="ti ti-trash"></i></a>
                          <button type="submit" class="btn bg-primary inline-flex items-center text-white ms-2">Send <i
                              class="ti ti-arrow-right ms-2"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="text-center">
                <a href="javascript:void(0);" class="bg-dark rounded px-2 py-1 text-white text-[14px]">View Older
                  Messages</a>
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
            <vue3-tags-input
                class="input-tags form-control border-0 h-100"
                placeholder=""
                type="text"
                data-role="tagsinput"
                name="Label"
                value="Tag1"
                :tags="tags2"
              />
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

  <!-- Vue Easy Lightbox Component -->
  <VueEasyLightbox
    :visible="lightboxVisible"
    :imgs="lightboxImages"
    :index="lightboxIndex"
    @hide="lightboxVisible = false"
  />
</template>

<script>
import Vue3TagsInput from "vue3-tags-input";
import VueEasyLightbox from "vue-easy-lightbox";
export default {
  components: {
    Vue3TagsInput,
    VueEasyLightbox,
  },
  data() {
    return {
      tags2: ["Angela Thomas"],
      lightboxVisible: false,
      lightboxIndex: 0,
      showMore: false,
      showMoreOne: false,
      showMoreFolders: false,
      showCompose: false,
      isMinimized: false,
      isMaximized: false,
    };
  },
  computed: {
    lightboxImages() {
      return [
        this.getImageUrl('email-attach-01.jpg'),
        this.getImageUrl('email-attach-02.jpg'),
        this.getImageUrl('email-attach-03.jpg')
      ];
    }
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
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/media/${imageName}`, import.meta.url).href;
    },
    openLightbox(index) {
      this.lightboxIndex = index;
      this.lightboxVisible = true;
    },
  },
};
</script>
