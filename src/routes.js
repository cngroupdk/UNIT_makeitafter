

export default [
    // Home
    {
        path: '/',
        name: 'default',
        component: require('./components/Categories'),

    },
    {
        path: '/add',
        name: 'add',
        component: require('./components/AddRoom'),

    },

    {
        path: '/:box',
        name: 'box',
        component: require('./components/BoxLoader'),
    },

    {
        path: '/:box/admin',
        name: 'admin',
        component: require('./components/AdminLoader'),
    },

];