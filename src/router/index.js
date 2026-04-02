import { createRouter, createWebHistory } from 'vue-router'
import { guestOnly } from './auth'
import api from '../api/api'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/pages/authentication/login.vue'),
    beforeEnter: guestOnly,
    meta: { title: 'Login | CRM Chaakra Consulting' },
  },
  {
    path: '/contact/account-activation/:token',
    component: () => import('@/views/pages/pages/authentication/account-activation.vue'),
    meta: {
      title: 'Aktivasi Akun | CRM Chaakra Consulting',
      public: true, // ✅ PENTING
    },
  },
  {
    path: '/dashboard',
    component: () => import('@/views/pages/dashboard/dashboard-index.vue'),
    // beforeEnter: requireAuth,
    children: [
      { path: '', redirect: '/dashboard/deals-dashboard' },
      {
        path: 'deals-dashboard',
        component: () => import('@/views/pages/dashboard/deals-dashboard/deals-dashboard.vue'),
        meta: { title: 'Deals Dashboard | CRM Chaakra Consulting' },
      },
      {
        path: 'leads-dashboard',
        component: () => import('@/views/pages/dashboard/leads-dashboard/leads-dashboard.vue'),
        meta: { title: 'Leads Dashboard | CRM Chaakra Consulting' },
      },
      {
        path: 'project-dashboard',
        component: () => import('@/views/pages/dashboard/project-dashboard/project-dashboard.vue'),
        meta: { title: 'Project Dashboard | CRM Chaakra Consulting' },
      },
    ],
  },
  {
    path: '/crm',
    name: 'crm',
    component: () => import('@/views/pages/crm/crm-index.vue'),
    // beforeEnter: requireAuth,
    meta: {
      roles: [
        'superadmin',
        'direktur',
        'manager',
        'marketing',
        'admin',
        'pic-project',
        'pic-customer',
      ],
    }, // roles yang diizinkan
    children: [
      {
        path: 'contacts-grid',
        component: () => import('@/views/pages/crm/contacts/contacts-grid.vue'),
        meta: {
          title: 'Kontak | CRM',
          roles: ['superadmin', 'direktur', 'manager', 'marketing', 'admin'],
        },
      },
      {
        path: 'contacts-list',
        component: () => import('@/views/pages/crm/contacts/contacts-list.vue'),
        meta: {
          title: 'Kontak | CRM',
          roles: ['superadmin', 'direktur', 'manager', 'marketing', 'admin'],
        },
      },
      {
        path: 'companies-grid',
        component: () => import('@/views/pages/crm/companies/companies-grid.vue'),
        meta: {
          title: 'Perusahaan | CRM',
          roles: ['superadmin', 'direktur', 'manager', 'marketing', 'admin'],
        },
      },
      {
        path: 'companies-list',
        component: () => import('@/views/pages/crm/companies/companies-list.vue'),
        meta: {
          title: 'Perusahaan | CRM',
          roles: ['superadmin', 'direktur', 'manager', 'marketing', 'admin'],
        },
      },
      {
        path: 'company-details',
        component: () => import('@/views/pages/crm/companies/company-details.vue'),
        meta: {
          title: 'Company Details | CRM',
          roles: ['superadmin', 'direktur', 'manager', 'marketing', 'admin'],
        },
      },
      {
        path: 'projects-list',
        component: () => import('@/views/pages/crm/projects/projects-list.vue'),
        meta: {
          title: 'Projek | CRM',
          roles: [
            'superadmin',
            'direktur',
            'manager',
            'marketing',
            'admin',
            'pic-project',
            'pic-customer',
          ],
        },
      },
      {
        path: 'projects-details/:id',
        component: () => import('@/views/pages/crm/projects/projects-details.vue'),
        meta: {
          title: 'Detail Projek | CRM',
          roles: [
            'superadmin',
            'direktur',
            'manager',
            'marketing',
            'admin',
            'pic-project',
            'pic-customer',
          ],
        },
      },
    ],
  },
  {
    path: '/support',
    component: () => import('@/views/pages/support/crm-support.vue'),
    meta: {
      title: 'Helpdesk | CRM',
      roles: [
        'superadmin',
        'direktur',
        'manager',
        'marketing',
        'admin',
        'pic-project',
        'pic-customer',
      ],
    },
    children: [
      { path: '', redirect: '/support/contact-messages' },
      {
        path: 'tickets',
        component: () => import('@/views/pages/support/tickets/crm-tickets.vue'),
        meta: {
          title: 'Helpdesk | CRM',
        },
      },
      {
        path: 'ticket-details/:id',
        component: () => import('@/views/pages/support/tickets/ticket-details.vue'),
        meta: {
          title: 'Helpdesk Detail | CRM',
        },
      },
    ],
  },
  {
    path: '/leads',
    name: 'leads',
    component: () => import('@/views/pages/crm/leads/leads-index.vue'),
    meta: {
      title: 'Leads | CRM',
      roles: ['superadmin', 'direktur', 'manager', 'marketing', 'admin'],
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/pages/crm/leads/leads-list.vue'),
        meta: {
          title: 'Leads | CRM',
        },
      },
    ],
  },
  {
    path: '/survey',
    name: 'survey',
    component: () => import('@/views/pages/crm/survey/survey-index.vue'),
    meta: {
      title: 'Survey | CRM',
      roles: ['admin', 'pic-customer'],
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/pages/crm/survey/survey-list.vue'),
        meta: {
          title: 'Survey | CRM',
        },
      },
      {
        path: 'details/:id',
        component: () => import('@/views/pages/crm/survey/survey-question-details.vue'),
        meta: {
          title: 'Survey | CRM',
        },
      },
      {
        path: 'answer/:id',
        component: () => import('@/views/pages/crm/survey/answer-survey/index.vue'),
        meta: {
          title: 'Jawab Survey | CRM',
        },
      },
    ],
  },
  {
    path: '/offers',
    name: 'offers',
    component: () => import('@/views/pages/crm/offers/offers-index.vue'),
    meta: {
      title: 'Offers | CRM',
      roles: ['admin', 'pic-customer'],
    },
    children: [
      {
        path: 'list',
        component: () => import('@/views/pages/crm/offers/offers-list.vue'),
        meta: {
          title: 'Offers | CRM',
        },
      },
    ],
  },
  {
    path: '/master',
    component: () => import('@/views/pages/master/master-index.vue'),
    meta: {
      title: 'Survey | CRM',
      roles: ['admin'],
    },
    // beforeEnter: requireAuth,
    children: [
      { path: '', redirect: '/master/users-list' },
      {
        path: 'users-list',
        component: () => import('@/views/pages/master/users/users-list.vue'),
        meta: { title: 'User | CRM Chaakra Consulting' },
      },
      {
        path: 'sources-list',
        component: () => import('@/views/pages/master/sources/sources-list.vue'),
        meta: { title: 'Asal Data | CRM Chaakra Consulting' },
      },
      {
        path: 'tags-list',
        component: () => import('@/views/pages/master/tags/tags-list.vue'),
        meta: { title: 'Tags | CRM Chaakra Consulting' },
      },
    ],
  },
  {
    path: '/user',
    component: () => import('@/views/pages/users/crm-users.vue'),
    children: [
      { path: '', redirect: '/user/manage-users' },
      {
        path: 'manage-users',
        component: () => import('@/views/pages/users/manage-users.vue'),
        meta: {
          title: 'Users | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'roles-permissions',
        component: () => import('@/views/pages/users/roles-permissions.vue'),
        meta: {
          title:
            'Roles Permissions | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'permission',
        component: () => import('@/views/pages/users/permission.vue'),
        meta: {
          title: 'Permission | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'delete-request',
        component: () => import('@/views/pages/users/delete-request.vue'),
        meta: {
          title:
            'Delete Request | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/baseui',
    component: () => import('@/views/pages/uiinterface/baseui/baseui-index.vue'),
    children: [
      { path: '', redirect: '/baseui/ui-accordion' },
      {
        path: 'ui-accordion',
        component: () => import('@/views/pages/uiinterface/baseui/ui-accordion.vue'),
      },
      {
        path: 'ui-alerts',
        component: () => import('@/views/pages/uiinterface/baseui/ui-alerts.vue'),
      },
      {
        path: 'ui-avatar',
        component: () => import('@/views/pages/uiinterface/baseui/ui-avatar.vue'),
      },
      {
        path: 'ui-badges',
        component: () => import('@/views/pages/uiinterface/baseui/ui-badges.vue'),
      },
      {
        path: 'ui-breadcrumb',
        component: () => import('@/views/pages/uiinterface/baseui/ui-breadcrumb.vue'),
      },
      {
        path: 'ui-buttons',
        component: () => import('@/views/pages/uiinterface/baseui/ui-buttons.vue'),
      },
      {
        path: 'ui-buttons-group',
        component: () => import('@/views/pages/uiinterface/baseui/ui-buttons-group.vue'),
      },
      {
        path: 'ui-cards',
        component: () => import('@/views/pages/uiinterface/baseui/ui-cards.vue'),
      },
      {
        path: 'ui-carousel',
        component: () => import('@/views/pages/uiinterface/baseui/ui-carousel.vue'),
      },
      {
        path: 'ui-collapse',
        component: () => import('@/views/pages/uiinterface/baseui/ui-collapse.vue'),
      },
      {
        path: 'ui-dropdowns',
        component: () => import('@/views/pages/uiinterface/baseui/ui-dropdowns.vue'),
      },
      {
        path: 'ui-ratio',
        component: () => import('@/views/pages/uiinterface/baseui/ui-ratio.vue'),
      },
      { path: 'ui-grid', component: () => import('@/views/pages/uiinterface/baseui/ui-grid.vue') },
      {
        path: 'ui-images',
        component: () => import('@/views/pages/uiinterface/baseui/ui-images.vue'),
      },
      {
        path: 'ui-links',
        component: () => import('@/views/pages/uiinterface/baseui/ui-links.vue'),
      },
      {
        path: 'ui-list-group',
        component: () => import('@/views/pages/uiinterface/baseui/ui-list-group.vue'),
      },
      {
        path: 'ui-modals',
        component: () => import('@/views/pages/uiinterface/baseui/ui-modals.vue'),
      },
      {
        path: 'ui-offcanvas',
        component: () => import('@/views/pages/uiinterface/baseui/ui-offcanvas.vue'),
      },
      {
        path: 'ui-pagination',
        component: () => import('@/views/pages/uiinterface/baseui/ui-pagination.vue'),
      },
      {
        path: 'ui-popovers',
        component: () => import('@/views/pages/uiinterface/baseui/ui-popovers.vue'),
      },
      {
        path: 'ui-progress',
        component: () => import('@/views/pages/uiinterface/baseui/ui-progress.vue'),
      },
      {
        path: 'ui-spinner',
        component: () => import('@/views/pages/uiinterface/baseui/ui-spinner.vue'),
      },
      {
        path: 'ui-nav-tabs',
        component: () => import('@/views/pages/uiinterface/baseui/ui-nav-tabs.vue'),
      },
      {
        path: 'ui-tooltips',
        component: () => import('@/views/pages/uiinterface/baseui/ui-tooltips.vue'),
      },
      {
        path: 'ui-typography',
        component: () => import('@/views/pages/uiinterface/baseui/ui-typography.vue'),
      },
    ],
  },
  {
    path: '/advancedui',
    component: () => import('@/views/pages/uiinterface/advancedUI/advancedui-index.vue'),
    children: [
      { path: '', redirect: '/advancedui/ui-dragula' },
      {
        path: 'ui-dragula',
        component: () => import('@/views/pages/uiinterface/advancedUI/extended-dragula.vue'),
      },
      {
        path: 'ui-clipboard',
        component: () => import('@/views/pages/uiinterface/advancedUI/ui-clipboard.vue'),
      },
      {
        path: 'ui-sweetalerts',
        component: () => import('@/views/pages/uiinterface/advancedUI/ui-sweetalerts.vue'),
      },
      {
        path: 'ui-rangeslider',
        component: () => import('@/views/pages/uiinterface/advancedUI/ui-rangeslider.vue'),
      },
      {
        path: 'ui-lightbox',
        component: () => import('@/views/pages/uiinterface/advancedUI/ui-lightbox.vue'),
      },
      {
        path: 'ui-rating',
        component: () => import('@/views/pages/uiinterface/advancedUI/ui-rating.vue'),
      },
      {
        path: 'ui-counter',
        component: () => import('@/views/pages/uiinterface/advancedUI/ui-counter.vue'),
      },
      {
        path: 'ui-scrollbar',
        component: () => import('@/views/pages/uiinterface/advancedUI/ui-scrollbar.vue'),
      },
    ],
  },
  {
    path: '/form-elements',
    component: () => import('@/views/pages/uiinterface/form/form-elements/form-elements.vue'),
    children: [
      { path: '', redirect: '/form-elements/form-basic-inputs' },
      {
        path: 'form-basic-inputs',
        component: () =>
          import('@/views/pages/uiinterface/form/form-elements/form-basic-inputs.vue'),
      },
      {
        path: 'form-checkbox-radios',
        component: () =>
          import('@/views/pages/uiinterface/form/form-elements/form-checkbox-radios.vue'),
      },
      {
        path: 'form-input-groups',
        component: () =>
          import('@/views/pages/uiinterface/form/form-elements/form-input-groups.vue'),
      },
      {
        path: 'form-grid-gutters',
        component: () =>
          import('@/views/pages/uiinterface/form/form-elements/form-grid-gutters.vue'),
      },
      {
        path: 'form-mask',
        component: () => import('@/views/pages/uiinterface/form/form-elements/form-mask.vue'),
      },
      {
        path: 'form-fileupload',
        component: () => import('@/views/pages/uiinterface/form/form-elements/form-fileupload.vue'),
      },
    ],
  },
  {
    path: '/form-layouts',
    component: () => import('@/views/pages/uiinterface/form/form-layouts/form-layouts.vue'),
    children: [
      { path: '', redirect: '/form-layouts/form-horizontal' },
      {
        path: 'form-horizontal',
        component: () => import('@/views/pages/uiinterface/form/form-layouts/form-horizontal.vue'),
      },
      {
        path: 'form-vertical',
        component: () => import('@/views/pages/uiinterface/form/form-layouts/form-vertical.vue'),
      },
      {
        path: 'form-floating-labels',
        component: () =>
          import('@/views/pages/uiinterface/form/form-layouts/form-floating-labels.vue'),
      },
    ],
  },
  {
    path: '/forms',
    component: () => import('@/views/pages/uiinterface/form/form-index.vue'),
    children: [
      { path: '', redirect: '/forms/form-validation' },
      {
        path: 'form-validation',
        component: () => import('@/views/pages/uiinterface/form/form-validation.vue'),
      },
      {
        path: 'form-select',
        component: () => import('@/views/pages/uiinterface/form/form-select.vue'),
      },
      {
        path: 'form-editors',
        component: () => import('@/views/pages/uiinterface/form/form-editors.vue'),
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes,
})

function filterRoutesByRole(routes, role) {
  const filtered = routes
    .map((route) => {
      // cek role parent
      const parentAllowed = !route.meta?.roles || route.meta.roles.includes(role)

      if (!parentAllowed) {
        return null
      }

      // clone route supaya tidak merubah original
      const newRoute = { ...route }

      // filter children jika ada
      if (newRoute.children) {
        newRoute.children = filterRoutesByRole(newRoute.children, role)
      }

      return newRoute
    })
    .filter(Boolean)

  return filtered
}

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'CRM Chaakra Consulting'
  window.scrollTo({ top: 0, behavior: 'smooth' })
  next()
})

export function addRoutesByRole(userRole) {
  const filteredRoutes = filterRoutesByRole(routes, userRole)

  filteredRoutes.forEach((route) => {
    if (!router.hasRoute(route.name)) {
      router.addRoute(route)
    }
  })
}

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title || 'CRM Chaakra Consulting'
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // ✅ LEWATI AUTH CHECK UNTUK ROUTE PUBLIC
  if (to.meta?.public) {
    return next()
  }

  // login page
  if (to.path === '/') {
    return next()
  }

  const token = localStorage.getItem('token')

  if (!token) {
    return next({ path: '/' })
  }

  const expiresAt = localStorage.getItem('token_expired_at')
  if (!expiresAt || new Date() >= new Date(expiresAt)) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('token_expired_at')
    return next({ path: '/' })
  }

  try {
    await api.get('/auth/me')
  } catch (err) {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('token_expired_at')
    return next({ path: '/' })
  }

  const user = JSON.parse(localStorage.getItem('user'))
  const role = user.role_slug

  addRoutesByRole(role)

  if (to.meta?.roles && !to.meta.roles.includes(role)) {
    return next({ path: '/dashboard' })
  }

  next()
})
