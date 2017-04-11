

export default [
    // Home
    {
        path: '/',
        name: 'default',
        component: require('./components/Hello'),

    },
    {
        path: '/add',
        name: 'add',
        component: require('./components/AddRoom'),

    },

    // Account
    {
        path: '/:box/admin',
        name: 'admin',
        component: require('./components/AdminLoader'),
    },

];