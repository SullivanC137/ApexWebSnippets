//add apex wait overlay
apex.widget.waitPopup();
//remove it
$("#apex_wait_overlay").remove();
$(".u-Processing").remove();


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

// set interactive grid into edit mode
apex.region("ig_static_id").call("getActions").set("edit", true);

// hide the interactive grid edit button
apex.region("ig_static_id").call("getActions").hide("edit");

// navigate using a DA/javascript
apex.navigation.redirect ( "f?p=&APP_ID.:9450:&APP_SESSION.:::::" );

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
