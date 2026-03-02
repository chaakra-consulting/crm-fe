import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './router'
import Vue3Select from 'vue3-select-component'
import Antd from 'ant-design-vue'
import { IconHome } from '@tabler/icons-vue'
import 'flowbite'
import Vue3TagsInput from 'vue3-tags-input'
import {
  FwbInput,
  FwbButton,
  FwbCard,
  FwbModal,
  FwbAlert,
  FwbDropdown,
  FwbBadge,
  FwbNavbar,
  FwbSidebar,
} from 'flowbite-vue'

// import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'
// import 'dayjs/locale/id'

import DatePicker from 'vue3-datepicker'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.css'
import VueApexCharts from 'vue3-apexcharts'
import VueFeather from 'vue-feather'
import FlagIcon from 'vue-flag-icon'
import StarRating from 'vue3-star-ratings'
import Vue3Autocounter from 'vue3-autocounter'
import VueSweetalert2 from 'vue-sweetalert2'
import { initFlowbite } from 'flowbite'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'material-icons/css/material-icons.min.css'
import 'material-icons/css/material-icons.css'
import 'pe7-icon/dist/dist/pe-icon-7-stroke.css'
import 'typicons.font/src/font/typicons.css'
import 'weathericons/css/weather-icons.css'
import 'ionicons-npm/css/ionicons.css'
import '@/assets/css/tabler-icons.css'
import 'remixicon/fonts/remixicon.css'
import 'leaflet/dist/leaflet.css'
import 'flowbite/dist/flowbite.css'
import '@/assets/css/style.css'
import '@/assets/css/vue.css'
import '@/assets/css/feather.css'
import '@/assets/css/ant-table.css'
import '@/assets/css/tailwind.css'
import 'flowbite-vue/index.css'
import 'sweetalert2/dist/sweetalert2.min.css'

// *************** Components ***************
// import Breadcrumb from "@/components/breadcrumb/page-header.vue"
// import DashboardHeader from "@/components/breadcrumb/dashboard-header.vue"

// *************** Layout Component ***************
import Header from '@/views/layouts/layouts-header.vue'
import Sidebar from '@/views/layouts/layouts-sidebar.vue'
import RtlSidebar from '@/views/layouts/layouts-rtl-sidebar.vue'
import Footer from '@/views/layouts/layouts-footer.vue'
import VerticalSidebar from '@/views/layouts/vertical-sidebar.vue'
// import FilesSidebar from "@/views/layouts/files-sidebar.vue";
// import IndexLoader from '@/views/layouts/index-loader.vue'
import sidebarMenu from '@/views/layouts/sidebar-menu.vue'
import ThemeSettings from '@/views/layouts/theme-settings.vue'

// *************** Page Component ***************
// import LightBoxOne from "@/views/pages/uiinterface/advancedUI/lightbox-one.vue";
// import LightBoxTwo from "@/views/pages/uiinterface/advancedUI/lightbox-two.vue";
// import FormValidationOne from  "@//views/pages/uiinterface/form/form-validation-one.vue"

// import SocialCarousel from '@/views/pages/applications/social-carousel.vue';
// import allKanban from '@/views/pages/applications/kanban/all-kanban.vue'
// import General_Sidebar from '@/views/pages/settings/general-settings/general-sidebar.vue'
// import Website_Sidebar from '@/views/pages/settings/website-settings/website-sidebar.vue'
// import App_Sidebar from '@/views/pages/settings/app-settings/app-sidebar.vue'
// import System_Sidebar from '@/views/pages/settings/system-settings/system-sidebar.vue'
// import Financial_Sidebar from '@/views/pages/settings/financial-settings/financial-sidebar.vue'
// import Other_Sidebar from '@/views/pages/settings/other-settings/other-sidebar.vue'
// import Settings_Tab from '@/views/pages/settings/settings-tabs.vue'
// import leadsKanban from '@/views/pages/crm/leads/leads-kanban.vue';
// import dealsKanban from '@/views/pages/crm/deals/deals-kanban.vue';

// ************** Modal ************** //

// import CalendarModal from '@/components/modal/calendar-modal.vue';
// import companiesListModal from '@/components/modal/companies-list-modal.vue';
// import PaymentgatewaysModal from '@/components/modal/payment-gateways-modal.vue';
// import taxRatesModal from '@/components/modal/tax-rates-modal.vue';
// import currenciesModal from '@/components/modal/currencies-modal.vue';
// import ProjectDashboardModal from '@/components/modal/project-dashboard-modal.vue';
import ticketModal from '@/components/modal/ticket-modal.vue'
// import invoicesModal from '@/components/modal/invoices-modal.vue';
// import projectsModal from '@/components/modal/projects-modal.vue';
// import compaignModal from '@/components/modal/compaign-modal.vue';
// import pipelineModal from '@/components/modal/pipeline-modal.vue';
// import leadsModal from '@/components/modal/leads-modal.vue';
// import projectsdetailsModal from '@/components/modal/projects-details-modal.vue';
// import ContactMessageModal from '@/components/modal/contact-message-modal.vue';
// import ContactsModal from '@/components/modal/contacts-modal.vue';
// import ContactDetailsModal from '@/components/modal/contacts-details-modal.vue';
// import CompaniesModal from '@/components/modal/companies-modal.vue';
// import dealslistModal from '@/components/modal/deals-list-modal.vue';
// import packagesModal from '@/components/modal/packages-modal.vue';
// import estimationsModal from '@/components/modal/estimations-modal.vue';

// import swal from 'sweetalert2';

// window.Swal = swal;

const app = createApp(App)
const pinia = createPinia()

// *************** Components ***************
// app.component('page-header', Breadcrumb)
// app.component('dashboard-header', DashboardHeader)

// *************** Layout Component ***************
app.component('layouts-header', Header)
// app.component('theme-header', ThemeHeader)
app.component('layouts-sidebar', Sidebar)
app.component('layouts-rtl-sidebar', RtlSidebar)
app.component('layouts-footer', Footer)
app.component('vertical-sidebar', VerticalSidebar)
// app.component("files-sidebar", FilesSidebar);
// app.component('index-loader', IndexLoader)
app.component('sidebar-menu', sidebarMenu)
app.component('theme-settings', ThemeSettings)

// *************** Page Component ***************
// app.component("lightbox-one", LightBoxOne);
// app.component("lightbox-two", LightBoxTwo);
// app.component("form-validation-one", FormValidationOne);

// app.component('social-carousel', SocialCarousel)
// app.component('all-kanban', allKanban)
// app.component('general-sidebar',General_Sidebar)
// app.component('website-sidebar',Website_Sidebar)
// app.component('app-sidebar',App_Sidebar)
// app.component('system-sidebar',System_Sidebar)
// app.component('financial-sidebar',Financial_Sidebar)
// app.component('other-sidebar',Other_Sidebar)
// app.component('settings-tabs',Settings_Tab)
// app.component('leads-kanban',leadsKanban)
// app.component('deals-kanban',dealsKanban)

// *********** (Modal) **********//
// app.component('calendar-modal',CalendarModal)
// app.component('companies-list-modal',companiesListModal)
// app.component('payment-gateways-modal',PaymentgatewaysModal)
// app.component('tax-rates-modal',taxRatesModal)
// app.component('currencies-modal',currenciesModal)
// app.component('project-dashboard-modal',ProjectDashboardModal)
// app.component('ticket-modal',ticketModal)
// app.component('invoices-modal',invoicesModal)
// app.component('projects-modal',projectsModal)
// app.component('compaign-modal',compaignModal)
// app.component('leads-modal',leadsModal)
// app.component('pipeline-modal',pipelineModal)
// app.component('projects-details-modal',projectsdetailsModal)
// app.component('contact-message-modal',ContactMessageModal)
// app.component('contacts-modal', ContactsModal)
// app.component('contact-details-modal', ContactDetailsModal)
// app.component('companies-modal', CompaniesModal)
// app.component('deals-list-modal', dealslistModal)
// app.component('packages-modal', packagesModal)
// app.component('estimations-modal', estimationsModal)

app.component('vue3-select', Vue3Select)
app.component(VueFeather.name, VueFeather)
app.component('IconHome', IconHome)
app.component('vue3-autocounter', Vue3Autocounter)
app.component('star-rating', StarRating)
app.component('vue-multiselect', Multiselect)
app.component('date-picker', DatePicker)
app.component('vue3-tags-input', Vue3TagsInput)
app.use(initFlowbite)
app.use(VueSweetalert2)
app.use(VueApexCharts)
app.use(FlagIcon)
app.use(Antd)
app.use(pinia)
app.use(router)

// dayjs.extend(relativeTime)
// dayjs().locale('id')

// app.provide('dayjs', dayjs) // provide dayJS
// app.config.globalProperties.$dayjs = dayjs

app.mount('#app')
