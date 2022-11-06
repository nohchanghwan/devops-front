<template>
  <div>
    <v-card-title class="pa-6">
      <p>3. 출력결과(Response Parameter)</p>
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
            <th class="text-center">상세데이터여부</th>
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
            <td v-if="item.attributes.instanceCode">

              <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="290">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" @click="getSampleData(item.attributes)" :value="item.attributes.instanceCode" v-bind="attrs" v-on="on" outlined rounded small>
                      {{ item.attributes.sampleData }}
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="text-h5">
                      샘플데이터 상세
                    </v-card-title>
                    <v-simple-table>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">코드ID</th>
                            <th class="text-left">코드ID명</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr
                            v-for="item in instanceData"
                            :key="item.name">
                            <td>{{ item.attributes.codeId }}</td>
                            <td>{{ item.attributes.codeIdName }}</td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn text @click="dialog = false">
                        닫기
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>

              <!-- {{ item.attributes.sampleData }} -->
            </td>
            <td v-else>{{ item.attributes.sampleData }}</td>
            <td>{{ item.attributes.instanceCode }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
import mock from '../mock'
import { getApiDetailsRes } from '../../../api';
import { getApiDetailCode } from '../../../api';

export default {
  name: 'ApiSpec',
  data() {
    return {
      apiitem:[],
      mock,
      dialog: false,
      instanceData: [],
    }
  },

  created(){
    var vm = this;
    const apiId = this.$route.params.id;
    // console.log(this.$route);
    getApiDetailsRes(apiId)
    .then(function(res){
      vm.apiitem = res.data.data;
      console.log(res.data.data);
    })
    .catch(function(error){
      console.log(error);
    })
  },

    methods : {
    getSampleData(item){
      var vm = this;
      const data = item.instanceCode
      getApiDetailCode(data)
      .then(function(res){
        vm.instanceData = res.data.data;
        console.log(res.data.data);
      })
      .catch(function(error){
        console.log(error);
      })
    }
  }
}

</script>
