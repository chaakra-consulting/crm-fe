<template>
  <!-- Main Wrapper -->

  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>

  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Clipboard
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
            <li class="text-dark font-medium" aria-current="page">Clipboard</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 gap-x-6">

        <!-- Drag Card -->
        <div>

          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-6">
              <h5 class="card-title">Copy from input</h5>
            </div>
            <div class="card-body p-4">
              <div class="clipboard">
                <form class="form-horizontal">
                  <input type="text" class="form-control mb-4" id="input-copy" v-model="message1">
                  <button type="button" class="mb-1 btn clip-btn btn-primary me-2" @click="copyText('input-copy')">
                    <i class="far fa-copy"></i> Copy from Input
                  </button>
                  <button type="button" class="mb-1 btn clip-btn btn-dark" @click="cutText('input-copy')">
                    <i class="fas fa-cut"></i> Cut from Input
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Copy from Text Area</h5>
            </div>
            <div class="card-body p-4">
              <div class="clipboard">
                <form class="form-horizontal">
                  <textarea class="form-control mb-4" rows="3" id="textarea-copy" v-model="message2"></textarea>
                  <button type="button" class="mb-1 btn clip-btn btn-primary me-2" @click="copyText('textarea-copy')">
                    <i class="far fa-copy"></i> Copy from Textarea
                  </button>
                  <button type="button" class="mb-1 btn clip-btn btn-dark" @click="cutText('textarea-copy')">
                    <i class="fas fa-cut"></i> Cut from Textarea
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Copy Text from Paragraph</h5>
            </div>
            <div class="card-body p-4">
              <div class="clipboard copy-txt">
                <p class="otp-pass">Here is your OTP <span id="paragraph-copy1">22991</span>.</p>
                <p class="mb-4">Please do not share it to anyone</p>
                <button type="button" class="mb-1 btn clip-btn btn-primary" @click="copyOTP()">
                  <i class="far fa-copy"></i> Copy OTP
                </button>
              </div>
            </div>
          </div>

          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Copy Hidden Text (Advanced)</h5>
            </div>
            <div class="card-body p-4">
              <div class="clipboard copy-txt">
                <p class="mb-4">Link -&gt; <span id="advanced-paragraph">http://www.example.com/example</span></p>
                <button type="button" class="mb-1 btn clip-btn btn-primary me-2" @click="copyText('advanced-paragraph')">
                  <i class="far fa-copy"></i> Copy Link
                </button>
                <button type="button" class="mb-1 btn clip-btn btn-warning" @click="copyDirectText('2291')">
                  <i class="far fa-copy"></i> Copy Hidden Code
                </button>
              </div>
            </div>
          </div>

        </div>
        <!-- /Drag Card -->
      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
  <!-- /Page Wrapper -->

  <!-- /Main Wrapper -->
</template>
<script>
export default {
  data() {
    return {
      title: "Home",
      text: "Clipboard",
      message1: "http://www.admin-dashboard.com",
      message2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    };
  },
  components: {},
  mounted() { },
  methods: {
    // Copy text from an element by ID
    async copyText(elementId) {
      try {
        const element = document.getElementById(elementId);
        if (!element) {
          this.showError(`Element not found: ${elementId}`);
          return;
        }
        if (element) {
          element.style.backgroundColor = "#007bff";
          element.style.color = "#fff";
        }

        const text = element.textContent?.trim() || element.innerText?.trim() || '';

        if (!text) {
          this.showError('No text content in element');
          return;
        }

        await navigator.clipboard.writeText(text);
        this.showSuccess(`Copied: "${text}"`);
      } catch (err) {
        this.showError('Failed to copy to clipboard');
      }
    },

    // Copy text directly (without element)
    async copyDirectText(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.showSuccess('Hidden code copied to clipboard!');
      } catch (err) {
        this.showError('Failed to copy to clipboard');
      }
    },

    // Copy OTP directly
    async copyOTP() {
      try {
        // Get the OTP text from the span element
        const otpElement = document.getElementById("paragraph-copy1");
        // Set visual feedback styles
        if (otpElement) {
          otpElement.style.backgroundColor = "#007bff";
          otpElement.style.color = "#fff";
        }
        const otpText = otpElement ? otpElement.textContent.trim() : '22991';

        await navigator.clipboard.writeText(otpText);
        this.showSuccess(`OTP copied: ${otpText}`);
      } catch (err) {
        this.showError('Failed to copy OTP');
      }
    },

    // Cut text from an element (copy + clear)
    async cutText(elementId) {
      try {
        const element = document.getElementById(elementId);
        const text = element.value || element.textContent || element.innerText;

        await navigator.clipboard.writeText(text);

        // Clear the element
        if (element.value !== undefined) {
          element.value = '';
          // Update v-model
          if (elementId === 'input-copy') this.message1 = '';
          if (elementId === 'textarea-copy') this.message2 = '';
        } else {
          element.textContent = '';
        }

        this.showSuccess('Cut to clipboard!');
      } catch (err) {
        this.showError('Failed to cut to clipboard');
      }
    },

    // Show success message
    showSuccess(message) {
      // You can integrate a toast notification here if needed
    },

    // Show error message
    showError(message) {
    },
  },
};
</script>
