<template>
    <layouts-header></layouts-header>
    <layouts-sidebar></layouts-sidebar>
    <!-- Page Wrapper -->
    <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">
        <div class="content p-5 pb-0">
            <!-- Page Header -->
            <div class="mb-7">
                <h4 class="mb-1 text-xl font-bold flex items-center">
                    Editors
                </h4>
                <nav aria-label="breadcrumb">
                    <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
                        <li>
                            <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                            <span><i class="ti ti-chevron-right"></i></span>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="hover:underline text-gray-700">Forms</a>
                            <span><i class="ti ti-chevron-right"></i></span>
                        </li>
                        <li class="text-dark font-medium" aria-current="page">Editors</li>
                    </ol>
                </nav>
            </div>
            <!-- End Page Header -->

            <!-- Snow Theme Editor -->
            <div class="card border bg-white border-borderColor mb-5 rounded">
                <div class="card-header border-b border-borderColor p-4">
                    <h5 class="card-title">Quill Editor</h5>
                </div>
                <div class="card-body p-4">
                    <p class="text-muted mb-4">Snow is a clean, flat toolbar theme.</p>
                    
                    <!-- Quill Editor -->
                    <div id="snow-editor" style="height: 300px;">
                        <h3><span class="ql-size-large">Hello World!</span></h3>
                        <p><br></p>
                        <h3>This is an simple editable area.</h3>
                        <p><br></p>
                        <ul>
                            <li>
                                Select a text to reveal the toolbar.
                            </li>
                            <li>
                                Edit rich document on-the-fly, so elastic!
                            </li>
                        </ul>
                        <p><br></p>
                        <p>
                            End of simple area
                        </p>
                    </div>
                </div>
            </div>

            <!-- Bubble Theme Editor -->
            <div class="card border bg-white border-borderColor mb-5 rounded">
                <div class="card-header border-b border-borderColor p-4">
                    <h5 class="card-title">Quill Bubble Editor</h5>
                </div>
                <div class="card-body p-4">
                    <p class="text-muted mb-4">Bubble is a simple tooltip based theme.</p>
                    
                    <div id="bubble-editor" class="border border-borderColor rounded" style="height: 300px;">
                        <h3><span class="ql-size-large">Hello World!</span></h3>
                        <p><br></p>
                        <h3>This is an simple editable area.</h3>
                        <p><br></p>
                        <ul>
                            <li>
                                Select a text to reveal the toolbar.
                            </li>
                            <li>
                                Edit rich document on-the-fly, so elastic!
                            </li>
                        </ul>
                        <p><br></p>
                        <p>
                            End of simple area
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Start Footer -->
        <layouts-footer></layouts-footer>
        <!-- End Footer -->
    </div>
    <!-- /Page Wrapper -->
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
    name: 'FormEditors',
    mounted() {
        // Initialize Snow Theme
        const snowEditor = new Quill('#snow-editor', {
            theme: 'snow',
            modules: {
                toolbar: [
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                    ['link', 'image'],
                    ['clean']
                ]
            },
            placeholder: 'Compose an epic...',
        });

        // Initialize Bubble Theme
        const bubbleEditor = new Quill('#bubble-editor', {
            theme: 'bubble',
            modules: {
                toolbar: [
                    ['bold', 'italic', 'underline', 'strike'],
                    ['link'],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ]
            },
            placeholder: 'Compose an epic...',
        });
    }
}
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>