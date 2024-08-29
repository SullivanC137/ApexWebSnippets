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

// -----------------------------------------------------------------------------------------------------
