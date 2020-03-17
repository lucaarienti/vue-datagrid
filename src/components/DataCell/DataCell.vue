<template>
  <td>
    <slot v-if="column.slotName" :name="column.slotName" v-bind="row" />
    <template v-else>
      {{ column.getValue(row) || emptyValue }}
    </template>
  </td>
</template>
<script>
export default {
  name: 'DataCell',
  props: {
    column: {
      type: Object,
      required: true,
    },
    emptyValue: {
      type: String,
      default: null,
    },
    row: {
      type: Object,
      default: null,
    }
  }
}
</script>
