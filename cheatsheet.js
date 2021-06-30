// pure Javascript or APEX JS api's

//submit via javascript in a URL
javascript: doSubmit({   request:"DELETE",   set:{"P1_DEPTNO":10, "P1_EMPNO":5433});

//return a translateable text message
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

