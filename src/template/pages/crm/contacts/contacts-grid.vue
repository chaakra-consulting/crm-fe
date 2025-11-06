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
                        Contacts
                        <span
                            class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
                    </h4>
                    <nav aria-label="breadcrumb">
                        <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
                            <li>
                                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                                <span><i class="ti ti-chevron-right"></i></span>
                            </li>
                            <li class="text-dark font-medium" aria-current="page">Contacts</li>
                        </ol>
                    </nav>
                </div>
                <div class="flex flex-wrap items-center gap-2">
                    <!-- Dropdown -->
                    <div>
                        <a href="javascript:void(0);"
                            class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
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
                    </div>
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

            <div class="flex items-center justify-between flex-wrap gap-3 mb-4">
                <div class="flex flex-wrap items-center gap-y-3">
                    <!-- Search Input with Icon -->
                    <div class="relative me-3">
                        <span
                            class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                            <i class="ti ti-search"></i>
                        </span>
                        <input type="text" placeholder="Search"
                            class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
                    </div>
                    <div class="relative">
                        <button
                            class="border border-borderColor shadow rounded p-2 bg-white inline-flex items-center focus:bg-primary focus:border-primary focus:text-white text-gray-900"
                            data-dropdown-toggle="filter-dropdown">
                            <i class="ti ti-filter me-1"></i>Filter<i class="ti ti-chevron-down ml-1"></i>
                        </button>
                        <div id="filter-dropdown"
                            class="hidden border z-[1] border-borderColor rounded bg-white shadow-lg min-w-[320px] left-0">
                            <div
                                class="filter-header flex items-center justify-between border-b border-borderColor p-3">
                                <h6 class="mb-0"><i class="ti ti-filter me-1"></i>Filter</h6>
                                <button data-dropdown-hide="filter-dropdown" @click="closeFilterDropdown"
                                    class="text-dark filter-close w-6 h-6 border border-borderColor rounded-full focus:outline-none focus:ring-0"><i
                                        class="ti ti-x"></i></button>
                            </div>
                            <div id="accordionExample" data-accordion="collapse" class="p-4">
                                <div class="mb-4">
                                    <h2 id="accordion-heading-1">
                                        <button type="button"
                                            class="flex items-center justify-between w-full text-dark text-[14px] bg-transparent mb-3"
                                            data-accordion-target="#accordion-body-1" aria-expanded="true"
                                            aria-controls="accordion-body-1">
                                            <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Name</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-body-1"
                                        class="hidden p-4 bg-light  border border-borderColor rounded"
                                        aria-labelledby="accordion-heading-1" data-accordion-body>
                                        <div class="relative mb-4">
                                            <span
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                                                <i class="ti ti-search"></i>
                                            </span>
                                            <input type="text" placeholder="Search"
                                                class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
                                        </div>

                                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/users/user-06.jpg" alt="Elizabeth"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>Elizabeth Morgan</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/users/user-40.jpg" alt="Katherine"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>Katherine Brooks</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/users/user-05.jpg" alt="Katherine"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>Sophia Lopez</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/users/user-10.jpg" alt="Katherine"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>John Michael</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/users/user-15.jpg" alt="Katherine"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>Natalie Brooks</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/users/user-01.jpg" alt="Katherine"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>William Turner</span>
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
                                <div class="mb-4">
                                    <h2 id="accordion-heading-2">
                                        <button type="button"
                                            class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                                            data-accordion-target="#accordion-body-2" aria-expanded="true"
                                            aria-controls="accordion-body-2">
                                            <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Tags</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-body-2"
                                        class="hidden p-4 bg-light  border border-borderColor rounded"
                                        aria-labelledby="accordion-heading-2" data-accordion-body>
                                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Collab
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Promotion
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    VIP
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <h2 id="accordion-heading-3">
                                        <button type="button"
                                            class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                                            data-accordion-target="#accordion-body-3" aria-expanded="true"
                                            aria-controls="accordion-body-3">
                                            <span class="text-dark"><i class="ti ti-chevron-right me-2"></i>Owner</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-body-3"
                                        class="hidden p-4 bg-light  border border-borderColor rounded"
                                        aria-labelledby="accordion-heading-3" data-accordion-body>
                                        <div class="relative mb-4">
                                            <span
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                                                <i class="ti ti-search"></i>
                                            </span>
                                            <input type="text" placeholder="Search"
                                                class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
                                        </div>
                                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Hendry Milner
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Guilory Berggren
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Jami Carlile
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Theresa Nelson
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Smith Cooper
                                                </label>
                                            </li>
                                        </ul>
                                        <!-- Load More -->
                                        <div class="mt-4">
                                            <button class="text-primary hover:underline">Load More</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <h2 id="accordion-heading-4">
                                        <button type="button"
                                            class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                                            data-accordion-target="#accordion-body-4" aria-expanded="true"
                                            aria-controls="accordion-body-4">
                                            <span class="text-dark"><i
                                                    class="ti ti-chevron-right me-2"></i>Location</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-body-4"
                                        class="hidden p-4 bg-light  border border-borderColor rounded"
                                        aria-labelledby="accordion-heading-4" data-accordion-body>
                                        <div class="relative mb-4">
                                            <span
                                                class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                                                <i class="ti ti-search"></i>
                                            </span>
                                            <input type="text" placeholder="Search"
                                                class="pl-9 pr-4 py-1.5 border border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
                                        </div>
                                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/flags/us.svg" alt="Elizabeth"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>USA</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/flags/ae.svg" alt="Elizabeth"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>UAE</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/flags/de.svg" alt="Elizabeth"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>Germany</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="flex items-center space-x-2">
                                                        <img src="@/assets/img/flags/fr.svg" alt="Elizabeth"
                                                            class="h-6 w-6 rounded-full">
                                                        <span>France</span>
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
                                <div class="mb-4">
                                    <h2 id="accordion-heading-5">
                                        <button type="button"
                                            class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                                            data-accordion-target="#accordion-body-5" aria-expanded="true"
                                            aria-controls="accordion-body-5">
                                            <span class="text-dark"><i
                                                    class="ti ti-chevron-right me-2"></i>Rating</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-body-5"
                                        class="hidden p-4 bg-light  border border-borderColor rounded"
                                        aria-labelledby="accordion-heading-5" data-accordion-body>
                                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="rating">
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <span class="ms-1">5.0</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="rating">
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <span class="ms-1">4.0</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="rating">
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <span class="ms-1">3.0</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="rating">
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <span class="ms-1">2.0</span>
                                                    </span>
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0">
                                                    <span class="rating">
                                                        <i class="ti ti-star-filled text-warning"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <i class="ti ti-star-filled text-default"></i>
                                                        <span class="ms-1">1.0</span>
                                                    </span>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <h2 id="accordion-heading-6">
                                        <button type="button"
                                            class="flex items-center text-dark justify-between w-full text-[14px] bg-transparent mb-3"
                                            data-accordion-target="#accordion-body-6" aria-expanded="true"
                                            aria-controls="accordion-body-6">
                                            <span class="text-dark"><i
                                                    class="ti ti-chevron-right me-2"></i>Status</span>
                                        </button>
                                    </h2>
                                    <div id="accordion-body-6"
                                        class="hidden p-4 bg-light  border border-borderColor rounded"
                                        aria-labelledby="accordion-heading-6" data-accordion-body>
                                        <ul class="space-y-3 max-h-64 overflow-y-auto">
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Active
                                                </label>
                                            </li>
                                            <li>
                                                <label class="flex items-center space-x-2 text-gray-700 cursor-pointer">
                                                    <input type="checkbox"
                                                        class="size-4 bg-white border border-borderColor rounded text-primary focus:ring-0 me-2">
                                                    Inactive
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <a href="javascript:void(0);"
                                        class="btn border border-borderColor text-center w-full">Reset</a>
                                    <router-link to="/crm/contacts-list"
                                        class="btn btn-primary w-full">Filter</router-link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="flex items-center flex-wrap gap-3">
                    <div class="flex items-center border border-borderColor shadow bg-white rounded p-1 icon-list">
                        <router-link to="/crm/contacts-list"
                            class="w-7 h-7 flex items-center justify-center rounded text-default me-1"><i
                                class="ti ti-list-tree"></i></router-link>
                        <router-link to="/crm/contacts-grid"
                            class="w-7 h-7 flex items-center justify-center rounded text-white bg-teal"><i
                                class="ti ti-layout-grid"></i></router-link>
                    </div>
                    <!-- Add New Button -->
                    <a href="javascript:void(0);"
                        class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-secondary text-white rounded-md transition"
                        data-drawer-target="offcanvas_add" data-drawer-show="offcanvas_add"
                        aria-controls="offcanvas_add" data-drawer-placement="right">
                        <i class="ti ti-square-rounded-plus-filled"></i>
                        Add Contacts
                    </a>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4">
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-19.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Darlee
                                            Robertson</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Facility Manager</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[0] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(0, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 0 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> robertson@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> 1234567890
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> Germany
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">VIP</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-12.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-20.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Sharon
                                            Roy</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Installer</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[1] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(1, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 1 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> sharon@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 989757485
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> Germany
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-08.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-21.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Vaughan
                                            Lewis</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Senior Manager</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[2] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(2, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 2 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> vaughan12@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 546555455
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> India
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-09.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-23.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Jessica
                                            Louise</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Test Engineer</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[3] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(3, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 3 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> jessica13@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 454478787
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> India
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-10.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-16.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Carol
                                            Thomas</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">UI /UX Designer</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[4] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(4, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 4 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> caroltho3@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 124547845
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> China
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-01.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-22.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Dawn
                                            Mercha</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Technician</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[5] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(5, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 5 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> dawnmercha@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 478845447
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> +1 478845447
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-02.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-24.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Rachel
                                            Hampton</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Software Developer</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[6] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(6, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 6 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> rachel@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 215544845
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> Indonesia
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-03.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-25.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Jonelle
                                            Curtiss</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Supervisor</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[7] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(7, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 7 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> jonelle@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 121145471
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> Cuba
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-04.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-26.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Jonathan
                                            Smith</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Team Lead Dev</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[8] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(8, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 8 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> jonathan@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> 321454789
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> Isreal
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-05.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-01.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Brook
                                            Carter</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Team Lead Dev</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[9] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(9, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 9 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> brook@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 278907145
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> +1 278907145
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-06.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-06.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Eric
                                            Adams</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">HR Manager</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[10] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(10, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 10 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> ericadams@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 19023-78104
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> France
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-06.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="border border-borderColor rounded shadow bg-white">
                    <div class="p-5">
                        <div class="flex items-center justify-between mb-3">
                            <div class="flex items-center">
                                <router-link to="/crm/contact-details" class="shrink-0 me-2">
                                    <img src="@/assets/img/profiles/avatar-05.jpg" alt="img"
                                        class="w-10 h-10 rounded-full">
                                </router-link>
                                <div>
                                    <h6 class="text-sm font-medium">
                                        <router-link to="/crm/contact-details"
                                            class="text-gray-900 hover:text-primary">Richard
                                            Cooper</router-link>
                                    </h6>
                                    <p class="text-gray-500 text-sm m-0">Devops Engineer</p>
                                </div>
                            </div>
                            <div class="dropdown relative table-action" ref="el => dropdownRefs[11] = el">
                                <a href="javascript:void(0);"
                                    class="dropdown-toggle w-8 h-8 flex items-center border border-borderColor rounded shadow btn-icon btn-outline-light"
                                    @click="toggleDropdown(11, $event)"><i class="ti ti-dots-vertical"></i></a>
                                <div class="absolute end-0 w-[150px] z-[1] p-2 border border-borderColor rounded bg-white shadow-lg dropdown-menu"
                                    :class="{ 'hidden': openDropdown !== 11 }">
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-drawer-target="offcanvas_edit"
                                        data-drawer-show="offcanvas_edit" aria-controls="offcanvas_edit"
                                        data-drawer-placement="right"><i class="ti ti-edit me-1"></i> Edit</a>
                                    <a class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        href="javascript:void(0);" data-modal-target="delete_modal"
                                        data-modal-toggle="delete_modal"><i class="ti ti-trash me-1"></i> Delete</a>
                                    <router-link
                                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                                        to="/crm/contact-details"><i class="ti ti-eye text-blue-light me-1"></i>
                                        Preview</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-mail text-gray-800 me-1"></i> richard@example.com
                            </p>
                            <p class="text-default flex items-center mb-2 text-sm">
                                <i class="ti ti-phone text-gray-800 me-1"></i> +1 18902-63904
                            </p>
                            <p class="text-default flex items-center text-sm">
                                <i class="ti ti-map-pin-pin text-gray-800 me-1"></i> Belgium
                            </p>
                        </div>
                        <div class="flex items-center mt-3">
                            <span
                                class="text-xs bg-success-100  text-success rounded border-b border-success px-2 py-0.5 me-2">Collab</span>
                            <span
                                class="text-xs bg-warning-100 text-warning rounded border-b border-warning px-2 py-0.5">Rated</span>
                        </div>
                        <div class="flex justify-between items-center mt-4 pt-4 border-t border-borderColor">
                            <div class="flex items-center space-x-2">
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-mail text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-phone-check text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-message-circle-share text-sm"></i>
                                </a>
                                <a href="javascript:void(0);"
                                    class="w-6 h-6 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100">
                                    <i class="ti ti-brand-facebook text-sm"></i>
                                </a>
                            </div>
                            <a href="javascript:void(0);" class="w-6 h-6">
                                <img src="@/assets/img/profiles/avatar-07.jpg" alt="img"
                                    class="rounded-full w-full h-full">
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-5">
                <a href="javascript:void(0);" class="btn bg-primary text-white hover:bg-secondary"><i
                        class="ti ti-loader me-1"></i> Load More</a>
            </div>
        </div>

        <!-- Start Footer -->
        <layouts-footer></layouts-footer>
        <!-- End Footer -->

    </div>
    <!-- /Page Wrapper -->
    <contacts-modal></contacts-modal>
</template>

<script>
import { initFlowbite } from 'flowbite';
import { onMounted, onUnmounted, ref } from 'vue';

export default {
    methods: {
        closeFilterDropdown() {
            const dropdown = document.getElementById('filter-dropdown');
            if (dropdown) {
                dropdown.classList.add('hidden');
            }
        },
        toggleHeader() {
            document.getElementById("collapse-header").classList.toggle("active");
            document.body.classList.toggle("header-collapse");
        },
    },
    setup() {
        const openDropdown = ref(null);
        const dropdownRefs = ref([]);

        const toggleDropdown = (index, event) => {
            event.stopPropagation();
            if (openDropdown.value === index) {
                openDropdown.value = null;
            } else {
                openDropdown.value = index;
            }
        };

        const closeAllDropdowns = () => {
            openDropdown.value = null;
        };

        const handleClickOutside = (event) => {
            if (dropdownRefs.value && dropdownRefs.value.some(ref => ref && ref.contains(event.target))) {
                return;
            }
            closeAllDropdowns();
        };

        onMounted(() => {
            initFlowbite();
            document.addEventListener('click', handleClickOutside);
        });

        onUnmounted(() => {
            document.removeEventListener('click', handleClickOutside);
        });

        return {
            openDropdown,
            dropdownRefs,
            toggleDropdown,
            closeAllDropdowns
        };
    }
}
</script>