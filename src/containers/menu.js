const menu = [
    {
        key: '/index',
        title: '首页',
        icon: 'home',
        auth: [1]
    },
    {
        title: '场地',
        key: '/public',
        icon: 'appstore',
        auth: [1],
        subs: [
            { title: '停车场地管理', key: '/parkingView/parking', icon: '' }
            //{ title: '图标', key: '/public/icon', icon: '' }
        ]
    },
    {
        title: '用户',
        key: '/user',
        icon: 'user',
        subs: [
            { title: '用户信息管理', key: '/user/info', icon: '' },
            { title: '用户反馈', key: '/user/feedback', icon: '' }
        ]
    },
    {
        title: '收支情况管理',
        key: '/income',
        icon: 'pie-chart',
        subs: [
            { title: '收入分析', key: '/income/analyze', icon: '' },
            { title: '收费管理', key: '/income/charge', icon: '' }
        ]
    },
    {
        title: '关于',
        key: '/about',
        icon: 'paper-clip',
        auth: [1]
    }
]

export default menu
