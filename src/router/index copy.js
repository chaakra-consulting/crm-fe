import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/pages/pages/authentication/login.vue'),
    meta: { title: 'Login  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management' },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/pages/pages/authentication/register.vue'),
    meta: {
      title: 'Register  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('@/views/pages/pages/authentication/forgot-password.vue'),
    meta: {
      title:
        'Forgot Password  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/reset-password',
    name: 'reset-password',
    component: () => import('@/views/pages/pages/authentication/reset-password.vue'),
    meta: {
      title: 'Reset Password  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/email-verification',
    name: 'email-verification',
    component: () => import('@/views/pages/pages/authentication/email-verification.vue'),
    meta: {
      title:
        'Email Verification  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/two-step-verification',
    name: 'two-step-verification',
    component: () => import('@/views/pages/pages/authentication/two-step-verification.vue'),
    meta: {
      title:
        'Two Step Verification  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/lock-screen',
    name: 'lock-screen',
    component: () => import('@/views/pages/pages/authentication/lock-screen.vue'),
    meta: {
      title: 'Lock Screen  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/error/error-404',
    name: 'error-404',
    component: () => import('@/views/pages/pages/errors/error-404.vue'),
    meta: {
      title: 'Error 404  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/error/error-500',
    name: 'error-500',
    component: () => import('@/views/pages/pages/errors/error-500.vue'),
    meta: {
      title: 'Error 500  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/blank-page',
    name: 'blank-page',
    component: () => import('@/views/pages/pages/blank-page.vue'),
    meta: {
      title: 'Blank Page  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/coming-soon',
    name: 'coming-soon',
    component: () => import('@/views/pages/pages/coming-soon.vue'),
    meta: {
      title: 'Coming Soon  | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/under-maintenance',
    name: 'under-maintenance',
    component: () => import('@/views/pages/pages/under-maintenance.vue'),
    meta: {
      title:
        'Under Maintenance | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('@/views/pages/notifications.vue'),
    meta: {
      title: 'Notifications | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
    },
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
    path: '/blog',
    component: () => import('@/views/pages/content/blogs/crm-blogs.vue'),
    children: [
      { path: '', redirect: '/blog/blogs' },
      { path: 'blogs', component: () => import('@/views/pages/content/blogs/blogs.vue') },
      { path: 'add-blog', component: () => import('@/views/pages/content/blogs/add-blog.vue') },
      { path: 'edit-blog', component: () => import('@/views/pages/content/blogs/edit-blog.vue') },
      {
        path: 'blog-details',
        component: () => import('@/views/pages/content/blogs/blog-details.vue'),
      },
      {
        path: 'blog-categories',
        component: () => import('@/views/pages/content/blogs/blog-categories.vue'),
      },
      {
        path: 'blog-comments',
        component: () => import('@/views/pages/content/blogs/blog-comments.vue'),
      },
      { path: 'blog-tags', component: () => import('@/views/pages/content/blogs/blog-tags.vue') },
    ],
  },
  {
    path: '/membership',
    component: () => import('@/views/pages/membership/crm-membership.vue'),
    children: [
      { path: '', redirect: '/membership/membership-plans' },
      {
        path: 'membership-plans',
        component: () => import('@/views/pages/membership/membership-plans.vue'),
        meta: {
          title: 'Membership | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'membership-addons',
        component: () => import('@/views/pages/membership/membership-addons.vue'),
        meta: {
          title:
            'Membership Addons | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'membership-transactions',
        component: () => import('@/views/pages/membership/membership-transactions.vue'),
        meta: {
          title:
            'Membership Transactions | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/content',
    component: () => import('@/views/pages/content/crm-content.vue'),
    children: [
      { path: '', redirect: '/content/pages' },
      {
        path: 'pages',
        component: () => import('@/views/pages/content/crm-pages.vue'),
        meta: {
          title: 'Pages | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'add-page',
        component: () => import('@/views/pages/content/add-page.vue'),
        meta: {
          title: 'Add Pages | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'edit-page',
        component: () => import('@/views/pages/content/edit-page.vue'),
        meta: {
          title: 'Edit Pages | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'testimonials',
        component: () => import('@/views/pages/content/crm-testimonials.vue'),
        meta: {
          title:
            'Testimonials | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'faq',
        component: () => import('@/views/pages/content/crm-faq.vue'),
        meta: { title: 'Faq | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management' },
      },
    ],
  },
  {
    path: '/location',
    component: () => import('@/views/pages/content/location/crm-location.vue'),
    children: [
      { path: '', redirect: '/location/countries' },
      {
        path: 'countries',
        component: () => import('@/views/pages/content/location/crm-countries.vue'),
        meta: {
          title: 'Countries | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'states',
        component: () => import('@/views/pages/content/location/crm-states.vue'),
        meta: {
          title: 'States | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'cities',
        component: () => import('@/views/pages/content/location/crm-cities.vue'),
        meta: {
          title: 'Cities | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/report',
    component: () => import('@/views/pages/reports/crm-reports.vue'),
    children: [
      { path: '', redirect: '/report/task-report' },
      {
        path: 'task-reports',
        component: () => import('@/views/pages/reports/task-report.vue'),
        meta: {
          title: 'Task Report | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'lead-reports',
        component: () => import('@/views/pages/reports/lead-report.vue'),
        meta: {
          title: 'Lead Report | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'deal-reports',
        component: () => import('@/views/pages/reports/deal-report.vue'),
        meta: {
          title: 'Deal Report | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'contact-reports',
        component: () => import('@/views/pages/reports/contact-reports.vue'),
        meta: {
          title:
            'Contact Report | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'company-reports',
        component: () => import('@/views/pages/reports/company-reports.vue'),
        meta: {
          title:
            'Company Report | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'project-reports',
        component: () => import('@/views/pages/reports/project-reports.vue'),
        meta: {
          title:
            'Project Report | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/crm-settings',
    component: () => import('@/views/pages/crm-settings/crm-settings.vue'),
    children: [
      { path: '', redirect: '/crm-settings/sources' },
      {
        path: 'sources',
        component: () => import('@/views/pages/crm-settings/sources.vue'),
        meta: {
          title: 'Sources | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'lost-reason',
        component: () => import('@/views/pages/crm-settings/lost-reason.vue'),
        meta: {
          title: 'Lost Reason | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'contact-stage',
        component: () => import('@/views/pages/crm-settings/contact-stage.vue'),
        meta: {
          title:
            'Contact Stage | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'industry',
        component: () => import('@/views/pages/crm-settings/industry.vue'),
        meta: {
          title: 'Industry | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'calls',
        component: () => import('@/views/pages/crm-settings/calls.vue'),
        meta: {
          title: 'Calls | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/crm',
    component: () => import('@/views/pages/crm/crm-index.vue'),
    children: [
      { path: '', redirect: '/crm/contacts-grid' },
      {
        path: 'contacts-grid',
        component: () => import('@/views/pages/crm/contacts/contacts-grid.vue'),
        meta: {
          title: 'Contacts | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'contacts-list',
        component: () => import('@/views/pages/crm/contacts/contacts-list.vue'),
        meta: {
          title: 'Contacts | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'contact-details',
        component: () => import('@/views/pages/crm/contacts/contact-details.vue'),
        meta: {
          title:
            'Contact Details | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'companies-grid',
        component: () => import('@/views/pages/crm/companies/companies-grid.vue'),
        meta: {
          title: 'Companies | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'companies-list',
        component: () => import('@/views/pages/crm/companies/companies-list.vue'),
        meta: {
          title: 'Companies | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'company-details',
        component: () => import('@/views/pages/crm/companies/company-details.vue'),
        meta: {
          title:
            'Company Details | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'activity-calls',
        component: () => import('@/views/pages/crm/activities/activity-call.vue'),
        meta: {
          title:
            'Activity Call | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'activity-mail',
        component: () => import('@/views/pages/crm/activities/activity-mail.vue'),
        meta: {
          title:
            'Activity Mail | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'activity-task',
        component: () => import('@/views/pages/crm/activities/activity-task.vue'),
        meta: {
          title:
            'Activity Task | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'activity-meeting',
        component: () => import('@/views/pages/crm/activities/activity-meeting.vue'),
        meta: {
          title:
            'Activity Meeting | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'activities-list',
        component: () => import('@/views/pages/crm/activities/activities.vue'),
        meta: {
          title:
            'Activity List | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'analytics',
        component: () => import('@/views/pages/crm/analytics/analytics.vue'),
        meta: {
          title: 'Analytics| CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'payments-list',
        component: () => import('@/views/pages/crm/payments.vue'),
        meta: {
          title: 'Payments | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'tasks',
        component: () => import('@/views/pages/crm/tasks.vue'),
        meta: {
          title: 'Tasks | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'invoices',
        component: () => import('@/views/pages/crm/invoices/invoices.vue'),
        meta: {
          title: 'Invoices | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'invoice-list',
        component: () => import('@/views/pages/crm/invoices/invoices-list.vue'),
        meta: {
          title:
            'Invoice List | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'invoices-details',
        component: () => import('@/views/pages/crm/invoices/invoices-details.vue'),
        meta: {
          title:
            'Invoices Details | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'contracts',
        component: () => import('@/views/pages/crm/contracts/contracts.vue'),
        meta: {
          title: 'Contracts | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'contracts-list',
        component: () => import('@/views/pages/crm/contracts/contracts-list.vue'),
        meta: {
          title: 'Contracts | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'proposals',
        component: () => import('@/views/pages/crm/proposals/proposals.vue'),
        meta: {
          title: 'Proposals | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'proposals-list',
        component: () => import('@/views/pages/crm/proposals/proposals-list.vue'),
        meta: {
          title: 'Proposals | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'projects',
        component: () => import('@/views/pages/crm/projects/projects.vue'),
        meta: {
          title: 'Projects | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'projects-list',
        component: () => import('@/views/pages/crm/projects/projects-list.vue'),
        meta: {
          title: 'Projects | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'project-details',
        component: () => import('@/views/pages/crm/projects/project-details.vue'),
        meta: {
          title: 'Projects | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'campaign',
        component: () => import('@/views/pages/crm/campaign/campaign.vue'),
        meta: {
          title: 'Campaign | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'campaign-complete',
        component: () => import('@/views/pages/crm/campaign/campaign-complete.vue'),
        meta: {
          title:
            'Campaign Complete | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'campaign-archieve',
        component: () => import('@/views/pages/crm/campaign/campaign-archieve.vue'),
        meta: {
          title:
            'Campaign Archieve | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'pipeline-list',
        component: () => import('@/views/pages/crm/pipeline.vue'),
        meta: {
          title: 'Pipeline | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'leads',
        component: () => import('@/views/pages/crm/leads/leads.vue'),
        meta: {
          title: 'Leads | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'leads-list',
        component: () => import('@/views/pages/crm/leads/leads-list.vue'),
        meta: {
          title: 'Leads | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'leads-details',
        component: () => import('@/views/pages/crm/leads/leads-details.vue'),
        meta: {
          title: 'Leads | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'deals',
        component: () => import('@/views/pages/crm/deals/deals.vue'),
        meta: {
          title: 'Deals | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'deals-list',
        component: () => import('@/views/pages/crm/deals/deals-list.vue'),
        meta: {
          title: 'Deals | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'deals-details',
        component: () => import('@/views/pages/crm/deals/deals-details.vue'),
        meta: {
          title: 'Deals | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      // { path: "estimations", component: () => import('@/views/pages/crm/estimations/estimations.vue'), meta: { title: 'Estimations | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management' } },
      // { path: "estimations-list", component: () => import('@/views/pages/crm/estimations/estimations-list.vue'), meta: { title: 'Estimations | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management' } },
    ],
  },
  {
    path: '/layouts',
    component: () => import('@/views/pages/layouts/layouts-index.vue'),
    children: [
      { path: '', redirect: '/layouts/layout-mini' },
      {
        path: 'layout-mini',
        component: () => import('@/views/pages/layouts/layout-mini.vue'),
        meta: {
          title: 'Layout Mini | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'layout-hidden',
        component: () => import('@/views/pages/layouts/layout-hidden.vue'),
        meta: {
          title:
            'Layout Horizontal | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'layout-fullwidth',
        component: () => import('@/views/pages/layouts/layout-fullwidth.vue'),
        meta: {
          title:
            'Layout Without Header | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'layout-hoverview',
        component: () => import('@/views/pages/layouts/layout-hoverview.vue'),
        meta: {
          title:
            'Layout Detached | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'layout-dark',
        component: () => import('@/views/pages/layouts/layout-dark.vue'),
        meta: {
          title: 'Layout Dark | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'layout-rtl',
        component: () => import('@/views/pages/layouts/layout-rtl.vue'),
        meta: {
          title: 'Layout RTL | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/support',
    component: () => import('@/views/pages/support/crm-support.vue'),
    children: [
      { path: '', redirect: '/support/contact-messages' },
      {
        path: 'contact-messages',
        component: () => import('@/views/pages/support/contact-messages.vue'),
        meta: {
          title:
            'Contact Messages | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'tickets',
        component: () => import('@/views/pages/support/crm-tickets.vue'),
        meta: {
          title: 'Tickets | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'ticket-details',
        component: () => import('@/views/pages/support/ticket-details.vue'),
        meta: {
          title: 'Tickets | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/dashboard',
    component: () => import('@/views/pages/dashboard/dashboard-index.vue'),
    children: [
      { path: '', redirect: '/dashboard/deals-dashboard' },
      {
        path: 'deals-dashboard',
        component: () => import('@/views/pages/dashboard/deals-dashboard/deals-dashboard.vue'),
        meta: {
          title: 'Dashboard | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'leads-dashboard',
        component: () => import('@/views/pages/dashboard/leads-dashboard/leads-dashboard.vue'),
        meta: {
          title:
            'Leads Dashboard | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'project-dashboard',
        component: () => import('@/views/pages/dashboard/project-dashboard/project-dashboard.vue'),
        meta: {
          title:
            'Project Dashboard | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/settings',
    component: () => import('@/views/pages/settings/general-settings/general-settings.vue'),
    children: [
      { path: '', redirect: '/settings/profile-settings' },
      {
        path: 'profile-settings',
        component: () => import('@/views/pages/settings/general-settings/crm-profile.vue'),
        meta: {
          title: 'Profile | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'security-settings',
        component: () => import('@/views/pages/settings/general-settings/crm-security.vue'),
        meta: {
          title: 'Security | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'notifications-settings',
        component: () => import('@/views/pages/settings/general-settings/crm-notifications.vue'),
        meta: {
          title:
            'Notifications | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'connected-apps',
        component: () => import('@/views/pages/settings/general-settings/connected-apps.vue'),
        meta: {
          title:
            'Connected Apps | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/website-settings',
    component: () => import('@/views/pages/settings/website-settings/website-settings.vue'),
    children: [
      { path: '', redirect: '/website-settings/company-settings' },
      {
        path: 'company-settings',
        component: () => import('@/views/pages/settings/website-settings/company-settings.vue'),
        meta: {
          title:
            'Company Settings | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'localization-settings',
        component: () =>
          import('@/views/pages/settings/website-settings/localization-settings.vue'),
        meta: {
          title:
            'Localization | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'prefixes-settings',
        component: () => import('@/views/pages/settings/website-settings/prefixes-settings.vue'),
        meta: {
          title: 'Prefixes | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'preference-settings',
        component: () => import('@/views/pages/settings/website-settings/preference-settings.vue'),
        meta: {
          title: 'Preference | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'appearance-settings',
        component: () => import('@/views/pages/settings/website-settings/appearance-settings.vue'),
        meta: {
          title: 'Appearance | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'language-settings',
        component: () => import('@/views/pages/settings/website-settings/language-settings.vue'),
        meta: {
          title:
            'Language Settings | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'language-web',
        component: () => import('@/views/pages/settings/website-settings/language-web.vue'),
        meta: {
          title:
            'Language Web | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'language-web-edit',
        component: () => import('@/views/pages/settings/website-settings/language-web-edit.vue'),
        meta: {
          title:
            'Language Web Edit | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/app-settings',
    component: () => import('@/views/pages/settings/app-settings/app-settings.vue'),
    children: [
      { path: '', redirect: '/app-settings/invoice-settings' },
      {
        path: 'invoice-settings',
        component: () => import('@/views/pages/settings/app-settings/invoice-settings.vue'),
        meta: {
          title:
            'Invoice Settings | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'printers-settings',
        component: () => import('@/views/pages/settings/app-settings/printers-settings.vue'),
        meta: {
          title: 'Printers | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'custom-fields-setting',
        component: () => import('@/views/pages/settings/app-settings/custom-fields.vue'),
        meta: {
          title:
            'Custom Fields | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/system-settings',
    component: () => import('@/views/pages/settings/system-settings/system-settings.vue'),
    children: [
      { path: '', redirect: '/system-settings/email-settings' },
      {
        path: 'email-settings',
        component: () => import('@/views/pages/settings/system-settings/email-settings.vue'),
        meta: {
          title:
            'Email Settings | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'sms-gateways',
        component: () => import('@/views/pages/settings/system-settings/sms-gateways.vue'),
        meta: {
          title:
            'SMS Gateways | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'gdpr-cookies',
        component: () => import('@/views/pages/settings/system-settings/gdpr-cookies.vue'),
        meta: {
          title:
            'Gdpr Cookies | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/financial-settings',
    component: () => import('@/views/pages/settings/financial-settings/financial-settings.vue'),
    children: [
      { path: '', redirect: '/financial-settings/payment-gateways' },
      {
        path: 'payment-gateways',
        component: () => import('@/views/pages/settings/financial-settings/payment-gateways.vue'),
        meta: {
          title:
            'Payment Gateways | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'bank-accounts',
        component: () => import('@/views/pages/settings/financial-settings/bank-accounts.vue'),
        meta: {
          title:
            'Bank Accounts | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'tax-rates',
        component: () => import('@/views/pages/settings/financial-settings/tax-rates.vue'),
        meta: {
          title: 'Tax Rates | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'currencies',
        component: () =>
          import('@/views/pages/settings/financial-settings/currencies-settings.vue'),
        meta: {
          title: 'Currencies | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/other-settings',
    component: () => import('@/views/pages/settings/other-settings/other-settings.vue'),
    children: [
      { path: '', redirect: '/other-settings/storage' },
      {
        path: 'storage',
        component: () => import('@/views/pages/settings/other-settings/storage-settings.vue'),
        meta: {
          title: 'Storage | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'ban-ip-address',
        component: () => import('@/views/pages/settings/other-settings/ban-ip-address.vue'),
        meta: {
          title:
            'Ban Ip Address | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'sitemap',
        component: () => import('@/views/pages/settings/other-settings/sitemap-settings.vue'),
        meta: {
          title: 'Sitemap | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'clear-cache',
        component: () => import('@/views/pages/settings/other-settings/clear-cache.vue'),
        meta: {
          title: 'Clear Cache | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'cronjob',
        component: () => import('@/views/pages/settings/other-settings/cronjob-settings.vue'),
        meta: {
          title: 'Cronjob | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'system-backup',
        component: () => import('@/views/pages/settings/other-settings/system-backup.vue'),
        meta: {
          title:
            'System Backup | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'database-backup',
        component: () => import('@/views/pages/settings/other-settings/database-backup.vue'),
        meta: {
          title:
            'Database Backup | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
      {
        path: 'system-update',
        component: () => import('@/views/pages/settings/other-settings/system-update.vue'),
        meta: {
          title:
            'System Update | CRMS - Advanced Bootstrap 5 Admin Template for Customer Management',
        },
      },
    ],
  },
  {
    path: '/super-admin',
    component: () => import('@/views/pages/superadmin/super-admin.vue'),
    children: [
      { path: '', redirect: '/super-admin/dashboard' },
      {
        path: 'dashboard',
        component: () => import('@/views/pages/superadmin/super-dashboard/super-dashboard.vue'),
      },
      {
        path: 'company',
        component: () => import('@/views/pages/superadmin/companies/company-list.vue'),
      },
      {
        path: 'subscription',
        component: () => import('@/views/pages/superadmin/super-subscription.vue'),
      },
      {
        path: 'packages',
        component: () => import('@/views/pages/superadmin/packages/packages-list.vue'),
      },
      {
        path: 'packages-grid',
        component: () => import('@/views/pages/superadmin/packages/packages-grid.vue'),
      },
      {
        path: 'domain',
        component: () => import('@/views/pages/superadmin/domain/domain-list.vue'),
      },
      {
        path: 'purchase-transaction',
        component: () => import('@/views/pages/superadmin/purchase/purchase-transaction.vue'),
      },
    ],
  },
  {
    path: '/call',
    component: () => import('@/views/pages/applications/calls/call-index.vue'),
    children: [
      { path: '', redirect: '/call/audio-call' },
      {
        path: 'audio-call',
        component: () => import('@/views/pages/applications/calls/voice-call.vue'),
      },
      {
        path: 'video-call',
        component: () => import('@/views/pages/applications/calls/video-call.vue'),
      },
      {
        path: 'call-history',
        component: () => import('@/views/pages/applications/calls/call-history.vue'),
      },
    ],
  },
  {
    path: '/application',
    component: () => import('@/views/pages/applications/applications-index.vue'),
    children: [
      { path: '', redirect: '/application/chat' },
      { path: 'chat', component: () => import('@/views/pages/applications/chat-index.vue') },
      { path: 'calendar', component: () => import('@/views/pages/applications/calendar.vue') },
      { path: 'email', component: () => import('@/views/pages/applications/email.vue') },
      {
        path: 'email-reply',
        component: () => import('@/views/pages/applications/email-reply.vue'),
      },
      { path: 'todo', component: () => import('@/views/pages/applications/todo.vue') },
      { path: 'todo-list', component: () => import('@/views/pages/applications/todo-list.vue') },
      { path: 'notes', component: () => import('@/views/pages/applications/notes.vue') },
      {
        path: 'social-feed',
        component: () => import('@/views/pages/applications/social-feed.vue'),
      },
      {
        path: 'file-manager',
        component: () => import('@/views/pages/applications/file-manager.vue'),
      },
      {
        path: 'kanban-view',
        component: () => import('@/views/pages/applications/kanban/kanban-view.vue'),
      },
      {
        path: 'search-list',
        component: () => import('@/views/pages/applications/search-list/search-list.vue'),
      },
      {
        path: 'invoice-list',
        component: () => import('@/views/pages/applications/invoice/invoice-list.vue'),
      },
      {
        path: 'invoice-details',
        component: () => import('@/views/pages/applications/invoice/invoice-details.vue'),
      },
      {
        path: 'add-invoices',
        component: () => import('@/views/pages/applications/invoice/add-invoice.vue'),
      },
      {
        path: 'edit-invoices',
        component: () => import('@/views/pages/applications/invoice/edit-invoice.vue'),
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
    path: '/tables',
    component: () => import('@/views/pages/uiinterface/tables/tables-index.vue'),
    children: [
      { path: '', redirect: '/tables/tables-basic' },
      {
        path: 'tables-basic',
        component: () => import('@/views/pages/uiinterface/tables/tables-basic.vue'),
      },
      {
        path: 'data-tables',
        component: () => import('@/views/pages/uiinterface/tables/data-tables.vue'),
      },
    ],
  },
  {
    path: '/charts',
    component: () => import('@/views/pages/uiinterface/charts/charts-index.vue'),
    children: [
      { path: '', redirect: '/charts/chart-apex' },
      {
        path: 'chart-apex',
        component: () => import('@/views/pages/uiinterface/charts/apex/chart-apex.vue'),
      },
      {
        path: 'chart-c3',
        component: () => import('@/views/pages/uiinterface/charts/c3/chart-c3.vue'),
      },
      // { path: "chart-js", component: () => import('@/views/pages/uiinterface/charts/js/chart-js.vue') },
      {
        path: 'chart-flot',
        component: () => import('@/views/pages/uiinterface/charts/flot/chart-flot.vue'),
      },
      {
        path: 'chart-morris',
        component: () => import('@/views/pages/uiinterface/charts/morris/chart-morris.vue'),
      },
    ],
  },
  {
    path: '/icons',
    component: () => import('@/views/pages/uiinterface/icons/icons-index.vue'),
    children: [
      { path: '', redirect: '/icons/icon-fontawesome' },
      {
        path: 'icon-fontawesome',
        component: () => import('@/views/pages/uiinterface/icons/icon-fontawesome.vue'),
      },
      {
        path: 'icon-tabler',
        component: () => import('@/views/pages/uiinterface/icons/icon-tabler.vue'),
      },
      {
        path: 'icon-bootstrap',
        component: () => import('@/views/pages/uiinterface/icons/icon-bootstrap.vue'),
      },
      {
        path: 'icon-remix',
        component: () => import('@/views/pages/uiinterface/icons/icon-remix.vue'),
      },
      {
        path: 'icon-ionic',
        component: () => import('@/views/pages/uiinterface/icons/icon-ionic.vue'),
      },
      {
        path: 'icon-feather',
        component: () => import('@/views/pages/uiinterface/icons/icon-feather.vue'),
      },
      { path: 'icon-pe7', component: () => import('@/views/pages/uiinterface/icons/icon-pe7.vue') },
      {
        path: 'icon-weather',
        component: () => import('@/views/pages/uiinterface/icons/icon-weather.vue'),
      },
      {
        path: 'icon-typicon',
        component: () => import('@/views/pages/uiinterface/icons/icon-typicon.vue'),
      },
      {
        path: 'icon-flag',
        component: () => import('@/views/pages/uiinterface/icons/icon-flag.vue'),
      },
    ],
  },
  {
    path: '/maps',
    component: () => import('@/views/pages/uiinterface/maps/map-index.vue'),
    children: [
      { path: '', redirect: '/maps/maps-vector' },
      {
        path: 'maps-leaflet',
        component: () => import('@/views/pages/uiinterface/maps/maps-leaflet.vue'),
      },
      {
        path: 'maps-vector',
        component: () => import('@/views/pages/uiinterface/maps/maps-vector.vue'),
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'CRM Chaakra'
  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // Continue with the navigation
  next()
})
