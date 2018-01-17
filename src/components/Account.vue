<template>
  <div>
     <router-view v-if="this.$route.params.id">
      </router-view>
     <el-main v-else>
     
      <el-row>
        <el-col style="tex-align: justify; padding-bottom: 10px;" v-if="showData">
          Hello {{user.name}}
        </el-col>
      </el-row>
      <el-row v-if="showQuestionsUser">
        <el-col :span="18">
          <el-row style="padding-bottom:10px;" v-for="(question, idx) in questionsUser" :key="idx">
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
                    <el-col :span="14" style="text-align: left;">
                      <router-link :to="{path: `/account/${question._id}/editquestion`}">
                        <el-button type="warning" @click="showFormEdit = true" size="mini">
                        Edit
                      </el-button>
                      </router-link>
                      <el-button type="danger" size="mini" @click="deleteQuestion(question)">
                        Delete
                      </el-button>
                    </el-col>
                    <el-col :span="10">
                      <p style="text-align: right;">{{question.createdBy.name}} @ {{question.createdAt}}</p>
                    </el-col>
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
  </div>
 
</template>

<script>
import editQuestion from './EditQuestion'
import {mapState, mapActions, mapGetters} from 'vuex'
export default {
  components: {
    editQuestion
  },
  data(){
    return{
      showFormEdit: false,
      showData: false,
      showQuestionsUser: false,
      questionEdited: {}
    }
  },
  computed: {
    ...mapState(['user', 'questionsUser']),
    ...mapGetters(['getQuestions', 'countVoteUp', 'countVoteDown', 'countAnswer'])
  },
  mounted(){
    let user = JSON.parse(localStorage.getItem('user'))
    this.$store.dispatch('user', {
      user : user.userId
    })
    .then(() => {
      this.showData = true
    })
    this.$store.dispatch('actQuestionsUser')
    .then(() => {
      this.showQuestionsUser = true
    })
  },
  methods: {
    methodEditForm(question){
      this.questionEdited = question
      this.showFormEdit = true
    },
    methodCloseDialog(close) {
      this.showFormEdit = close
      this.$message({
        message: 'Congrats, Login Success',
        type: 'success',
      })
    },
    deleteQuestion(question){
      this.$confirm('Are you sure wanna Delete it?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$store.dispatch('deleteQuestion',{
            id: question._id
          })
          .then(()=>{
            this.$message({
              type: 'success',
              message: 'Delete successfull',
            })
          })
          
        })
        .catch(err => {
          console.log(err)
          this.$message({
            type: 'info',
            message: 'Logout canceled',
          })
        })
    }
  }
}
</script>

<style>

</style>
