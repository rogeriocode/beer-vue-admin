import ForgotPassword from '@/views/forgot_password/index.vue';

export default [
    {
        path: '/esqueceu-a-senha',
        name: 'forgotPassword',
        component: ForgotPassword,
        meta: {requiresAuthNot: true}
    }
]
