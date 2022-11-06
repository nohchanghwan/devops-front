<template>
  <div>
    <v-card-title class="pa-6">
      <p>2. 요청변수(Request Parameter)</p>
    </v-card-title>
    <v-simple-table class="kb-table-custom">
      <template v-slot:default>
        <thead style="background-color:#F5F5F5">
          <tr>
            <th class="text-center">번호</th>
            <th class="text-center">항목명</th>
            <th class="text-center">항목명(영문변수)</th>
            <th class="text-center">Size</th>
            <th class="text-center">필수여부</th>
            <th class="text-center">항목설명</th>
            <th class="text-center">샘플데이터</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in apiitem" :key="item.name" align="center">
            <td>{{ item.attributes.seqNum }}</td>
            <td>{{ item.attributes.ItemNm }}</td>
            <td>{{ item.attributes.engItemNm }}</td>
            <td>{{ item.attributes.size }}</td>
            <td>{{ item.attributes.mandatoryYN }}</td>
            <td>{{ item.attributes.itemDesc }}</td>
            <td>{{ item.attributes.sampleData }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import mock from '../mock'
import { getApiDetailsReq } from '../../../api';

export default {
  name: 'ApiSpec',
  data() {
    return {
      apiitem:[],
      mock
    }
  },

  created(){
    var vm = this;
    const apiId = this.$route.params.id;
    // console.log(this.$route);
    getApiDetailsReq(apiId)
    .then(function(res){
      vm.apiitem = res.data.data;
      console.log(res.data.data);
    })
    .catch(function(error){
      console.log(error);
    })
  }
}

</script>