<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Accordions
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
            <li class="text-dark font-medium" aria-current="page">Accordions</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 class="mb-0">Default Accordion</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse" data-accordion="collapse">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="headingOne">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapseOne" class="hidden p-3" aria-labelledby="headingOne">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapseTwo" class="hidden p-3" aria-labelledby="headingTwo">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapseThree" aria-expanded="true"
                    aria-controls="collapseThree">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapseThree" class="hidden p-3" aria-labelledby="headingThree">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 class="mb-2">Always Open Accordion</h5>
            <p>Omit the <code class="text-danger">data-accordion="open"</code> attribute on each <code
                class="text-danger">.accordion-collapse</code> to make accordion items stay open when another item is
              opened.</p>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-open" data-accordion="open">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-1">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-1" class="hidden p-3" aria-labelledby="heading-1">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-2">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-2" class="hidden p-3" aria-labelledby="heading-2">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-3">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-3" class="hidden p-3" aria-labelledby="heading-3">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>With Spacing</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-2" data-accordion="collapse">
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-4">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-4" class="hidden p-3" aria-labelledby="heading-4">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-5">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-5" class="hidden p-3" aria-labelledby="heading-5">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded">
                <h2 class="accordion-header" id="heading-6">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-6" aria-expanded="false" aria-controls="collapse-6">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-6" class="hidden p-3" aria-labelledby="heading-6">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5 class="mb-2">Flush Accordion</h5>
            <p class="subtitle text-muted fs-12 fw-normal">
              Add <code class="text-danger">.accordion-flush</code> to remove the default
              <code class="text-danger">background-color</code>,
              borders, and rounded corners.
            </p>
          </div>
          <div class="card-body">
            <div id="accordion-collapse-3" data-accordion="collapse">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-7">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-7" aria-expanded="false" aria-controls="collapse-7">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-7" class="hidden p-3" aria-labelledby="heading-7">
                  <div class="accordion-body text-[12px]">
                    Placeholder content for this accordion,
                    which is
                    intended to demonstrate the <code class="text-danger">.accordion-flush</code> class.
                    This is
                    the
                    first item's accordion body.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-8">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-8" aria-expanded="false" aria-controls="collapse-8">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-8" class="hidden p-3" aria-labelledby="heading-8">
                  <div class="accordion-body text-[12px]">
                    Placeholder content for this accordion,
                    which is
                    intended to demonstrate the <code class="text-danger">.accordion-flush</code> class.
                    This is
                    the
                    second item's accordion body. Let's imagine this being filled
                    with
                    some
                    actual content.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-9">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-9" aria-expanded="false" aria-controls="collapse-9">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-9" class="hidden p-3" aria-labelledby="heading-9">
                  <div class="accordion-body text-[12px]">
                    Placeholder content for this accordion,
                    which is
                    intended to demonstrate the <code class="text-danger">.accordion-flush</code> class.
                    This is
                    the
                    third item's accordion body. Nothing more exciting happening
                    here in
                    terms
                    of content, but just filling up the space to make it look, at
                    least
                    at
                    first
                    glance, a bit more representative of how this would look in a
                    real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 class="mb-3">Light Colors:</h6>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Primary</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-4" data-accordion="collapse"
              data-active-classes="bg-primary-100 text-primary">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-10">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-10" aria-expanded="true" aria-controls="collapse-10">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-10" class="hidden p-3" aria-labelledby="heading-10">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-11">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-11" aria-expanded="true" aria-controls="collapse-11">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-11" class="hidden p-3" aria-labelledby="heading-11">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-12">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-12" aria-expanded="true" aria-controls="collapse-12">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-12" class="hidden p-3" aria-labelledby="heading-12">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Secondary</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-5" data-accordion="collapse"
              data-active-classes="bg-secondary-100 text-secondary">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-13">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-13" aria-expanded="true" aria-controls="collapse-13">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-13" class="hidden p-3" aria-labelledby="heading-13">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-14">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-14" aria-expanded="true" aria-controls="collapse-14">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-14" class="hidden p-3" aria-labelledby="heading-14">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-15">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-15" aria-expanded="true" aria-controls="collapse-15">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-15" class="hidden p-3" aria-labelledby="heading-15">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h6 class="mb-3">Solid Colors:</h6>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Primary</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-6" data-accordion="collapse"
              data-active-classes="bg-primary text-white">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-16">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-16" aria-expanded="true" aria-controls="collapse-16">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-16" class="hidden p-3" aria-labelledby="heading-16">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-17">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-17" aria-expanded="true" aria-controls="collapse-17">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-17" class="hidden p-3" aria-labelledby="heading-17">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-18">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-18" aria-expanded="true" aria-controls="collapse-18">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-18" class="hidden p-3" aria-labelledby="heading-18">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Secondary</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-7" data-accordion="collapse"
              data-active-classes="bg-secondary text-white">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-19">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-19" aria-expanded="true" aria-controls="collapse-19">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-19" class="hidden p-3" aria-labelledby="heading-19">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-20">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-20" aria-expanded="true" aria-controls="collapse-20">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-20" class="hidden p-3" aria-labelledby="heading-20">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-21">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-21" aria-expanded="true" aria-controls="collapse-21">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-21" class="hidden p-3" aria-labelledby="heading-21">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Warning</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-8" data-accordion="collapse"
              data-active-classes="bg-warning text-white">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-22">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-22" aria-expanded="true" aria-controls="collapse-22">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-22" class="hidden p-3" aria-labelledby="heading-22">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-23">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-23" aria-expanded="true" aria-controls="collapse-23">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-23" class="hidden p-3" aria-labelledby="heading-23">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-24">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-24" aria-expanded="true" aria-controls="collapse-24">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-24" class="hidden p-3" aria-labelledby="heading-24">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Info</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-9" data-accordion="collapse"
              data-active-classes="bg-info text-white">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-25">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-25" aria-expanded="true" aria-controls="collapse-25">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-25" class="hidden p-3" aria-labelledby="heading-25">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-26">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-26" aria-expanded="true" aria-controls="collapse-26">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-26" class="hidden p-3" aria-labelledby="heading-26">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-27">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-27" aria-expanded="true" aria-controls="collapse-27">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-27" class="hidden p-3" aria-labelledby="heading-27">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Success</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-10" data-accordion="collapse"
              data-active-classes="bg-success text-white">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-28">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-28" aria-expanded="true" aria-controls="collapse-28">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-28" class="hidden p-3" aria-labelledby="heading-28">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-29">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-29" aria-expanded="true" aria-controls="collapse-29">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-29" class="hidden p-3" aria-labelledby="heading-29">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-30">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-30" aria-expanded="true" aria-controls="collapse-30">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-30" class="hidden p-3" aria-labelledby="heading-30">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Danger</h5>
          </div>
          <div class="card-body p-5">
            <div class="border rounded" id="accordion-collapse-11" data-accordion="collapse"
              data-active-classes="bg-danger text-white">
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-31">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-31" aria-expanded="true" aria-controls="collapse-31">
                    Accordion Item #1
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-31" class="hidden p-3" aria-labelledby="heading-31">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border-b">
                <h2 class="accordion-header" id="heading-32">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-32" aria-expanded="true" aria-controls="collapse-32">
                    Accordion Item #2
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-32" class="hidden p-3" aria-labelledby="heading-32">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="heading-33">
                  <button class="flex justify-between items-center text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-33" aria-expanded="true" aria-controls="collapse-33">
                    Accordion Item #3
                    <span><i class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-33" class="hidden p-3" aria-labelledby="heading-33">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h6 class="mb-3">Colored Borders:</h6>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Primary</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-12" data-accordion="collapse" data-active-classes="bg-white text-primary">
              <div class="accordion-item border border-primary rounded mb-3">
                <h2 class="accordion-header" id="heading-34">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-primary"
                    type="button" data-accordion-target="#collapse-34" aria-expanded="false"
                    aria-controls="collapse-34">
                    Accordion Item #1
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-primary"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-34" class="hidden border-t border-primary p-3" aria-labelledby="heading-34">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded border-primary mb-3">
                <h2 class="accordion-header" id="heading-35">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-primary"
                    type="button" data-accordion-target="#collapse-35" aria-expanded="false"
                    aria-controls="collapse-35">
                    Accordion Item #2
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-primary"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-35" class="hidden border-t border-primary p-3" aria-labelledby="heading-35">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-primary rounded">
                <h2 class="accordion-header" id="heading-36">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-primary"
                    type="button" data-accordion-target="#collapse-36" aria-expanded="false"
                    aria-controls="collapse-36">
                    Accordion Item #3
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-primary"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-36" class="hidden border-t border-primary p-3" aria-labelledby="heading-36">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Secondary</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-13" data-accordion="collapse" data-active-classes="bg-white text-secondary">
              <div class="accordion-item border border-secondary rounded mb-3">
                <h2 class="accordion-header" id="heading-37">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-secondary"
                    type="button" data-accordion-target="#collapse-37" aria-expanded="false"
                    aria-controls="collapse-37">
                    Accordion Item #1
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-secondary"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-37" class="hidden border-t border-secondary p-3" aria-labelledby="heading-37">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded border-secondary mb-3">
                <h2 class="accordion-header" id="heading-38">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-secondary"
                    type="button" data-accordion-target="#collapse-38" aria-expanded="false"
                    aria-controls="collapse-38">
                    Accordion Item #2
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-secondary"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-38" class="hidden border-t border-secondary p-3" aria-labelledby="heading-38">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-secondary rounded">
                <h2 class="accordion-header" id="heading-39">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-secondary"
                    type="button" data-accordion-target="#collapse-39" aria-expanded="false"
                    aria-controls="collapse-39">
                    Accordion Item #3
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-secondary"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-39" class="hidden border-t border-secondary p-3" aria-labelledby="heading-39">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Success</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-14" data-accordion="collapse" data-active-classes="bg-white text-success">
              <div class="accordion-item border border-success rounded mb-3">
                <h2 class="accordion-header" id="heading-40">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-success"
                    type="button" data-accordion-target="#collapse-40" aria-expanded="false"
                    aria-controls="collapse-40">
                    Accordion Item #1
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-success"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-40" class="hidden border-t border-success p-3" aria-labelledby="heading-40">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded border-success mb-3">
                <h2 class="accordion-header" id="heading-41">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-success"
                    type="button" data-accordion-target="#collapse-41" aria-expanded="false"
                    aria-controls="collapse-41">
                    Accordion Item #2
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-success"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-41" class="hidden border-t border-success p-3" aria-labelledby="heading-41">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-success rounded">
                <h2 class="accordion-header" id="heading-42">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-success"
                    type="button" data-accordion-target="#collapse-42" aria-expanded="false"
                    aria-controls="collapse-42">
                    Accordion Item #3
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-success"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-42" class="hidden border-t border-success p-3" aria-labelledby="heading-42">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Info</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-15" data-accordion="collapse" data-active-classes="bg-white text-info">
              <div class="accordion-item border border-info rounded mb-3">
                <h2 class="accordion-header" id="heading-43">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-info"
                    type="button" data-accordion-target="#collapse-43" aria-expanded="false"
                    aria-controls="collapse-43">
                    Accordion Item #1
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-info"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-43" class="hidden border-t border-info p-3" aria-labelledby="heading-43">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded border-info mb-3">
                <h2 class="accordion-header" id="heading-44">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-info"
                    type="button" data-accordion-target="#collapse-44" aria-expanded="false"
                    aria-controls="collapse-44">
                    Accordion Item #2
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-info"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-44" class="hidden border-t border-info p-3" aria-labelledby="heading-44">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-info rounded">
                <h2 class="accordion-header" id="heading-45">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-info"
                    type="button" data-accordion-target="#collapse-45" aria-expanded="false"
                    aria-controls="collapse-45">
                    Accordion Item #3
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-info"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-45" class="hidden border-t border-info p-3" aria-labelledby="heading-45">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Warning</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-16" data-accordion="collapse" data-active-classes="bg-white text-warning">
              <div class="accordion-item border border-warning rounded mb-3">
                <h2 class="accordion-header" id="heading-46">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-warning"
                    type="button" data-accordion-target="#collapse-46" aria-expanded="false"
                    aria-controls="collapse-46">
                    Accordion Item #1
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-warning"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-46" class="hidden border-t border-warning p-3" aria-labelledby="heading-46">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded border-warning mb-3">
                <h2 class="accordion-header" id="heading-47">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-warning"
                    type="button" data-accordion-target="#collapse-47" aria-expanded="false"
                    aria-controls="collapse-47">
                    Accordion Item #2
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-warning"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-47" class="hidden border-t border-warning p-3" aria-labelledby="heading-47">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-warning rounded">
                <h2 class="accordion-header" id="heading-48">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-warning"
                    type="button" data-accordion-target="#collapse-48" aria-expanded="false"
                    aria-controls="collapse-48">
                    Accordion Item #3
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-warning"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-48" class="hidden border-t border-warning p-3" aria-labelledby="heading-48">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Danger</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-17" data-accordion="collapse" data-active-classes="bg-white text-danger">
              <div class="accordion-item border border-danger rounded mb-3">
                <h2 class="accordion-header" id="heading-49">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-danger"
                    type="button" data-accordion-target="#collapse-49" aria-expanded="false"
                    aria-controls="collapse-49">
                    Accordion Item #1
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-danger"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-49" class="hidden border-t border-danger p-3" aria-labelledby="heading-49">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded border-danger mb-3">
                <h2 class="accordion-header" id="heading-50">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-danger"
                    type="button" data-accordion-target="#collapse-50" aria-expanded="false"
                    aria-controls="collapse-50">
                    Accordion Item #2
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-danger"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-50" class="hidden border-t border-danger p-3" aria-labelledby="heading-50">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-danger rounded">
                <h2 class="accordion-header" id="heading-51">
                  <button class="flex justify-between rounded items-center text-sm w-full p-3 text-start text-danger"
                    type="button" data-accordion-target="#collapse-51" aria-expanded="false"
                    aria-controls="collapse-51">
                    Accordion Item #3
                    <span class="w-5 h-5 flex items-center justify-center rounded-full border border-danger"><i
                        class="ti ti-chevron-down"></i></span>
                  </button>
                </h2>
                <div id="collapse-51" class="hidden border-t border-danger p-3" aria-labelledby="heading-51">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Left Aligned Icons</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-18" data-accordion="collapse">
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-52">
                  <button class="flex items-center text-sm w-full p-3 text-start text-gray-300" type="button"
                    data-accordion-target="#collapse-52" aria-expanded="true" aria-controls="collapse-52">
                    <span class="block me-2"><i class="ti ti-chevron-down"></i></span>
                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapse-52" class="hidden p-3" aria-labelledby="heading-52">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-53">
                  <button class="flex items-center text-sm w-full p-3 text-start text-gray-300" type="button"
                    data-accordion-target="#collapse-53" aria-expanded="false" aria-controls="collapse-53">
                    <span class="block me-2"><i class="ti ti-chevron-down"></i></span>
                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapse-53" class="hidden p-3" aria-labelledby="heading-53">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded">
                <h2 class="accordion-header" id="heading-54">
                  <button class="flex items-center text-sm w-full p-3 text-start text-gray-300" type="button"
                    data-accordion-target="#collapse-54" aria-expanded="false" aria-controls="collapse-54">
                    <span class="block me-2"><i class="ti ti-chevron-down"></i></span>
                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapse-54" class="hidden p-3" aria-labelledby="heading-54">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Without Icon</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-19" data-accordion="collapse">
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-55">
                  <button class="flex items-center text-sm w-full p-3 text-start text-gray-300" type="button"
                    data-accordion-target="#collapse-55" aria-expanded="true" aria-controls="collapse-55">

                    Accordion Item #1
                  </button>
                </h2>
                <div id="collapse-55" class="hidden p-3" aria-labelledby="heading-55">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-56">
                  <button class="flex items-center text-sm w-full p-3 text-start text-gray-300" type="button"
                    data-accordion-target="#collapse-56" aria-expanded="false" aria-controls="collapse-56">

                    Accordion Item #2
                  </button>
                </h2>
                <div id="collapse-56" class="hidden p-3" aria-labelledby="heading-56">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded">
                <h2 class="accordion-header" id="heading-57">
                  <button class="flex items-center text-sm w-full p-3 text-start text-gray-300" type="button"
                    data-accordion-target="#collapse-57" aria-expanded="false" aria-controls="collapse-57">

                    Accordion Item #3
                  </button>
                </h2>
                <div id="collapse-57" class="hidden p-3" aria-labelledby="heading-57">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Custom Icon Accordion</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-20" data-accordion="collapse">
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-61">
                  <button class="flex items-center justify-between text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-61" aria-expanded="true" aria-controls="collapse-61">

                    Accordion Item #1
                    <span class="w-5 h-5 bg-light rounded-full flex items-center justify-center me-2"><i
                        class="ti ti-plus"></i></span>
                  </button>
                </h2>
                <div id="collapse-61" class="hidden p-3" aria-labelledby="heading-61">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded mb-3">
                <h2 class="accordion-header" id="heading-62">
                  <button class="flex items-center justify-between text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-62" aria-expanded="false"
                    aria-controls="collapse-62">

                    Accordion Item #2
                    <span class="w-5 h-5 bg-light rounded-full flex items-center justify-center me-2"><i
                        class="ti ti-plus"></i></span>
                  </button>
                </h2>
                <div id="collapse-62" class="hidden p-3" aria-labelledby="heading-62">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border rounded">
                <h2 class="accordion-header" id="heading-63">
                  <button class="flex items-center justify-between text-sm w-full p-3 text-start text-gray-300"
                    type="button" data-accordion-target="#collapse-63" aria-expanded="false"
                    aria-controls="collapse-63">
                    Accordion Item #3
                    <span class="w-5 h-5 bg-light rounded-full flex items-center justify-center me-2"><i
                        class="ti ti-plus"></i></span>
                  </button>
                </h2>
                <div id="collapse-63" class="hidden p-3" aria-labelledby="heading-63">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Custom Accordion</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-21" data-accordion="collapse">
              <div class="accordion-item bg-primary-100 border border-l-[5px] border-l-primary-500 rounded mb-3">
                <h2 class="accordion-header" id="heading-58">
                  <button
                    class="flex items-center justify-between text-sm w-full p-3 text-start text-gray-800 bg-primary-100"
                    type="button" data-accordion-target="#collapse-58" aria-expanded="true" aria-controls="collapse-58">

                    Accordion Item #1
                    <span class="w-5 h-5 bg-light rounded-full flex items-center justify-center me-2"><i
                        class="ti ti-plus"></i></span>
                  </button>
                </h2>
                <div id="collapse-58" class="hidden p-3" aria-labelledby="heading-58">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-l-[5px] border-l-secondary-500 bg-secondary-100 rounded mb-3">
                <h2 class="accordion-header" id="heading-59">
                  <button
                    class="flex items-center justify-between text-sm w-full p-3 text-start text-gray-800 bg-secondary-100"
                    type="button" data-accordion-target="#collapse-59" aria-expanded="false"
                    aria-controls="collapse-59">

                    Accordion Item #2
                    <span class="w-5 h-5 bg-light rounded-full flex items-center justify-center me-2"><i
                        class="ti ti-plus"></i></span>
                  </button>
                </h2>
                <div id="collapse-59" class="hidden p-3" aria-labelledby="heading-59">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the second item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item border border-l-[5px] border-l-danger-500 bg-danger-100 rounded">
                <h2 class="accordion-header" id="heading-60">
                  <button
                    class="flex items-center justify-between text-sm w-full p-3 text-start text-gray-800 bg-danger-100"
                    type="button" data-accordion-target="#collapse-60" aria-expanded="false"
                    aria-controls="collapse-60">
                    Accordion Item #3
                    <span class="w-5 h-5 bg-light rounded-full flex items-center justify-center me-2"><i
                        class="ti ti-plus"></i></span>
                  </button>
                </h2>
                <div id="collapse-60" class="hidden p-3" aria-labelledby="heading-60">
                  <div class="accordion-body text-[12px]">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code class="text-danger">.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Example</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-22" data-accordion="collapse">
              <h2 class="accordion-header bg-transparent" id="heading-64">
                <button class="btn btn-primary text-sm text-white bg-primary me-2" type="button"
                  data-accordion-target="#collapse-64" aria-expanded="true" aria-controls="collapse-64">
                  Link with href
                </button>
                <button class="btn btn-secondary text-sm text-white bg-secondary" type="button"
                  data-accordion-target="#collapse-64" aria-expanded="true" aria-controls="collapse-64">
                  Button with data-accordion-target
                </button>
              </h2>
              <div id="collapse-64" class="hidden p-3 px-0" aria-labelledby="heading-64">
                <div class="accordion-body text-[12px] border rounded p-5">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                  the user activates the relevant trigger.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Targets Collapse</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-23" data-accordion="collapse">
              <h2 class="accordion-header bg-transparent" id="heading-65">
                <button class="btn btn-primary text-sm text-white bg-primary me-2" type="button"
                  data-accordion-target="#collapse-65" aria-expanded="true" aria-controls="collapse-65">
                  Toggle first element
                </button>
                <button class="btn btn-success text-sm text-white bg-success" type="button"
                  data-accordion-target="#collapse-66" aria-expanded="true" aria-controls="collapse-66">
                  Toggle second element
                </button>
              </h2>
              <div class="grid grid-cols-1 xl:grid-cols-2">
                <div id="collapse-65" class="hidden p-3 px-0" aria-labelledby="heading-65">
                  <div class="accordion-body text-[12px] border rounded p-5">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed
                    when the user activates the relevant trigger.
                  </div>
                </div>
                <div id="collapse-66" class="hidden p-3 px-0" aria-labelledby="heading-66">
                  <div class="accordion-body text-[12px] border rounded p-5">
                    Some placeholder content for the collapse component. This panel is hidden by default but revealed
                    when the user activates the relevant trigger.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
            <h5>Horizontal Collapse</h5>
          </div>
          <div class="card-body p-5">
            <div id="accordion-collapse-24" data-accordion="collapse">
              <h2 class="accordion-header bg-transparent" id="heading-67">
                <button class="btn btn-primary text-sm text-white bg-primary" type="button"
                  data-accordion-target="#collapse-67" aria-expanded="true" aria-controls="collapse-67">
                  Toggle width collapse
                </button>
              </h2>
              <div id="collapse-67" class="hidden p-3 px-0" aria-labelledby="heading-67">
                <div class="accordion-body text-[12px] border rounded p-5">
                  Some placeholder content for the collapse component. This panel is hidden by default but revealed when
                  the user activates the relevant trigger.
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
