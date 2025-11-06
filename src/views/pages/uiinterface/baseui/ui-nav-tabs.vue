<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

<div class="content p-5 pb-0">

  <!-- Page Header -->
  <div class="mb-7">
    <h4 class="mb-1 text-xl font-bold flex items-center">
      Tabs
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
        <li class="text-dark font-medium" aria-current="page">Tabs</li>
      </ol>
    </nav>
  </div>
  <!-- End Page Header -->

  <!-- Line Tabs -->
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Top line tabs</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab" data-tabs-toggle="#company-tab-content" data-tabs-active-classes="text-primary hover:text-primary border-primary" data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary" role="tablist">
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border-t-2" data-tabs-target="#company-basic" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border-t-2" data-tabs-target="#company-address" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border-t-2" data-tabs-target="#company-social" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content">
            <div class="hidden " id="company-basic" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Top line justified</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap justify-between text-sm font-medium text-center mb-3" id="default-styled-tab2" data-tabs-toggle="#company-tab-content2" data-tabs-active-classes="text-primary hover:text-primary border-primary" data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary" role="tablist">
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block py-2 px-4 w-full border-t-2" data-tabs-target="#company-basic2" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block py-2 px-4 w-full border-t-2" data-tabs-target="#company-address2" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block py-2 px-4 w-full border-t-2" data-tabs-target="#company-social2" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content2">
            <div class="hidden " id="company-basic2" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address2" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social2" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Bottom line tabs</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab3" data-tabs-toggle="#company-tab-content3" data-tabs-active-classes="text-primary hover:text-primary border-primary" data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary" role="tablist">
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-basic3" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-address3" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border-b-2" data-tabs-target="#company-social3" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content3">
            <div class="hidden " id="company-basic3" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address3" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social3" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Bottom line justified</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap justify-between text-sm font-medium text-center mb-3" id="default-styled-tab4" data-tabs-toggle="#company-tab-content4" data-tabs-active-classes="text-primary hover:text-primary border-primary" data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary" role="tablist">
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block py-2 px-4 w-full border-b-2" data-tabs-target="#company-basic4" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block py-2 px-4 w-full border-b-2" data-tabs-target="#company-address4" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block py-2 px-4 w-full border-b-2" data-tabs-target="#company-social4" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content4">
            <div class="hidden " id="company-basic4" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address4" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social4" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Solid tabs</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab5" data-tabs-toggle="#company-tab-content5" data-tabs-active-classes="text-white hover:text-white bg-primary" data-tabs-inactive-classes="text-gray-500 hover:text-white border-transparent hover:bg-primary" role="tablist">
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 " data-tabs-target="#company-basic5" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 " data-tabs-target="#company-address5" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 " data-tabs-target="#company-social5" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content5">
            <div class="hidden " id="company-basic5" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address5" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social5" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Solid justified</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap justify-between text-sm font-medium text-center mb-3" id="default-styled-tab6" data-tabs-toggle="#company-tab-content6" data-tabs-active-classes="text-white hover:text-white bg-primary" data-tabs-inactive-classes="text-gray-500 hover:text-white border-transparent hover:bg-primary" role="tablist">
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full py-2 px-4 " data-tabs-target="#company-basic6" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full py-2 px-4 " data-tabs-target="#company-address6" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full py-2 px-4 " data-tabs-target="#company-social6" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content6">
            <div class="hidden " id="company-basic6" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address6" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social6" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Solid Rounded</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab7" data-tabs-toggle="#company-tab-content7" data-tabs-active-classes="text-white hover:text-white bg-primary" data-tabs-inactive-classes="text-gray-500 hover:text-white border-transparent hover:bg-primary" role="tablist">
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 rounded-s-full rounded-e-full px-4 " data-tabs-target="#company-basic7" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded-s-full rounded-e-full py-2 px-4 " data-tabs-target="#company-address7" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded-s-full rounded-e-full py-2 px-4 " data-tabs-target="#company-social7" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content7">
            <div class="hidden " id="company-basic7" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address7" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social7" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Rounded justified</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap justify-between text-sm font-medium text-center mb-3" id="default-styled-tab8" data-tabs-toggle="#company-tab-content8" data-tabs-active-classes="text-white hover:text-white bg-primary" data-tabs-inactive-classes="text-gray-500 hover:text-white border-transparent hover:bg-primary" role="tablist">
            <li class="me-8 flex-1" role="presentation">
              <button class="inline-block w-full rounded-s-full rounded-e-full py-2 px-4 " data-tabs-target="#company-basic8" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full rounded-s-full rounded-e-full py-2 px-4 " data-tabs-target="#company-address8" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full rounded-s-full rounded-e-full py-2 px-4 " data-tabs-target="#company-social8" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content8">
            <div class="hidden " id="company-basic8" role="tabpanel">Tab content 1</div>
            <div class="hidden" id="company-address8" role="tabpanel">Tab content 2</div>
            <div class="hidden" id="company-social8" role="tabpanel">Tab content 3</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Static Tabs</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap text-sm font-medium text-center mb-3" role="tablist">
            <li class="me-8" role="presentation">
              <button class="inline-block rounded border py-2 px-4 "type="button" role="tab" aria-selected="false">Active</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded py-2 px-4 " type="button" role="tab" aria-selected="false">Link</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded py-2 px-4 " type="button" role="tab" aria-selected="false">Link</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded py-2 px-4 cursor-not-allowed dark:text-gray-500"  type="button" role="tab" aria-selected="false">Disabled</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Static Pills</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap text-sm font-medium text-center mb-3" role="tablist">
            <li class="me-8" role="presentation">
              <button class="inline-block rounded bg-primary text-white py-2 px-4 "type="button" role="tab" aria-selected="false">Active</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded py-2 px-4 " type="button" role="tab" aria-selected="false">Link</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded py-2 px-4 " type="button" role="tab" aria-selected="false">Link</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block rounded py-2 px-4 cursor-not-allowed dark:text-gray-500" type="button" role="tab" aria-selected="false">Disabled</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Default Nav Tabs</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab11" data-tabs-toggle="#company-tab-content11" data-tabs-active-classes="text-primary hover:text-primary border-light" data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary" role="tablist">
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-basic11" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-address11" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li class="me-6" role="presentation">
              <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-social14" type="button" role="tab" aria-selected="false">Messages</button>
            </li>
          </ul>
          <div id="company-tab-content">
            <div class="hidden " id="company-basic11" role="tabpanel"><b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries.</div>
            <div class="hidden" id="company-address11" role="tabpanel">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
              in a piece of classical Latin literature from 45 BC, <b>Making it over 2000
                years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin words, consectetur.</div>
            <div class="hidden" id="company-social14" role="tabpanel">There are many variations of passages of <b>Lorem Ipsum available</b>, but the
              majority have suffered alteration in some form, by injected humour, or
              randomised words which don't look even slightly believable. If you are going to
              use a passage of Lorem Ipsum, you need to be sure there isn't anything.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Justified Nav Tabs</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap justify-between text-sm font-medium text-center mb-3" id="default-styled-tab12" data-tabs-toggle="#company-tab-content12" data-tabs-active-classes="text-white hover:text-white bg-primary" data-tabs-inactive-classes="text-gray-500 hover:text-white border-transparent hover:bg-primary" role="tablist">
            <li class="me-8 flex-1" role="presentation">
              <button class="inline-block w-full rounded py-2 px-4 " data-tabs-target="#company-basic12" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full rounded py-2 px-4 " data-tabs-target="#company-address12" type="button" role="tab" aria-selected="false">About</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full rounded py-2 px-4 " data-tabs-target="#company-social15" type="button" role="tab" aria-selected="false">Services</button>
            </li>
          </ul>
          <div id="company-tab-content12">
            <div class="hidden " id="company-basic12" role="tabpanel">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, Making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</div>
            <div class="hidden" id="company-address12" role="tabpanel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
            <div class="hidden" id="company-social15" role="tabpanel">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Vertical alignment with lists</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid grid-cols-1 md:grid-cols-12">
            <div class="col-span-3">
              <ul class="flex flex-col flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab13" data-tabs-toggle="#company-tab-content13" data-tabs-active-classes="text-primary hover:text-primary border-light" data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary" role="tablist">
                <li class="me-6" role="presentation">
                  <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-basic13" type="button" role="tab" aria-selected="false">Home</button>
                </li>
                <li class="me-6" role="presentation">
                  <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-address13" type="button" role="tab" aria-selected="false">Profile</button>
                </li>
                <li class="me-6" role="presentation">
                  <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-social16" type="button" role="tab" aria-selected="false">Messages</button>
                </li>
              </ul>
            </div>
            <div class="col-span-9">
              <div id="company-tab-content">
                <div class="hidden " id="company-basic13" role="tabpanel"><b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries.</div>
                <div class="hidden" id="company-address13" role="tabpanel">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, <b>Making it over 2000
                    years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin words, consectetur.</div>
                <div class="hidden" id="company-social16" role="tabpanel">There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If you are going to
                  use a passage of Lorem Ipsum, you need to be sure there isn't anything.</div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Vertical alignment with links</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid grid-cols-1 md:grid-cols-12">
            <div class="col-span-3">
              <ul class="flex flex-col flex-wrap text-sm font-medium text-center mb-3" id="default-styled-tab14" data-tabs-toggle="#company-tab-content14" data-tabs-active-classes="text-white hover:text-primary bg-primary" data-tabs-inactive-classes="text-gray-500 hover:text-primary border-transparent hover:border-primary" role="tablist">
                <li class="me-6" role="presentation">
                  <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-basic14" type="button" role="tab" aria-selected="false">Home</button>
                </li>
                <li class="me-6" role="presentation">
                  <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-address14" type="button" role="tab" aria-selected="false">Profile</button>
                </li>
                <li class="me-6" role="presentation">
                  <button class="inline-block py-2 px-4 border rounded" data-tabs-target="#company-social17" type="button" role="tab" aria-selected="false">Messages</button>
                </li>
              </ul>
            </div>
            <div class="col-span-9">
              <div id="company-tab-content">
                <div class="hidden " id="company-basic14" role="tabpanel"><b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                  1500s, when an unknown printer took a galley of type and scrambled it to make a
                  type specimen book. It has survived not only five centuries.</div>
                <div class="hidden" id="company-address14" role="tabpanel">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                  in a piece of classical Latin literature from 45 BC, <b>Making it over 2000
                    years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin words, consectetur.</div>
                <div class="hidden" id="company-social17" role="tabpanel">There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                  majority have suffered alteration in some form, by injected humour, or
                  randomised words which don't look even slightly believable. If you are going to
                  use a passage of Lorem Ipsum, you need to be sure there isn't anything.</div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
  <!-- /Line Tabs -->
  <div class="grid grid-cols-1">
    <div class="col-md-6">
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Working with flex utilities</h5>
        </div>
        <div class="card-body p-4">
          <ul class="flex flex-wrap justify-between text-sm font-medium text-center mb-3" id="default-styled-tab16" data-tabs-toggle="#company-tab-content16" data-tabs-active-classes="text-white hover:text-white bg-primary" data-tabs-inactive-classes="text-gray-500 hover:text-white border-transparent hover:bg-primary" role="tablist">
            <li class="me-8 flex-1" role="presentation">
              <button class="inline-block w-full rounded py-2 px-4 " data-tabs-target="#company-basic16" type="button" role="tab" aria-selected="false">Home</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full rounded py-2 px-4 " data-tabs-target="#company-address16" type="button" role="tab" aria-selected="false">About</button>
            </li>
            <li class="me-6 flex-1" role="presentation">
              <button class="inline-block w-full rounded py-2 px-4 " data-tabs-target="#company-social20" type="button" role="tab" aria-selected="false">Services</button>
            </li>
          </ul>
          <div id="company-tab-content12">
            <div class="hidden " id="company-basic16" role="tabpanel">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, Making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</div>
            <div class="hidden" id="company-address16" role="tabpanel">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</div>
            <div class="hidden" id="company-social20" role="tabpanel">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.</div>
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