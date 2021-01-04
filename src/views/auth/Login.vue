<template>
  <form class="card auth-card" @submit.prevent="signIn">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            :class="{ invalid: invalidEmail() }"
            autocomplete="off"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid"
          v-show="invalidEmail()"
        >Введите корректный электронный адрес</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            :class="{ invalid: invalidPassword() }"
            autocomplete="off"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid"
          v-show="invalidPassword()"
        >Введите правильный пароль</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/auth/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'

export default {
  name: "Login",
  data: () => ({
    email: '',
    password: ''
  }),
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(3) }
  },
  methods: {
    signIn() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$router.push('/admin')
    },
    invalidEmail() {
      return (this.$v.email.$dirty && !this.$v.email.required) 
        || (this.$v.email.$dirty && !this.$v.email.email)
    },
    invalidPassword() {
      return (this.$v.password.$dirty && !this.$v.password.required) 
        || (this.$v.password.$dirty && !this.$v.password.minLength)
    }
  }
}
</script>
