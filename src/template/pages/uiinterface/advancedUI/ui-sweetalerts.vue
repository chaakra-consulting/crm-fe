<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Sweet Alert 2
        </h4>
        <nav aria-label="breadcrumb">
          <ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
            <li>
              <router-link to="/dashboard/" class="hover:underline text-gray-700">Home</router-link>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li>
              <a href="javascript:void(0);" class="hover:underline text-gray-700">Advanced UI</a>
              <span><i class="ti ti-chevron-right"></i></span>
            </li>
            <li class="text-dark font-medium" aria-current="page">Sweet Alert 2</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1">
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4">
            <h5 class="card-title">Basic Examples</h5>
          </div>
          <div class="card-body p-4">

            <p class="mb-3">SweetAlert automatically centers itself on the page and looks great no matter if
              you're using a desktop
              computer, mobile or tablet. It's even highly customizable, as you can see below!</p>
            <button type="button" class="btn btn-outline-primary me-1 mb-1" @click="basicAlert">Basic</button>
            <button type="button" class="btn btn-outline-primary me-1 mb-1" @click="withTitle">With
              Title</button>
            <button type="button" class="btn btn-outline-primary me-1 mb-1" @click="withFooter">With
              Footer</button>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4">
            <h5 class="card-title">Position</h5>
          </div>
          <div class="card-body p-4">

            <p class="mb-3">You can specify position of your alert with
              <code>position : { top-start | top-end | bottom-start | bottom-end }</code> in js.
            </p>
            <button class="btn btn-outline-success me-1 mb-1" @click="positionTopStart">Top
              Start</button>
            <button class="btn btn-outline-success me-1 mb-1" @click="positionTopEnd">Top End</button>
            <button class="btn btn-outline-success me-1 mb-1" @click="positionBottomStart">Bottom
              Starts</button>
            <button class="btn btn-outline-success me-1 mb-1" @click="positionBottomEnd">Bottom
              End</button>
          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4">
            <h5 class="card-title">Types</h5>
          </div>
          <div class="card-body p-4">

            <p class="mb-3">The type of the modal. SweetAlert comes with 4 built-in types which will show a
              corresponding icon animation:
              "warning", "error", "success" and "info". You can also set it as "input" to get a
              prompt modal. It can either
              be put in the object under the key "icon" or passed as the third parameter of the
              function.</p>
            <button type="button" class="btn btn-outline-success me-1 mb-1" @click="typeSuccess">Success</button>
            <button type="button" class="btn btn-outline-info me-1 mb-1" @click="typeInfo">Info</button>
            <button type="button" class="btn btn-outline-warning me-1 mb-1" @click="typeWarning">Warning</button>
            <button type="button" class="btn btn-outline-danger me-1 mb-1" @click="typeError">Error</button>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4">
            <h5 class="card-title">Options</h5>
          </div>
          <div class="card-body p-4">

            <button type="button" class="btn btn-outline-primary me-1 mb-1" @click="autoClose">Auto
              Close</button>
            <button type="button" class="btn btn-outline-primary me-1 mb-1" @click="outsideClick">Click
              Outside</button>
            <button type="button" class="btn btn-outline-primary me-1 mb-1" @click="promptFunction">Question</button>

          </div>
        </div>
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-b p-4">
            <h5 class="card-title">Previous and Next</h5>
          </div>
          <div class="card-body p-4">
            <h5>Confirm Button Text</h5>
            <p class="mb-3">Use <code>confirmButtonText: "Your text here!"</code> option to change the text of
              the "Confirm" button.</p>
            <button type="button" class="mb-3 btn btn-outline-primary mb-3" @click="confirmText">Confirm
              Text</button>
            <h5>Confirm Button Color</h5>
            <p class="mb-3">Use <code>confirmButtonClass: "btn btn-{colorName}"</code> option to change the color
              of the "Confirm" button.</p>
            <button type="button" class="btn btn-outline-primary" @click="confirmColor">Confirm
              Button Color</button>

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
  name: "sweet-alerts",
  methods: {
    basicAlert() {
      this.$swal("Here's a message!");
    },
    withTitle() {
      this.$swal("Here's a message!", "It's pretty, isn't it?");
    },
    withFooter() {
      this.$swal({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: "<a href>Why do I have this issue?</a>",
      });
    },
    positionTopStart() {
      this.$swal({
        position: "top-start",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    positionTopEnd() {
      this.$swal({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    positionBottomStart() {
      this.$swal({
        position: "bottom-start",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    positionBottomEnd() {
      this.$swal({
        position: "bottom-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    typeSuccess() {
      this.$swal("Good job!", "You clicked the button!", "success");
    },
    typeInfo() {
      this.$swal("Info!", "You clicked the button!", "info");
    },
    typeWarning() {
      this.$swal("Warning!", "You clicked the button!", "warning");
    },
    typeError() {
      this.$swal("Error!", "You clicked the button!", "error");
    },
    autoClose() {
      this.$swal({
        title: "Auto close alert!",
        text: "I will close in 2 seconds.",
        timer: 2000,
      }).then(
        function () {},
        // handling the promise rejection
        function (dismiss) {
          if (dismiss === "timer") {
            console.log("I was closed by the timer");
          }
        }
      );
    },
    outsideClick() {
      this.$swal({
        title: "Click outside to close!",
        text: "This is a cool message!",
        allowOutsideClick: true,
      });
    },
    promptFunction() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    confirmText() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        } else if (result.dismiss === "cancel") {
          this.$swal("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    },
    confirmColor() {
      this.$swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
  },
};
</script>

<style>
.container {
  text-align: center;
  margin-top: 20px;
}

button {
  margin: 5px;
}
</style>
