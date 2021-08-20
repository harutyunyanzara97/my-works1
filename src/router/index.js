import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/dashboard/Index.vue'
import Projects from '../views/dashboard/Projects.vue'
import Create from '../views/dashboard/NewProject.vue'
import CreateFeatures from '../views/CreateNewFeature.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Contact from '../views/Contact.vue'
import Features from '../views/Features.vue'
import Pricing from '../views/Pricing.vue'
import Privacy from '../views/Privacy.vue'
import Legal from '../views/Legal.vue'
import Cookie from '../views/Cookie.vue'
import Studies from "../views/dashboard/Studies";
import AllStudies from "../views/dashboard/Studies_list";
import AllBudgets from "../views/dashboard/Budgets_list";
import Budgets from "../views/dashboard/Budgets";
import Details from "../views/dashboard/Details";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  // {
  //   path: '/create',
  //   name: 'Create',
  //   component: Create,
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/features',
    name: 'Features',
    component: Features
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/cookie',
    name: 'Cookie',
    component: Cookie
  },

  {
    path: '/legal',
    name: 'Legal',
    component: Legal
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/newProject',
    name: 'Create',
    component: Create
  },
  {
    path: '/CreateNewFeatures',
    name: 'CreateNewFeatures',
    component: CreateFeatures
  },
  {
    path: '/dashboard/studies',
    name: 'Studies',
    component:Studies,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/allStudies',
    name: 'AllStudies',
    component:AllStudies,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/allBudgets',
    name: 'AllBudgets',
    component:AllBudgets,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/details',
    name: 'Details',
    component:Details,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard/budgets',
    name: 'Budgets',
    component:Budgets,
    meta: {
      requiresAuth: true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if ( localStorage.getItem('isLoggedIn') ) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
