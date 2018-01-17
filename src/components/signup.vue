<template>
  <el-form label-position="left" label-width="0px">
    <el-form-item>
      <el-input type="text" v-model="name" auto-complete="off" placeholder="name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="text" v-model="email" auto-complete="off" placeholder="email"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="password" auto-complete="off" placeholder="password"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="danger" style="width:100%;" @click="onSubmitSignup">Submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  name: 'signupPage',
  data() {
    return {
      password: '',
      email: '',
      name: '',
      signupDialog: true,
    }
  },
  methods: {
    onSubmitSignup() {
      console.log('test')
      this.$store.dispatch('signup', {
        email: this.email,
        password: this.password,
        name: this.name
      })
      .then(()=>{
        this.signupDialog = false
        
      })
      .catch(err =>{
        console.log(err)
      })
    },
  },
  watch:{
    signupDialog(){
      console.log(this.signupDialog)
      this.$emit('closeDialogSignup', this.signupDialog)
    }
  }
}
</script>