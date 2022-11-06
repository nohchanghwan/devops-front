<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">콘텐츠 API 사용현황 조회(Reqcontentsstatus)</h1>
      <v-row>
        <v-col cols="12" align="center">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>API 리스트</p>
              <v-spacer></v-spacer>
              <!-- <api-search></api-search> -->
            </v-card-title>
            <v-data-table 
              v-model="mock.Reqcontentsstatus.selected" 
              :headers="mock.Reqcontentsstatus.headers"
              :items="apiitem" 
              item-key="providerID"
              hide-default-footer>
              <!-- :page.sync="page"
              :items-per-page="itemsPerPage"
              @page-count="pageCount = $event"> -->
              <template v-slot:item="row">
                <tr>
                  <td></td>
                  <td>{{row.item.attributes.username}}</td>
                  <td>{{row.item.attributes.email}}</td>
                  <td>{{row.item.attributes.providerName}}</td>
                  <td>{{row.item.attributes.createdAt}}</td>
                  <!-- <td>{{row.item.attributes.endYMD}}</td> -->
                  <td v-if="row.item.attributes.endYMD">{{row.item.attributes.endYMD}}</td>
                  <td v-else>-</td>          
                  <td>{{row.item.attributes.endOrNot}}</td>       
                  <!-- <td v-if="row.item.attributes.endOrNot">{{row.item.attributes.endOrNot}}</td>
                  <td v-else>사용중</td> -->
                  <td>
                    <v-btn color="primary" disabled depressed small @click="EndUse(row.item.id)" v-if="(row.item.attributes.endYMD)">
                      사용종료
                    </v-btn>
                    <v-btn color="primary" depressed small @click="EndUse(row.item.id)" v-else>
                      사용종료
                    </v-btn>
                    <!-- <v-btn color="primary" depressed small @click="delItem(row.item.id)">사용종료</v-btn> -->
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
import { getApiUsingRequestStatuses, updateApiUsingRequestStatuses } from '../../api/index.js'
// import { getApiUsingRequestStatuses } from '../../api/index.js'

import mock from './mock'

export default {
  components: {
  },
  name: 'Reqcontentsstatus',
  data() {
    return {
      apiitem:[],
      mock,
    }
  },

  created(){
    var vm = this;
    getApiUsingRequestStatuses()
    .then(function(res){
      vm.apiitem = res.data.data;
      console.log(res.data.data);
    })
    .catch(function(error){
      console.log(error);
    })
  },

  methods: {
    EndUse(id) {
      console.log(id);
      updateApiUsingRequestStatuses(id,
      {
      // username: this.userData['username'],
      // email: this.userData['email'],
      // providerID: this.providerInfo["providerID"],
      // providerName: this.providerInfo["providerName"],
      endOrNot: "사용 종료",
      endYMD: "-",
      })
      .then((data)=>{
        console.log(data);
        alert("종료되었습니다!");
        this.$router.go(0);

      });
    }
  }
}

</script>

<style src="./Basic.scss" lang="scss"></style>
