<template>
  <div class="py-4">
    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :modules="modules"
    />
  </div>
</template>
<script lang="ts">
import { AgGridVue } from 'ag-grid-vue3'
import { AllEnterpriseModules, ColumnApi, GridApi } from '@ag-grid-enterprise/all-modules'
import { defineComponent } from 'vue'
import { ColDef, ColGroupDef, Module } from '@ag-grid-community/core'

interface DataProps {
  columnDefs: (ColDef | ColGroupDef)[] | null
  modules: Module[]
  rowData: any[] | null
  gridApi: GridApi | null
  columnApi: ColumnApi | null
}

export default defineComponent({
  components: { 'ag-grid-vue': AgGridVue },
  data(): DataProps {
    return {
      columnDefs: [],
      rowData: null,
      modules: AllEnterpriseModules,
      gridApi: null,
      columnApi: null,
    }
  },
  beforeMount() {
    this.columnDefs = [
      {
        headerName: 'Name',
        field: 'name',
      },
      {
        headerName: 'Username',
        field: 'username',
      },
      {
        headerName: 'Email',
        field: 'email',
      },
    ]
  },
  async created() {
    const { data } = await this.axios.get('/users')
    this.rowData = data
  },
  methods: {
    onGridReady(params) {
      this.gridApi = params.api
      this.columnApi = params.columnApi
    },
  },
})
</script>
