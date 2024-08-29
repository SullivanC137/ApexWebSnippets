// adding a button to open an inline modal region:
//   1. create a normal button first and set all logic to this button.
//   2. hide this button by adding css class u-hidden
//   3. use below code to add a button to the IG toolbar
function(config) {

    let toolbarData   = $.apex.interactiveGrid.copyDefaultToolbar()
    let addrowAction  = toolbarData.toolbarFind("selection-add-row")
    let toolbarGroup  = toolbarData.toolbarFind("actions2"); // Get the group 

    let lastToolbarGroup = toolbarData[toolbarData.length - 1]
    let addButton = {
        type: "BUTTON",
        hot: true,
        action: "add-ig",
        icon: "fa fa-plus",
        iconBeforeLabel: true
    }
    toolbarGroup.controls.push( addButton )
    config.toolbarData = toolbarData
    config.initActions = function(actions) {
      // add button 
      actions.add({
        name: "add-ig",
        label: "Add",
        action: function(event, focusElement) {
            let some_kind_of_id = $v("P_<PAGE_NUMBER>_ITEM_NAME") // extra code to check if an item is set. This is optional
            if (some_kind_of_id != null && some_kind_of_id != '') {
              $("#DEFAULT_BUTTON_STATIC_ID").click()
            }
        }
      })
    }
    return config;
}
