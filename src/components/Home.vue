<template>
  <el-main>
    <el-row v-if="dataQuestions">
      <el-col :span="18">
        <el-row style="padding-bottom:10px;" v-for="(question, idx) in getQuestions" :key="idx">
          <el-card class="item">
            <el-row>
              <el-col :span="1">

                <h3>{{countVoteUp(question)}}</h3>
                Up
              </el-col>
              <el-col :span="2">

                <h3>{{countVoteDown(question)}}</h3>
                Down
              </el-col>
              <el-col :span="2">

                <h3>{{countAnswer(question)}}</h3>
                Answer
              </el-col>
              <el-col :span="19">
                <el-row>
                  <router-link :to="{path: `/detail/${question._id}`}">
                    <h2 style="float: left; padding-left: 20px;">{{question.question}}</h2>
                  </router-link>
                      

                </el-row>
                <el-row>
                  <p style="text-align: right;">{{question.createdBy.name}}</p>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-row>
  
      </el-col>
      <el-col :span="6">
        sidebar
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data(){
    return {
      dataQuestions : false
    }
  },
  computed: {
    ...mapGetters(['getQuestions', 'countAnswer', 'countVoteUp', 'countVoteDown'])
  },
  mounted(){
    this.$store.dispatch('actQuestions')
    .then(() =>{
      this.dataQuestions = true
    })
    .catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
.item {
  padding: 0px;
  vertical-align: top;
}
</style>
