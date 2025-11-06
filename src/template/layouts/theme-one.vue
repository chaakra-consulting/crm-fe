<template>
    <div
        class="sidebar-contact fixed top-0 -translate-y-1/2 right-[-350px] w-[350px] h-auto bg-white box-border transition-all duration-500 z-[40]">
        <div class="toggle-theme flex items-center justify-center absolute w-[35px] text-center cursor-pointer bg-primary top-[225px] right-[350px] p-[6px] h-[35px] text-white rounded-tl-sm rounded-bl-sm"
            data-drawer-target="theme-setting" data-drawer-show="theme-setting" aria-controls="theme-setting"
            data-drawer-placement="right"><i class="ti ti-settings"></i></div>
    </div>
    <div class="sidebar-themesettings fixed top-0 right-0 bottom-0 z-[9999] h-screen translate-x-full bg-white w-[400px]"
        id="theme-setting">
        <div class="flex items-center justify-between gap-2 p-5 border-b bg-primary">
            <h5 class="flex-grow-1 text-white mb-0">Theme Customizer</h5>
            <button type="button"
                class="text-danger hover:text-danger text-sm w-6 h-6 border border-borderColor bg-danger-100 rounded-full flex items-center justify-center"
                data-drawer-hide="theme-setting">
                <i class="ti ti-x"></i>
                <span class="sr-only">Close modal</span>
            </button>
        </div>
        <div class="offcanvas-body h-[80vh] overflow-y-auto p-4" data-simplebar>

            <div class="accordion accordion-bordered" data-accordion="open" data-active-classes="bg-white">

                <div class="accordion-item mb-2 border border-borderColor rounded-md">
                    <h2 class="accordion-header">
                        <button
                            class="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md transition-colors duration-300"
                            type="button" data-accordion-target="#modesetting" aria-expanded="true">
                            <span>Color Mode</span>
                            <i class="ti ti-chevron-down data-accordion-icon transition-transform duration-300"></i>
                        </button>
                    </h2>
                    <div id="modesetting" class="accordion-collapse">
                        <div class="p-5 border-t border-borderColor">
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-6">
                                    <div class="form-check card-radio" @click="handleUpdateTheme('data-bs-theme', 'light')">
                                        <input class="hidden peer" type="radio" name="data-bs-theme"
                                            id="layout-color-light" value="light" :checked="themeSettings['data-bs-theme'] === 'light'">
                                        <label for="layout-color-light"
                                            class="form-check-label border border-borderColor rounded-md p-2 w-full flex justify-center items-center cursor-pointer relative">
                                            <i class="ti ti-sun me-1"></i>Light
                                        </label>
                                    </div>
                                </div>
                                <div class="col-span-6">
                                    <div class="form-check card-radio" @click="handleUpdateTheme('data-bs-theme', 'dark')">
                                        <input class="hidden peer" type="radio" name="data-bs-theme"
                                            id="layout-color-dark" value="dark" :checked="themeSettings['data-bs-theme'] === 'dark'">
                                        <label
                                            class="border border-borderColor rounded-md p-2 w-full flex justify-center items-center peer-checked:border-primary cursor-pointer"
                                            for="layout-color-dark">
                                            <i class="ti ti-moon me-1"></i>Dark
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item mb-2 border border-borderColor rounded-md">
                    <h2 class="accordion-header">
                        <button
                            class="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                            type="button" data-bs-toggle="collapse" data-accordion-target="#layoutsetting"
                            aria-expanded="true">
                            <span>Select Layouts</span>
                            <i class="ti ti-chevron-down data-accordion-icon transition-transform duration-300"></i>
                        </button>
                    </h2>
                    <div id="layoutsetting" class="accordion-collapse">
                        <div class="p-5 border-t border-borderColor">
                            <div class="theme-content">
                                <div class="grid grid-cols-12 gap-3">
                                    <div class="col-span-4">
                                        <div class="theme-layout text-center" @click="handleUpdateTheme('data-layout', 'default')">
                                            <input type="radio" name="data-layout" class="hidden" id="defaultLayout"
                                                value="default" :checked="themeSettings['data-layout'] === 'default'">
                                            <label for="defaultLayout">
                                                <span class="block mb-2 layout-img relative">
                                                    <span
                                                        class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                            class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/default.svg" alt="img">
                                                </span>
                                                <span class="font-medium text-gray-900">Default</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-span-4">
                                        <div class="theme-layout text-center" @click="handleUpdateTheme('data-layout', 'mini')">
                                            <input type="radio" name="data-layout" id="miniLayout" value="mini" :checked="themeSettings['data-layout'] === 'mini'">
                                            <label for="miniLayout">
                                                <span class="block mb-2 layout-img relative">
                                                    <span
                                                        class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                            class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/mini.svg" alt="img">
                                                </span>
                                                <span class="font-medium text-gray-900">Mini</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-span-4">
                                        <div class="theme-layout text-center" @click="handleUpdateTheme('data-layout', 'hoverview')">
                                            <input type="radio" name="data-layout" id="hoverviewLayout"
                                                value="hoverview" :checked="themeSettings['data-layout'] === 'hoverview'">
                                            <label for="hoverviewLayout">
                                                <span class="block mb-2 layout-img relative">
                                                    <span
                                                        class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                            class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/mini.svg" alt="img">
                                                </span>
                                                <span class="font-medium text-gray-900">Hover View</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-span-4">
                                        <div class="theme-layout text-center" @click="handleUpdateTheme('data-layout', 'hidden')">
                                            <input type="radio" name="data-layout" id="hiddenLayout" value="hidden" :checked="themeSettings['data-layout'] === 'hidden'">
                                            <label for="hiddenLayout">
                                                <span class="block mb-2 layout-img relative">
                                                    <span
                                                        class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                            class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/full-width.svg" alt="img">
                                                </span>
                                                <span class="font-medium text-gray-900">Hidden</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-span-4">
                                        <div class="theme-layout text-center" @click="handleUpdateTheme('data-layout', 'full-width')">
                                            <input type="radio" name="data-layout" id="full-widthLayout"
                                                value="full-width" :checked="themeSettings['data-layout'] === 'full-width'">
                                            <label for="full-widthLayout">
                                                <span class="block mb-2 layout-img relative">
                                                    <span
                                                        class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                            class="ti ti-check"></i></span>
                                                    <img src="@/assets/img/theme/full-width.svg" alt="img">
                                                </span>
                                                <span class="font-medium text-gray-900">Full Width</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item mb-2 border border-borderColor rounded-md">
                    <h2 class="accordion-header">
                        <button
                            class="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                            type="button" data-accordion-target="#sidebarcolorsetting" aria-expanded="true">
                            Sidebar Color
                            <i class="ti ti-chevron-down data-accordion-icon transition-transform duration-300"></i>
                        </button>
                    </h2>
                    <div id="sidebarcolorsetting" class="accordion-collapse">
                        <div class="p-5 border-t border-borderColor">
                            <div class="theme-content">
                                <h6 class="text-[14px] font-medium mb-2">Solid Colors</h6>
                                <div class="flex items-center flex-wrap mb-1">
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'light')">
                                        <input type="radio" name="data-sidebar" id="lightSidebar" value="light" :checked="themeSettings['data-sidebar'] === 'light'">
                                        <label for="lightSidebar"
                                            class="block mb-2 w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-white">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'sidebar2')">
                                        <input type="radio" name="data-sidebar" id="sidebar2Sidebar" value="sidebar2" :checked="themeSettings['data-sidebar'] === 'sidebar2'">
                                        <label for="sidebar2Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-light mb-2">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'sidebar3')">
                                        <input type="radio" name="data-sidebar" id="sidebar3Sidebar" value="sidebar3" :checked="themeSettings['data-sidebar'] === 'sidebar3'">
                                        <label for="sidebar3Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-dark mb-2">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'sidebar4')">
                                        <input type="radio" name="data-sidebar" id="sidebar4Sidebar" value="sidebar4" :checked="themeSettings['data-sidebar'] === 'sidebar4'">
                                        <label for="sidebar4Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-primary mb-2">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'sidebar5')">
                                        <input type="radio" name="data-sidebar" id="sidebar5Sidebar" value="sidebar5" :checked="themeSettings['data-sidebar'] === 'sidebar5'">
                                        <label for="sidebar5Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-secondary mb-2">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'sidebar6')">
                                        <input type="radio" name="data-sidebar" id="sidebar6Sidebar" value="sidebar6" :checked="themeSettings['data-sidebar'] === 'sidebar6'">
                                        <label for="sidebar6Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-info mb-2">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'sidebar7')">
                                        <input type="radio" name="data-sidebar" id="sidebar7Sidebar" value="sidebar7" :checked="themeSettings['data-sidebar'] === 'sidebar7'">
                                        <label for="sidebar7Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor bg-indigo mb-2">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                </div>
                                <h6 class="text-[14px] font-medium mb-2">Gradient Colors</h6>
                                <div class="flex items-center flex-wrap">
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar1')">
                                        <input type="radio" name="data-sidebar" id="gradientsidebar1Sidebar"
                                            value="gradientsidebar1" :checked="themeSettings['data-sidebar'] === 'gradientsidebar1'">
                                        <label for="gradientsidebar1Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-indigo-gradient">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar2')">
                                        <input type="radio" name="data-sidebar" id="gradientsidebar2Sidebar"
                                            value="gradientsidebar2" :checked="themeSettings['data-sidebar'] === 'gradientsidebar2'">
                                        <label for="gradientsidebar2Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-primary-gradient">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar3')">
                                        <input type="radio" name="data-sidebar" id="gradientsidebar3Sidebar"
                                            value="gradientsidebar3" :checked="themeSettings['data-sidebar'] === 'gradientsidebar3'">
                                        <label for="gradientsidebar3Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-secondary-gradient">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar4')">
                                        <input type="radio" name="data-sidebar" id="gradientsidebar4Sidebar"
                                            value="gradientsidebar4" :checked="themeSettings['data-sidebar'] === 'gradientsidebar4'">
                                        <label for="gradientsidebar4Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-dark-gradient">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar5')">
                                        <input type="radio" name="data-sidebar" id="gradientsidebar5Sidebar"
                                            value="gradientsidebar5" :checked="themeSettings['data-sidebar'] === 'gradientsidebar5'">
                                        <label for="gradientsidebar5Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-purple-gradient">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1 me-3" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar6')">
                                        <input type="radio" name="data-sidebar" id="gradientsidebar6Sidebar"
                                            value="gradientsidebar6" :checked="themeSettings['data-sidebar'] === 'gradientsidebar6'">
                                        <label for="gradientsidebar6Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-orange-gradient">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect m-1" @click="handleUpdateTheme('data-sidebar', 'gradientsidebar7')">
                                        <input type="radio" name="data-sidebar" id="gradientsidebar7Sidebar"
                                            value="gradientsidebar7" :checked="themeSettings['data-sidebar'] === 'gradientsidebar7'">
                                        <label for="gradientsidebar7Sidebar"
                                            class="block w-7 h-[45px] rounded-[5px] relative outline outline-1 outline-offset-[3px] outline-borderColor mb-2 bg-info-gradient">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item mb-2 border border-borderColor rounded-md">
                    <h2 class="accordion-header">
                        <button
                            class="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                            type="button" data-accordion-target="#colorsetting" aria-expanded="true">
                            Top Bar Color
                            <i class="ti ti-chevron-down data-accordion-icon transition-transform duration-300"></i>
                        </button>
                    </h2>
                    <div id="colorsetting" class="accordion-collapse">
                        <div class="p-5 pb-1 border-t border-borderColor">
                            <div class="theme-content">
                                <h6 class="text-[14px] font-medium mb-2">Solid Colors</h6>
                                <div class="flex items-center flex-wrap topbar-background mb-1">
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'white')">
                                        <input type="radio" name="data-topbar" id="whiteTopbar" value="white" :checked="themeSettings['data-topbar'] === 'white'">
                                        <label for="whiteTopbar"
                                            class="white-topbar block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px] bg-white">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar1')">
                                        <input type="radio" name="data-topbar" id="topbar1Topbar" value="topbar1" :checked="themeSettings['data-topbar'] === 'topbar1'">
                                        <label for="topbar1Topbar"
                                            class="bg-light block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar2')">
                                        <input type="radio" name="data-topbar" id="topbar2Topbar" value="topbar2" :checked="themeSettings['data-topbar'] === 'topbar2'">
                                        <label for="topbar2Topbar"
                                            class="bg-dark block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar3')">
                                        <input type="radio" name="data-topbar" id="topbar3Topbar" value="topbar3" :checked="themeSettings['data-topbar'] === 'topbar3'">
                                        <label for="topbar3Topbar"
                                            class="bg-primary block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar4')">
                                        <input type="radio" name="data-topbar" id="topbar4Topbar" value="topbar4" :checked="themeSettings['data-topbar'] === 'topbar4'">
                                        <label for="topbar4Topbar"
                                            class="bg-secondary block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'topbar5')">
                                        <input type="radio" name="data-topbar" id="topbar5Topbar" value="topbar5" :checked="themeSettings['data-topbar'] === 'topbar5'">
                                        <label for="topbar5Topbar"
                                            class="bg-info block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3" @click="handleUpdateTheme('data-topbar', 'topbar6')">
                                        <input type="radio" name="data-topbar" id="topbar6Topbar" value="topbar6" :checked="themeSettings['data-topbar'] === 'topbar6'">
                                        <label for="topbar6Topbar"
                                            class="bg-indigo block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                </div>
                                <h6 class="text-[14px] font-medium mb-2">Gradient Colors</h6>
                                <div class="flex items-center flex-wrap topbar-background">
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar1')">
                                        <input type="radio" name="data-topbar" id="gradienttopbar1Topbar"
                                            value="gradienttopbar1" :checked="themeSettings['data-topbar'] === 'gradienttopbar1'">
                                        <label for="gradienttopbar1Topbar"
                                            class="bg-indigo-gradient  block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]">
                                            <span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span>
                                        </label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar2')">
                                        <input type="radio" name="data-topbar" id="gradienttopbar2Topbar"
                                            value="gradienttopbar2" :checked="themeSettings['data-topbar'] === 'gradienttopbar2'">
                                        <label for="gradienttopbar2Topbar"
                                            class="bg-primary-gradient  block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar3')">
                                        <input type="radio" name="data-topbar" id="gradienttopbar3Topbar"
                                            value="gradienttopbar3" :checked="themeSettings['data-topbar'] === 'gradienttopbar3'">
                                        <label for="gradienttopbar3Topbar"
                                            class="bg-secondary-gradient  block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar4')">
                                        <input type="radio" name="data-topbar" id="gradienttopbar4Topbar"
                                            value="gradienttopbar4" :checked="themeSettings['data-topbar'] === 'gradienttopbar4'">
                                        <label for="gradienttopbar4Topbar"
                                            class="bg-dark-gradient block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar5')">
                                        <input type="radio" name="data-topbar" id="gradienttopbar5Topbar"
                                            value="gradienttopbar5" :checked="themeSettings['data-topbar'] === 'gradienttopbar5'">
                                        <label for="gradienttopbar5Topbar"
                                            class="bg-purple-gradient block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-3" @click="handleUpdateTheme('data-topbar', 'gradienttopbar6')">
                                        <input type="radio" name="data-topbar" id="gradienttopbar6Topbar"
                                            value="gradienttopbar6" :checked="themeSettings['data-topbar'] === 'gradienttopbar6'">
                                        <label for="gradienttopbar6Topbar"
                                            class="bg-orange-gradient block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                    <div class="theme-colorselect mb-3 me-0" @click="handleUpdateTheme('data-topbar', 'gradienttopbar7')">
                                        <input type="radio" name="data-topbar" id="gradienttopbar7Topbar"
                                            value="gradienttopbar7" :checked="themeSettings['data-topbar'] === 'gradienttopbar7'">
                                        <label for="gradienttopbar7Topbar"
                                            class="bg-info-gradient block w-[25px] h-[25px] relative rounded-[5px] outline outline-1 outline-borderColor outline-offset-[2px]"><span
                                                class="theme-check w-[18px] h-[18px] bg-success text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center flex rounded-full"><i
                                                    class="ti ti-check"></i></span></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item mb-0 border border-borderColor rounded-md">
                    <h2 class="accordion-header">
                        <button
                            class="flex items-center justify-between w-full accordion-button text-gray-900 font-semibold text-[16px] px-5 py-3 rounded-md"
                            type="button" data-accordion-target="#sidebarcolor" aria-expanded="true">
                            Theme Colors
                            <i class="ti ti-chevron-down data-accordion-icon transition-transform duration-300"></i>
                        </button>
                    </h2>
                    <div id="sidebarcolor" class="accordion-collapse">
                        <div class="p-5 pb-2 border-t border-borderColor">
                            <div class="theme-content">
                                <div class="flex items-center flex-wrap">
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'primary')">
                                        <input type="radio" name="data-color" id="primaryColor" value="primary" :checked="themeSettings['data-color'] === 'primary'">
                                        <label for="primaryColor" class="primary-clr"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'secondary')">
                                        <input type="radio" name="data-color" id="secondaryColor" value="secondary" :checked="themeSettings['data-color'] === 'secondary'">
                                        <label for="secondaryColor" class="secondary-clr before:bg-secondary"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'orange')">
                                        <input type="radio" name="data-color" id="orangeColor" value="orange" :checked="themeSettings['data-color'] === 'orange'">
                                        <label for="orangeColor" class="orange-clr before:bg-orange"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'teal')">
                                        <input type="radio" name="data-color" id="tealColor" value="teal" :checked="themeSettings['data-color'] === 'teal'">
                                        <label for="tealColor" class="teal-clr before:bg-teal"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'purple')">
                                        <input type="radio" name="data-color" id="purpleColor" value="purple" :checked="themeSettings['data-color'] === 'purple'">
                                        <label for="purpleColor" class="purple-clr before:bg-purple"></label>
                                    </div>
                                    <div class="theme-colorsset me-2 mb-2" @click="handleUpdateTheme('data-color', 'indigo')">
                                        <input type="radio" name="data-color" id="indigoColor" value="indigo" :checked="themeSettings['data-color'] === 'indigo'">
                                        <label for="indigoColor" class="indigo-clr before:bg-indigo"></label>
                                    </div>
                                    <div class="theme-colorsset mb-2" @click="handleUpdateTheme('data-color', 'info')">
                                        <input type="radio" name="data-color" id="infoColor" value="info" :checked="themeSettings['data-color'] === 'info'">
                                        <label for="infoColor" class="info-clr before:bg-info"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="flex items-center gap-2 px-3 py-2 offcanvas-header border-t border-borderColor">
            <button type="button" class="btn w-full btn-light" id="reset-layout" @click.prevent="handleResetTheme"><i
                    class="ti ti-restore me-1"></i>Reset</button>
            <button type="button" class="btn w-full btn-primary">Buy Product</button>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            themeSettings: {
                'data-layout': 'default', // initial
                'data-width': 'default',  // initial
                'data-sidebar': 'light',  // initial
                'data-size': 'default',  // initial
                'data-topbar': 'white',  // initial
                'data-sidebarbg': 'default',  // initial
                'data-color': 'primary',  // initial
            },
            miniSidebar: false,
            expandMenu: false,
            dataLayout: 'default',
            dataWidth: 'default',
            dataSidebar: 'default',
            dataSize: 'default',
            dataTopbar: 'default',
            dataSidebarbg: 'default',
            dataColor: 'default',
        }
    },
    mounted() {
        this.updateBodyClasses();

        // Set initial value on <html> tag
        document.documentElement.setAttribute('data-layout', this.themeSettings['data-layout']);
        document.documentElement.setAttribute('data-width', this.themeSettings['data-width']);
        document.documentElement.setAttribute('data-sidebar', this.themeSettings['data-sidebar']);
        document.documentElement.setAttribute('data-size', this.themeSettings['data-size']);
        document.documentElement.setAttribute('data-topbar', this.themeSettings['data-topbar']);
        document.documentElement.setAttribute('data-sidebarbg', this.themeSettings['data-sidebarbg']);
        document.documentElement.setAttribute('data-color', this.themeSettings['data-color']);
    },
    methods: {
        handleUpdateTheme(key, value) {
            this.themeSettings[key] = value;
            document.documentElement.setAttribute(key, value);

            // sync local vars if needed
            if (key === 'data-layout') this.dataLayout = value;
            if (key === 'data-width') this.dataWidth = value;
            if (key === 'data-sidebar') this.dataSidebar = value;
            if (key === 'data-size') this.dataSize = value;
            if (key === 'data-topbar') this.dataTopbar = value;
            if (key === 'data-sidebarbg') this.dataSidebarbg = value;
            if (key === 'data-color') this.dataColor = value;

            this.updateBodyClasses();
        },
        updateBodyClasses() {
            const body = document.body;

            // reset
            body.classList.remove('mini-sidebar', 'expand-menu', 'layout-box-mode');

            // apply conditions
            if (
                this.miniSidebar ||
                this.themeSettings['data-layout'] === 'mini' ||
                this.themeSettings['data-size'] === 'compact'
            ) {
                body.classList.add('mini-sidebar');
            }

            if (
                (this.expandMenu && this.miniSidebar) ||
                (this.expandMenu && this.themeSettings['data-layout'] === 'mini')
            ) {
                body.classList.add('expand-menu');
            }

            if (this.themeSettings['data-width'] === 'box') {
                body.classList.add('layout-box-mode', 'mini-sidebar');
            }
        },
        handleResetTheme() {
            const defaults = {
                'data-layout': 'default',
                'data-width': 'default',
                'data-sidebar': 'light',
                'data-size': 'default',
                'data-topbar': 'white',
                'data-sidebarbg': 'default',
                'data-color': 'primary',
            };

            Object.entries(defaults).forEach(([key, value]) => {
                this.themeSettings[key] = value;
                document.documentElement.setAttribute(key, value);
            });

            this.miniSidebar = false;
            this.expandMenu = false;
            this.updateBodyClasses();
        },
    },
}
</script>