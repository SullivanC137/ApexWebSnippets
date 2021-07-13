//      _      ____    _____  __  __                    _   _       
//     / \    |  _ \  | ____| \ \/ /     __ _   _ __   (_) ( )  ___ 
//    / _ \   | |_) | |  _|    \  /     / _` | | '_ \  | | |/  / __|
//   / ___ \  |  __/  | |___   /  \    | (_| | | |_) | | |     \__ \
//  /_/   \_\ |_|     |_____| /_/\_\    \__,_| | .__/  |_|     |___/
//                                             |_|                  

//submit via javascript in a URL
javascript: doSubmit({   request:"DELETE",   set:{"P1_DEPTNO":10, "P1_EMPNO":5433}})

// close/open inline modal region with link in URL:
javascript:closeModal('region_static_id')
javascript:openModal('region_static_id')

//return a translateable text message
// SOME_KIND_OF_MESSAGE = an apex message inserted in "shared components → messages"
apex.lang.getMessage( "SOME_KIND_OF_MESSAGE");

//show errormessage
apex.message.showErrors([
    {
        type:       "error",
        location:   "page",
        message:    "Page error has occurred!",
        unsafe:     false
    }
]);

//open an inline dialog Modal region with javascript:
openModal('region_static_id');

// -----------------------------------------------------------------------------------------------------
//   _           _                                  _     _                                   _       _ 
//  (_)  _ __   | |_    ___   _ __    __ _    ___  | |_  (_) __   __   ___      __ _   _ __  (_)   __| |
//  | | | '_ \  | __|  / _ \ | '__|  / _` |  / __| | __| | | \ \ / /  / _ \    / _` | | '__| | |  / _` |
//  | | | | | | | |_  |  __/ | |    | (_| | | (__  | |_  | |  \ V /  |  __/   | (_| | | |    | | | (_| |
//  |_| |_| |_|  \__|  \___| |_|     \__,_|  \___|  \__| |_|   \_/    \___|    \__, | |_|    |_|  \__,_|
//                                                                             |___/                    
// -----------------------------------------------------------------------------------------------------
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
// -----------------------------------------------------------------------------------------------------
