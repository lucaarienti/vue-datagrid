<template>
  <th class="relative">
    <div :class="header.cssClass">
      <p>{{ header.label }}</p>
      <b-icon v-if="header.hasFilter"
              @click.native="header.toggleFilterVisibility"
              class="header__cell__icon"
              name="options"
              font="ios"
      />
      <div class="header__filter" v-if="header.isFilterVisible">
        filter visible
      </div>
    </div>
  </th>
</template>
<script>
import { HeaderCellModel } from './HeaderCellModel'

export default {
  name: 'DataGridHeader',
  props: {
    header: {
      type: HeaderCellModel,
      required: true
    }
  }
}
</script>
