import RecoveryPassword from '@/views/recovery_password/index.vue';

export default [
    {
        path: '/recuperar-senha/:hash',
        name: 'recoveryPassword',
        component: RecoveryPassword,
        meta: {requiresAuthNot: true,hashRecorey:true}
    }
]
