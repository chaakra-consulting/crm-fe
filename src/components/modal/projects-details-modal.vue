<template>
  <!-- delete modal -->
  <div class="modal fade" id="delete_call">
    <div class="modal-dialog modal-dialog-centered modal-sm rounded-0">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center position-relative">
          <div class="mb-3 position-relative z-1">
            <span
              class="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove call log you selected.</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-2 w-100"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-primary position-relative z-1 w-100"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- delete modal -->
  <div class="modal fade" id="delete_note">
    <div class="modal-dialog modal-dialog-centered modal-sm rounded-0">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center position-relative">
          <div class="mb-3 position-relative z-1">
            <span
              class="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove note you selected.</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-2 w-100"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-primary position-relative z-1 w-100"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- delete modal -->
  <div class="modal fade" id="delete_file">
    <div class="modal-dialog modal-dialog-centered modal-sm rounded-0">
      <div class="modal-content rounded-0">
        <div class="modal-body p-4 text-center position-relative">
          <div class="mb-3 position-relative z-1">
            <span
              class="avatar avatar-xl badge-soft-danger border-0 text-danger rounded-circle"
              ><i class="ti ti-trash fs-24"></i
            ></span>
          </div>
          <h5 class="mb-1">Delete Confirmation</h5>
          <p class="mb-3">Are you sure you want to remove File you selected.</p>
          <div class="d-flex justify-content-center">
            <a
              href="javascript:void(0);"
              class="btn btn-light position-relative z-1 me-2 w-100"
              data-bs-dismiss="modal"
              >Cancel</a
            >
            <a
              href="javascript:void(0);"
              class="btn btn-primary position-relative z-1 w-100"
              data-bs-dismiss="modal"
              >Yes, Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- delete modal -->

  <!-- Add Note -->
  <div class="modal fade" id="add_notes" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Notes</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Title <span class="text-danger"> *</span></label>
              <input class="form-control" type="text" />
            </div>
            <div class="mb-3">
              <label class="form-label">Note <span class="text-danger"> *</span></label>
              <textarea class="form-control" rows="4"></textarea>
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Attachment <span class="text-danger">*</span></label
              >
              <div
                class="file-upload drag-file w-100 d-flex bg-light border shadow align-items-center justify-content-center flex-column"
              >
                <span class="upload-img d-block mb-1"
                  ><i class="ti ti-folder-open text-primary fs-16"></i
                ></span>
                <p class="mb-0 fs-14 text-dark">
                  Drop your files here or
                  <a
                    href="javascript:void(0);"
                    class="text-decoration-underline text-primary"
                    >browse</a
                  >
                </p>
                <input type="file" accept="video/image" />
                <p class="fs-13 mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7">
                <div class="card mb-0">
                  <div class="card-body p-2">
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
                    >
                      <div class="d-flex align-items-center me-3">
                        <span class="avatar bg-success me-2">
                          <i class="ti ti-file-spreadsheet fs-20"></i>
                        </span>
                        <div>
                          <h6 class="fw-medium fs-14 mb-1">Project Specs.xls</h6>
                          <p class="mb-0">365 KB</p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-xs rounded-circle bg-light text-dark"
                        ><i class="ti ti-arrow-down"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
            <button class="btn btn-primary" type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Add Note -->

  <!-- Edit Note -->
  <div class="modal fade" id="edit_notes" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Notes</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Title <span class="text-danger"> *</span></label>
              <input class="form-control" type="text" value="Team meet at Starbucks" />
            </div>
            <div class="mb-3">
              <label class="form-label">Note <span class="text-danger"> *</span></label>
              <textarea class="form-control" rows="4">
A project review evaluates the success of an initiative and identifies areas for improvement. </textarea
              >
            </div>
            <div class="mb-3">
              <label class="form-label"
                >Attachment <span class="text-danger">*</span></label
              >
              <div
                class="file-upload drag-file w-100 d-flex bg-light border shadow align-items-center justify-content-center flex-column"
              >
                <span class="upload-img d-block mb-1"
                  ><i class="ti ti-folder-open text-primary fs-16"></i
                ></span>
                <p class="mb-0 fs-14 text-dark">
                  Drop your files here or
                  <a
                    href="javascript:void(0);"
                    class="text-decoration-underline text-primary"
                    >browse</a
                  >
                </p>
                <input type="file" accept="video/image" />
                <p class="fs-13 mb-0">Maximum size : 50 MB</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7">
                <div class="card mb-0">
                  <div class="card-body p-2">
                    <div
                      class="d-flex align-items-center justify-content-between flex-wrap row-gap-3"
                    >
                      <div class="d-flex align-items-center me-3">
                        <span class="avatar bg-success me-2">
                          <i class="ti ti-file-spreadsheet fs-20"></i>
                        </span>
                        <div>
                          <h6 class="fw-medium fs-14 mb-1">Project Specs.xls</h6>
                          <p class="mb-0">365 KB</p>
                        </div>
                      </div>
                      <a
                        href="javascript:void(0);"
                        class="avatar avatar-xs rounded-circle bg-light text-dark"
                        ><i class="ti ti-arrow-down"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
            <button class="btn btn-primary" type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Note -->

  <!-- Create Call Log -->
  <div class="modal fade" id="create_call" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create Call Log</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Status <span class="text-danger"> *</span></label
                  >
                  <vue3-select
                    v-model="selected"
                    :options="StatusSele"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Follow Up Date <span class="text-danger">*</span></label
                  >
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker
                      v-model="valueOne"
                      class="form-control"
                      placeholder="dd/mm/yyyy"
                    />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Note <span class="text-danger"> *</span></label
                  >
                  <textarea class="form-control" rows="4"></textarea>
                </div>
                <div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="customCheck1" />
                    <label class="form-check-label" for="customCheck1"
                      >Create a follow up task</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
            <button class="btn btn-primary" type="submit">Create New</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Create Call Log -->

  <!-- Edit Call Log -->
  <div class="modal fade" id="edit_call" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Call Log</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <div class="mb-3">
                  <label class="form-label"
                    >Status <span class="text-danger"> *</span></label
                  >
                  <vue3-select
                    v-model="selectedOne"
                    :options="StatusSeleOne"
                    placeholder="Select"
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Follow Up Date <span class="text-danger">*</span></label
                  >
                  <div class="input-group w-auto input-group-flat">
                    <a-date-picker
                      v-model="valueTwo"
                      class="form-control"
                      placeholder="dd/mm/yyyy"
                    />
                    <span class="input-group-text">
                      <i class="ti ti-calendar"></i>
                    </span>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label"
                    >Note <span class="text-danger"> *</span></label
                  >
                  <textarea class="form-control" rows="4">
A project review evaluates the success of an initiative and identifies areas for improvement.</textarea
                  >
                </div>
                <div>
                  <div class="form-check mb-1">
                    <input type="checkbox" class="form-check-input" id="customCheck2" />
                    <label class="form-check-label" for="customCheck2"
                      >Create a follow up task</label
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <a class="btn btn-light" data-bs-dismiss="modal">Cancel</a>
            <button class="btn btn-primary" type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- /Edit Call Log -->

  <!-- Connect Account -->
  <div class="modal fade" id="create_email" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Connect Account</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label"
              >Account type <span class="text-danger"> *</span></label
            >
            <vue3-select
              v-model="selectedTwo"
              :options="AccountSele"
              placeholder="Select"
            />
          </div>
          <div>
            <h6 class="fs-14 fw-medium mb-2">Sync emails from</h6>
            <div>
              <div class="form-check mb-1">
                <input
                  type="radio"
                  id="customRadio14"
                  name="customRadio"
                  class="form-check-input"
                  checked
                />
                <label class="form-check-label" for="customRadio14">Now</label>
              </div>
              <div class="form-check mb-1">
                <input
                  type="radio"
                  id="customRadio15"
                  name="customRadio"
                  class="form-check-input"
                />
                <label class="form-check-label" for="customRadio15">1 Month Ago</label>
              </div>
              <div class="form-check mb-1">
                <input
                  type="radio"
                  id="customRadio16"
                  name="customRadio"
                  class="form-check-input"
                />
                <label class="form-check-label" for="customRadio16">3 Month Ago</label>
              </div>
              <div class="form-check mb-1">
                <input
                  type="radio"
                  id="customRadio17"
                  name="customRadio"
                  class="form-check-input"
                />
                <label class="form-check-label" for="customRadio17">6 Month Ago</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal"
            >Cancel</a
          >
          <button
            class="btn btn-primary"
            data-bs-target="#success_mail"
            data-bs-toggle="modal"
            data-bs-dismiss="modal"
          >
            Connect Account
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- /Connect Account -->

  <!-- Add File -->
  <div
    class="modal custom-modal fade custom-modal-two modal-padding"
    id="new_file"
    role="dialog"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Create New File</h5>
          <button
            type="button"
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="add-info-fieldset">
            <div class="add-details-wizard">
              <ul class="progress-bar-wizard">
                <li class="active me-3">
                  <span><i class="ti ti-file"></i></span>
                  <div class="multi-step-info">
                    <h6>Basic Info</h6>
                  </div>
                </li>
                <li>
                  <span><i class="ti ti-circle-plus"></i></span>
                  <div class="multi-step-info">
                    <h6>Add Recipient</h6>
                  </div>
                </li>
              </ul>
            </div>
            <fieldset id="first-field-file">
              <form>
                <div class="contact-input-set">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label">
                          Deal <span class="text-danger">*</span></label
                        >
                        <vue3-select
                          v-model="selectedThree"
                          :options="DealSele"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Document Type <span class="text-danger">*</span></label
                        >
                        <vue3-select
                          v-model="selectedFour"
                          :options="DocumentSele"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label class="form-label"
                          >Owner <span class="text-danger">*</span></label
                        >
                        <vue3-select
                          v-model="selectedFive"
                          :options="OwnerSele"
                          placeholder="Select"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Title <span class="text-danger">*</span></label
                        >
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="signature-wrap bg-light p-3 rounded border mb-3 pb-0">
                        <h6 class="fw-semibold mb-3">Signature</h6>
                        <ul class="nav sign-item">
                          <li class="nav-item mb-2">
                            <span
                              class="mb-0"
                              data-bs-toggle="tab"
                              data-bs-target="#nosign"
                            >
                              <input
                                type="radio"
                                class="status-radio"
                                id="sign1"
                                name="email"
                              />
                              <label for="sign1" class="text-body"
                                ><span class="sign-title text-dark d-block mb-1"
                                  >No Signature</span
                                >This document does not require a signature before
                                acceptance.</label
                              >
                            </span>
                          </li>
                          <li class="nav-item">
                            <span
                              class="active mb-0"
                              data-bs-toggle="tab"
                              data-bs-target="#use-esign"
                            >
                              <input
                                type="radio"
                                class="status-radio"
                                id="sign2"
                                name="email"
                                checked
                              />
                              <label for="sign2" class="text-body"
                                ><span class="sign-title text-dark d-block mb-1"
                                  >Use e-signature</span
                                >This document require e-signature before
                                acceptance.</label
                              >
                            </span>
                          </li>
                        </ul>
                        <div class="tab-content mt-3">
                          <div class="tab-pane show active" id="use-esign">
                            <div class="sign-content">
                              <div class="row">
                                <div class="col-md-6">
                                  <div class="mb-3">
                                    <label class="form-label"
                                      >Recipients Name
                                      <span class="text-danger">*</span></label
                                    >
                                    <input
                                      class="form-control"
                                      type="text"
                                      placeholder="Enter Name"
                                    />
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="d-flex align-items-center">
                                    <div class="float-none mb-3 me-3 w-100">
                                      <label class="form-label"
                                        >Recipients Email
                                        <span class="text-danger">*</span></label
                                      >
                                      <input
                                        class="form-control"
                                        type="text"
                                        placeholder="Email Address"
                                      />
                                    </div>
                                    <div class="input-btn">
                                      <a href="javascript:void(0);" class="add-sign"
                                        ><i class="ti ti-circle-plus"></i
                                      ></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="input-block mb-3">
                        <label class="form-label"
                          >Content <span class="text-danger">*</span></label
                        >
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="Add Content"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-lg-12 text-end form-wizard-button border-top pt-3">
                      <button class="btn btn-light me-2" type="reset">Cancel</button>
                      <button class="btn btn-primary wizard-next-btn" type="button">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </fieldset>
            <fieldset>
              <form>
                <div class="contact-input-set">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="signature-wrap bg-light p-3 rounded border mb-3 pb-0">
                        <h6 class="mb-2 fw-semibold fs-14">
                          Send the document to following signers
                        </h6>
                        <p>In order to send the document to the signers</p>
                        <div class="sign-content">
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label class="form-label"
                                  >Recipients Name
                                  <span class="text-danger">*</span></label
                                >
                                <input
                                  class="form-control"
                                  type="text"
                                  placeholder="Enter Name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="d-flex align-items-center">
                                <div class="float-none mb-3 me-3 w-100">
                                  <label class="form-label"
                                    >Recipients Email
                                    <span class="text-danger">*</span></label
                                  >
                                  <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Email Address"
                                  />
                                </div>
                                <div class="input-btn">
                                  <a href="javascript:void(0);" class="add-sign"
                                    ><i class="ti ti-circle-plus"></i
                                  ></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="form-label"
                          >Message Subject <span class="text-danger"> *</span></label
                        >
                        <input
                          class="form-control"
                          type="text"
                          placeholder="Enter Subject"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label"
                          >Message Text <span class="text-danger"> *</span></label
                        >
                        <textarea
                          class="form-control"
                          rows="3"
                          placeholder="Your document is ready"
                        ></textarea>
                      </div>
                      <button class="btn btn-light mb-3">Send Now</button>
                      <div
                        class="bg-soft-success text-success border border-success rounded p-2"
                      >
                        <p class="mb-0">
                          <i class="ti ti-circle-check-filled me-1"></i> Document sent
                          successfully to the selected recipients
                        </p>
                      </div>
                    </div>
                    <div
                      class="col-lg-12 text-end form-wizard-button pt-3 border-top mt-3"
                    >
                      <button class="btn btn-light me-2" type="reset">Cancel</button>
                      <button
                        class="btn btn-primary"
                        type="button"
                        data-bs-dismiss="modal"
                      >
                        Save & Next
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add File -->

  <!-- Add Contact -->
  <div class="modal custom-modal fade" id="add_contact" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Persons</h5>
          <button
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="access-wrap">
              <ul>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-19.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Darlee Robertson</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-20.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Sharon Roy</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-21.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Vaughan Lewis</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-01.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Jessica Louise</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Carol Thomas</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-22.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Dawn Mercha</a>
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="modal-btn text-end">
              <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Contact -->

  <!-- Add Owner -->
  <div class="modal custom-modal fade" id="owner" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add Deal Owner</h5>
          <button
            class="btn-close custom-btn-close border p-1 me-0 text-dark"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i class="ti ti-x"></i>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="access-wrap">
              <ul>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" checked class="form-check-input me-2" />
                    <span class="checkmarks"></span>
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-19.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Darlee Robertson</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="checkmarks"></span>
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-20.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Sharon Roy</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="checkmarks"></span>
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-21.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Vaughan Lewis</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="checkmarks"></span>
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-01.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Jessica Louise</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="checkmarks"></span>
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-16.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Carol Thomas</a>
                    </span>
                  </label>
                </li>
                <li class="select-people-checkbox">
                  <label class="checkboxs d-flex align-items-center mb-3">
                    <input type="checkbox" class="form-check-input me-2" />
                    <span class="checkmarks"></span>
                    <span class="people-profile">
                      <img
                        src="@/assets/img/profiles/avatar-22.jpg"
                        alt="img"
                        class="avatar avatar-sm rounded-circle"
                      />
                      <a href="javascript:void(0);">Dawn Mercha</a>
                    </span>
                  </label>
                </li>
              </ul>
            </div>
            <div class="modal-btn text-end">
              <a href="javascript:void(0);" class="btn btn-light" data-bs-dismiss="modal"
                >Cancel</a
              >
              <button type="submit" class="btn btn-primary">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- /Add Owner -->
</template>
<script>
import { ref } from "vue";
const valueOne = ref();
const ValueTwo = ref();
export default {
  data() {
    return {
      valueOne,
      ValueTwo,
      selected: null,
      selectedOne: null,
      selectedTwo: null,
      selectedThree: null,
      selectedFour: null,
      selectedFive: null,
      OwnerSele: [
        { label: "Select", value: "Select" },
        { label: "Admin", value: "Admin" },
        { label: "Jackson Daniel Byrne", value: "Jackson Daniel Byrne" },
      ],
      DocumentSele: [
        { label: "Select", value: "Select" },
        { label: "Contract", value: "Contract" },
        { label: "Proposal", value: "Proposal" },
        { label: "Quota", value: "Quota" },
      ],
      DealSele: [
        { label: "Select", value: "Select" },
        { label: "Collins", value: "Collins" },
        { label: "Wisozk", value: "Wisozk" },
        { label: "Walter", value: "Walter" },
      ],
      StatusSele: [
        { label: "Busy", value: "Busy" },
        { label: "Unavailable", value: "Unavailable" },
        { label: "No Answer", value: "No Answer" },
        { label: "Wrong Number", value: "Wrong Number" },
        { label: "Left Voice Message", value: "Left Voice Message" },
        { label: "Moving Forward", value: "Moving Forward" },
      ],
      AccountSele: [
        { label: "Imap", value: "Imap" },
        { label: "Outlook", value: "Outlook" },
        { label: "Gmail", value: "Gmail" },
      ],
      StatusSeleOne: [
        { label: "Busy", value: "Busy" },
        { label: "Unavailable", value: "Unavailable" },
        { label: "No Answer", value: "No Answer" },
        { label: "Wrong Number", value: "Wrong Number" },
        { label: "Left Voice Message", value: "Left Voice Message" },
        { label: "Moving Forward", value: "Moving Forward" },
        { label: "INC00020", value: "INC00020" },
        { label: "INC00019", value: "INC00019" },
      ],
    };
  },
};
</script>
