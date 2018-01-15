<template>
  <el-main>
    <el-row>
      <el-col>
        <el-form ref="form" :model="form" label-width="120px">
  <el-form-item label="Question">
    <el-input v-model="form.name"></el-input>
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
export default {
  data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<style>

</style>
