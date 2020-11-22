<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Login extends Vue {
  form: { [key: string]: any } = {
    email: "",
    password: "",
    remember: false
  };
  isLoading: boolean = false;
  rules = {
    email: [
      { required: true, message: "Compo obrigatorio", trigger: "blur" },
      { type: 'email', message: 'E-mail inválido', trigger: ['blur', 'change'] }
    ],
    password: [{ required: true, message: "Compo obrigatorio", trigger: "blur" }]
  };
  //Methods
  runLogin(ref: any) {
    (this.$refs[ref] as any).validate(valid => {
      if (!valid) return false;
      this.isLoading = true;
      setTimeout(() => {
        localStorage.setItem("@beerVueAdmintoken",Math.random().toString(36).replace(/[^a-z]+/g, ''));
        this.$message.success("Login realizado com sucesso!");
        this.isLoading=false;
        this.$router.push({name:'dashboard'})
      }, 500);
    });
  }
}
</script>
<template>
  <section id="login">
    <div class="box">
      <h3>
        Login
      </h3>
      <div class="box__form">
        <el-form ref="form" :model="form" label-position="top" :rules="rules" label-width="80px">
          <el-form-item label="E-mail" prop="email">
            <el-input v-model="form.email" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="Senha" class="box__password" prop="password">
            <router-link :to="{name:'forgotPassword'}">Esqueceu a senha?</router-link>
            <el-input show-password v-model="form.password" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-checkbox class="check" v-model="form.remember" label="Lembre de mim"></el-checkbox>
          <el-button type="primary" @click="runLogin('form')" :loading="isLoading">
            <span v-if="!isLoading">Entrar</span>
            <spa v-else>Entrando...</spa>
          </el-button>
        </el-form>
      </div>
    </div>
    <span class="developed">Developed with S2 by <router-link to="https://github.com/rogeriocode">@rogeiocode</router-link></span>
  </section>
</template>

<style lang="scss" scoped src="./styles/_index.scss"></style>
