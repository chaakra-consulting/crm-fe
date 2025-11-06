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
            Social Feed
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
              <li class="text-dark font-medium" aria-current="page">Social Feed</li>
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
      <div class="grid xl:grid-cols-12 gap-x-6">
        <!-- Start Left Sidebar -->
        <div class="xl:col-span-3 theiaStickySidebar">
          <div class="card border border-borderColor rounded bg-white">
            <div class="card-body p-5">
              <div class="bg-light rounded p-5 mb-4">
                <div class="text-center mb-4">
                  <a href="javascript:void(0);"
                    class="relative avatar size-[57.6px] inline-flex online avatar-rounded before:[content:''] before:unset">
                    <img src="@/assets/img/users/user-11.jpg" class="size-[57.6px]" alt="Img">
                    <span
                      class="right-0 bottom-0 absolute  w-4 h-4 bg-success border-2 border-white  rounded-full"></span>
                  </a>
                  <h6 class="mb-1"><a href="javascript:void(0);">James Hong </a></h6>
                  <p class="text-[13px]">@James Hong324</p>
                </div>
                <div class="grid sm:grid-cols-2 gap-2">
                  <div class="sm:col-span-1">
                    <div class="rounded bg-white text-center p-2">
                      <h6 class="mb-1">89K</h6>
                      <p class="text-[12px]">Followers</p>
                    </div>
                  </div>
                  <div class="sm:col-span-1">
                    <div class="rounded bg-white text-center p-2">
                      <h6 class="mb-1">45</h6>
                      <p class="text-[12px]">Follows</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <a href="javascript:void(0);" class="btn btn-primary inline-flex items-center justify-center w-full"><i
                    class="ti ti-circle-plus me-2"></i>Create Post</a>
              </div>
              <!-- submenu Item -->
              <div class="border-b border-borderColor pb-2 mb-4">
                <a href="javscript:void(0);"
                  class="bg-light rounded text-dark flex align-center justify-between active font-medium p-2">
                  <span><i class="ti ti-brand-feedly me-2"></i>All Feeds</span>
                  <span
                    class="w-6 h-6 bg-danger rounded-full text-white text-[10px] flex items-center justify-center">56</span>
                </a>
                <a href="javscript:void(0);"
                  class="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"><i
                    class="ti ti-mood-search me-2"></i>Explore</a>
                <a href="javscript:void(0);"
                  class="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"><i
                    class="ti ti-mail-check me-2"></i>Messages</a>
                <a href="javscript:void(0);"
                  class="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"><i
                    class="ti ti-list me-2"></i>Lists</a>
                <a href="javscript:void(0);"
                  class="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"><i
                    class="ti ti-bookmark me-2"></i>Bookmark</a>
                <a href="javscript:void(0);"
                  class="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"><i
                    class="ti ti-coffee me-2"></i>Marketplace</a>
                <a href="javscript:void(0);"
                  class="flex items-center justify-between font-medium text-dark p-2 rounded hover:bg-dark-transparent">
                  <span><i class="ti ti-file-text me-2"></i>Files</span>
                  <span
                    class="w-6 h-6 bg-info rounded-full text-white text-[10px] flex items-center justify-center">14</span>
                </a>
                <a href="javscript:void(0);"
                  class="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"><i
                    class="ti ti-music me-2"></i>Media</a>
                <a href="javscript:void(0);"
                  class="flex items-center font-medium text-dark p-2 rounded hover:bg-dark-transparent"><i
                    class="ti ti-user-share me-2"></i>Profile</a>
              </div>
              <div>

                <div class="mb-4">
                  <h6>Pages You Liked</h6>
                </div>
                <div>
                  <a href="javscript:void(0);"
                    class="font-medium flex items-center justify-between text-dark py-1 mb-2">
                    <span class="inline-flex items-center">
                      <img src="@/assets/img/icons/liked-page-01.svg" class="me-2" alt="Img">Dribble
                    </span>
                    <span
                      class="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary"><i
                        class="ti ti-thumb-down text-[12px]"></i></span>
                  </a>
                  <a href="javscript:void(0);"
                    class="font-medium flex items-center justify-between text-dark py-1 mb-2">
                    <span class="inline-flex items-center">
                      <img src="@/assets/img/icons/liked-page-02.svg" class="me-2" alt="Img">UI/UX Designs
                    </span>
                    <span
                      class="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary"><i
                        class="ti ti-thumb-down text-[12px]"></i></span>
                  </a>
                  <a href="javscript:void(0);" class="font-medium flex items-center justify-between text-dark py-1">
                    <span class="inline-flex items-center">
                      <img src="@/assets/img/icons/liked-page-03.svg" class="me-2" alt="Img">Figma Update
                    </span>
                    <span
                      class="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary"><i
                        class="ti ti-thumb-down text-[12px]"></i></span>
                  </a>
                  <div>
                    <div class="more-menu-3">
                      <a href="javscript:void(0);"
                        class="font-medium flex items-center justify-between text-dark py-1 mb-2">
                        <span class="inline-flex items-center">
                          <img src="@/assets/img/icons/liked-page-04.svg" class="me-2" alt="Img">I Am Techie
                        </span>
                        <span
                          class="btn btn-icon size-7 flex item-center justify-center hover:bg-light active:text-white active:bg-primary"><i
                            class="ti ti-thumb-down text-[12px]"></i></span>
                      </a>
                    </div>
                    <div class="view-all mt-2">
                      <a href="javascript:void(0);" class="viewall-button-3 text-dark font-medium"><span>Show
                          More</span><i class="fa fa-chevron-down text-[10px] ms-2"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Left Sidebar -->

        <!-- Start middle content -->
        <div class="xl:col-span-6">
          <div>
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
              <div class="card-body p-5">
                <form>
                  <div class="mb-3">
                    <label class="form-label text-[16px]">Create Post</label>
                    <div class="relative">
                      <textarea
                        class="bg-white border-borderColor text-gray-900 text-sm rounded-input  block w-full placeholder:text-gray-400"
                        rows="3" placeholder="What's on your mind?"></textarea>
                    </div>
                  </div>
                  <div class="flex items-center justify-between flex-wrap gap-x-3">
                    <div class="flex items-center">
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-photo text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-link text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-paperclip text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-video text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-hash text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-map-pin-heart text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-mood-smile text-[16px]"></i></a>
                    </div>
                    <div class="flex items-center">
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-refresh text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-trash text-[16px]"></i></a>
                      <a href="javascript:void(0);"
                        class="btn btn-icon size-7 text-dark rounded-full hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-world text-[16px]"></i></a>
                      <button type="submit" class="btn btn-primary inline-flex items-center ms-2"><i
                          class="ti ti-circle-plus text-[16px] me-2"></i>Share Post</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
              <div class="card-body p-5">
                <div class="flex items-center mb-4">
                  <h6 class="mb-0">Popular Channels</h6>
                </div>
                <div class="flex flex-wrap gap-3 items-center justify-between">
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-01.svg" alt="channel-01">
                  </a>
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-02.svg" alt="channel-02">
                  </a>
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-03.svg" alt="channel-03">
                  </a>
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-04.svg" alt="channel-04">
                  </a>
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-05.svg" alt="channel-05">
                  </a>
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-06.svg" alt="channel-06">
                  </a>
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-07.svg" alt="channel-07">
                  </a>
                  <a href="javascript:void(0);">
                    <img src="@/assets/img/icons/channel-08.svg" alt="channel-08">
                  </a>
                </div>
              </div>
            </div>
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
              <div class="card-header border-0 pb-0 p-5">
                <div class="flex items-center justify-between border-b border-borderColor flex-wrap gap-3 gap-x-3 pb-4">
                  <div class="flex items-center flex-wrap gap-2">
                    <a href="javascript:void(0);" class="avatar size-[45px] avatar-rounded flex flex-shrink-0 me-2"><img
                        src="@/assets/img/users/user-03.jpg" alt="Img"></a>
                    <div>
                      <h6 class="mb-1"><a href="javascript:void(0);">Richard Smith <i
                            class="ti ti-circle-check-filled text-success"></i></a></h6>
                      <p class="flex items-center">
                        <span class="text-info">@richard442</span>
                        <i class="ti ti-circle-filled text-[5px] mx-2"></i>
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div class="flex items-center flex-wrap gap-3">
                    <p class="mb-0 text-dark">About 1 hr ago</p>
                    <div>
                      <a href="javascript:void(0);" data-dropdown-toggle="world-dropdown">
                        <i class="ti ti-world pe-1 text-dark"></i><i class="ti ti-chevron-down text-dark"></i>
                      </a>
                      <ul id="world-dropdown"
                        class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[150px] shadow-lg">
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Private</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">High</a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown">
                      <a href="javascript:void(0);"
                        class="flex items-center justify-center text-gray-500 rounded-[5px]  hover:text-primary "
                        data-dropdown-toggle="feed-menu" aria-expanded="true">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul id="feed-menu"
                        class="z-10 hidden bg-white  divide-gray-100 rounded-[5px] shadow w-40 dark:bg-gray-700 p-2">
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent "><i
                              class="ti ti-edit me-2"></i>Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-eye me-2"></i>Hide Post</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-report me-2"></i>Report</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-trash-x me-2"></i>Delete</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-5">
                <div class="mb-3">
                  <p class="text-dark font-medium">"Believe in yourself and all that you are. Know that there is
                    something inside you that is greater than any obstacle.
                    <a href="javascript:void(0);" class="text-info link-hover">#MotivationMonday</a>
                    <a href="javascript:void(0);" class="text-info link-hover">#Inspiration</a>
                    🌟"
                  </p>
                </div>
                <div class="mb-2">
                  <img src="@/assets/img/social/social-feed-01.jpg" class="rounded-lg" alt="Img">
                </div>
                <div class="flex items-center justify-between gap-3 mb-3">
                  <a @click="showImg(0)" class="gallery-item relative cursor-pointer">
                    <img src="@/assets/img/social/gallery-01.jpg" class="rounded" alt="img">
                  </a>
                  <a @click="showImg(1)" class="gallery-item cursor-pointer">
                    <img src="@/assets/img/social/gallery-02.jpg" class="rounded" alt="img">
                  </a>
                  <a @click="showImg(2)" class="gallery-item cursor-pointer">
                    <img src="@/assets/img/social/gallery-03.jpg" class="rounded" alt="img">
                  </a>
                  <a @click="showImg(3)" class="gallery-item cursor-pointer">
                    <img src="@/assets/img/social/gallery-04.jpg" class="rounded" alt="img">
                  </a>
                  <a @click="showImg(4)" class="gallery-item cursor-pointer">
                    <img src="@/assets/img/social/gallery-01.jpg" class="rounded" alt="img">
                  </a>
                </div>
                <div class="flex items-center justify-between flex-wrap gap-x-3 mb-4">
                  <div class="flex items-center flex-wrap gap-x-3 gap-2">
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-heart me-2"></i>340K Likes
                    </a>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-message-dots me-2"></i>45 Comments
                    </a>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-share-3 me-2"></i>28 Share
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-heart-filled text-danger"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-share"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-message-star"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-bookmark-filled text-warning"></i></a>
                  </div>
                </div>
                <div class="flex items-start">
                  <a href="javascript:void(0);" class="avatar avatar-rounded me-2 flex-shrink-0"><img
                      src="@/assets/img/users/user-11.jpg" alt="user-11"></a>
                  <input type="text" class="form-control" placeholder="Enter Comments">
                </div>
              </div>
            </div>
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
              <div class="card-header border-0 pb-0 p-5">
                <div class="flex items-center justify-between border-b border-borderColor gap-3 flex-wrap gap-x-3 pb-3">
                  <div class="flex items-center flex-wrap gap-2">
                    <a href="javascript:void(0);" class="avatar avatar-lg flex avatar-rounded flex-shrink-0 me-2"><img
                        src="@/assets/img/users/user-05.jpg" alt="user-05"></a>
                    <div>
                      <h6 class="mb-1"><a href="javascript:void(0);">Jason Heier <i
                            class="ti ti-circle-check-filled text-success"></i></a></h6>
                      <p class="flex items-center">
                        <span class="text-info">@jason118</span>
                        <i class="ti ti-circle-filled text-[5px] mx-2"></i>
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-3 flex-wrap items-center">
                    <p class="mb-0 text-dark">About 1 hr ago</p>
                    <div>
                      <a href="javascript:void(0);" data-dropdown-toggle="world-dropdownone">
                        <i class="ti ti-world pe-1 text-dark"></i><i class="ti ti-chevron-down text-dark"></i>
                      </a>
                      <ul id="world-dropdownone"
                        class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[150px] shadow-lg">
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Private</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">High</a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown">
                      <a href="javascript:void(0);"
                        class="flex items-center justify-center text-gray-500 rounded-[5px]  hover:text-primary "
                        data-dropdown-toggle="feed-menu2" aria-expanded="true">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul id="feed-menu2"
                        class="z-10 hidden bg-white  divide-gray-100 rounded-[5px] shadow w-40 dark:bg-gray-700 p-2">
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent "><i
                              class="ti ti-edit me-2"></i>Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-eye me-2"></i>Hide Post</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-report me-2"></i>Report</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-trash-x me-2"></i>Delete</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-5">
                <div class="mb-3">
                  <p class="text-dark font-medium">
                    Drinking water boosts skin health and beauty. Stay hydrated!
                    <a href="javascript:void(0);" class="text-info link-hover">#HealthTips </a>
                    <a href="javascript:void(0);" class="text-info link-hover"> #Wellness</a>
                    💧
                  </p>
                </div>
                <div class="card shadow-none mb-3">
                  <div class="card-img card-img-hover border border-borderColor overflow-hidden rounded-0">
                    <a href="javascript:void(0);" class="rounded-t "><img src="@/assets/img/social/social-feed-02.jpg"
                        class="rounded-t" alt="social-feed-02"></a>
                  </div>
                  <div class="card-body border border-borderColor rounded-b p-2">
                    <h6 class="mb-1 text-truncate"><a href="javascript:void(0);">Drinking water boosts skin health and
                        beauty. Stay hydrated!💧</a></h6>
                    <a href="javascript:void(0);">Health.com</a>
                  </div>
                </div>
                <div class="flex items-center justify-between flex-wrap gap-x-3">
                  <div class="flex items-center flex-wrap gap-x-3 gap-2">
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-heart me-2"></i>340K Likes
                    </a>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-message-dots me-2"></i>45 Comments
                    </a>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-share-3 me-2"></i>28 Share
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-heart-filled text-danger"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-share"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-message-star"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-bookmark-filled text-warning"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white">
              <div class="card-header border-0 pb-0 p-5">
                <div class="flex items-center justify-between border-b border-borderColor flex-wrap gap-3 gap-x-3 pb-3">
                  <div class="flex items-center flex-wrap gap-2">
                    <span class="avatar avatar-lg avatar-rounded flex-shrink-0 me-2"><img
                        src="@/assets/img/users/user-04.jpg" alt="user-04"></span>
                    <div>
                      <h6 class="mb-1"><a href="javascript:void(0);">Sophie Headrick <i
                            class="ti ti-circle-check-filled text-success"></i></a></h6>
                      <p class="flex items-center">
                        <span class="text-info">@sophie241</span>
                        <i class="ti ti-circle-filled text-[5px] mx-2"></i>
                        United Kingdom
                      </p>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-3 items-center">
                    <p class="mb-0 text-dark">About 1 hr ago</p>
                    <div>
                      <a href="javascript:void(0);" data-dropdown-toggle="world-dropdowntwo">
                        <i class="ti ti-world pe-1 text-dark"></i><i class="ti ti-chevron-down text-dark"></i>
                      </a>
                      <ul id="world-dropdowntwo"
                        class="hidden p-2 z-[1] border border-borderColor rounded bg-white w-[150px] shadow-lg">
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Private</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">High</a>
                        </li>
                      </ul>
                    </div>
                    <div class="dropdown">
                      <a href="javascript:void(0);"
                        class="flex items-center justify-center text-gray-500 rounded-[5px]  hover:text-primary "
                        data-dropdown-toggle="feed-menu3" aria-expanded="true">
                        <i class="ti ti-dots-vertical"></i>
                      </a>
                      <ul id="feed-menu3"
                        class="z-10 hidden bg-white  divide-gray-100 rounded-[5px] shadow w-40 dark:bg-gray-700 p-2">
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent "><i
                              class="ti ti-edit me-2"></i>Edit</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-eye me-2"></i>Hide Post</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-report me-2"></i>Report</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);"
                            class="inline-flex items-center justify-start w-full text-dark py-2.5 px-3.5 rounded hover:text-primary hover:bg-primary-transparent"><i
                              class="ti ti-trash-x me-2"></i>Delete</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body p-5">
                <div class="mb-3">
                  <p class="text-dark font-medium">
                    Excited to announce the launch of our new product! Get yours now and enjoy a special discount.
                    <a href="javascript:void(0);" class="text-info link-hover">#NewRelease </a>
                    <a href="javascript:void(0);" class="text-info link-hover"> #Innovation</a>
                    🎉
                  </p>
                </div>
                <div class="mb-2">
                  <img src="@/assets/img/social/social-feed-03.jpg" class="rounded-lg" alt="social-feed-03">
                </div>
                <div class="flex items-center justify-between flex-wrap gap-x-3 mb-4">
                  <div class="flex items-center flex-wrap gap-x-3 gap-2">
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-heart me-2"></i>340K Likes
                    </a>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-message-dots me-2"></i>45 Comments
                    </a>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900 hover:text-primary">
                      <i class="ti ti-share-3 me-2"></i>28 Share
                    </a>
                  </div>
                  <div class="flex items-center">
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-heart-filled text-danger"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-share"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-message-star"></i></a>
                    <a href="javascript:void(0);"
                      class="flex items-center justify-center text-dark size-7 rounded-full active:text-white active:bg-primary hover:bg-dark-transparent"><i
                        class="ti ti-bookmark-filled text-warning"></i></a>
                  </div>
                </div>
                <div class="flex items-start mb-3">
                  <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                    <img src="@/assets/img/profiles/avatar-02.jpg" alt="avatar-02">
                  </a>
                  <div class="bg-light rounded-lg flex-fill p-3">
                    <div class="flex items-center mb-1">
                      <h6><a href="javascript:void(0);">Frank Hoffman</a></h6>
                      <span class="ms-2">12:45 PM</span>
                    </div>
                    <p class="mb-1">Congratulations on the launch! I've been eagerly waiting for this
                      product, and the special discount makes it even more exciting.
                    </p>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900"><i
                        class="ti ti-share-3 me-2"></i>Reply</a>
                  </div>
                </div>
                <div class="flex items-start mb-3 ms-4 ps-2">
                  <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                    <img src="@/assets/img/profiles/avatar-01.jpg" alt="avatar-01">
                  </a>
                  <div class="bg-light rounded-lg flex-fill p-3">
                    <div class="flex items-center mb-1">
                      <h6><a href="javascript:void(0);">Sophie Headrick</a></h6>
                      <span class="ms-2">12:45 PM</span>
                    </div>
                    <p class="mb-1">
                      Thank you so much for your enthusiasm and support!
                    </p>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900"><i
                        class="ti ti-share-3 me-2"></i>Reply</a>
                  </div>
                </div>
                <div class="flex items-start mb-3">
                  <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                    <img src="@/assets/img/profiles/avatar-04.jpg" alt="avatar-04">
                  </a>
                  <div class="bg-light rounded-lg flex-fill p-3">
                    <div class="flex items-center mb-1">
                      <h6><a href="javascript:void(0);">Samuel Butler</a></h6>
                      <span class="ms-2">12:40 PM</span>
                    </div>
                    <p class="mb-1">
                      So thrilled to see this product finally launched! I've heard
                      amazing things about it and am excited to see how it lives up to the hype.
                    </p>
                    <a href="javascript:void(0);" class="inline-flex items-center text-gray-900"><i
                        class="ti ti-share-3 me-2"></i>Reply</a>
                  </div>
                </div>
                <div>
                  <div class="view-all text-center mb-3">
                    <a href="javascript:void(0);" class="viewall-button text-primary font-medium"><span>View All 200
                        Comments</span></a>
                  </div>
                </div>
                <div class="flex items-start">
                  <span class="avatar avatar-rounded me-2 flex flex-shrink-0"><img src="@/assets/img/users/user-11.jpg"
                      alt="user-11"></span>
                  <input type="text" class="form-control" placeholder="Enter Comments">
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End middle content -->

        <!-- Start Right content -->
        <div class="xl:col-span-3 theiaStickySidebar">
          <!-- Item one -->
          <div class="card card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-body p-5">
              <h6 class="mb-4">Peoples</h6>
              <ul class="flex w-full mb-4 gap-2 text-sm font-medium text-center" id="default-styled-tab1"
                data-tabs-toggle="#default-styled-tab-content3"
                data-tabs-active-classes="text-white bg-primary hover:text-primary border-primary"
                data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary"
                role="tablist">
                <li class="flex-1" role="presentation">
                  <button class="inline-block py-2 btn w-full" id="basic-tab1" data-tabs-target="#pills-home"
                    type="button" role="tab" aria-selected="false">General</button>
                </li>
                <li class="flex-1" role="presentation">
                  <button class="inline-block py-2 btn w-full" id="dashboard-styled-tab1"
                    data-tabs-target="#pills-profile" type="button" role="tab" aria-selected="false">Primary</button>
                </li>
              </ul>
              <div id="default-styled-tab-content3">
                <!-- Item 1 -->
                <div class="hidden " id="pills-home" role="tabpanel">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/profiles/avatar-14.jpg" alt="avatar-14">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Anthony Lewis</a>
                            <i class="ti ti-circle-check-filled text-success ms-1"></i>
                          </h6>
                          <span class="text-[12px] block">United States</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-01.jpg" alt="user-01">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Harvey Smith</a>
                          </h6>
                          <span class="text-[12px] block">Ukrain</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-33.jpg" alt="user-33">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Stephan Peralt</a>
                          </h6>
                          <span class="text-[12px] block">Isreal</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-34.jpg" alt="user-34">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Doglas Martini</a>
                          </h6>
                          <span class="text-[12px] block">Belgium</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-09.jpg" alt="user-09">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Brian Villalobos</a>
                            <i class="ti ti-circle-check-filled text-success ms-1"></i>
                          </h6>
                          <span class="text-[12px] block">United Kingdom</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-02.jpg" alt="user-02">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Linda Ray</a>
                          </h6>
                          <span class="text-[12px] block">Argentina</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                  </div>
                  <div>
                    <a href="javascript:void(0);"
                      class="btn border border-borderColor flex items-center justify-center w-full text-dark">View All
                      <i class="ti ti-arrow-right ms-2"></i></a>
                  </div>
                </div>
                <!-- Item 2 -->
                <div class="hidden " id="pills-profile" role="tabpanel">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/profiles/avatar-11.jpg" alt="avatar-11">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Anthony Lewis</a>
                            <i class="ti ti-circle-check-filled text-success ms-1"></i>
                          </h6>
                          <span class="text-[12px] block">United States</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-12.jpg" alt="user-12">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Harvey Smith</a>
                          </h6>
                          <span class="text-[12px] block">Ukrain</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-13.jpg" alt="user-13">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Stephan Peralt</a>
                          </h6>
                          <span class="text-[12px] block">Isreal</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-14.jpg" alt="user-14">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Doglas Martini</a>
                          </h6>
                          <span class="text-[12px] block">Belgium</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-15.jpg" alt="user-15">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Brian Villalobos</a>
                            <i class="ti ti-circle-check-filled text-success ms-1"></i>
                          </h6>
                          <span class="text-[12px] block">United Kingdom</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center">
                        <a href="javascript:void(0);" class="avatar avatar-rounded flex flex-shrink-0 me-2">
                          <img src="@/assets/img/users/user-16.jpg" alt="user-16">
                        </a>
                        <div>
                          <h6 class="inline-flex items-center font-medium mb-1 text-[14px]">
                            <a href="javascript:void(0);" class="hover:text-primary">Linda Ray</a>
                          </h6>
                          <span class="text-[12px] block">Argentina</span>
                        </div>
                      </div>
                      <a href="javascript:void(0);"
                        class="btn size-7 flex items-center justify-center btn-icon text-gray-900 hover:bg-dark-transparent active:text-white active:bg-primary"><i
                          class="ti ti-user-x text-[12px]"></i></a>
                    </div>
                  </div>
                  <div>
                    <a href="javascript:void(0);"
                      class="btn border border-borderColor w-full text-dark flex items-center justify-center">View All
                      <i class="ti ti-arrow-right ms-2"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Item two -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-body p-5">
              <h6 class="mb-4">Saved Feeds</h6>
              <div class="bg-light-500 rounded p-2 mb-2">
                <div class="flex items-center justify-between mb-1">
                  <a href="javascript:void(0);" class="flex items-center">
                    <span><img src="@/assets/img/icons/feeds-01.svg" class="me-2" alt="feeds-01"></span>
                    <p class="text-[13px] font-medium text-gray-900 hover:text-primary">World Health</p>
                  </a>
                  <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                </div>
                <p class="text-dark font-medium hover:text-primary"><a href="javascript:void(0);">Retail investor party
                    continues even as</a></p>
              </div>
              <div class="bg-light-500 rounded p-2 mb-2">
                <div class="flex items-center justify-between mb-1">
                  <a href="javascript:void(0);" class="flex items-center">
                    <span><img src="@/assets/img/icons/feeds-02.svg" class="me-2" alt="feeds-02"></span>
                    <p class="text-[13px] font-medium text-gray-900 hover:text-primary">T3 Tech</p>
                  </a>
                  <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                </div>
                <p class="text-dark font-medium hover:text-primary"><a href="javascript:void(0);">Ipad Air (2020) vs
                    Samsung Galaxy Tab</a></p>
              </div>
              <div class="bg-light-500 rounded p-2 mb-2">
                <div class="flex items-center justify-between mb-1">
                  <a href="javascript:void(0);" class="flex items-center">
                    <span><img src="@/assets/img/icons/feeds-03.svg" class="me-2" alt="feeds-03"></span>
                    <p class="text-[13px] font-medium text-gray-900 hover:text-primary">Fstoppers</p>
                  </a>
                  <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                </div>
                <p class="text-dark font-medium hover:text-primary"><a href="javascript:void(0);">Beyond capital gains
                    tax! Top 50 stock</a></p>
              </div>
              <div class="bg-light-500 rounded p-2">
                <div class="flex items-center justify-between mb-1">
                  <a href="javascript:void(0);" class="flex items-center">
                    <span><img src="@/assets/img/icons/feeds-04.svg" class="me-2" alt="feeds-04"></span>
                    <p class="text-[13px] font-medium text-gray-900 hover:text-primary">Evernote</p>
                  </a>
                  <a href="javascript:void(0);"><i class="ti ti-bookmark-filled text-warning"></i></a>
                </div>
                <p class="text-dark font-medium hover:text-primary"><a href="javascript:void(0);">Sony Just Destroyed
                    the Competition</a></p>
              </div>
              <div class="mt-3">
                <a href="javascript:void(0);" class="btn btn-outline-light w-full border">View All <i
                    class="ti ti-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
          <!-- Item three -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-body p-5">
              <h6 class="mb-4">Trending Hastags</h6>
              <div class="d-flex items-center flex-wrap gap-1">
                <a href="javascript:void(0);" class="text-info inline-flex hover:text-primary">#HealthTips</a>
                <a href="javascript:void(0);" class="text-info inline-flex hover:text-primary">#Wellness</a>
                <a href="javascript:void(0);" class="text-info inline-flex hover:text-primary">#Motivation</a>
                <a href="javascript:void(0);" class="text-info inline-flex hover:text-primary">#Inspiration </a>
              </div>
            </div>
          </div>
          <!-- Item four -->
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-5">
            <div class="card-body p-5">
              <div class="card-img card-img-hover overflow-hidden mb-4">
                <a href="javascript:void(0);" class="rounded"><img src="@/assets/img/social/social-feed-04.jpg"
                    class="rounded" alt="social-feed-04"></a>
              </div>
              <h6 class="text-center text-[14px]"><a href="javascript:void(0);">Enjoy Unlimited Access on a small price
                  monthly.</a></h6>
              <div class="mt-4">
                <a href="javascript:void(0);"
                  class="btn border border-borderColor flex items-center justify-center w-full text-dark">Upgrade Now <i
                    class="ti ti-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
          <!-- Item five -->
          <div class="flex items-center flex-wrap justify-center template-more-links mb-4">
            <a href="javascript:void(0);" class="inline-flex relative text-gray-900 hover:text-primary">About</a>
            <a href="javascript:void(0);"
              class="inline-flex relative text-gray-900 ml-3 ps-3 hover:text-primary">Privacy</a>
            <a href="javascript:void(0);"
              class="inline-flex relative text-gray-900 ml-3 ps-3 hover:text-primary">Terms</a>
            <a href="javascript:void(0);"
              class="inline-flex relative text-gray-900 ml-3 ps-3 hover:text-primary">Help</a>
          </div>
        </div>
        <!-- End Right content -->
      </div>
    </div>
    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

    <!-- Vue Easy Lightbox -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="fullImages"
      :index="index"
      @hide="handleHide"
    />
  </div>
  <!-- /Page Wrapper -->
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";

export default {
  name: "SocialLinks",
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      showMore: false,
      visible: false,
      index: 0,
      imgs: [
        "gallery-big-01.jpg",
        "gallery-big-02.jpg",
        "gallery-big-03.jpg",
        "gallery-big-04.jpg",
        "gallery-big-01.jpg"
      ],
      links: [
        {
          title: "Dribble",
          Image: "liked-page-01.svg",
        },
        {
          title: "UI/UX Designs",
          Image: "liked-page-02.svg",
        },
        {
          title: "Figma Update",
          Image: "liked-page-03.svg",
        },
        {
          title: "I Am Techie",
          Image: "liked-page-04.svg",
        },
      ],
    };
  },
  computed: {
    visibleItems() {
      return this.links.slice(0, 3);
    },
    hiddenItems() {
      return this.links.slice(3);
    },
    fullImages() {
      return this.imgs.map((img) => this.getImageUrl(img));
    },
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
    },
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
    getImageUrl(imageName) {
      return new URL(`/src/assets/img/social/${imageName}`, import.meta.url).href;
    },
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    }
  },
};
</script>
