<template>
  <div class="about max-w-7xl">
    <h1 class="text-4xl">{{ count }}</h1>
    <Button @click="increment">increase</Button>
    <Button @click="getOutlets">decrease</Button>
    <ag-grid-vue
      style="width: 500px; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :modules="modules"
    >
    </ag-grid-vue>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '@/components/AppButton.vue'
import { AgGridVue } from 'ag-grid-vue3'
import { ColDef, ColGroupDef, Module } from '@ag-grid-community/core'
import { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules'

interface DataProps {
  count: number
  columnDefs: (ColDef | ColGroupDef)[] | null
  rowData: any[] | null
  modules: Module[]
}

export default defineComponent({
  components: { Button, AgGridVue },
  data(): DataProps {
    return {
      count: 0,
      columnDefs: null,
      rowData: null,
      modules: AllEnterpriseModules,
    }
  },
  beforeMount() {
    this.columnDefs = [{ field: 'make', sortable: true }, { field: 'model' }, { field: 'price' }]

    this.rowData = [
      { make: 'Toyota', model: 'Celica', price: 35000 },
      { make: 'Ford', model: 'Mondeo', price: 32000 },
      { make: 'Porsche', model: 'Boxter', price: 72000 },
    ]
  },
  methods: {
    increment(): number {
      return this.count++
    },
    decrease(): number {
      return this.count--
    },
    async getOutlets() {
      const { data } = await this.axios.get('/modified-outlets')
      console.log(data)
    },
  },
})
</script>
