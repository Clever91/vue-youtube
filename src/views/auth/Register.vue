<template>
  <form class="card auth-card" @submit.prevent="signUp">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
            id="email"
            type="text"
            v-model.trim="email"
            autocomplete="off"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid"
          v-if="invalidEmail($v.email)"
        >Введите корректный электронный адрес</small>
        <small class="helper-text invalid"
          v-else-if="emptyField($v.email)"
        >Поле не должно быть пустым</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            v-model.trim="password"
            autocomplete="off"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid"
          v-if="emptyField($v.password)"
        >Поле не должно быть пустым</small>
        <small class="helper-text invalid"
          v-else-if="invalidMinLength($v.password)"
        >Минимальная длина должна быть {{ $v.password.$params.minLength.min }} символов, сейчас {{ password.length }} символа</small>
        <!-- Введите правильный пароль -->
      </div>
      <div class="input-field">
        <input
            id="name"
            type="text"
            v-model.trim="name"
            autocomplete="off"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid"
          v-if="emptyField($v.name)"
        >Поле не должно быть пустым</small>
        <small class="helper-text invalid"
          v-else-if="invalidMinLength($v.name)"
        >Минимальная длина должна быть {{ $v.name.$params.minLength.min }} символов, сейчас {{ name.length }} символа</small>
        <!-- Введите правильный пароль -->
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span :class="{'helper-text invalid': invalidAgree($v.agree)}">С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/auth/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {required, email, minLength} from 'vuelidate/lib/validators'

export default {
  name: "Register",
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(3) },
    name: { required, minLength: minLength(6) },
    agree: { checked: v => v },
  },
  methods: {
    signUp () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      this.$router.push('/auth/login')
    },
    invalidEmail(field) {
      return field.$dirty && !field.email
    },
    emptyField(field) {
      return field.$dirty && !field.required
    },
    invalidMinLength(field) {
      return field.$dirty && !field.minLength
    },
    invalidAgree(field) {
      return field.$dirty && !field.checked
    }
  }
}
</script>
