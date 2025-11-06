<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Table Basic
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Tables</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Table Basic</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="lg:grid grid-cols-12 gap-x-5">
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h4 class="card-title">Basic Table</h4>
            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto mb-0">
                  <thead class="table-head">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5 class="card-title">Striped Rows</h5>
            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto table-striped mb-0">
                  <thead class="table-head">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-gray-100">
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr class="bg-gray-100">
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:grid grid-cols-12 gap-x-5">
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5 class="card-title">Bordered Table</h5>
            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto table-bordered mb-0">
                  <thead class="table-head">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5 class="card-title">Borderless Table</h5>
            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto table-borderless mb-0">
                  <thead class="table-head">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5 class="card-title">Hover Rows</h5>
            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto table-hover mb-0">
                  <thead class="table-head">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr>
                      <td>Mary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr>
                      <td>July</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:grid grid-cols-12 gap-x-5">
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5 class="card-title">Contextual Classes</h5>
            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto mb-0">
                  <thead class="table-head">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Default</td>
                      <td>Defaultson</td>
                      <td>def@somemail.com</td>
                    </tr>
                    <tr class="table-primary">
                      <td>Primary</td>
                      <td>Doe</td>
                      <td>john@example.com</td>
                    </tr>
                    <tr class="table-secondary">
                      <td>Secondary</td>
                      <td>Moe</td>
                      <td>mary@example.com</td>
                    </tr>
                    <tr class="table-success">
                      <td>Success</td>
                      <td>Dooley</td>
                      <td>july@example.com</td>
                    </tr>
                    <tr class="table-danger">
                      <td>Danger</td>
                      <td>Refs</td>
                      <td>bo@example.com</td>
                    </tr>
                    <tr class="table-warning">
                      <td>Warning</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                    <tr class="table-info">
                      <td>Info</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                    <tr class="table-light">
                      <td>Light</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                    <tr class="table-dark">
                      <td>Dark</td>
                      <td>Activeson</td>
                      <td>act@example.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <h5 class="card-title">Responsive Tables</h5>
            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto table-nowrap mb-0">
                  <thead class="table-head">
                    <tr>
                      <th>#</th>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Anna</td>
                      <td>Pitt</td>
                      <td>35</td>
                      <td>New York</td>
                      <td>USA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:grid grid-cols-12 gap-x-5">
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <div class="card-title">
                Table Without Borders
              </div>

            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto text-nowrap table-borderless1">
                  <thead class="table-head">
                    <tr>
                      <th scope="col">User Name</th>
                      <th scope="col">Transaction Id</th>
                      <th scope="col">Created</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Harshrath</th>
                      <td>#5182-3467</td>
                      <td>24 May 2022</td>
                      <td><span class="badge bg-primary">Fixed</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Zozo Hadid</th>
                      <td>#5182-3412</td>
                      <td>02 July 2022</td>
                      <td><span class="badge bg-warning">In Progress</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Martiana</th>
                      <td>#5182-3423</td>
                      <td>15 April 2022</td>
                      <td><span class="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <th scope="row">Alex Carey</th>
                      <td>#5182-3456</td>
                      <td>17 March 2022</td>
                      <td><span class="badge bg-danger">Pending</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div
              class="card-header justify-between py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <div class="card-title">
                Striped rows
              </div>

            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto text-nowrap table-striped">
                  <thead class="table-head">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2022R-01</th>
                      <td>27-010-2022</td>
                      <td>Moracco</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 inline-block"></i>Download
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-02</th>
                      <td>28-10-2022</td>
                      <td>Thornton</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 inline-block"></i>Download
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-03</th>
                      <td>22-10-2022</td>
                      <td>Larry Bird</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 inline-block"></i>Download
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-04</th>
                      <td>29-09-2022</td>
                      <td>Erica Sean</td>
                      <td>
                        <button class="btn btn-sm btn-success btn-wave waves-effect waves-light">
                          <i class="feather-download align-middle me-2 inline-block"></i>Download
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div
              class="card-header justify-between py-4 px-5 flex items-center justify-between flex-wrap border-b border-borderColor">
              <div class="card-title">
                Striped columns
              </div>

            </div>
            <div class="card-body p-5">
              <div class="table-responsive">
                <table class="table-auto text-nowrap table-striped-columns">
                  <thead class="table-head">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2022R-01</th>
                      <td>27-010-2022</td>
                      <td>Moracco</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 inline-block"></i>Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-02</th>
                      <td>28-10-2022</td>
                      <td>Thornton</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 inline-block"></i>Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-03</th>
                      <td>22-10-2022</td>
                      <td>Larry Bird</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 inline-block"></i>Delete
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2022R-04</th>
                      <td>29-09-2022</td>
                      <td>Erica Sean</td>
                      <td>
                        <button class="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                          <i class="feather-trash align-middle me-2 inline-block"></i>Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
export default {
  data() {
    return {
      title: "Home",
      text: "Basic Tables",
    };
  },
};
</script>
