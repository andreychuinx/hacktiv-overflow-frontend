<template>
  <el-header>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#002b80" text-color="#fff" active-text-color="#fff" v-if="!getStatusLogin">
      <el-col :span="20">
        <router-link :to="{name: 'homePage'}">
          <el-menu-item index="1" @click="gotoHome" :span="12">
            Home
          </el-menu-item>
        </router-link>
        <router-link :to="{name: 'questionPage'}">
          <el-menu-item index="2" @click="gotoHome">
          Question
        </el-menu-item>
        </router-link>
        
      </el-col>
      <el-col :span="4" style="float: right;">
        <el-menu-item index="3" @click="loginDialog = true" :span="12">
          <el-button type="text">Login</el-button>
        </el-menu-item>
        <el-menu-item index="4" @click="loginRegister = true" :span="12">
          <el-button type="text">Signup</el-button>
        </el-menu-item>
      </el-col>

      <el-dialog title="Login" :visible.sync="loginDialog" center width="50%">
        <login-page @closeDialog="methodCloseDialog">
        </login-page>
      </el-dialog>
      <el-dialog title="Sign Up" :visible.sync="loginRegister" center width="50%">
        <signup-page @closeDialogSignup="methodCloseDialogSignup">
        </signup-page>
      </el-dialog>
    </el-menu>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" background-color="#002b80" text-color="#fff" active-text-color="#0040ff" v-else>
      <el-menu-item index="1" @click="gotoHome">
        <el-button type="text">Home</el-button>
      </el-menu-item>
      <el-menu-item index="3" @click="gotoAccount">
        <el-button type="text">Account</el-button>
      </el-menu-item>
      <el-menu-item index="3" @click="logout">
        <el-button type="text">Logout</el-button>
      </el-menu-item>
      <el-dialog title="Login" :visible.sync="loginDialog" center width="50%">
        <login-page @closeDialog="methodCloseDialog">
        </login-page>
      </el-dialog>
      <el-dialog title="Sign Up" :visible.sync="loginRegister" center width="50%">
        <signup-page>
        </signup-page>
      </el-dialog>
    </el-menu>
  </el-header>
</template>

<script>
export default {}
</script>

<style>

</style>
