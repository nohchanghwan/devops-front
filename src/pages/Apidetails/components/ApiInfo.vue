<template>
  <div>
    <v-card-title class="pa-6 pb-3">
      <p>1. API 요약</p>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-col sm="12">
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            API 한글명
          </v-card>
        </v-col>
        <v-col cols="4" sm="4">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='apiKorNm' tile>
            {{apiitem.attributes.apiKorNm}}
          </v-card>
        </v-col>
        <v-col cols="4" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            제휴사명
          </v-card>
        </v-col>
        <v-col cols="4" sm="4">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='providerName' tile>
            {{apiitem.attributes.providerName}}
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            API명
          </v-card>
        </v-col>
        <v-col cols="4" sm="4">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='apiNm' tile>
            {{apiitem.attributes.apiNm}}
          </v-card>
        </v-col>
        <v-col cols="4" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            제휴사코드
          </v-card>
        </v-col>
        <v-col cols="4" sm="4">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='providerID' tile>
            {{apiitem.attributes.providerID}}
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            키워드
          </v-card>
        </v-col>
        <v-col cols="4" sm="4">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='searchKeyword' tile>
            {{apiitem.attributes.searchKeyword}}
          </v-card>
        </v-col>
        <v-col cols="4" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            등록일시
          </v-card>
        </v-col>
        <v-col cols="4" sm="4">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='regYMD' sptile>
            {{apiitem.attributes.regYMD}}
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            데이터포맷
          </v-card>
        </v-col>
        <v-col cols="4" sm="10">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='regYMD' tile>
            {{apiitem.attributes.dataFormat}}
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            API설명
          </v-card>
        </v-col>
        <v-col cols="4" sm="10">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='apiDetailDesc' tile>
            {{apiitem.attributes.apiDetailDesc}}
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            요청주소
          </v-card>
        </v-col>
        <v-col cols="4" sm="10">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='reqURL' tile>
            {{apiitem.attributes.reqURL}}
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            서비스 URL
          </v-card>
        </v-col>
        <v-col cols="4" sm="10">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='serviceURL' tile>
            {{apiitem.attributes.serviceURL}}
          </v-card>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="2" sm="2" align="center">
          <v-card class="pa-2" outlined style="background-color: #F5F5F5;" tile>
            입출력상세항목조회
          </v-card>
        </v-col>
        <v-col cols="4" sm="10">
          <v-card class="pa-2" outlined style="grey lighten-2;" ref='usingEx' tile>
            {{apiitem.attributes.usingEx}}
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    
     <v-col sm="12" align="right">
       <v-btn depressed color="primary" margin-right="12px" large @click="api_using_request1">
            입출력상세항목조회
        </v-btn>
    </v-col>

  </div>
</template>

<script>
import { getApiBasicId, postApiUsingRequestStatuses } from '../../../api/index.js'
export default {
  name: 'ApiInfo',
  data() {
    return {
      apiitem:[]
    }
  },

  created(){
    var vm = this;
    const apiId = this.$route.params.id;
    // console.log(this.$route);
    getApiBasicId(apiId)
    .then(function(res){
      vm.apiitem = res.data.data[0];
      // console.log(res.data.data[0]);
    })
    .catch(function(error){
      console.log(error);
    })
  },
  methods: {
    async api_using_request(e) {
      try {
    e.preventDefault()
        this.userData = JSON.parse(window.localStorage.getItem('userData'))
       const res = await postApiUsingRequestStatuses(
          {
            username: this.userData['username'],
            email: this.userData['email'],
            providerID: this.$refs.providerID.$el.innerHTML,
            providerName: this.$refs.providerName.$el.innerHTML,
            apiNm: this.$refs.apiNm.$el.innerHTML,
            regYMD: this.$refs.regYMD.$el.innerHTML,
            processDstcd: '0',
            sysLastEmpid: String(this.userData['id']),
            sysLastPrcssYMS: this.$refs.regYMD.$el.innerHTML,
            apiKorNm: this.$refs.apiKorNm.$el.innerHTML
          },
        );

        console.log(res);
      } catch (error) {
        this.error = true
      }
    },
    api_using_request1() {
          window.open("http://43.200.122.157:1337/documentation/v1.0.0#/Users-permissions%20-%20Role", "_blank");
       }
  }
}


</script>