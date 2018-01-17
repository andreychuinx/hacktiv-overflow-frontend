<template>
  <el-main v-if="showEdit">
    <el-row>
      <el-col>
        <el-form ref="form" :model="form" label-width="0px">
          <el-form-item label="Question">
            <el-input v-model="form.question"></el-input>
          </el-form-item>
          <el-form-item label="Description">
            <el-input type="textarea" v-model="form.desc" :autosize="{ minRows: 10}"></el-input>
          </el-form-item>
          
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      form: {
        question: '',
        desc: ''
      },
      showEdit: false
    }
  },
  mounted(){
    this.$store.dispatch('actQuestion', {
      id: this.$route.params.id
    })
    .then(() => {
      this.showEdit = true
      this.form.question = this.getQuestion.question
      this.form.desc = this.getQuestion.description
    })
  },
  computed: {
    ...mapGetters(['getQuestion'])
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('editQuestion', {
          id: this.$route.params.id,
          question: this.form.question,
          description: this.form.desc
        })
        .then(() => {
          this.$message({
            message: 'Congrats, Signup Success',
            type: 'success',
          })
          this.$router.push({name: 'accountPage'})
        })
        .catch(err =>{
          console.log(err)
        })
    }
  },
}
</script>

<style>

</style>
