<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class RecoveryPassword extends Vue {
  @Prop(String) readonly hash: string | undefined;

  created() {
    if (!this.hash) return this.$router.push({ name: "login" });
    this.validateHash().then(res => {
      if (!res) return this.$router.push({ name: "login" });
    });
  }

  form: { [key: string]: any } = {
    email: "",
    password: "",
    repeatPassword: ""
  };
  rules = {
    email: [
      { required: true, message: "Compo obrigatorio", trigger: "blur" },
      { type: "email", message: "E-mail inválido", trigger: ["blur", "change"] }
    ],
    password: [
      { required: true, message: "Compo obrigatorio", trigger: "blur" },
      { min: 6, message: "A senha deve conter no minimo 6 caracteres", trigger: "blur" }
    ],
    repeatPassword: [
      { required: true, message: "Compo obrigatorio", trigger: "blur" },
      { min: 6, message: "A senha deve conter no minimo 6 caracteres", trigger: "blur" }
    ]
  };
  isLoading: boolean = false;
  //Methods
  recoverPassword(ref: any) {
    (this.$refs[ref] as any).validate(valid => {
      if (!valid) return false;
      this.isLoading = true;
      setTimeout(() => {
        this.$message.success("Sua senha foi resetada com sucesso, já pode realizar seu login!");
        this.isLoading = false;
        this.$router.push({ name: "login" });
      }, 500);
    });
  }

  validateHash() {
    return new Promise((resolve, reject) => {
      setInterval(() => resolve(true), 1000);
    });
  }
}
</script>

<template>
  <section id="forgot-password">
    <div class="box">
      <h3>
        Recuperação de Senha
      </h3>
      <small>Informe seu e-mail cadastrado para iniciar a recuperação de senha!</small>
      <div class="box__form">
        <el-form ref="form" :model="form" label-position="top" :rules="rules" label-width="80px">
          <el-form-item label="E-mail" prop="email">
            <el-input v-model="form.email" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item label="Digite a nova senha" prop="password">
            <el-input show-password v-model="form.password" prefix-icon="el-icon-lock"></el-input>
          </el-form-item>
          <el-form-item label="Confirme a nova senha" prop="repeatPassword">
            <el-input
              show-password
              v-model="form.repeatPassword"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-button type="primary" @click="recoverPassword('form')" :loading="isLoading">
            <span v-if="!isLoading">Resetar Senha</span>
            <span v-else>Processando...</span>
          </el-button>
        </el-form>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped src="./styles/_index.scss"></style>
