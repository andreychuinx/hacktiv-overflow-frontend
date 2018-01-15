<template>
  <el-main>
    <el-row>
      <el-col :span="18">
        <el-row style="padding-bottom:10px;">
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
              <el-col :span="2">

                <h3>0</h3>
                Answer
              </el-col>
              <el-col :span="19">
                <el-row>
                  <router-link :to="{path: `/detail/asldopko`}">
                    <h2 style="float: left; padding-left: 20px;">INI PERTANYAANNYA</h2>
                  </router-link>
                      

                </el-row>
                <el-row>
                  <p style="text-align: right;">User</p>
                </el-row>
              </el-col>
            </el-row>
          </el-card>
        </el-row>
        <el-row style="padding-bottom:10px;">
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
              <el-col :span="2">

                <h3>0</h3>
                Answer
              </el-col>
              <el-col :span="19">
                <el-row>
                  <h2 style="text-align: left; padding-left:20px;">INI PERTANYAANNYA</h2>
                </el-row>
                <el-row>
                  <p style="text-align: right;">User</p>
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
export default {}
</script>

<style>
.item {
  padding: 0px;
  vertical-align: top;
}
</style>
