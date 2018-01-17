<template>
  <el-header>
    <el-menu :default-active="activeIndex2" mode="horizontal" background-color="#002b80" text-color="#fff" active-text-color="#fff" >
      <el-col :span="18">
        <router-link :to="{name: 'homePage'}">
          <el-menu-item index="1" :span="12">
            Home
          </el-menu-item>
        </router-link>
        <router-link :to="{name: 'questionPage'}">
          <el-menu-item index="2">
          Question
        </el-menu-item>
        </router-link>
        
      </el-col>
      <el-col :span="6" style="float: right;" v-if="!getStatusLogin">
        
        <el-menu-item index="3" @click="signinDialog = true" :span="12">
          Login
        </el-menu-item>
        <el-menu-item index="4" @click="signupDialog = true" :span="12">
          Signup
        </el-menu-item>
      </el-col>
      <el-col :span="6" style="float: right;" v-else>
        <router-link :to="{name: 'accountPage'}">
          <el-menu-item index="5" :span="12">
            Hello, {{getUser.name}}
          </el-menu-item>
        </router-link>
        
        <el-menu-item index="4" @click="methodLogout()" :span="12">
          Logout
        </el-menu-item>
      </el-col>

     
    </el-menu>
    
    <el-dialog title="Sign Up" :visible.sync="signupDialog" center width="50%">
        <signup-page @closeDialogSignup="methodCloseDialogSignup">
        </signup-page>
    </el-dialog>

      <el-dialog title="Login" :visible.sync="signinDialog" center width="50%">
        <login-page @closeDialog="methodCloseDialog">
        </login-page>
      </el-dialog>
  </el-header>
  
</template>

<script>
import loginPage from './login'
import signupPage from './signup'

import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      signinDialog: false,
      signupDialog: false,
      activeIndex2: '1',
      state4: '',
    }
  },
  components: {
    loginPage,
    signupPage,
  },
  computed: {
    ...mapGetters(['getStatusLogin', 'getUser']),
  },
  methods: {
    methodCloseDialog(close) {
      this.signinDialog = close
      this.$message({
        message: 'Congrats, Login Success',
        type: 'success',
      })
    },
    methodCloseDialogSignup(close) {
      this.signupDialog = close
      this.$message({
        message: 'Congrats, Signup Success',
        type: 'success',
      })
    },
    methodLogout(){
      console.log('test')
      this.$store.dispatch('logout')
      this.$message({
        message: 'Congrats, Logotu Success',
        type: 'success'
      })
      this.$router.push({name: 'homePage'})
    }
  },
}
</script>

<style>

</style>
