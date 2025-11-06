<template>
  <!-- Paypal -->
  <div class="modal fade" id="add_paypal" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Paypal</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Paypal -->

  <!-- Stripe -->
  <div class="modal fade" id="add_stripe" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Stripe</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Stripe -->

  <!-- BrainTree -->
  <div class="modal fade" id="add_brain" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">BrainTree</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /BrainTree -->

  <!-- Skrill -->
  <div class="modal fade" id="add_skrill" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Skrill</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Skrill -->

  <!-- Razorpay -->
  <div class="modal fade" id="add_razor" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Razorpay</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Skrill -->

  <!-- Payoneer -->
  <div class="modal fade" id="add_payoneer" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Payoneer</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Payoneer -->

  <!-- Pay -->
  <div class="modal fade" id="add_pay" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Pay</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Pay -->

  <!-- Paytm -->
  <div class="modal fade" id="add_paytm" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Paytm</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Paytm -->

  <!-- Bank Transfer -->
  <div class="modal fade" id="add_bank" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Bank Transfer</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Bank Transfer -->

  <!-- Cash on delivery -->
  <div class="modal fade" id="add_cash" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Cash On Delivery</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 d-flex align-items-center justify-content-center rounded-circle"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label"
                >From Email Address <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
            <div class="mb-3">
              <label class="form-label">API Key <span class="text-danger">*</span></label>
              <input type="text" class="form-control" />
            </div>
            <div class="mb-0">
              <label class="form-label"
                >Secret Key <span class="text-danger">*</span></label
              >
              <input type="text" class="form-control" />
            </div>
          </div>
          <div class="modal-footer">
            <div class="d-flex align-items-center justify-content-end m-0">
              <a href="javascript:void(0);" class="btn btn-sm btn-light me-2" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button
                type="submit"
                class="btn btn-sm btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Paytm -->
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
