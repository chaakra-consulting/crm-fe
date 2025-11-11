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
            All Blogs
            <span
              class="ml-2 text-danger bg-danger-100 text-sm font-medium px-1.5 py-0.5 rounded border-b border-danger text-[12px]">125</span>
          </h4>
          <nav aria-label="breadcrumb">
            <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
              <li>
                <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li>
                <a href="javascript:void(0);" class="hover:underline text-gray-700">Blogs</a>
                <span><i class="ti ti-chevron-right"></i></span>
              </li>
              <li class="text-dark font-medium" aria-current="page">All Blogs</li>
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
            <ul id="export-dropdown" class="hidden p-2 z-[1] border border-borderColor rounded bg-white shadow-lg">
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

      <div class="border border-borderColor rounded mb-5">
        <div
          class="flex flex-wrap items-center justify-between gap-2 p-4 border-b border-borderColor bg-white rounded-t">

          <div class="relative">
            <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              <i class="ti ti-search"></i>
            </span>
            <input type="text" placeholder="Search" v-model="searchQuery"
              class="pl-9 pr-4 py-1.5 border shadow border-borderColor rounded-md focus:outline-none focus:ring-0 placeholder:text-sm">
          </div>

          <!-- Add New Button -->
          <router-link to="/blog/add-blog"
            class="inline-flex items-center gap-1 px-4 py-2 bg-primary hover:bg-primary-900 text-white rounded-md transition">
            <i class="ti ti-square-rounded-plus-filled"></i>
            Add Blog
          </router-link>
        </div>
      </div>

      <!-- start row -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-y-4 gap-x-5">
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-1.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Sales
                  Optimization</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>40 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>27 May 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Improve Efficiency for
                      Sales</router-link></h6>
                  <p class="mb-0 truncate">Discover how to optimize tools to boost your sales team’s productivity and
                    track important metrics.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-2.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Automation</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>123 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>15 May 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Automation Benefits for
                      Growth</router-link></h6>
                  <p class="mb-0 truncate">Learn how automation features can streamline workflows and accelerate your
                    business’s growth effortlessly.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">Inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-3.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Marketing</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>54 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>04 May 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Marketing Integration
                      Guide</router-link></h6>
                  <p class="mb-0 truncate">Explore seamless integration strategies between customer management and
                    marketing tools to enhance outreach and engagement.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-4.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Implementation</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>152 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>29 Apr 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Avoid Setup Mistakes</router-link></h6>
                  <p class="mb-0 truncate">Identify common pitfalls in implementation and learn proactive steps to avoid
                    costly mistakes during setup.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">Inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-5.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Product
                  Features</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>58 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>17 Apr 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Top Features for 2025</router-link></h6>
                  <p class="mb-0 truncate">Uncover must-have features for 2025 that improve customer relationships and
                    operational efficiency.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-6.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Data &
                  Analytics</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>78 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>03 Apr 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Data Insights Success </router-link>
                  </h6>
                  <p class="mb-0 truncate">Leverage data insights to enhance customer engagement, identify
                    opportunities, and make data-driven decisions.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">Inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-7.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Customization</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>56 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>26 Mar 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Customizing Effectively</router-link>
                  </h6>
                  <p class="mb-0 truncate">Tailor your system to fit your business processes, improving usability,
                    adoption, and productivity across teams.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-8.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Customization</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>97 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>13 Mar 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">Future Trends &
                      Innovations</router-link></h6>
                  <p class="mb-0 truncate">Explore emerging trends and innovations that are shaping the future of
                    customer relationship management.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] text-danger border-b border-danger inline-flex bg-danger-100">Inactive</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
        <div class="md:col-span-6 lg:col-span-4">
          <div class="card blog-item border border-borderColor rounded bg-white mb-0">
            <div class="card-body p-4">
              <div class="blog-img rounded relative mb-3">
                <router-link to="/blog/blog-details"><img src="@/assets/img/blogs/blog-9.jpg" alt="img"
                    class="img-fluid relative rounded"></router-link>
                <a href="javascript:void(0);"
                  class="bg-info rounded text-white absolute text-[12px] py-1 px-2 top-0 left-0 mt-2 ms-2">Training &
                  Adoption</a>
              </div>
              <div class="blog-content">
                <div class="flex items-center justify-between flex-wrap gap-2 mb-3">
                  <span><i class="ti ti-message-minus me-1"></i>34 Comments</span>
                  <span><i class="ti ti-calendar me-1"></i>06 Mar 2025</span>
                </div>
                <div class="mb-3">
                  <h6 class="mb-2"><router-link to="/blog/blog-details" class="hover:text-primary">User Training Tips</router-link></h6>
                  <p class="mb-0 truncate">Ensure your team’s success with essential training strategies and onboarding
                    tips to boost adoption rates.</p>
                </div>
                <hr class="border-borderColor my-3">
                <div class="flex items-center justify-between">
                  <router-link to="/blog/edit-blog"
                    class="px-3 py-1 text-[12px] text-dark hover:bg-dark hover:text-white border border-dark rounded inline-flex items-center"><i
                      class="ti ti-edit me-1"></i>Edit</router-link>
                  <span
                    class="px-1.5 py-0.5 rounded text-[12px] border-b border-success bg-success-100 text-success">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div><!-- end col -->
      </div>
      <!-- end row -->

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleHeader() {
      document.getElementById("collapse-header").classList.toggle("active");
      document.body.classList.toggle("header-collapse");
    },
  },
};
</script>
