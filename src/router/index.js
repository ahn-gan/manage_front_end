import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import ParkingLotList from '../views/ParkingLotList'
import UpdateParkingLot from '../components/UpdateParkingLot'
import AddParkingLot from '../components/AddParkingLot'
import OrderManagement from '../views/OrderManagement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/parking-lots',
          name: 'ParkingLotList',
          component: ParkingLotList
        },
        {
          path: '/add-parking-lot',
          name: 'addParkingLot',
          component: AddParkingLot
        },
        {
          path: '/update-parking-lot',
          name: 'updateParkingLot',
          component: UpdateParkingLot
        },
        {
          path: '/orders-maintenance',
          name: 'manageOrder',
          component: OrderManagement
        }
      ]
    }
  ]
})
