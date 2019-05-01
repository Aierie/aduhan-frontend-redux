//FILTERS
//note that filterType is denoted as a stop-gap, it reduces work from the wrong filters
//because they will stop working on changing state if filterType is wrong
//see reducers for more detail
export function toggleFilterItem(filterType, filterItem) {
  return (
    {
      type: "TOGGLE_FILTER_ITEM",
      filterType,
      filterItem
    }
  )
}

export function toggleSelectAll(filterType, checked) {
  return (
    {
      type: "TOGGLE_SELECT_ALL",
      filterType,
      checked
    }
  )
}

/* UNUSED
export function submitFilter() {
  return (
    {
      type: "SUBMIT_FILTER"
    }
  )
}
*/