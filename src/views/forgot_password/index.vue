<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class ForgotPassword extends Vue {
    form: { [key: string]: any } = {
        email: "",
    };
    rules = {
    email: [
            { required: true, message: "Compo obrigatorio", trigger: "blur" },
            { type: 'email', message: 'E-mail inválido', trigger: ['blur', 'change'] }
        ]   
    };
    isLoading: boolean = false;
    recoverPassword(ref:any){
        (this.$refs[ref] as any).validate(valid => {
            if (!valid) return false;
            this.isLoading = true;
            setTimeout(() => {
                this.$message.success("Você recebera um e-mail com instruções para recuperar sua senha!");
                this.isLoading=false;
                this.$router.push({name:'login'})
            }, 500);
        });
    }
}
</script>

<template>
    <section id="forgot-password">
        <div class="box">
            <h3>
                Esqueci minha senha
            </h3>
            <small>Informe seu e-mail cadastrado para iniciar a recuperação de senha!</small>
            <div class="box__form">
                <el-form ref="form" :model="form" label-position="top" :rules="rules" label-width="80px">
                    <el-form-item label="E-mail" prop="email">
                        <el-input v-model="form.email" prefix-icon="el-icon-user"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="recoverPassword('form')" :loading="isLoading">
                        <span v-if="!isLoading">Recuperar Senha</span>
                        <spa v-else>Processando...</spa>
                    </el-button>
                </el-form>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped src="./styles/_index.scss"></style>