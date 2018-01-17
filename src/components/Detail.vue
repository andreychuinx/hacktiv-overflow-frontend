<template>
  <el-main v-if="statusQuestion">
    <el-row>
      <el-row>
        <el-row>
          <el-col style="text-align: justify;" >
            <h1>{{getQuestion.question}} ?</h1>
            {{getQuestion.description}}
          </el-col>
        </el-row>
        <el-row>
          <el-col style="text-align: right; padding-top: 25px;" >
            {{getQuestion.createdBy.name}}
          </el-col>
        </el-row>
        </el-row>

      </el-row>
      <el-row style="margin-top: 20px;">
        <el-col  style="text-align: left;" v-if="authVote(getQuestion.createdBy)">
          <el-button type="success" @click="voteupQuestion" :disabled="statusVote">
            <i class="el-icon-caret-top">{{countVoteUp(getQuestion)}}</i>
          </el-button>
          <el-button type="danger" @click="voteDownQuestion" :disabled="statusVote">
            <i class="el-icon-caret-bottom">{{countVoteDown(getQuestion)}}</i>
          </el-button>
          <el-button type="primary" @click="answerDialog = true">
            Answer
          </el-button>
        </el-col>
        <el-col  style="text-align: left;" v-else>
            <i class="el-icon-caret-top">{{countVoteUp(getQuestion)}}</i>
            <i class="el-icon-caret-bottom">{{countVoteDown(getQuestion)}}</i>
            
        </el-col>
          
      </el-row>
      <el-row style="margin-top: 20px;" v-for="(answer, idx) in getQuestion.answer" :key="idx">
        <el-col :span="1">
        </el-col>
        <el-col :span="23" style="float: right;">
          <el-card class="item">
            <el-row>
              <el-col :span="3" v-if="authVote(answer.createdBy)">
                <el-col :span="12">
                  <h3>{{countVoteUp(answer)}}</h3>
                <el-button size="mini" type="success" @click="voteUpAnswer(answer._id)" :disabled="statusAnswer(answer)">Up</el-button>
                </el-col>
                <el-col :span="12">
                  <h3>{{countVoteDown(answer)}}</h3>
                <el-button size="mini" type="danger" :disabled="statusAnswer(answer)">Down</el-button>
                </el-col>                
              </el-col>
              <el-col :span="3" v-else>
                <el-col :span="12">
                  <h3>{{countVoteUp(answer)}}</h3>
                  Up
                </el-col>
                <el-col :span="12">
                  <h3>{{countVoteDown(answer)}}</h3>
                  Down
                </el-col>  
              </el-col>
              <el-col :span="21">
                <el-row>
                  <p style="text-align: justify;">
                    {{answer.answer}}
                  </p>
                    
                </el-row>
                <el-row>
                  <el-col :span="8">
                  <p style="text-align: left;">
                    <el-button type="danger" @click="deleteAnswer(answer._id)" size="mini" v-if="!authVote(answer.createdBy) && authQuestion">
                      Delete</el-button>
                  </p>
                  </el-col>
                  <el-col :span="16">
                    <p style="text-align: right;">{{answer.createdBy.name}} @ {{answer.createdAt}}</p>
                  </el-col>
                  
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
    <el-dialog title="Add Answer" :visible.sync="answerDialog" center width="70%">
        <answer-page @closeDialog="methodCloseDialog" :id="getQuestion._id">
        </answer-page>
      </el-dialog>
  </el-main>
</template>

<script>
import { mapGetters } from 'vuex'
import answerPage from './AddAnswer'
export default {
  components: {
    answerPage,
  },
  data() {
    return {
      statusQuestion: false,
      answerDialog: false,
    }
  },
  computed: {
    ...mapGetters(['getQuestion', 'countAnswer', 'countVoteUp', 'countVoteDown', 'authVote', 'statusVote', 'statusAnswer', 'authQuestion']),
  },
  mounted() {
    this.$store
      .dispatch('actQuestion', {
        id: this.$route.params.id,
      })
      .then(() => {
        this.statusQuestion = true
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    voteupQuestion(){
      this.$store.dispatch('voteQuestion', {
        idQuestion : this.$route.params.id,
        status: 'up'
      })
    },
    voteDownQuestion(){
      this.$store.dispatch('voteQuestion', {
        idQuestion: this.$route.params.id,
        status: 'down'
      })
    },
    voteUpAnswer(answerId){
      this.$store.dispatch('voteAnswer', {
        idQuestion: this.$route.params.id,
        idAnswer: answerId,
        status: 'up'
      })
    },
    deleteAnswer(idAnswer) {
      this.$confirm('Are you sure wanna Logout?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          this.$store
            .dispatch('deleteAnswer', {
              idQuestion: this.$route.params.id,
              idAnswer: idAnswer
            })
            .then(() => {
              this.$message({
                type: 'success',
                message: 'Answer Deleted',
              })
            })
            .catch(err=> {
              console.log(err)
            })
        })
        .catch(err => {
          console.log(err)
          this.$message({
            type: 'info',
            message: 'Logout canceled',
          })
        })
    },
    methodCloseDialog(close) {
      this.answerDialog = close
      this.$message({
        message: 'Congrats, Answer Added',
        type: 'success',
      })
    },
  },
}
</script>

<style>

</style>
