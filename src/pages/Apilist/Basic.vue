<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">콘텐츠 API 목록조회 테스트(apiTest)</h1>
      <v-row>
        <v-col cols="12" align="center">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>API 리스트</p>
              <v-spacer></v-spacer>
            </v-card-title>

            <v-row align="center" style="margin-bottom:10px">
              <span style="height: 30px; text-align: center; margin-right: 20px; margin-left: 40px;">제공기관</span>
                <select @change="onChangeSelect($event)" style="outline: 0px solid; height:30px; background-color:#F6F7FF;">
                  <option value="total"> 전체 </option>
                  <option :key="i" :value="d.attributes.providerID" v-for="(d, i) in providerList">{{d.attributes.providerName}}</option>
                </select>
              <span style="height: 30px; text-align: center; margin: 20px;">키워드검색</span>
              <input v-model="search_input" style="background-color:#F6F7FF; height: 30px; outline: 0px solid; " placeholder="검색어를 입력하세요">
              <v-col class="d-flex" cols="1.5" sm="1.5">
                <v-btn depressed color="primary" small @click="provider_search">
                  조회
                </v-btn>
              </v-col>
            </v-row> 

            <v-data-table 
              v-model="mock.apiListTable.selected" 
              :headers="mock.apiListTable.headers"
              :items="apiitem" 
              :sort-by="['attributes.providerID']"
              item-key="apiitem.attributes.providerID"
              hide-default-footer>
              <!-- :page.sync="page"
              :search="search"
              :items-per-page="itemsPerPage"
              @page-count="pageCount = $event"-->
              <template v-slot:item="row">
                <tr>
                  <td></td>
                  <td>{{row.item.attributes.providerID}}</td>
                  <td>{{row.item.attributes.providerName}}</td>
                  <td>
                      <router-link v-bind:to="`apidetails/${row.item.attributes.apiNm}`">
                        {{ row.item.attributes.apiKorNm }}
                      </router-link>
                  </td>
                  <td>{{row.item.attributes.apiNm}}</td>
                  <td>{{row.item.attributes.apiVersion}}</td>
                  <td>{{row.item.attributes.apiDetailDesc}}</td>
                  <td>
                  <v-btn color="primary" depressed small @click="onButtonClick(row.item.attributes)">
                    신청
                  </v-btn>
                  </td>
                </tr>
              </template>
            </v-data-table>
            <div class="text-center pt-2">
            <!-- <v-pagination
              v-model="page"
              :length="6"
            ></v-pagination>   -->
            </div>
            <!-- <v-btn depressed color="primary" large> 콘텐츠 신규신청 </v-btn> -->
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { getApiBasic } from '../../api/index.js'
import { getProviderList } from '../../api/index.js'
import { getProviderSearch } from '../../api/index.js'
import { postApiUsingRequestStatuses } from '../../api/index.js'
import { getApiBasicProviderId } from '../../api/index.js'

import mock from './mock'
import qs from 'qs'

export default {
  name: 'Apilist',
  data() {
    return {
      apiitem:[],
      mock,
      search_input:'',
      key:'',
      providerList:[]
    }
  },

  created(){
    var vm = this;
    getApiBasic()
    .then(function(res){
      vm.apiitem = res.data.data;
      console.log(res.data.data);
    })
    .catch(function(error){
      console.log(error);
    }),

    getProviderList()
    .then(function(res){
      vm.providerList = res.data.data;
      console.log(res.data.data);
    })
    .catch(function(error){
      console.log(error);
    })
  },

  methods: {
    provider_search(){
      console.log(this.search_input);
      getProviderSearch(this.search_input)
      .then((res) => {
        this.apiitem = res.data.data;
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      });
    },

    onChangeSelect(event){
      var vm = this;
      const selectvalue = event.target.value;
      if(selectvalue != 'total'){
        getApiBasicProviderId(selectvalue)
        .then((res) => {
          vm.apiitem = res.data.data;
        })
        .catch((err) => {
          console.log(err)
        });      
      }else{
        this.$router.go(0)
      }
    },

    onButtonClick(item) {
    this.userData = JSON.parse(window.sessionStorage.getItem('userData'))
    this.providerInfo = qs.parse(item)
    if(this.userData){
      postApiUsingRequestStatuses(
      {
      username: this.userData['username'],
      email: this.userData['email'],
      providerID: this.providerInfo["providerID"],
      providerName: this.providerInfo["providerName"],
      endOrNot: "사용중"
      }).then((data)=>{
        console.log(data);
        alert("신청하였습니다!")
        location.href="/Reqcontentsstatus";
        // console.log(Date.now());
      });
    }
    else{
      alert("사용신청을 위해서는 로그인 하셔야 합니다. 로그인 페이지로 이동합니다!")
      location.href="/login";
      }
    }
  }
}

</script>

<style src="./Basic.scss" lang="scss"></style>
