<template>
  <el-form label-position="left" label-width="0px">
    <el-form-item label="Answer">
      <el-input type="textarea" v-model="form.answer" :autosize="{ minRows: 10}"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click="onSubmit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: ['id'],
  data() {
    return {
      form: {
        answer: '',
      },      
      loginDialog: true,
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('addAnswer', {
        id: this.id,
        answer: this.form.answer
      })
      .then(()=>{
        this.loginDialog = false
      })
      .catch(err =>{
        console.log(err)
      })
    },
  },
  watch:{
    loginDialog(){
      this.$emit('closeDialog', this.loginDialog)
    }
  }
}
</script>