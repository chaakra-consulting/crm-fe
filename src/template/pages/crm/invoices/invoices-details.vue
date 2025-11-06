<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5">
      <div class="flex items-center justify-between mb-3">
        <h4 class="mb-0">Invoices Details</h4>
        <button class="btn btn-primary" type="button"><i class="ti ti-download me-1"></i>Download</button>
      </div>
      <div class="flex justify-center">
        <div class="w-full lg:w-10/12 mx-auto">
          <!-- start page header -->
          <h6 class="mb-3 font-normal text-[14px]"> <router-link to="/crm/invoices"><i class="ti ti-arrow-left me-1"></i>Back to
              Invoice</router-link></h6>
          <!-- end page header -->
          <div class="bg-white">
            <div class="p-4">
              <!-- Items -->
              <div class="flex items-center justify-between border-1 border-b border-borderColor pb-3 mb-3">
                <div>
                  <img src="@/assets/img/logo.svg" class="invoice-light-logo" width="140" alt="Img">
                  <img src="@/assets/img/logo-white.svg" class="dark-logo" width="140" alt="Img">
                  <p class="mb-0 mt-2">3099 Kennedy Court Framingham, MA 01702</p>
                </div>
                <div>
                  <p class="mb-1 font-semibold">Invoice No : <span class="text-primary">#INV0287</span></p>
                  <p class="mb-1">Invoice No : <span class="text-dark">12/09/2024</span></p>
                  <p class="mb-0">Due date : <span class="text-dark">12/10/2024</span></p>
                </div>
              </div>

              <div
                class="grid grid-cols-1 lg:grid-cols-12 gap-x-5 gap-y-4 pb-3 border-1 border-b border-borderColor mb-4">
                <div class="lg:col-span-4">
                  <h5 class="mb-2 text-[14px] font-medium">From</h5>
                  <h6 class="mb-1">Thomas Lawler</h6>
                  <p class="mb-1">2077 Chicago Avenue Orosi, CA 93647</p>
                  <p class="mb-1"> Email : <span class="text-dark"> tarala2445@gmail.com </span> </p>
                  <p class="mb-0"> Phone : <span class="text-dark"> +1 987 654 3210</span> </p>
                </div>
                <div class="lg:col-span-4">
                  <h5 class="mb-2 text-[14px] font-medium">To</h5>
                  <h6 class="mb-1">Sara Inc,.</h6>
                  <p class="mb-1">3103 Trainer Avenue Peoria, IL 61602</p>
                  <p class="mb-1"> Email : <span class="text-dark">sara_inc34@gmail.com</span> </p>
                  <p class="mb-0"> Phone : <span class="text-dark">+1 987 471 6589 </span> </p>
                </div>

                <div class="lg:col-span-4">
                  <h5 class="mb-2 text-[14px] font-medium">Payment Status </h5>
                  <span class="px-1.5 py-0.5 rounded text-[12px] text-white inline-flex bg-danger mb-2">Due in 10
                    Days</span>
                  <img src="@/assets/img/icons/invoice-qr.png" class="d-block" alt="Img">
                </div>

              </div>

              <!-- Items -->
              <div class="mb-4">
                <p class="mb-3">Invoice For : <span class="text-dark">Design & Development of Website</span> </p>
                <div>
                  <!-- Table List -->
                  <div class="table-responsive">
                    <table class="table table-nowrap border w-full">
                      <thead class="table-light">
                        <tr>
                          <th class="p-3 text-left">Job Description</th>
                          <th class="p-3 text-left">Qty</th>
                          <th class="p-3 text-left">Price</th>
                          <th class="p-3 text-left">Discount</th>
                          <th class="p-3 text-left">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td class="p-3">Design System</td>
                          <td class="p-3">1</td>
                          <td class="p-3">$5000</td>
                          <td class="p-3">$100</td>
                          <td class="p-3">$5000</td>
                        </tr>
                        <tr>
                          <td class="p-3">UX Strategy</td>
                          <td class="p-3">1</td>
                          <td class="p-3">$500</td>
                          <td class="p-3">$100</td>
                          <td class="p-3">$500</td>
                        </tr>
                        <tr>
                          <td class="p-3">Brand Guidellines</td>
                          <td class="p-3">1</td>
                          <td class="p-3">$5000</td>
                          <td class="p-3">$100</td>
                          <td class="p-3">$5000</td>
                        </tr>
                        <tr>
                          <td class="p-3">Social Media Template</td>
                          <td class="p-3">1</td>
                          <td class="p-3">$5000</td>
                          <td class="p-3">$100</td>
                          <td class="p-3">$5000</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                  <!-- /Table List -->
                </div>
              </div>
              <!-- etart row -->
              <div class="pb-3 mb-3 border-1 border-b border-borderColor ">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-x-5 items-center">
                  <div class="lg:col-span-6">
                    <div>
                      <div class=" mb-3">
                        <h6 class="mb-1 text-[14px] font-semibold"> Terms and Conditions </h6>
                        <p class="mb-0"> Please pay within 15 days from the date of invoice, overdue interest &copy; 14%
                          will be charged on delayed payments.</p>
                      </div>

                      <div>
                        <h6 class="mb-1 text-[14px] font-semibold"> Notes </h6>
                        <p class="mb-0"> Please quote invoice number when remitting funds.</p>
                      </div>
                    </div>
                  </div> <!-- end col -->
                  <div class="lg:col-span-6">
                    <div>
                      <div class="flex items-center justify-between border-b border-borderColor pb-2 mb-2">
                        <h6 class="text-[14px] font-medium mb-0">Sub Total</h6>
                        <h6 class="text-[14px] font-medium mb-0">$5500</h6>
                      </div>
                      <div class="flex items-center justify-between border-b border-borderColor pb-2 mb-2">
                        <h6 class="text-[14px] font-medium mb-0">Discount(0%)</h6>
                        <h6 class="text-[14px] font-medium mb-0">$400</h6>
                      </div>
                      <div class="flex items-center justify-between mb-3">
                        <h6 class="text-[14px] font-medium mb-0">VAT(5%)</h6>
                        <h6 class="text-[14px] font-medium mb-0">$54</h6>
                      </div>
                      <div class="flex items-center justify-between mb-1">
                        <h6 class="mb-0">TotalAMount</h6>
                        <h6 class="mb-0">$5775</h6>
                      </div>
                      <p>Amount in Words : Dollar Five thousand Seven Seventy Five</p>
                    </div>
                  </div> <!-- end col -->
                </div>
              </div>
              <!-- end row -->

              <!-- Items -->
              <div class="text-end border-b border-borderColor mb-3 pb-3">
                <div class="flex flex-col justify-end items-end">
                  <img src="@/assets/img/icons/signature-img.svg" alt="Img" class="img-fluid ">
                  <h6 class="text-[14px] font-semibold"> Ted M. Davis </h6>
                  <p class="fs-13 font-normal mb-0">Assistant Manager</p>
                </div>
              </div>

              <div class="text-center border-b border-borderColor pb-3 mb-3">
                <div class="text-center flex justify-center mb-3">
                  <img src="@/assets/img/logo.svg" class="invoice-light-logo text-center" width="130" alt="Img">
                  <img src="@/assets/img/logo-white.svg" class="dark-logo text-center" width="130" alt="Img">
                </div>
                <p class="fs-13 mb-1">Payment Made Via bank transfer / Cheque in the name of Thomas Lawler</p>
                <div class="flex items-center justify-center gap-3 flex-wrap">
                  <p class="mb-0">Bank Name : <span class="text-dark">HDFC Bank</span></p>
                  <p class="mb-0">Account Number : <span class="text-dark">45366287987</span></p>
                  <p class="mb-0">IFSC : <span class="text-dark">HDFC0018159</span></p>
                </div>
              </div>

              <div class="text-center flex items-center justify-end">
                <a href="#" class="btn btn-md btn-light me-2 flex items-center"> <i class="ti ti-copy me-1"></i>Clone
                  Invoice</a>
                <a href="#" class="btn btn-md btn-primary flex items-center"> <i class="ti ti-printer me-1"></i>Print
                  Invoice</a>
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
