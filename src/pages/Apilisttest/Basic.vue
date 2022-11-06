<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">콘텐츠 API 목록조회(apiList0)</h1>
      <v-row>
        <v-col cols="12" align="center">
          <v-card class="employee-list mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>API 리스트</p>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="mock.employeeTable.search"
                append-icon="mdi-magnify"
                label="Search"
                clearable
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              v-model="mock.employeeTable.selected"
              :headers="mock.employeeTable.headers"
              :items="mock.employeeTable.employee"
              :search="mock.employeeTable.search"
              item-key="name"
              >
            </v-data-table>

            <!-- <v-pagination
              v-model="page"
              :length="10"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination> -->

            <v-btn
                    depressed
                    color="primary"
                    large
                  >
                    콘텐츠 신규신청
          </v-btn>
          </v-card>

        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from './mock'

export default {
  name: 'Apilist',
  data() {
    return {
      mock
    }
  }
}

</script>

<style src="./Basic.scss" lang="scss"></style>
