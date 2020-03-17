import get from 'lodash/get'

export class Column {
  type
  slotName
  dataField

  constructor (data, id) {
    this.id = `column--${id}`
    this.type = data.dataType
    this.slotName = data.cellTemplate
    this.dataField = data.dataField
  }

  getValue (item) {
    return get(item, this.dataField)
  }
}
