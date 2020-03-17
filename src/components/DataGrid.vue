<template>
  <table class="table">
    <tr class="header">
      <data-grid-header-cell v-for="header in headers" :key="header.id" :header="header" />
    </tr>
    <tr v-for="item in data" :key="item.id">
      <td v-for="column in cols" :key="column.id">
        <slot v-if="column.slotName" :name="column.slotName" v-bind="item" />
        <template v-else>
          {{ column.getValue(item) || options.emptyLabel }}
        </template>
      </td>
    </tr>
  </table>
</template>
<script>
import axios from 'axios'
import DataGridHeaderCell from './HeaderCell/HeaderCell.vue'
import { HeaderCellModel } from './HeaderCell/HeaderCellModel'
import { Column } from './Column'

export default {
  name: 'DataGrid',
  components: { DataGridHeaderCell },
  props: {
    options: {
      type: Object,
      default: null
    },
    columns: {
      type: Array,
      required: true
    },
    model: {
      type: Function,
      default: null
    },
    url: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      data: [],
      // @ todo remove duplicate map on same array
      headers: this.columns.map((col, index) => new HeaderCellModel(col, this.options, index)),
      cols: this.columns.map((col, index) => new Column(col, index))
    }
  },
  async mounted () {
    const { data, error } = await axios.get(this.url)
    if (error) {
      this.$emit('error')
    }
    this.data = this.model ? data.data.map(item => new this.model(item)) : data.data
  }
}
</script>
<style lang="scss">
  .header {
    &__cell {
      @apply flex justify-between p-sm;

      &__icon {

      }
    }

    &__filter {
      @apply absolute right-0;
      top: 100%;
    }
  }
</style>
