<template>
  <layouts-header></layouts-header>
  <layouts-sidebar></layouts-sidebar>
  <!-- Page Wrapper -->
  <div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

    <div class="content p-5 pb-0">

      <!-- Page Header -->
      <div class="mb-7">
        <h4 class="mb-1 text-xl font-bold flex items-center">
          Typography
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
            <li class="text-dark font-medium" aria-current="page">Typography</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Header -->

      <!-- Line Tabs -->
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Headings Tags</h5>
            </div>
            <div class="card-body p-4">
              <h1 class="mb-3">h1. Bootstrap heading</h1>
              <h2 class="mb-3">h2. Bootstrap heading</h2>
              <h3 class="mb-3">h3. Bootstrap heading</h3>
              <h4 class="mb-3">h4. Bootstrap heading</h4>
              <h5 class="mb-3">h5. Bootstrap heading</h5>
              <h6 class="mb-0">h6. Bootstrap heading</h6>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Heading Class Names</h5>
            </div>
            <div class="card-body p-4">
              <p class="text-4xl font-bold text-gray-900 mb-3">h1. Bootstrap heading</p>
              <p class="text-3xl font-bold text-gray-900 mb-3">h2. Bootstrap heading</p>
              <p class="text-2xl font-bold text-gray-900 mb-3">h3. Bootstrap heading</p>
              <p class="text-lg font-bold text-gray-900 mb-3">h4. Bootstrap heading</p>
              <p class="text-md font-bold text-gray-900 mb-3">h5. Bootstrap heading</p>
              <p class="text-sm font-bold text-gray-900 mb-0">h6. Bootstrap heading</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Display Headings</h5>
            </div>
            <div class="card-body p-4">
              <h1 class="mb-0 display-1">Display 1</h1>
              <h1 class="mb-0 display-2">Display 2</h1>
              <h1 class="mb-0 display-3">Display 3</h1>
              <h1 class="mb-0 display-4">Display 4</h1>
              <h1 class="mb-0 display-5">Display 5</h1>
              <h1 class="mb-0 display-6">Display 6</h1>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Text Element</h5>
            </div>
            <div class="card-body p-4">
              <p class="mb-2">You can use the mark tag to <mark>highlight</mark> text.</p>
              <p class="mb-2"><del>This line of text is meant to be treated as deleted text.</del></p>
              <p class="mb-2"><s>This line of text is meant to be treated as no longer accurate.</s></p>
              <p class="mb-2"><ins>This line of text is meant to be treated as an addition to the document.</ins>
              </p>
              <p class="mb-2"><u>This line of text will render as underlined</u></p>
              <p class="mb-2"><small>This line of text is meant to be treated as fine print.</small></p>
              <p class="mb-2"><strong>This line rendered as bold text.</strong></p>
              <p class="mb-2"><em>This line rendered as italicized text.</em></p>
              <p class="font-monospace mb-0">This is in monospace</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Coloured Link</h5>
            </div>
            <div class="card-body p-4">
              <p><a href="#" class="text-primary  mb-2 inline-block">Primary link</a></p>
              <p><a href="#" class="text-secondary  mb-2 inline-block">Secondary link</a></p>
              <p><a href="#" class="text-success  mb-2 inline-block">Success link</a></p>
              <p><a href="#" class="text-danger  mb-2 inline-block">Danger link</a></p>
              <p><a href="#" class="text-warning  mb-2 inline-block">Warning link</a></p>
              <p><a href="#" class="text-info  mb-2 inline-block">Info link</a></p>
              <p><a href="#" class="text-light  mb-2 inline-block bg-dark">Light link</a></p>
              <p><a href="#" class="text-dark  mb-2 inline-block">Dark link</a></p>
              <p><a href="#" class="text-muted  mb-2 inline-block">Muted link</a></p>
              <p><a href="#" class="text-white inline-block bg-dark mb-0">White link</a></p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Coloured Text</h5>
            </div>
            <div class="card-body p-4">
              <p class="text-primary mb-2">.text-primary</p>
              <p class="text-secondary mb-2">.text-secondary</p>
              <p class="text-success mb-2">.text-success</p>
              <p class="text-danger mb-2">.text-danger</p>
              <p class="text-warning mb-2">.text-warning</p>
              <p class="text-info mb-2">.text-info</p>
              <p class="text-light mb-2 bg-dark">.text-light</p>
              <p class="text-dark mb-2">.text-dark</p>
              <p class="text-muted mb-2">.text-muted</p>
              <p class="text-white bg-dark mb-0">.text-white</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Bullet Lists</h5>
            </div>
            <div class="card-body p-4">
              <ul class="list-disc ps-4">
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li class="mb-2">
                  <ul>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ul>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Number Lists</h5>
            </div>
            <div class="card-body p-4">
              <ul class="list-decimal ps-4">
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
                <li>Facilisis in pretium nisl aliquet</li>
                <li class="mb-2">
                  Facilisis in pretium nisl aliquet
                  <ol>
                    <li>Phasellus iaculis neque</li>
                    <li>Purus sodales ultricies</li>
                    <li>Ac tristique libero volutpat at</li>
                  </ol>
                </li>
                <li>Faucibus porta lacus fringilla vel</li>
                <li>Aenean sit amet erat nunc</li>
                <li>Eget porttitor lorem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- /Line Tabs -->
      <div class="grid grid-cols-1">
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Lead Paragraph</h5>
            </div>
            <div class="card-body p-4">
              <p class="lead text-2xl mb-0">
                <b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are
                many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of Lorem Ipsum, you need
                to be sure there isn't anything embarrassing hidden in the middle of text.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Blockquote Left Aligned</h5>
            </div>
            <div class="card-body p-4">
              <figure class="blockquote-container p-4 border-l-4 mb-0">
                <blockquote class="blockquote mb-2">
                  <h6>The greatest glory in living lies not in never falling, but in rising every
                    time we fall.</h6>
                </blockquote>
                <figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson
                    Mandela</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Blockquote Right Aligned</h5>
            </div>
            <div class="card-body p-4">
              <figure class="blockquote-container p-4 border-r-4 text-right mb-0">
                <blockquote class="blockquote mb-2">
                  <h6>The greatest glory in living lies not in never falling, but in rising every
                    time we fall.</h6>
                </blockquote>
                <figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson
                    Mandela</cite>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
        <div class="card-header border-borderColor p-4 border-b">
          <h5 class="card-title">Custom Color Blockquote</h5>
        </div>
        <div class="card-body p-4">
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div class="col-xl-4">
              <blockquote
                class="blockquote custom-blockquote bg-primary-100 border-l-2 border-primary p-4 rounded mb-3 text-center">
                <h6>The future belongs to those who believe in the beauty of their dreams..
                </h6>
                <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone
                  famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
              </blockquote>
            </div>
            <div class="col-xl-4">
              <blockquote
                class="blockquote custom-blockquote bg-secondary-100 border-l-2 p-4 rounded border-secondary mb-3 text-center">
                <h6>The future belongs to those who believe in the beauty of their dreams..
                </h6>
                <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone
                  famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
              </blockquote>
            </div>
            <div class="col-xl-4">
              <blockquote
                class="blockquote custom-blockquote border-l-2 rounded bg-info-100 p-4 border-info mb-3 text-center">
                <h6>The future belongs to those who believe in the beauty of their dreams..
                </h6>
                <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone
                  famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
              </blockquote>
            </div>
            <div class="col-xl-4">
              <blockquote
                class="blockquote custom-blockquote border-l-2 rounded bg-warning-100 p-4 border-warning mb-3 text-center">
                <h6>The future belongs to those who believe in the beauty of their dreams..
                </h6>
                <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone
                  famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
              </blockquote>
            </div>
            <div class="col-xl-4">
              <blockquote
                class="blockquote custom-blockquote border-l-2 rounded bg-success-100 p-4 border-success mb-3 text-center">
                <h6>The future belongs to those who believe in the beauty of their dreams..
                </h6>
                <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone
                  famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
              </blockquote>
            </div>
            <div class="col-xl-4">
              <blockquote
                class="blockquote custom-blockquote border-l-2 rounded bg-danger-100 p-4 border-danger mb-3 text-center">
                <h6>The future belongs to those who believe in the beauty of their dreams..
                </h6>
                <footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone
                  famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">Blockquote Left Aligned</h5>
            </div>
            <div class="card-body p-4">
              <dl class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-0">
                <dt class="col-span-3 font-bold">Description lists</dt>
                <dd class="col-span-9">A description list is perfect for defining terms.</dd>

                <dt class="col-span-3 font-bold">Term</dt>
                <dd class="col-span-9">
                  <p>Definition for the term.</p>
                  <p>And some more placeholder definition text.</p>
                </dd>

                <dt class="col-span-3 font-bold">Another term</dt>
                <dd class="col-span-9">This definition is short, so no extra paragraphs or
                  anything.</dd>

                <dt class="col-span-3 font-bold text-truncate">Truncated term is truncated</dt>
                <dd class="col-span-9">This can be useful when space is tight. Adds an
                  ellipsis at
                  the end.</dd>

                <dt class="col-span-3 font-bold">Nesting</dt>
                <dd class="col-span-9 mb-0">
                  <dl class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-0">
                    <dt class="col-span-4 font-bold">Nested definition list</dt>
                    <dd class="col-span-8 mb-0">I heard you like definition lists. Let me put a
                      definition list inside your definition list.</dd>
                  </dl>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b">
              <h5 class="card-title">List Unstyled</h5>
            </div>
            <div class="card-body p-4">
              <ul class="list-unstyled">
                <li>This is a list.</li>
                <li>It appears completely unstyled.</li>
                <li>Structurally, it's still a list.</li>
                <li>However, this style only applies to immediate child elements.</li>
                <li class="mb-2">Nested lists:
                  <ul class="list-circle ps-4">
                    <li>are unaffected by this style</li>
                    <li>will still show a bullet</li>
                    <li>and have appropriate left margin</li>
                  </ul>
                </li>
                <li>This may still come in handy in some situations.</li>
              </ul>
            </div>
          </div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                List Inline
              </div>
            </div>
            <div class="card-body p-4">
              <ul class="list-inline flex items center mb-0">
                <li class="list-inline-item me-2">This is a list item.</li>
                <li class="list-inline-item me-2">And another one.</li>
                <li class="list-inline-item">But they're displayed inline.</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Abbreviations
              </div>
            </div>
            <div class="card-body p-4">
              <p><abbr title="attribute">attr</abbr></p>
              <p class="mb-0"><abbr title="HyperText Markup Language" class="initialism">HTML</abbr>
              </p>
            </div>
          </div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Customizing headings
              </div>
            </div>
            <div class="card-body p-4">
              <h3>
                Fancy display heading
                <small class="text-gray-500">With faded secondary text</small>
              </h3>
            </div>
          </div>
        </div>
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Horizontal Rules
              </div>
            </div>
            <div class="card-body p-4">
              <p class="mb-2 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem
                fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto
                veniam delectus vel dolor magni a vero sunt ut harum.</p>
              <div class="text-success">
                <hr class="pb-2">
              </div>
              <p class=" mb-2 pb-2 border-danger border-b-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Iusto
                perspiciatis, magni numquam quos perferendis nulla magnam odit amet excepturi
                quisquam provident.</p>


              <p class="mb-0 border-primary pb-2 border-b-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus
                aliquid consequatur aut doloremque assumenda voluptatem, id qui vero adipisci!
                Nostrum ipsam praesentium!</p>

            </div>
          </div>
        </div>
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Text Transform
              </div>
            </div>
            <div class="card-body p-4">
              <p class="lowercase mb-2">Lowercased text.</p>
              <p class="uppercase mb-2">Uppercased text.</p>
              <p class="capitalize mb-0">Capitalized text.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Text Decoration
              </div>
            </div>
            <div class="card-body p-4">
              <p class="underline mb-2">This text has a line underneath it.
              </p>
              <p class="line-through mb-2">This text has a line going
                through
                it.
              </p>
              <a href="#" class="no-underline">This link has its text
                decoration
                removed
              </a>
            </div>
          </div>
        </div>
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Font Weight and Italics
              </div>
            </div>
            <div class="card-body p-4">
              <p class="font-bold mb-2">Bold text.</p>
              <p class="font-bolder mb-2">Bolder weight text (relative to the parent element).</p>
              <p class="font-semibold mb-2">Semibold weight text.</p>
              <p class="font-normal mb-2">Normal weight text.</p>
              <p class="font-light mb-2">Light weight text.</p>
              <p class="font-lighter mb-2">Lighter weight text (relative to the parent element).</p>
              <p class="italic mb-2">Italic text.</p>
              <p class="font-normal mb-0">Text with normal font style</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Line Height
              </div>
            </div>
            <div class="card-body p-4">
              <p class="leading-none mb-3">This is a long paragraph written to show how the line-height of
                an
                element is affected by our utilities. Classes are applied to the element
                itself
                or sometimes the parent element. These classes can be customized as needed
                with
                our utility API.
              </p>
              <p class="leading-tight mb-3">This is a long paragraph written to show how the line-height of
                an
                element is affected by our utilities. Classes are applied to the element
                itself
                or sometimes the parent element. These classes can be customized as needed
                with
                our utility API.
              </p>
              <p class="leading-normal mb-3">This is a long paragraph written to show how the line-height
                of
                an element is affected by our utilities. Classes are applied to the element
                itself or sometimes the parent element. These classes can be customized as
                needed with our utility API.
              </p>
              <p class="leading-relaxed mb-0">This is a long paragraph written to show how the
                line-height
                of an
                element is affected by our utilities. Classes are applied to the element
                itself
                or sometimes the parent element. These classes can be customized as needed
                with
                our utility API.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-4 gap-6">
        <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor p-4 border-b justify-between">
            <div class="card-title">
              Monospace
            </div>
          </div>
          <div class="card-body p-4">
            <p class="font-mono mb-0">This is in monospace</p>
          </div>
        </div>
        <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor p-4 border-b justify-between">
            <div class="card-title">
              Reset Color
            </div>
          </div>
          <div class="card-body p-4">
            <p class="text-muted mb-0">
              Muted text with a <a href="#" class="text-reset underline text-dark">reset link</a>.
            </p>
          </div>
        </div>
        <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor p-4 border-b justify-between">
            <div class="card-title">
              Visible Text
            </div>
          </div>
          <div class="card-body p-4">
            <p class="text-muted mb-0">
              This is visible text
            </p>
          </div>
        </div>
        <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
          <div class="card-header border-borderColor p-4 border-b justify-between">
            <div class="card-title">
              Invisible Text
            </div>
          </div>
          <div class="card-body p-4">
            <p class="invisible mb-0">This is invisible text</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Text Alignment
              </div>
            </div>
            <div class="card-body p-4">
              <p class="text-left mb-2">Start aligned text on all viewport sizes.</p>
              <p class="text-center mb-2">Center aligned text on all viewport sizes.</p>
              <p class="text-right mb-2">End aligned text on all viewport sizes.</p>

              <p class="text-sm-start mb-2">Start aligned text on viewports sized SM (small) or
                wider.
              </p>
              <p class="text-md-start mb-2">Start aligned text on viewports sized MD (medium) or
                wider.
              </p>
              <p class="text-lg-start mb-2">Start aligned text on viewports sized LG (large) or
                wider.
              </p>
              <p class="text-xl-start mb-2">Start aligned text on viewports sized XL (extra-large)
                or
                wider.</p>
            </div>
          </div>
        </div>
        <div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Text Wrapping and Overflow
              </div>
            </div>
            <div class="card-body p-4">
              <div class="badge bg-primary rounded text-white p-1 text-[10px] text-wrap mb-3" style="width: 6rem;">
                This text should wrap.
              </div>
              <p class="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from
                wrapping</p>
              <div class="text-nowrap text-dark" style="width: 8rem;">
                This text should overflow the parent.
              </div>
            </div>
          </div>
          <div class="card border-borderColor rounded-[5px] shadow-xs bg-white mb-6">
            <div class="card-header border-borderColor p-4 border-b justify-between">
              <div class="card-title">
                Word break
              </div>
            </div>
            <div class="card-body p-4">
              <p class="break-all mb-0">
                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
              </p>
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
