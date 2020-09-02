// Good practice: use $v to get values, $s to set values
 
//submit via javascript in a URL
javascript: doSubmit({   request:"DELETE",   set:{"P1_DEPTNO":10, "P1_EMPNO":5433});
                       
// Make use of datarow class to set item values
$s("P7010_VKP_SELECTED_PRL_ID", $('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').find("span").data('prl_id'));
$s("P7010_VKP_SELECTED_LND_CODE",$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').find("span").data('fld_lnd_code'));

// --> after refresh of report
// Set selected item
$s("P7010_HEE_SELECTED", $(this.triggeringElement).find("td:first").text());

// NEW code make use of datarow class to set item values
$s("P7010_VKP_SELECTED_PRL_ID",$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').find("span").data('prl_id'));
$s("P7010_VKP_SELECTED_LND_CODE",$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').find("span").data('fld_lnd_code'));
//old, working code to set values:
//$s("P7010_VKP_SELECTED_PRL_ID", $(this.triggeringElement).find('td[headers="PRL_ID"]:first').text());
//$s("P7010_VKP_SELECTED_LND_CODE", $(this.triggeringElement).find('td[headers="FLD_LND_CODE"]:first').text());
//---------

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

