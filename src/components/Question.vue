<template>
  <el-main>
    <el-row>
      <el-col v-if="authQuestion">
        <el-form ref="form" :model="form" label-width="120px">
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
      <el-col v-else>
        YOU NEED TO LOGIN FIRST
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
      }
    }
  },
  computed: {
    ...mapGetters(['authQuestion'])
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('addQuestion', {
          question: this.form.question,
          description: this.form.desc
        })
        .then(() => {
          this.$message({
            message: 'Congrats, Question Success',
            type: 'success'
          })
          this.$router.push({ name: 'homePage' })
        })
    }
  },
}
</script>

<style>

</style>
