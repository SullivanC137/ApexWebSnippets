function(config) {
    var cfg = cfg;
   cfg.stretchColumns = false;
   return config;
 }]
 
 $('#report_vkp_prices_report').find('tr.selected')[1]
 
 $('.datarow').data('fld_lnd_code')
 
 $('#report_vkp_prices_report').find('tr.selected')[1]
 
 $('.datarow').data('prl_id')
 
 
 javascript: doSubmit({   request:"DELETE",   set:{"P1_DEPTNO":10, "P1_EMPNO":5433});
 
 data-aos_type=#AOS_TYPE# data-tal_code=#TAL_CODE# data-omschrijving=#OMSCHRIJVING# data-rowno=#ROWNO#
 
 data-formaat_ean=#TYPE# data-ean=#BARCODE# ta-rowno=#ROWNO#
 
 data-lnd_code=#COUNTRY# data-btwcodeid=#VAT# data-rowno=#ROWNO#
 

// On click mark selected: jQuery selector: #report_hee_report > > > > tbody > > td

 //$s("P7010_HEE_SELECTED", $(this.triggeringElement).parent().children("td:first").text());
$s("P7010_HEE_SELECTED", $(this.triggeringElement).parent().children("td:nth-child(2)").text());

// Mark selected parent row
$('#hee_report').find('tr.selected').removeClass('selected');
$(this.triggeringElement).closest('tr').addClass('selected');

//------------
// --> after refresh of report
// Set selected
$s("P7010_HEE_SELECTED", $(this.triggeringElement).find("td:first").text());

// Mark first parent row
$('#report_hee_report').find('tr.selected').removeClass('selected');
$('#report_hee_report').find('tbody tr:first-of-type').addClass('selected');


// NEW code make use of datarow class to set item values
$s("P7010_VKP_SELECTED_PRL_ID",$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').find("span").data('prl_id'));
$s("P7010_VKP_SELECTED_LND_CODE",$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').find("span").data('fld_lnd_code'));
//old, working code to set values:
//$s("P7010_VKP_SELECTED_PRL_ID", $(this.triggeringElement).find('td[headers="PRL_ID"]:first').text());
//$s("P7010_VKP_SELECTED_LND_CODE", $(this.triggeringElement).find('td[headers="FLD_LND_CODE"]:first').text());
//---------
//New code to mark first row as selected
$('#report_vkp_prices_report').find('tr.selected').removeClass('selected');
$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').closest("tr").addClass('selected');

/* Old, working code to mark fisrt row 
   Report static id = vkp_prices_report
*/
//$('#report_vkp_prices_report').find('tr.selected').removeClass('selected');
//$('#report_vkp_prices_report').find('tbody tr:first-of-type').addClass('selected');
