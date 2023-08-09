import loadable from '@/utils/loadable'

const Index = loadable(() => import(/* webpackChunkName: 'index' */ '@/views/Index'))

// 通用（及将改为停车场管理）
const Parking = loadable(() => import(/* webpackChunkName: 'button' */ '@/views/ParkingView/Parking'))
const Position = loadable(() => import(/* webpackChunkName: 'icon' */ '@/views/ParkingView/Position'))

// 表单
const Feedback = loadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/User/feedback'))
const UserInfo = loadable(() => import(/* webpackChunkName: 'formStep' */ '@/views/User/info'))

// 表单
const Analyze = loadable(() => import(/* webpackChunkName: 'formBase' */ '@/views/Income/Analyze'))
const Charge = loadable(() => import(/* webpackChunkName: 'formStep' */ '@/views/Income/Charge'))

// 其它
const About = loadable(() => import(/* webpackChunkName: 'about' */ '@/views/About'))

const routes = [
    { path: '/index', exact: true, name: 'Index', component: Index, auth: [1] },
    { path: '/parkingView/parking', exact: false, name: '停车场管理', component: Parking, auth: [1] },
    { path: '/parkingView/position', exact: false, name: '停车场信息', component: Position, auth: [1] },

    { path: '/user/feedback', exact: false, name: '用户反馈', component: Feedback },
    { path: '/user/info', exact: false, name: '用户信息', component: UserInfo },

    { path: '/income/analyze', exact: false, name: '收支分析', component: Analyze },
    { path: '/income/charge', exact: false, name: '收费管理', component: Charge },

    { path: '/about', exact: false, name: '关于', component: About, auth: [1] }
]

export default routes
