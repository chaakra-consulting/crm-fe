<template>
	<layouts-header></layouts-header>
	<layouts-sidebar></layouts-sidebar>
	<!-- Page Wrapper -->
	<div class="page-wrapper ui-modals relative pt-[50px] ml-[240px]">

		<div class="content p-5 pb-0">

			<!-- Page Header -->
			<div class="mb-7">
				<h4 class="mb-1 text-xl font-bold flex items-center">
					Dragula
				</h4>
				<nav aria-label="breadcrumb">
					<ol class="flex flex-wrap space-x-1 text-sm text-gray-500">
						<li>
							<router-link to="/dashboard/leads-dashboard" class="hover:underline text-gray-700">Home</router-link>
							<span><i class="ti ti-chevron-right"></i></span>
						</li>
						<li>
							<a href="javascript:void(0);" class="hover:underline text-gray-700">Advanced UI</a>
							<span><i class="ti ti-chevron-right"></i></span>
						</li>
						<li class="text-dark font-medium" aria-current="page">Dragula</li>
					</ol>
				</nav>
			</div>
			<!-- End Page Header -->

						<div class="grid grid-cols-1 xl:grid-cols-2 gap-x-6">
							<div class="col-xl-6" id="draggable-left">
								<!-- Draggable left column -->
								<Draggable v-model="leftItems" group="cards" item-key="id" :animation="200" class="space-y-6">
									<template #item="{ element }">
										<div :class="element.cardClass + ' rounded-[5px] shadow-xs bg-white'">
											<a v-if="element.anchor" href="javascript:void(0);" class="card-anchor"></a>
											<div v-if="element.type === 'quote'" class="card-body p-4 bg-primary">
												<blockquote class="blockquote mb-0 text-center text-white">
													<h6 class="text-white">{{ element.text }}</h6>
													<footer class="blockquote-footer mt-3 fs-14 text-white opacity-70">{{ element.footer }}</footer>
												</blockquote>
											</div>

											<div v-else-if="element.type === 'fullcard'">
												<div class="card-header p-4 border-b flex items-center justify-between">
													<div class="card-title">{{ element.title }}</div>
													<a href="javascript:void(0);" data-bs-toggle="card-fullscreen">
														<i data-feather="maximize" class="feather-zap"></i>
													</a>
												</div>
												<div class="card-body p-4">
													<h6 class="card-text font-semibold mb-2">{{ element.titleSmall }}</h6>
													<p class="card-text mb-0">{{ element.body }}</p>
												</div>
												<div class="card-footer border-t p-4">
													<button class="btn btn-primary">Read More</button>
												</div>
											</div>

											<div v-else-if="element.type === 'overlay'" class="relative">
												<img :src="element.image" class="card-img w-full rounded" alt="...">
												<div class="card-img-overlay flex flex-col justify-between p-0 absolute top-0 right-0 bottom-0 left-0 text-white">
													<div class="card-body text-white p-4">
														<div class="card-text text-white">{{ element.title }}</div>
														<div class="card-text mb-2">{{ element.body }}</div>
														<div class="card-text">{{ element.footer }}</div>
													</div>
													<div class="card-footer p-4 border-t text-white">{{ element.footer }}</div>
												</div>
											</div>

											<div v-else-if="element.type === 'profile'">
												<div class="card-body p-4">
													<div class="flex items-center">
														<div class="me-3">
															<span class="w-10 h-10 flex">
																<img :src="element.avatar" class="rounded" alt="img">
															</span>
														</div>
														<div>
															<p class="card-text mb-0 fs-14 font-semibold">{{ element.name }}</p>
															<div class="card-title text-muted fs-12 mb-0">{{ element.subtitle }}</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</template>
								</Draggable>
							</div>

							<div class="col-xl-6" id="draggable-right">
								<!-- Draggable right column -->
								<Draggable v-model="rightItems" group="cards" item-key="id" :animation="200" class="space-y-6">
									<template #item="{ element }">
										<div :class="element.cardClass + ' rounded-[5px] shadow-xs bg-white'">
											<div v-if="element.type === 'overlay'" class="relative">
												<img :src="element.image" class="card-img w-full rounded" alt="...">
												<div class="card-img-overlay flex flex-col justify-between p-0 absolute top-0 right-0 bottom-0 left-0 text-white">
													<div class="card-body text-white p-4">
														<div class="card-text text-white">{{ element.title }}</div>
														<div class="card-text mb-2">{{ element.body }}</div>
														<div class="card-text">{{ element.footer }}</div>
													</div>
													<div class="card-footer p-4 border-t text-white">{{ element.footer }}</div>
												</div>
											</div>

											<div v-else-if="element.type === 'status'" :class="'p-4 ' + element.bgClass">
												<div class="card-body">
													<div class="flex items-center w-full">
														<div class="me-2">
															<span class="w-10 h-10 flex rounded-full">
																<img :src="element.avatar" class="rounded-full" alt="img">
															</span>
														</div>
														<div>
															<div class="fs-15 text-white font-semibold">{{ element.name }}</div>
															<p class="mb-0 text-white opacity-70 fs-12">{{ element.subtitle }}</p>
														</div>
														<div class="ms-auto">
															<a href="javascript:void(0);" class="text-white"><i class="fa-solid fa-ellipsis-vertical"></i></a>
														</div>
													</div>
												</div>
											</div>

											<div v-else-if="element.type === 'simple'">
												<img v-if="element.image" :src="element.image" class="card-img-top" alt="...">
												<div class="card-body p-5">
													<p class="card-text">{{ element.body }}</p>
												</div>
											</div>

											<div v-else-if="element.type === 'profile-dark'" class="p-4 bg-dark text-white rounded">
												<div class="card-body">
													<div class="flex items-center w-full">
														<div class="me-2">
															<span class="w-10 h-10 flex rounded-full">
																<img :src="element.avatar" class="rounded-full" alt="img">
															</span>
														</div>
														<div>
															<div class="fs-15 text-white font-semibold">{{ element.name }}</div>
															<p class="mb-0 op-7 fs-12 text-white">{{ element.subtitle }}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</template>
								</Draggable>
							</div>
						</div>

		</div>

		<!-- Start Footer -->
		<layouts-footer></layouts-footer>
		<!-- End Footer -->

	</div>
	<!-- /Page Wrapper -->
</template>
<script setup>
import { ref } from "vue";
import Draggable from "vuedraggable";

function getImageUrl(imageName) {
	return new URL(`/src/assets/img/profiles/${imageName}`, import.meta.url).href;
}

// Initial draggable items for left and right columns. Each item has an `id` and `type` to
// allow rendering different card templates inside the draggable lists.
const leftItems = ref([
	{
		id: 1,
		type: 'quote',
		text: 'The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..',
		footer: 'Someone famous as -Helen Keller',
		cardClass: 'card bg-primary'
	},
	{
		id: 2,
		type: 'fullcard',
		title: 'Card With Fullscreen Button',
		titleSmall: 'FullScreen Card',
		body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words",
		cardClass: 'card border border-borderColor'
	},
	{
		id: 3,
		type: 'overlay',
		image: new URL('@/assets/img/media/media-35.jpg', import.meta.url).href,
		title: 'Image Overlays Are Awesome!',
		body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
		footer: 'Last updated 3 mins ago',
		cardClass: 'card overlay-card border-borderColor relative'
	},
	{
		id: 4,
		type: 'profile',
		avatar: getImageUrl('avatar-02.jpg'),
		name: 'Atharva Simon.',
		subtitle: 'Correspondent Professor',
		cardClass: 'card border-borderColor'
	},
	{
		id: 5,
		type: 'profile',
		avatar: getImageUrl('avatar-01.jpg'),
		name: 'Alicia Keys.',
		subtitle: 'Department Of Commerce',
		cardClass: 'card border border-info'
	}
]);

const rightItems = ref([
	{
		id: 6,
		type: 'overlay',
		image: new URL('@/assets/img/media/media-36.jpg', import.meta.url).href,
		title: 'Image Overlays Are Awesome!',
		body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
		footer: 'Last updated 3 mins ago',
		cardClass: 'card overlay-card border-borderColor relative'
	},
	{
		id: 7,
		type: 'status',
		avatar: getImageUrl('avatar-11.jpg'),
		name: 'Samantha sid',
		subtitle: 'In leave for 1 month',
		bgClass: 'bg-success rounded',
		cardClass: 'card'
	},
	{
		id: 8,
		type: 'simple',
		image: new URL('@/assets/img/media/img-02.jpg', import.meta.url).href,
		body: "Some quick example text to build on the card title and make up the bulk of the card's content.",
		cardClass: 'card border border-borderColor'
	},
	{
		id: 9,
		type: 'profile-dark',
		avatar: getImageUrl('avatar-06.jpg'),
		name: 'Pope Adam',
		subtitle: 'Completed on 24,may',
		cardClass: 'card bg-dark rounded'
	}
]);
</script>
