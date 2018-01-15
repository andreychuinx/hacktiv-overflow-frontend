<template>
  <el-main>
    <el-row>
      <el-row>
        <el-col style="text-align: left;">
        <h1>Title Question</h1>
        Description
      </el-col>
      </el-row>
      <el-row style="margin-top: 20px;">
        <el-col  style="text-align: left;">
          <el-button type="success">
            <i class="el-icon-caret-top">Up</i>
          </el-button>
          <el-button type="danger">
            <i class="el-icon-caret-bottom">Down</i>
          </el-button>
          <el-button type="primary">
            Answer
          </el-button>
        </el-col>
          
      </el-row>
      <el-row style="margin-top: 20px;">
        <el-col>
          <el-card class="item">
            <el-row>
              <el-col :span="1">

                <h3>0</h3>
                Up
              </el-col>
              <el-col :span="2">

                <h3>0</h3>
                Down
              </el-col>
              <el-col :span="19">
                <el-row>
                  <router-link :to="{path: `/detail/asldopko`}">
                    <h2 style="float: left; padding-left: 20px;">INI Jawabannya</h2>
                  </router-link>
                </el-row>
                <el-row>
                  <p style="text-align: right;">User</p>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  
  </el-main>
</template>

<script>
export default {

}
</script>

<style>

</style>
