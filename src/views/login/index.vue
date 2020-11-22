<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Login extends Vue {
  form: { [key: string]: any } = {
    email: "",
    password: "",
    remember: false
  };
  rules = {
    email: [{ required: true, message: "Compo obrigatorio", trigger: "blur" }],
    password: [{ required: true, message: "Compo obrigatorio", trigger: "blur" }]
  };
  //Methods
  runLogin(ref: any) {
    (this.$refs[ref] as any).validate(valid => {
      if (!valid) return false;
      this.$message.success("Login realizado com sucesso!");
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
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Senha" class="box__password" prop="password">
            <a href.prevent>
              Esqueceu a senha?
            </a>
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-checkbox class="check" v-model="form.remember" label="Lembre de mim"></el-checkbox>
          <el-button type="primary" @click="runLogin('form')">
            Entrar
          </el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped src="./styles/_index.scss"></style>
