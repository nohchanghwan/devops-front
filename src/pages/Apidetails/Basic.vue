<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">콘텐츠 API상세 입출력항목조회(apiDetails)</h1>
      <v-row>
        <v-col cols="12">
          <v-card class="employee-list mb-1">
            <v-container>
                <api-info></api-info>
                <api-req-spec></api-req-spec>
                <api-res-spec></api-res-spec>
                <v-col sm="12" align="center">
                  <v-btn depressed color="primary" large to='/apilist'> 목록 </v-btn>
                </v-col>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import ApiInfo from './components/ApiInfo.vue'
import ApiReqSpec from './components/ApiReqSpec.vue'
import ApiResSpec from './components/ApiResSpec.vue'

export default {

  components: {
    ApiInfo,
    ApiReqSpec,
    ApiResSpec
},
  name: 'Apidetails',
}

</script>

<style src="./Basic.scss" lang="scss"></style>
