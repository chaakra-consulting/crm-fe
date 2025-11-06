<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <div class="page-wrapper relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Button Group
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
            <li class="text-dark font-medium" aria-current="page">Button Group</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <div class="grid grid-cols-1 gap-x-6">

        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Default Buttons</h5>

          </div>
          <div class="card-body btn-group-showcase p-4">
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group inline-flex" role="group" aria-label="Basic example">
                  <button class="btn btn-primary" type="button">Left</button>
                  <button class="btn btn-primary rounded-0" type="button">Middle</button>
                  <button class="btn btn-primary rounded-s-0" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-secondary" type="button">Left</button>
                  <button class="btn btn-secondary" type="button">Middle</button>
                  <button class="btn btn-secondary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-success" type="button">Left</button>
                  <button class="btn btn-success" type="button">Middle</button>
                  <button class="btn btn-success" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-info" type="button">Left</button>
                  <button class="btn btn-info" type="button">Middle</button>
                  <button class="btn btn-info" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-warning" type="button">Left</button>
                  <button class="btn btn-warning" type="button">Middle</button>
                  <button class="btn btn-warning" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-danger" type="button">Left</button>
                  <button class="btn btn-danger" type="button">Middle</button>
                  <button class="btn btn-danger" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-light" type="button">Left</button>
                  <button class="btn btn-light" type="button">Middle</button>
                  <button class="btn btn-light" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-dark" type="button">Left</button>
                  <button class="btn btn-dark" type="button">Middle</button>
                  <button class="btn btn-dark" type="button">Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Buttons -->
        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline button group</h5>

          </div>
          <div class="card-body btn-group-showcase p-4">
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-primary" type="button">Left</button>
                  <button class="btn btn-outline-primary" type="button">Middle</button>
                  <button class="btn btn-outline-primary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-secondary" type="button">Left</button>
                  <button class="btn btn-outline-secondary" type="button">Middle</button>
                  <button class="btn btn-outline-secondary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-success" type="button">Left</button>
                  <button class="btn btn-outline-success" type="button">Middle</button>
                  <button class="btn btn-outline-success" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-info" type="button">Left</button>
                  <button class="btn btn-outline-info" type="button">Middle</button>
                  <button class="btn btn-outline-info" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-warning" type="button">Left</button>
                  <button class="btn btn-outline-warning" type="button">Middle</button>
                  <button class="btn btn-outline-warning" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-danger" type="button">Left</button>
                  <button class="btn btn-outline-danger" type="button">Middle</button>
                  <button class="btn btn-outline-danger" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-light txt-dark" type="button">Left</button>
                  <button class="btn btn-outline-light txt-dark" type="button">Middle</button>
                  <button class="btn btn-outline-light txt-dark" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-dark" type="button">Left</button>
                  <button class="btn btn-outline-dark" type="button">Middle</button>
                  <button class="btn btn-outline-dark" type="button">Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Buttons -->
        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Edges button group</h5>

          </div>
          <div class="card-body btn-group-showcase p-4">
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-primary" type="button">Left</button>
                  <button class="btn btn-primary" type="button">Middle</button>
                  <button class="btn btn-primary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-secondary" type="button">Left</button>
                  <button class="btn btn-secondary" type="button">Middle</button>
                  <button class="btn btn-secondary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-success" type="button">Left</button>
                  <button class="btn btn-success" type="button">Middle</button>
                  <button class="btn btn-success" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-info" type="button">Left</button>
                  <button class="btn btn-info" type="button">Middle</button>
                  <button class="btn btn-info" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-warning" type="button">Left</button>
                  <button class="btn btn-warning" type="button">Middle</button>
                  <button class="btn btn-warning" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-danger" type="button">Left</button>
                  <button class="btn btn-danger" type="button">Middle</button>
                  <button class="btn btn-danger" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-light" type="button">Left</button>
                  <button class="btn btn-light" type="button">Middle</button>
                  <button class="btn btn-light" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-dark" type="button">Left</button>
                  <button class="btn btn-dark" type="button">Middle</button>
                  <button class="btn btn-dark" type="button">Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Buttons -->
        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline Edges button</h5>

          </div>
          <div class="card-body btn-group-showcase p-4">
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-primary" type="button">Left</button>
                  <button class="btn btn-outline-primary" type="button">Middle</button>
                  <button class="btn btn-outline-primary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-secondary" type="button">Left</button>
                  <button class="btn btn-outline-secondary" type="button">Middle</button>
                  <button class="btn btn-outline-secondary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-success" type="button">Left</button>
                  <button class="btn btn-outline-success" type="button">Middle</button>
                  <button class="btn btn-outline-success" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-info" type="button">Left</button>
                  <button class="btn btn-outline-info" type="button">Middle</button>
                  <button class="btn btn-outline-info" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-warning" type="button">Left</button>
                  <button class="btn btn-outline-warning" type="button">Middle</button>
                  <button class="btn btn-outline-warning" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-danger" type="button">Left</button>
                  <button class="btn btn-outline-danger" type="button">Middle</button>
                  <button class="btn btn-outline-danger" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-light txt-dark" type="button">Left</button>
                  <button class="btn btn-outline-light txt-dark" type="button">Middle</button>
                  <button class="btn btn-outline-light txt-dark" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div class="btn-group btn-group-pill" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-dark" type="button">Left</button>
                  <button class="btn btn-outline-dark" type="button">Middle</button>
                  <button class="btn btn-outline-dark" type="button">Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Buttons -->
        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Flat button group</h5>

          </div>
          <div class="card-body btn-group-showcase p-4">
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-primary" type="button">Left</button>
                  <button class="btn btn-primary" type="button">Middle</button>
                  <button class="btn btn-primary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-secondary" type="button">Left</button>
                  <button class="btn btn-secondary" type="button">Middle</button>
                  <button class="btn btn-secondary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-success" type="button">Left</button>
                  <button class="btn btn-success" type="button">Middle</button>
                  <button class="btn btn-success" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-info" type="button">Left</button>
                  <button class="btn btn-info" type="button">Middle</button>
                  <button class="btn btn-info" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-warning" type="button">Left</button>
                  <button class="btn btn-warning" type="button">Middle</button>
                  <button class="btn btn-warning" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-danger" type="button">Left</button>
                  <button class="btn btn-danger" type="button">Middle</button>
                  <button class="btn btn-danger" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-light" type="button">Left</button>
                  <button class="btn btn-light" type="button">Middle</button>
                  <button class="btn btn-light" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-dark" type="button">Left</button>
                  <button class="btn btn-dark" type="button">Middle</button>
                  <button class="btn btn-dark" type="button">Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Buttons -->
        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Outline flat button</h5>

          </div>
          <div class="card-body btn-group-showcase p-4">
            <div class="grid grid-cols-1 xl:grid-cols-4 md:grid-cols-2 gap-6">
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-primary" type="button">Left</button>
                  <button class="btn btn-outline-primary" type="button">Middle</button>
                  <button class="btn btn-outline-primary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-secondary" type="button">Left</button>
                  <button class="btn btn-outline-secondary" type="button">Middle</button>
                  <button class="btn btn-outline-secondary" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-success" type="button">Left</button>
                  <button class="btn btn-outline-success" type="button">Middle</button>
                  <button class="btn btn-outline-success" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-info" type="button">Left</button>
                  <button class="btn btn-outline-info" type="button">Middle</button>
                  <button class="btn btn-outline-info" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-warning" type="button">Left</button>
                  <button class="btn btn-outline-warning" type="button">Middle</button>
                  <button class="btn btn-outline-warning" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-danger" type="button">Left</button>
                  <button class="btn btn-outline-danger" type="button">Middle</button>
                  <button class="btn btn-outline-danger" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-light txt-dark" type="button">Left</button>
                  <button class="btn btn-outline-light txt-dark" type="button">Middle</button>
                  <button class="btn btn-outline-light txt-dark" type="button">Right</button>
                </div>
              </div>
              <div class="col-xxl-3 col-md-6 col-sm-12 button-group-mb-sm">
                <div class="btn-group btn-group-square" role="group" aria-label="Basic example">
                  <button class="btn btn-outline-dark" type="button">Left</button>
                  <button class="btn btn-outline-dark" type="button">Middle</button>
                  <button class="btn btn-outline-dark" type="button">Right</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Buttons -->
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-12 gap-x-6">
        <div class="col-span-3">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-4 border-b">
              <h5 class="card-title">Default Buttons</h5>
            </div>
            <div class="card-body p-4">
              <div class="btn-group">
                <button type="button" class="btn btn-primary">Left</button>
                <button type="button" class="btn btn-primary">Middle</button>
                <button type="button" class="btn btn-primary">Right</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-4 border-b">
              <h5 class="card-title">Default Buttons</h5>
            </div>
            <div class="card-body p-4">
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary">Left</button>
                <button type="button" class="btn btn-outline-primary">Middle</button>
                <button type="button" class="btn btn-outline-primary">Right</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-4 border-b">
              <h5 class="card-title">Default Buttons</h5>
            </div>
            <div class="card-body p-4">
              <div class="btn-group">
                <button type="button" class="btn btn-soft-danger btn-outline-danger">Left</button>
                <button type="button" class="btn btn-soft-danger btn-outline-danger">Middle</button>
                <button type="button" class="btn btn-soft-danger btn-outline-danger">Right</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header p-4 border-b">
              <h5 class="card-title">Default Buttons</h5>
            </div>
            <div class="card-body p-4">
              <div class="btn-group">
                <button type="button" class="btn btn-soft-danger">Left</button>
                <button type="button" class="btn btn-soft-danger">Middle</button>
                <button type="button" class="btn btn-soft-danger">Right</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header justify-between border-b p-4">
              <div class="card-title">Mixed styles</div>
            </div>
            <div class="card-body p-4">
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" class="btn btn-danger">Left</button>
                <button type="button" class="btn btn-warning">Middle</button>
                <button type="button" class="btn btn-success">Right</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 justify-between">
              <div class="card-title">
                Nesting
              </div>
            </div>
            <div class="card-body p-4">
              <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary">2</button>
                <div role="group">
                  <button type="button" class="btn btn-primary rounded-s-none dropdown-toggle"
                    data-dropdown-toggle="btn-dropdown" aria-expanded="false">
                    Dropdown
                  </button>
                  <ul class="dropdown-menu p-4 border rounded bg-white shadow-lg block" id="btn-dropdown">
                    <li><a
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        href="#">Dropdown link</a></li>
                    <li><a
                        class="rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                        href="#">Dropdown link</a></li>
                  </ul>
                </div>
              </div>
              <div class="btn-group me-2">
                <button class="btn btn-primary"><i class="fa fa-bold"></i></button>
                <button class="btn btn-secondary"><i class="fa fa fa-italic"></i></button>
                <button class="btn btn-success rounded-none"><i class="fa fa-file-image"></i></button>
                <button class="btn btn-info"><i class="fa fa-paperclip"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 justify-between">
              <div class="card-title">
                Checkbox button groups
              </div>

            </div>
            <div class="card-body p-4">
              <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" class="btn-check hidden" id="btncheck1">
                <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

                <input type="checkbox" class="btn-check hidden" id="btncheck2">
                <label class="btn btn-outline-primary rounded-none" for="btncheck2">Checkbox 2</label>

                <input type="checkbox" class="btn-check  hidden" id="btncheck3">
                <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
              </div>
            </div>

          </div>
        </div>
        <div class="col-span-6">
          <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-b p-4 justify-between">
              <div class="card-title">
                Radio button groups
              </div>

            </div>
            <div class="card-body p-4 radio-button-group">
              <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check hidden" name="btnradio" id="btnradio1" checked="">
                <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>

                <input type="radio" class="btn-check hidden" name="btnradio" id="btnradio2">
                <label class="btn btn-outline-primary rounded-none" for="btnradio2">Radio 2</label>

                <input type="radio" class="btn-check hidden" name="btnradio" id="btnradio3">
                <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Buttons -->
      <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header py-4 px-5 border-b border-borderColor">
          <h5>Sizing</h5>

        </div>
        <div class="card-body p-4">
          <div class="btn-group btn-group-lg mb-3" role="group" aria-label="Large button group">
            <button type="button" class="btn btn-outline-primary">Left</button>
            <button type="button" class="btn btn-outline-primary">Middle</button>
            <button type="button" class="btn btn-outline-primary">Right</button>
          </div>
          <br>
          <div class="btn-group mb-3" role="group" aria-label="Default button group">
            <button type="button" class="btn btn-outline-primary">Left</button>
            <button type="button" class="btn btn-outline-primary">Middle</button>
            <button type="button" class="btn btn-outline-primary">Right</button>
          </div>
          <br>
          <div class="btn-group btn-group-sm" role="group" aria-label="Small button group">
            <button type="button" class="btn btn-outline-primary">Left</button>
            <button type="button" class="btn btn-outline-primary">Middle</button>
            <button type="button" class="btn btn-outline-primary">Right</button>
          </div>
        </div>
      </div>
      <!-- /Buttons -->

      <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
        <!-- Buttons -->
        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>Button toolbar
            </h5>

          </div>
          <div class="card-body p-4">
            <div class="btn-toolbar flex mb-4" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group me-2 my-1" role="group" aria-label="First group">
                <button type="button" class="btn btn-primary">1</button>
                <button type="button" class="btn btn-primary">2</button>
                <button type="button" class="btn btn-primary rounded-none">3</button>
                <button type="button" class="btn btn-primary">4</button>
              </div>
              <div class="btn-group me-2 my-1" role="group" aria-label="Second group">
                <button type="button" class="btn btn-secondary">5</button>
                <button type="button" class="btn btn-secondary">6</button>
                <button type="button" class="btn btn-secondary">7</button>
              </div>
              <div class="my-1" role="group" aria-label="Third group">
                <button type="button" class="btn btn-info rounded">8</button>
              </div>
            </div>
            <div class="btn-toolbar flex items-center mb-3" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group me-2 my-1" role="group" aria-label="First group">
                <button type="button" class="btn btn-outline-secondary">1</button>
                <button type="button" class="btn btn-outline-secondary">2</button>
                <button type="button" class="btn btn-outline-secondary rounded-none">3</button>
                <button type="button" class="btn btn-outline-secondary">4</button>
              </div>
              <div class="input-group flex items-center relative my-1">
                <span class="py-2 px-3 border border-borderColor rounded-s-lg text-gray-900">
                  @
                </span>
                <input type="text" class="form-control rounded-s-none" placeholder="Input group example"
                  aria-label="Input group example" aria-describedby="btnGroupAddon">
              </div>
            </div>
            <div class="btn-toolbar flex items-center justify-between" role="toolbar"
              aria-label="Toolbar with button groups">
              <div class="btn-group me-2 my-1" role="group" aria-label="First group">
                <button type="button" class="btn btn-outline-secondary">1</button>
                <button type="button" class="btn btn-outline-secondary">2</button>
                <button type="button" class="btn btn-outline-secondary rounded-none">3</button>
                <button type="button" class="btn btn-outline-secondary">4</button>
              </div>
              <div class="input-group flex items-center my-1">
                <span class="py-2 px-3 border border-borderColor rounded-s-lg text-gray-900">
                  @
                </span>
                <input type="text" class="form-control" placeholder="Input group example"
                  aria-label="Input group example" aria-describedby="btnGroupAddon2">
              </div>
            </div>
          </div>
        </div>

        <div class="card border border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header py-4 px-5 border-b border-borderColor">
            <h5>
              Vertical
            </h5>
          </div>
          <div class="card-body p-4">
            <div class="grid grid-cols-2 xl:grid-cols-12 gap-6">
              <div class="col-span-3">
                <div class="btn-group-vertical flex flex-col" role="group" aria-label="Vertical button group">
                  <button type="button" class="btn btn-primary rounded-b-none">Button</button>
                  <div role="group">
                    <button type="button"
                      class="btn btn-primary flex items-center justify-center w-full rounded-none dropdown-toggle"
                      data-dropdown-toggle="dropdown6" aria-expanded="false">
                      Dropdown
                    </button>
                    <ul class="dropdown-menu p-4 border rounded bg-white shadow-lg hidden" id="dropdown6" style="">
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                  <div class="dropstart" role="group">
                    <button type="button"
                      class="btn btn-primary flex items-center justify-center rounded-none w-full dropdown-toggle"
                      data-dropdown-toggle="dropdown3" aria-expanded="false">
                      Dropdown
                    </button>
                    <ul class="dropdown-menu  p-4 border rounded bg-white shadow-lg hidden" id="dropdown3" style="">
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                  <div class="dropend" role="group">
                    <button type="button"
                      class="btn btn-primary flex items-center justify-center rounded-none w-full dropdown-toggle"
                      data-dropdown-toggle="dropdown4" aria-expanded="false">
                      Dropdown
                    </button>
                    <ul class="dropdown-menu  p-4 border rounded bg-white shadow-lg hidden" id="dropdown4" style="">
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                  <div role="group">
                    <button type="button"
                      class="btn btn-primary flex items-center justify-center rounded-t-none w-full dropdown-toggle"
                      data-dropdown-toggle="dropdown5" aria-expanded="false">
                      Dropdown
                    </button>
                    <ul class="dropdown-menu p-4 border rounded bg-white shadow-lg hidden" id="dropdown5" style="">
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                      <li><a
                          class="dropdown-item rounded p-2 flex items-center hover:bg-primary-transparent hover:text-primary text-gray-900"
                          href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-span-3">
                <div class="btn-group-vertical flex flex-col" role="group" aria-label="Vertical button group">
                  <button type="button" class="btn btn-primary rounded-b-none">Button</button>
                  <button type="button" class="btn btn-primary rounded-none">Button</button>
                  <button type="button" class="btn btn-primary rounded-none">Button</button>
                  <button type="button" class="btn btn-primary rounded-t-none">Button</button>
                </div>
              </div>
              <div class="col-span-3">
                <div class="btn-group-vertical flex flex-col" role="group"
                  aria-label="Vertical radio toggle button group">
                  <input type="radio" class="btn-check hidden" name="vbtn-radio" id="vbtn-radio1" checked="">
                  <label class="btn btn-outline-primary rounded-b-none" for="vbtn-radio1">Radio 1</label>
                  <input type="radio" class="btn-check hidden" name="vbtn-radio" id="vbtn-radio2">
                  <label class="btn btn-outline-primary rounded-none" for="vbtn-radio2">Radio 2</label>
                  <input type="radio" class="btn-check hidden" name="vbtn-radio" id="vbtn-radio3">
                  <label class="btn btn-outline-primary rounded-t-none" for="vbtn-radio3">Radio 3</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Buttons -->
      </div>

    </div>

    <!-- Start Footer -->
    <layouts-footer></layouts-footer>
    <!-- End Footer -->

  </div>
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
