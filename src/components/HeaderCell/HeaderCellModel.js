
export class HeaderCellModel {
  id
  label
  hasFilter = false
  isFilterVisible = false

  constructor (data, options, id) {
    this.id = `header--${id}`
    this.hasFilter = this.allowFiltering(data.allowHeaderFiltering, options.headerFilter)
    this.label = data.headerLabel || this.parseDataField(data.dataField)
    this.cssClass = data.headerClass || 'header__cell'
  }

  allowFiltering (columnHasHeaderFilter, generalHasHeaderFilter) {
    if (typeof columnHasHeaderFilter !== 'undefined') {
      return columnHasHeaderFilter
    }

    return generalHasHeaderFilter
  }

  toggleFilterVisibility () {
    this.isFilterVisible = !this.isFilterVisible
  }

  parseDataField (string) {
    return string.split('.').join(' ')
  }
}
