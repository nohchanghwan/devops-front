import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";
import Apilist from '@/pages/Apilist/Basic'
import Apidetails from '@/pages/Apidetails/Basic'
import Apilisttest from '@/pages/Apilisttest/Basic'
import Icons from '@/pages/Icons/Icons'
import Reqcontentsstatus from '@/pages/Reqcontentsstatus/Basic'
// import Typography from '@/pages/Typography/Typography'
// import Tables from '@/pages/Tables/Basic'
// import Tables2 from '@/pages/Tables2/Basic'
// import Notifications from '@/pages/Notifications/Notifications'
// import Typography from '@/pages/Typography/Typography'
// import Tables from '@/pages/Tables/Basic'
// import Tables2 from '@/pages/Tables2/Basic'
// import Charts from '@/pages/Charts/Charts'
// import Maps from '@/pages/Maps/Google'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
    path: '/',
    redirect: 'apilist',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'apilisttest',
        name: 'Apilisttest',
        component: Apilisttest
      },
      // {
      //   path: 'apidetails',
      //   name: 'Apidetails',
      //   component: Apidetails
      // },
      {
        path: 'apidetails/:id',
        name: 'Apidetails',
        component: Apidetails
      },
      {
        path: 'apilist',
        name: 'Apilist',
        component: Apilist
      },
      // {
      //   path: 'typography',
      //   name: 'Typography',
      //   component: Typography,
      // },
      // {
      //   path: 'tables',
      //   name: 'Tables',
      //   component: Tables
      // },
      // {
      //   path: 'tables2',
      //   name: 'Tables2',
      //   component: Tables2
      // },
      // {
      //   path: 'notifications',
      //   name: 'Notifications',
      //   component: Notifications
      // },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'reqcontentsstatus',
        name: 'Reqcontentsstatus',
        component: Reqcontentsstatus
      },
      
      
      // {
      //   path: 'charts',
      //   name: 'Charts',
      //   component: Charts
      // },
      // {
      //   path: 'maps',
      //   name: 'Maps',
      //   component: Maps
      // },
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
