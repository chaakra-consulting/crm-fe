<template>
    <layouts-header></layouts-header>
    <layouts-sidebar></layouts-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper relative pt-[50px] ml-[240px]">

        <div class="content p-5 pb-0">

            <!-- Page Header -->
            <div class="mb-7">
                <h4 class="mb-1 text-xl font-bold flex items-center">
                    Cards
                </h4>
                <nav aria-label="breadcrumb">
                    <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
                        <li>
                            <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                            <span><i class="ti ti-chevron-right"></i></span>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="hover:underline text-gray-700">Base UI</a>
                            <span><i class="ti ti-chevron-right"></i></span>
                        </li>
                        <li class="text-dark font-medium" aria-current="page">Cards</li>
                    </ol>
                </nav>
            </div>
            <!-- End Page Header -->

            <!-- Feature Card -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
                <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                    <img src="@/assets/img/media/img-01.jpg" class="card-img-top" alt="...">
                    <div class="card-body p-5">
                        <h5 class="card-title font-semibold mb-2">Card title</h5>
                        <p class="card-text text-muted mb-3">when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <a href="javascript:void(0);" class="btn btn-primary">Read More</a>
                    </div>
                    <div class="card-footer p-5 border-t">
                        <span class="card-text">Last updated 3 mins ago</span>
                    </div>
                </div>
                <div>
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-5 border-b">
                            <div class="card-title text-lg font-bold text-gray-900">Featured</div>
                        </div>
                        <div class="card-body p-5">
                            <h6 class="card-title font-semibold mb-2">Special title treatment</h6>
                            <p class="card-text mb-3">Richard McClintock, a Latin professor at Hampden-Sydney College in
                                Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                                Ipsum passage</p>
                            <a href="javascript:void(0);" class="btn btn-primary">Read More</a>
                        </div>
                    </div>
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-body p-5">
                            <h6 class="card-title font-semibold mb-2">Card title</h6>
                            <p class="card-subtitle mb-3 text-muted">Card subtitle</p>
                            <p class="card-text">There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration many variations of passages of Lorem Ipsum
                                available there are so many ways to solve but the majority have suffered.</p>
                        </div>
                        <div class="card-footer p-5 border-t">
                            <a href="javascript:void(0);" class="card-link text-danger m-1">Buy Now</a>
                            <a href="javascript:void(0);" class="card-link text-success m-1"><u>Review</u></a>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <img src="@/assets/img/media/img-02.jpg" class="card-img-top" alt="media-image-02">
                        <div class="card-body p-5">
                            <p class="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <h6 class="mb-3">Only Card Body:</h6>
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-body p-5">
                            <div class="card-text">
                                <p class="mb-0">It is a long established fact that a reader will be distracted by
                                    the readable content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <img src="@/assets/img/media/img-03.jpg" class="card-img-top" alt="media-image-03">
                        <div class="card-body p-5">
                            <h6 class="card-title font-semibold">Card title</h6>
                            <p class="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush border-t">
                            <li class="list-group-item p-3 border-b">An item</li>
                            <li class="list-group-item p-3 border-b">A second item</li>
                        </ul>
                        <div class="card-body p-5">
                            <a href="javascript:void(0);" class="card-link text-primary me-4">Card link</a>
                            <a href="javascript:void(0);" class="card-link text-secondary inline-block">Another
                                link</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- / Feature Card -->

            <!-- Quote Card -->
            <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
                <div>
                    <div>
                        <h6 class="mb-3">Quote:</h6>
                        <div>
                            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <div class="card-body p-5">
                                    <blockquote class="blockquote mb-0 text-center">
                                        <h6>The greatest glory in living lies not in never falling, but in
                                            rising every time we fall.</h6>
                                        <footer class="blockquote-footer mt-2 fs-14">Someone famous in <cite
                                                title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-12">
                            <h6 class="mb-3">List Group:</h6>
                            <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
                                <div>
                                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item p-3 border-b">An item</li>
                                            <li class="list-group-item p-3 border-b">A second item</li>
                                            <li class="list-group-item p-3 border-b">A third item</li>
                                            <li class="list-group-item p-3 border-b">A fourth item</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                        <div class="card-header p-4 border-b">
                                            Featured
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item p-3 border-b">An item</li>
                                            <li class="list-group-item p-3 border-b">A second item</li>
                                            <li class="list-group-item p-3 border-b">A third item</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item p-3 border-b">An item</li>
                                            <li class="list-group-item p-3 border-b">A second item</li>
                                            <li class="list-group-item p-3 border-b">A third item</li>
                                        </ul>
                                        <div class="card-footer p-3">
                                            Card footer
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h6 class="mb-3">Using Grid Markups:</h6>
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
                        <div>
                            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                                <div class="card-body">
                                    <img src="@/assets/img/media/img-04.jpg" class="card-img mb-3" alt="media-image-04">
                                    <h6 class="card-title font-semibold mb-2">Product A</h6>
                                    <p class="card-text mb-3">With supporting text below as a natural
                                        lead-in to additional content.</p>
                                    <a href="javascript:void(0);" class="btn btn-primary">Purchase</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                                <div class="card-body">
                                    <img src="@/assets/img/media/img-05.jpg" class="card-img mb-3" alt="media-image-05">
                                    <h6 class="card-title font-semibold mb-2">Product B</h6>
                                    <p class="card-text mb-3">With supporting text below as a natural
                                        lead-in to additional content.</p>
                                    <a href="javascript:void(0);" class="btn btn-secondary">Purchase</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                                <div class="card-body">
                                    <img src="@/assets/img/media/img-02.jpg" class="card-img mb-3" alt="media-image-02">
                                    <h6 class="card-title font-semibold mb-2">Product-C</h6>
                                    <p class="card-text mb-3">With supporting text below as a natural
                                        lead-in to additional content.</p>
                                    <a href="javascript:void(0);" class="btn btn-light">Purchase</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Quote Card -->

            <!-- Text Alignment -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
                <div class="col-span-9">
                    <h6 class="mb-3">Text Alignment:</h6>
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
                        <div>
                            <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                                <div class="card-body">
                                    <div class="mb-2">
                                        <span class="w-8 h-8 flex rounded">
                                            <img src="@/assets/img/media/img-01.jpg" class="rounded" alt="media-image-01">
                                        </span>
                                    </div>
                                    <h6 class="card-title font-semibold mb-2">Where it come from</h6>
                                    <p class="card-text mb-3">Contrary to popular belief, Lorem Ipsum is not simply
                                        random text. It has roots in a piece of classical Latin literature.</p>
                                    <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                class="card text-center border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                                <div class="card-body">
                                    <div class="mb-2">
                                        <span class="w-8 h-8 flex mx-auto rounded">
                                            <img src="@/assets/img/media/img-02.jpg" class="rounded" alt="media-image-02">
                                        </span>
                                    </div>
                                    <h6 class="card-title font-semibold mb-2">Why do we use it?</h6>
                                    <p class="card-text mb-3">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum as their default model text.</p>
                                    <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                class="card text-end border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                                <div class="card-body">
                                    <div class="mb-2">
                                        <span class="w-8 h-8 flex ms-auto rounded">
                                            <img src="@/assets/img/media/img-03.jpg" class="rounded" alt="media-image-03">
                                        </span>
                                    </div>
                                    <h6 class="card-title font-semibold mb-2">What is special?</h6>
                                    <p class="card-text mb-3">There are many variations of passages of Lorem Ipsum
                                        available, but the majority have suffered alteration in some form.</p>
                                    <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="row">
                        <h6 class="mb-3">Mixins utilities:</h6>
                        <div class="col-xl-12">
                            <div class="card border border-success rounded-[5px] shadow-xs bg-white mb-6">
                                <div class="card-header bg-transparent border-success p-4 border-b">Header</div>
                                <div class="card-body text-success p-4">
                                    <h6 class="card-title mb-2 font-semibold">Looking For Success?</h6>
                                    <p class="card-text">If you are going to use a passage of Lorem Ipsum, you need
                                        to be sure there isn't anything embarrassing hidden in the middle of text.
                                        All the Lorem Ipsum generators on the Internet tend to repeat predefined
                                        chunks as necessary.</p>
                                </div>
                                <div class="card-footer p-4 bg-transparent border-t border-success">Footer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Text Alignment -->

            <!-- Card Header & Footer -->
            <h6 class="mb-3">Card Header & Footer:</h6>
            <div class="grid grid-cols-1 xl:grid-cols-4 gap-x-6">
                <div>
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-4 border-b">
                            <div class="flex items-center w-full">
                                <img src="@/assets/img/profiles/avatar-01.jpg" alt="img"
                                    class="w-10 h-10 rounded-full me-2">
                                <div>
                                    <div class="fs-15 font-semibold">Adam Smith</div>
                                    <p class="mb-0 text-muted fs-11">28 Years, Male</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);"
                                        class="size-7 rounded bg-light inline-flex items-center justify-center hover:bg-dark-transparent hover:text-dark focus:bg-primary focus:text-white text-gray-900 text-xs"
                                        data-dropdown-placement="bottom-end" data-dropdown-toggle="grid-dropdown12">
                                        <i class="ti ti-dots-vertical"></i>
                                    </a>
                                    <ul id="grid-dropdown12"
                                        class="hidden p-4 border rounded bg-white shadow-lg w-40 z-[1]">
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Week</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Month</a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);"
                                                class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900">Year</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            If you are going to use, you need to be sure there isn't anything embarrassing hidden in
                            the middle of text. All the Lorem Ipsum generators.
                        </div>
                        <div class="card-footer border-t p-4">
                            <div class="flex justify-between">
                                <div class="fs-semibold fs-14">28,Nov 2022</div>
                                <div class="font-semibold text-success">Assistant Professor</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-4 pb-0">
                            <div>
                                <span class="text-warning me-1"><i class="fa-solid fa-star"></i></span>
                                <span class="text-warning me-1"><i class="fa-solid fa-star"></i></span>
                                <span class="text-warning me-1"><i class="fa-solid fa-star"></i></span>
                                <span class="text-warning me-1"><i class="fa-solid fa-star"></i></span>
                                <span class="text-black op-1"><i class="fa-solid fa-star"></i></span>
                                <p class="block text-muted mb-0 fs-12 font-semibold">1 year ago</p>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <div class="font-semibold fs-15 mb-2">Very Great!</div>
                            There are many variations of passages of Lorem Ipsum available, but the majority have
                            suffered alteration in some form, by injected humour
                        </div>
                        <div class="card-footer p-4 border-t">
                            <div class="flex items-center">
                                <span class="w-7 h-7 flex me-2">
                                    <img src="@/assets/img/profiles/avatar-02.jpg" class="rounded-full" alt="img">
                                </span>
                                <div class="font-semibold fs-14">Corey Anderson</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card text-center border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-4 pb-0">
                            <span class="ms-auto shadow-lg fs-17"><i class="fa-solid fa-heart text-danger"></i></span>
                        </div>
                        <div class="card-body p-4">
                            <span class="w-12 h-12 flex mx-auto mb-2">
                                <img src="@/assets/img/profiles/avatar-07.jpg" class="rounded-full" alt="img">
                            </span>
                            <div class="font-semibold fs-16">Sasha Max</div>
                            <p class="mb-4 text-muted fs-11">Web Developer</p>
                            <div class="btn-list flex justify-center">
                                <button class="btn btn-icon btn-facebook bg-blue-800 me-2 text-white btn-wave">
                                    <i class="fa-brands fa-facebook-f"></i>
                                </button>
                                <button class="btn btn-icon btn-twitter me-2 text-white bg-info btn-wave">
                                    <i class="fa-brands fa-twitter"></i>
                                </button>
                                <button class="btn btn-icon btn-instagram bg-danger text-white btn-wave">
                                    <i class="fa-brands fa-instagram"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-primary rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-body p-4">
                            <div class="cals-icon text-[30px]">
                                <i class="fa solid fa-calculator"></i>
                            </div>
                            <p class="mb-0 mt-3 fs-20 font-semibold lh-1">
                                Calculations
                            </p>
                        </div>
                        <div class="card-footer border-t p-4">
                            Lorem Ipsum is therefore always free from repetition, injected humour.
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Card Header & Footer -->
            <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
                <div class="col-span-2">
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                        <div class="card-body">
                            <img src="@/assets/img/media/img-1.jpg" class="card-img rounded mb-3" alt="media-image-1">
                            <h6 class="card-title font-semibold mb-3">Mountains<span
                                    class="px-2 py-0.5 rounded text-[12px] text-white bg-primary float-end fs-10">New</span>
                            </h6>
                            <p class="card-text">With supporting text below as a natural
                                lead-in.</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                        <div class="card-body">
                            <img src="@/assets/img/media/img-2.jpg" class="card-img rounded mb-3" alt="media-image-2">
                            <h6 class="card-title font-semibold mb-3">Hills<span
                                    class="px-2 py-1 rounded text-[12px] text-white bg-secondary float-end fs-10">Hot</span>
                            </h6>
                            <p class="card-text">With supporting text below as a natural
                                lead-in.</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-2">
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6 p-4">
                        <div class="card-body">
                            <img src="@/assets/img/media/img-3.jpg" class="card-img rounded mb-3" alt="media-image-3">
                            <h6 class="card-title font-semibold mb-3">Nature<span
                                    class="px-2 py-0.5 rounded text-[12px] text-gray-900 bg-light float-end fs-10">Offer</span>
                            </h6>
                            <p class="card-text">With supporting text below as a natural
                                lead-in.</p>
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="card text-center border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-4 border-b">
                            <div class="card-title">Featured</div>
                        </div>
                        <div class="card-body p-4">
                            <h6 class="card-title font-semibold mb-2">Breaking News !</h6>
                            <p class="card-text mb-4">With supporting text below as a natural lead-in to
                                additional content.</p>
                            <a href="javascript:void(0);" class="btn btn-primary mt-2">Read More</a>
                            <a href="javascript:void(0);" class="btn btn-outline-secondary mt-2">Close</a>
                        </div>
                        <div class="card-footer text-muted p-4 border-t">
                            11.32pm
                        </div>
                    </div>
                </div>
                <div class="col-span-3">
                    <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-4 border-b">
                            <div class="flex w-full">
                                <div class="me-4">
                                    <span class="w-10 h-10 flex">
                                        <img src="@/assets/img/profiles/avatar-03.jpg" class="rounded-full"
                                            alt="avatar-03">
                                    </span>
                                </div>
                                <div class="flex items-center justify-between w-full flex-wrap">
                                    <div class="me-3">
                                        <p class="text-muted mb-0">Posts</p>
                                        <p class="font-semibold fs-16 mb-0">25</p>
                                    </div>
                                    <div class="me-3">
                                        <p class="text-muted mb-0">Followers</p>
                                        <p class="font-semibold fs-16 mb-0">1253</p>
                                    </div>
                                    <div class="me-3">
                                        <p class="text-muted mb-0">Following</p>
                                        <p class="font-semibold fs-16 mb-0">367</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body p-4">
                            <div class="font-semibold fs-16">Angelina Caprio</div>
                            <div class="text-muted fs-11 mb-4">Angular Developer</div>
                            <p class="fs-14 font-semibold mb-1">About:</p>
                            <p class="mb-0 card-text">Finibus Bonorum et Malorum" by Cicero are also reproduced in
                                their exact original form, accompanied by English versions </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Using Utilities -->
            <div>
                <h6 class="mb-3">Using Utilities:</h6>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
                    <div>
                        <div class="card w-[75%] border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                            <div class="card-header p-4 border-b">
                                <div class="card-title">Using Width 75%</div>
                            </div>
                            <div class="card-body p-4">
                                <div class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum omnis
                                    excepturi consequatur molestiae
                                </div>
                            </div>
                            <div class="card-footer p-4 border-t">
                                <a href="javascript:void(0);" class="btn btn-primary d-grid">Button</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card w-[50%] border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                            <div class="card-header p-4 border-b">
                                <div class="card-title">Using Width 50%</div>
                            </div>
                            <div class="card-body p-4">
                                <div class="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>
                            </div>
                            <div class="card-footer border-t p-4">
                                <a href="javascript:void(0);" class="btn btn-primary d-grid">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Using Utilities -->

            <div>
                <h6 class="mb-3">Navigation:</h6>
                <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
                    <div>
                        <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6 text-center">
                            <div class="card-header border-b p-4">
                                <ul class="nav flex items-center nav-tabs card-header-tabs ms-1">
                                    <li class="nav-item">
                                        <a class="nav-link btn border active" aria-current="true"
                                            href="javascript:void(0);">Active</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link btn" href="javascript:void(0);">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link btn disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body p-4">
                                <h6 class="card-title font-semibold">Special title treatment</h6>
                                <p class="card-text mb-3">With supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6 text-center">
                            <div class="card-header border-b p-4">
                                <ul class="nav flex items-center nav-pills card-header-pills ms-1">
                                    <li class="nav-item">
                                        <a class="nav-link btn btn-primary active" href="javascript:void(0);">Active</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link btn" href="javascript:void(0);">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link btn disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body p-4">
                                <h6 class="card-title font-semibold">Special title treatment</h6>
                                <p class="card-text">With supporting text below as a natural lead-in to
                                    additional content.</p>
                                <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Image Caps -->
            <h6 class="mb-3">Image Caps:</h6>
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <img src="@/assets/img/media/img-01.jpg" class="card-img-top" alt="media-image-01">
                        <div class="card-body p-4">
                            <h6 class="card-title mb-2 font-semibold">Image caps are widely used in Blog's</h6>
                            <p class="card-text mb-3 text-muted">But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was born and I will give you a
                                complete account of the system, and expound the actual teachings.</p>
                            <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-body p-4">
                            <h6 class="card-title mb-2 font-semibold">Image caps are widely used in Blog's</h6>
                            <p class="card-text mb-3 text-muted">But I must explain to you how all this mistaken
                                idea of denouncing pleasure and praising pain was born and I will give you a
                                complete account of the system, and expound.</p>
                            <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                        </div>
                        <img src="@/assets/img/media/img-02.jpg" class="card-img-bottom" alt="media-image-02">
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-body p-4">
                            <h6 class="card-title mb-2 font-semibold mb-1">Image caps are widely used in Blog's</h6>
                            <p class="card-text mb-1 text-muted">This is a wider card with supporting text below as
                                a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <img src="@/assets/img/media/img-2.jpg" class="card-img rounded-0" alt="media-image-2">
                        <div class="card-body p-4">
                            <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-4 border-b">
                            <div class="card-title">Image caps are widely used in Blog's</div>
                        </div>
                        <div class="card-body p-4">
                            <p class="card-text mb-1 text-muted">This is a wider card with supporting text below as
                                a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <img src="@/assets/img/media/img-04.jpg" class="card-img rounded-0" alt="media-image-04">
                        <div class="card-footer p-4">
                            <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <img src="@/assets/img/media/img-05.jpg" class="card-img-top" alt="media-image-05">
                        <div class="card-header p-4 border-b">
                            <div class="card-title">Image caps are widely used in Blog's</div>
                        </div>
                        <div class="card-body p-4">
                            <p class="card-text mb-1 text-muted">This is a wider card with supporting text below as
                                a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer p-4 border-t">
                            <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="card-header p-4 border-b">
                            <div class="card-title">Image caps are widely used in Blog's</div>
                        </div>
                        <div class="card-body p-4">
                            <p class="card-text mb-1 text-muted">This is a wider card with supporting text below as
                                a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div class="card-footer border-t p-4">
                            <p class="card-text mb-0"><small>Last updated 3 mins ago</small></p>
                        </div>
                        <img src="@/assets/img/media/img-1.jpg" class="card-img-bottom" alt="media-image-1">
                    </div>
                </div>
            </div>
            <!-- /Image Caps -->

            <!-- Image Overlays -->
            <h6 class="mb-3">Image Overlays:</h6>
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
                <div>
                    <div class="card overlay-card border-borderColor rounded-[5px] shadow-xs bg-white mb-6 relative">
                        <img src="@/assets/img/media/img-2.jpg" class="card-img" alt="media-image-2">
                        <div
                            class="card-img-overlay flex flex-col p-0 absolute top-0 right-0 bottom-0 left-0 text-white">
                            <div class="card-header p-4 border-b">
                                <div class="text-white">
                                    Image Overlays Are Awesome!
                                </div>
                            </div>
                            <div class="card-body text-white p-4">
                                <div class="card-text mb-2">There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even.</div>
                                <div class="card-text">Last updated 3 mins ago</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card overlay-card border-borderColor rounded-[5px] shadow-xs bg-white mb-6 relative">
                        <img src="@/assets/img/media/img-3.jpg" class="card-img" alt="media-image-3">
                        <div
                            class="card-img-overlay flex flex-col justify-between p-0 absolute top-0 right-0 bottom-0 left-0 text-white">
                            <div class="card-body text-white p-4">
                                <div class="card-text text-white">
                                    Image Overlays Are Awesome!
                                </div>
                                <div class="card-text mb-2">There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even.</div>
                                <div class="card-text">Last updated 3 mins ago</div>
                            </div>
                            <div class="card-footer p-4 border-t text-white">Last updated 3 mins ago</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card overlay-card border-borderColor rounded-[5px] shadow-xs bg-white mb-6 relative">
                        <img src="@/assets/img/media/img-4.jpg" class="card-img rounded w-full" alt="media-image-4">
                        <div
                            class="card-img-overlay flex flex-col justify-between p-0 absolute top-0 right-0 bottom-0 left-0 text-white">
                            <div class="card-header p-4 border-b">
                                <div class=" text-white">
                                    Image Overlays Are Awesome!
                                </div>
                            </div>
                            <div class="card-body text-white p-4">
                                <div class="card-text">There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some form, by injected
                                    humour, or randomised words which don't look even.</div>
                            </div>
                            <div class="card-footer border-t p-4 text-white">Last updated 3 mins ago</div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Image Overlays -->

            <!-- Horizontal Cards -->
            <h6 class="mb-3">Horizontal Cards:</h6>
            <div class="grid grid-cols-1 xl:grid-cols-3 gap-x-6">
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="grid grid-cols-1 xl:grid-cols-12">
                            <div class="col-span-4">
                                <img src="@/assets/img/media/img-05.jpg"
                                    class="img-fluid rounded-start object-cover h-full w-full" alt="media-image-05">
                            </div>
                            <div class="col-span-8">
                                <div class="card-header p-4 border-b">
                                    <div class="card-title">Horizontal Cards</div>
                                </div>
                                <div class="card-body p-4">
                                    <h6 class="card-title font-semibold">Horizontal cards are awesome!</h6>
                                    <p class="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                </div>
                                <div class="card-footer p-4 border-t">
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="grid grid-cols-1 xl:grid-cols-12">
                            <div class="col-span-8">
                                <div class="card-header border-b p-4">
                                    <div class="card-title">Horizontal Cards</div>
                                </div>
                                <div class="card-body p-4">
                                    <h6 class="card-title font-semibold">Horizontal cards are awesome!</h6>
                                    <p class="card-text mb-3">This is a wider card with suppo rting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="col-span-4">
                                <img src="@/assets/img/media/img-01.jpg"
                                    class="img-fluid rounded-end object-cover h-full w-full" alt="media-image-01">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <div class="grid grid-cols-1 xl:grid-cols-12">
                            <div class="col-span-8">
                                <div class="card-body p-4">
                                    <h6 class="card-title font-semibold mb-2">Horizontal Cards</h6>
                                    <div class="card-title mb-3">Horizontal cards are awesome!</div>
                                    <p class="card-text">This is a wider card with supporting text below as a
                                        natural lead-in to additional content. This content is a little bit longer.
                                    </p>
                                </div>
                                <div class="card-footer p-4 border-t">
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                            <div class="col-span-4">
                                <img src="@/assets/img/media/img-02.jpg"
                                    class="img-fluid rounded-end object-cover h-full w-full" alt="media-image-02">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Horizontal Cards -->

            <!-- Background Colored Cards -->
            <h6 class="mb-3">Background Colored Cards:</h6>
            <div class="grid grid-cols-1 xl:grid-cols-4 gap-x-6">
                <div class="col-xl-3">
                    <div class="card bg-primary rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-02.jpg" class="rounded-full"
                                            alt="avatar-02">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 font-semibold text-white">Adam Smith</div>
                                    <p class="mb-0 text-white opacity-70 fs-12">Finished by today</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-white"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card bg-secondary rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded-full"
                                            alt="avatar-01">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 text-white font-semibold">Elisha Corner</div>
                                    <p class="mb-0 text-white opacity-70 fs-12">Completed 24 days back</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-white"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card bg-warning rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-03.jpg" class="rounded-full"
                                            alt="avatar-03">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 text-white font-semibold">Sarah Alina</div>
                                    <p class="mb-0 text-white opacity-70 fs-12">Completed today</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-white"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card bg-info rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-07.jpg" class="rounded-full"
                                            alt="avatar-07">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 text-white font-semibold">Monica Karen</div>
                                    <p class="mb-0 text-white opacity-70 fs-12">Pending from 4 days</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-white"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card bg-success rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-11.jpg" class="rounded-full"
                                            alt="avatar-11">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 text-white font-semibold">Samantha sid</div>
                                    <p class="mb-0 text-white opacity-70 fs-12">In leave for 1 month</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-white"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card bg-danger rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-04.jpg" class="rounded-full"
                                            alt="avatar-04">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 text-white font-semibold">Sebastien steyn</div>
                                    <p class="mb-0 text-white opacity-70 fs-12">Completed by Tomorrow</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-white"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card bg-light border rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-05.jpg" class="rounded-full"
                                            alt="avatar-05">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 text-gray-900 font-semibold">Jacob Smith</div>
                                    <p class="mb-0 text-muted op-7 fs-12">Finished by 24,Nov</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-default"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3">
                    <div class="card bg-dark rounded p-4 mb-6">
                        <div class="card-body">
                            <div class="flex items-center w-full">
                                <div class="me-2">
                                    <span class="w-10 h-10 flex rounded-full">
                                        <img src="@/assets/img/profiles/avatar-06.jpg" class="rounded-full"
                                            alt="avatar-06">
                                    </span>
                                </div>
                                <div>
                                    <div class="fs-15 text-white font-semibold">Pope Adam</div>
                                    <p class="mb-0 op-7 fs-12 text-white">Completed on 24,may</p>
                                </div>
                                <div class="ms-auto">
                                    <a href="javascript:void(0);" class="text-white"><i
                                            class="fa-solid fa-ellipsis-vertical"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Background Colored Cards -->

            <!-- Colored Border Cards -->
            <h6 class="mb-3">Colored Border Cards:</h6>
            <div class="grid grid-cols-1 xl:grid-cols-4 gap-x-6">
                <div>
                    <div class="card border border-primary rounded bg-white p-4 mb-6">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">Home Page Design
                            </p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs text-primary font-medium me-2 px-2.5 py-0.5 rounded bg-primary-transparent">Framework</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded bg-secondary-transparent">Angular</span>
                                <span
                                    class="text-xs text-info font-medium me-2 px-2.5 py-0.5 rounded bg-info-transparent">Php</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="avatar-25">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="avatar-26">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="avatar-27">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-secondary rounded p-4 mb-6 bg-white">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">Landing Page Design</p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-danger bg-danger-transparent">Laravel</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-info bg-info-transparent">Codeignitor</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-success bg-success-transparent">Php</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="profile">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-warning rounded p-4 mb-6 bg-white">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">Update New Project</p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-warning bg-warning-transparent">Html</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-secondary bg-secondary-transparent">Bootstrap</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-info bg-info-transparent">React</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="profile">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-info rounded p-4 mb-6 bg-white">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">New Project Discussion</p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-info bg-info-transparent">React</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-primary bg-primary-transparent">Typescript</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="profile">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-danger rounded p-4 mb-6 bg-white">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">Recent Projects Testing</p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-primary bg-primary-transparent">Ui</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-secondary bg-secondary-transparent">Angular</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-info bg-info-transparent">Java</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="profile">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-success rounded p-4 mb-6 bg-white">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">About Us Page redesign</p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-danger bg-danger-transparent">Html</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-warning bg-warning-transparent">Symphony</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-success bg-success-transparent">Php</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="profile">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-light rounded p-4 mb-6 bg-white">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">New Employees</p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-warning bg-warning-transparent">Html</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-info bg-info-transparent">Cake
                                    Php</span>
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-success bg-success-transparent">React</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="profile">
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="card border border-dark rounded p-4 mb-6 bg-white">
                        <div class="card-body">
                            <p class="fs-14 font-semibold mb-2 lh-1">Terminated Employees</p>
                            <div class="flex flex-wrap mb-4">
                                <span
                                    class="text-xs font-medium me-2 px-2.5 py-0.5 rounded text-primary bg-primary-transparent">Angular</span>
                            </div>
                            <div class="flex -space-x-3 rtl:space-x-reverse">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-25.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-26.jpg" alt="profile">
                                <img class="w-6 h-6 border-2 border-white rounded-full dark:border-gray-800"
                                    src="@/assets/img/profiles/avatar-27.jpg" alt="profile">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Colored Border Cards -->

            <!-- Card Groups With Footer -->
            <h6 class="mb-3">Card Groups With Footer:</h6>
            <div>
                <div>
                    <div class="card-group md:flex ">
                        <div class="card border rounded mb-6 bg-white">
                            <img src="@/assets/img/media/img-01.jpg" class="card-img-top" alt="media-image-01">
                            <div class="card-body p-4">
                                <h6 class="card-title mb-2 font-semibold">Delecious food is a blessing!</h6>
                                <p class="card-text">This is a wider card with supporting text below as
                                    a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                            </div>
                            <div class="card-footer p-4 border-t">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div class="card rounded border-t mb-6 border-b bg-white">
                            <img src="@/assets/img/media/img-02.jpg" class="card-img-top" alt="media-image-02">
                            <div class="card-body p-4">
                                <h6 class="card-title mb-2 font-semibold">Is office the best place to earn knowledge?
                                </h6>
                                <p class="card-text">This card has supporting text below as a natural
                                    lead-in to additional content.</p>
                            </div>
                            <div class="card-footer border-t p-4">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                        <div class="card rounded bg-white mb-6 border">
                            <img src="@/assets/img/media/img-03.jpg" class="card-img-top" alt="media-image-03">
                            <div class="card-body p-4">
                                <h6 class="card-title mb-2 font-semibold">Writing is an art.</h6>
                                <p class="card-text">This is a wider card with supporting text below as
                                    a
                                    natural lead-in to additional content. This card has even longer
                                    content
                                    than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer border-t p-4">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Card Groups With Footer -->

            <!-- Cards With Link -->
            <h6 class="mb-3">Cards With Link:</h6>
            <div class="grid grid-cols-1 xxl:grid-cols-12 gap-x-6">
                <div class="col-span-3">
                    <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                        <a href="javascript:void(0);" class="card-anchor"></a>
                        <img src="@/assets/img/media/img-1.jpg" class="card-img-top w-full" alt="media-image-1">
                        <div class="card-body p-4">
                            <h6 class="card-title font-semibold mb-0">Forests are Awesome.</h6>
                        </div>
                    </div>
                </div>
                <div class="col-span-6 col-xl-6">
                    <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
                        <div class="col-span-12 col-xl-12">
                            <div class="card bg-primary border-borderColor rounded-[5px] shadow-xs mb-6">
                                <a href="javascript:void(0);" class="card-anchor"></a>
                                <div class="card-body p-4">
                                    <blockquote class="blockquote mb-0 text-center">
                                        <h6 class="text-white">The best and most beautiful things in the world
                                            cannot be seen or even touched — they must be felt with the heart..</h6>
                                        <footer class="blockquote-footer mt-3 fs-14 text-white opacity-70">Someone
                                            famous as <cite title="Source Title">-Helen Keller</cite></footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-5 col-xl-12">
                            <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
                                <a href="javascript:void(0);" class="card-anchor"></a>
                                <div class="card-body p-4">
                                    <div class="flex items-center">
                                        <div class="me-3">
                                            <span class="w-10 h-10 flex">
                                                <img src="@/assets/img/profiles/avatar-02.jpg" class="rounded"
                                                    alt="avatar-02">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="card-text mb-0 fs-14 font-semibold">Atharva Simon.</p>
                                            <div class="card-title text-muted fs-12 mb-0">Correspondent Professor
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card border border-info rounded-[5px] shadow-xs bg-white mb-6">
                                <a href="javascript:void(0);" class="card-anchor"></a>
                                <div class="card-body p-4">
                                    <div class="flex items-center">
                                        <div class="me-3">
                                            <span class="w-12 flex h-12">
                                                <img src="@/assets/img/profiles/avatar-01.jpg" class="rounded"
                                                    alt="avatar-01">
                                            </span>
                                        </div>
                                        <div>
                                            <p class="card-text text-info mb-1 fs-14 font-semibold">Alicia Keys.</p>
                                            <div class="card-title fs-12 mb-1">Department Of Commerce</div>
                                            <div class="card-title text-muted fs-11 mb-0">24 Years, Female</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-7 col-xl-12">
                            <div class="card border rounded-[5px] shadow-xs bg-white mb-6">
                                <a href="javascript:void(0);" class="card-anchor"></a>
                                <div class="grid grid-cols-1 md:grid-cols-12">
                                    <div class="col-span-8">
                                        <div class="card-body p-4">
                                            <h6 class="card-title mb-2 font-semibold">Fox is Beautiful ?</h6>
                                            <p class="card-text mb-0">This is a wild animal with supporting tactics
                                                and are very efficient at kill,they are very Dangerous.</p>
                                            <p class="mb-0 card-text">
                                                Fox lives mainly in forests and are well known for their hunting
                                                skills.
                                            </p>
                                        </div>
                                        <div class="card-footer p-4 border-t">
                                            <p class="card-text"><small class="text-muted">Last updated 3 mins
                                                    ago</small></p>
                                        </div>
                                    </div>
                                    <div class="col-span-4">
                                        <img src="@/assets/img/media/img-5.jpg"
                                            class="img-fluid rounded-end object-cover h-full" alt="media-image-5">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-3 col-xl-6">
                    <div class="card border rounded-[5px] shadow-xs bg-white mb-6">
                        <a href="javascript:void(0);" class="card-anchor"></a>
                        <img src="@/assets/img/media/img-4.jpg" class="card-img-top w-full" alt="media-image-4">
                        <div class="card-body p-4">
                            <h6 class="card-title font-semibold">Most tropical areas are suitable</h6>
                            <p class="card-text"> If you are going to use a passage of Lorem Ipsum, you need to be
                                sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Cards With Link -->

            <!-- Grid Cards -->
            <h6 class="mb-3">Grid Cards:</h6>
            <div class="grid grid-cols-1 xxl:grid-cols-12 gap-x-6">
                <div class="col-span-12">
                    <div class="grid grid-cols-1 xl:grid-cols-4 gap-x-6">
                        <div class="col">
                            <div class="card border rounded-[5px] shadow-xs bg-white mb-6">
                                <img src="@/assets/img/media/img-01.jpg" class="card-img-top" alt="media-image-01">
                                <div class="card-body p-4">
                                    <h6 class="card-title font-semibold">Morphology of a typical fruit.</h6>
                                    <p class="card-text"> If you are going to use a passage of Lorem Ipsum, you need
                                        to be sure there isn't anything embarrassing hidden in the middle of text.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border rounded-[5px] shadow-xs bg-white mb-6">
                                <img src="@/assets/img/media/img-02.jpg" class="card-img-top" alt="media-image-02">
                                <div class="card-body p-4">
                                    <h6 class="card-title font-semibold">Research improves ability & agility !</h6>
                                    <p class="card-text"> If you are going to use a passage of Lorem Ipsum, you need
                                        to be sure there isn't anything embarrassing hidden in the middle of text.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border rounded-[5px] shadow-xs bg-white mb-6">
                                <img src="@/assets/img/media/img-03.jpg" class="card-img-top" alt="media-image-03">
                                <div class="card-body p-4">
                                    <h6 class="card-title font-semibold">Most tropical areas are suitable</h6>
                                    <p class="card-text"> If you are going to use a passage of Lorem Ipsum, you need
                                        to be sure there isn't anything embarrassing hidden in the middle of text.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border rounded-[5px] shadow-xs bg-white mb-6">
                                <img src="@/assets/img/media/img-04.jpg" class="card-img-top" alt="media-image-04">
                                <div class="card-body p-4">
                                    <h6 class="card-title font-semibold">Are They seasonal fruits ?</h6>
                                    <p class="card-text"> If you are going to use a passage of Lorem Ipsum, you need
                                        to be sure there isn't anything embarrassing hidden in the middle of text.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Grid Cards -->

        </div>

        <!-- Start Footer -->
        <layouts-footer></layouts-footer>
        <!-- End Footer -->

    </div>
    <!-- /Page Wrapper -->
</template>
<script>
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';

export default {
  name: 'UiAccordion',
  setup() {
    onMounted(() => {
      initFlowbite();
    });
  }
};
</script>
