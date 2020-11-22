import Login from '@/views/login/index.vue';

export default [
    {
        path: '/',
        name: 'login',
        component: Login,
        meta: {requiresAuthNot: true}
      }
]
