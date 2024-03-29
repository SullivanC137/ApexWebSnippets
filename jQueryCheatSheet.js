x// Cheatsheet for often used jQuery functions and selectors
// TODO: cleanup and order

// jQuery selectors: https://www.w3schools.com/jquery/jquery_ref_selectors.asp

// root font size was different after upgrading APEX. This sets the font size to 9px, only if it is 16
if($('html').css("font-size")==='16px'){$('html').css("font-size","9px");}

$('#report_vkp_prices_report').find('tr.selected')[1] //Johannes says its the second element!!
// add classes to a row report and then 
// data-aos_type=#AOS_TYPE# data-tal_code=#TAL_CODE# data-omschrijving=#OMSCHRIJVING# data-rowno=#ROWNO#
// data-formaat_ean=#TYPE# data-ean=#BARCODE# ta-rowno=#ROWNO#
// data-lnd_code=#COUNTRY# data-btwcodeid=#VAT# data-rowno=#ROWNO#
$('.datarow').data('fld_lnd_code')
$('.datarow').data('prl_id')

//Mark first row as selected
$('#report_vkp_prices_report').find('tr.selected').removeClass('selected');
$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').closest("tr").addClass('selected');

// change region titles of #report_selling_price_report and selling_price_report 
$('#recom_price_report h2').text("Recommended Price of " + $(this.triggeringElement).parent().find('td[headers="BUSINESS_UNIT"]').find("span").data('fld_lnd_code'));
$('#selling_price_report h2').text("Retail Prices of " + $(this.triggeringElement).parent().find('td[headers="BUSINESS_UNIT"]:first').find("span").text());
                       
// On click mark selected: jQuery selector: #report_hee_report > > > > tbody > > td
$s("P7010_HEE_SELECTED", $(this.triggeringElement).parent().children("td:first").text());
$s("P7010_HEE_SELECTED", $(this.triggeringElement).parent().children("td:nth-child(2)").text());

// Mark selected parent row
$('#hee_report').find('tr.selected').removeClass('selected');
$(this.triggeringElement).closest('tr').addClass('selected');

// Mark first parent row
$('#report_hee_report').find('tr.selected').removeClass('selected');
$('#report_hee_report').find('tbody tr:first-of-type').addClass('selected');

//New code to mark first row as selected
$('#report_vkp_prices_report').find('tr.selected').removeClass('selected');
$('#report_vkp_prices_report').find('td[headers="BUSINESS_UNIT"]:first').closest("tr").addClass('selected');

/* Old, working code to mark first row Report static id = vkp_prices_report */
//$('#report_vkp_prices_report').find('tr.selected').removeClass('selected');
//$('#report_vkp_prices_report').find('tbody tr:first-of-type').addClass('selected');

// Mark HEE Row in report as selected (user has searched for this row)
apex.jQuery('#report_hee_report tbody tr').removeClass('selected');
let x = apex.jQuery('#report_hee_report td[headers="ID"]:contains('+apex.item('P7010_SEARCH_HEE_ID').getValue()+')');
apex.jQuery(x).closest('tr').addClass('selected');

//add/remove disabled attribute to button
$('#saveBtnSAVE').attr('disabled','disabled');
$('#saveBtnSAVE').removeAttr('disabled');

//make a region sticky (unsupported/undocumented)
// on page load run:
$("#stickyRegionsStaticID").stickyWidget({toggleWidth:true});

//get length of input item (text field)
$('#P7013_INHOUD_CE').val().length;

//jQuery selector example:
// find all input items in Region with static id = search
$('div#search input');

//Apex 20.1: Text Field with Autocomplete
// item = P4_SEARCH_TEXT_FIELD
$('oj-inputsearch-input-P4_SEARCH_TEXT_FIELD_HIDDEN').val('some text');

                       
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

// Get HEE_ID selected by user
let lHEE_Selected = $(this.triggeringElement).parent().find('td[headers="ID"]').text();
$s("P7010_HEE_SELECTED", lHEE_Selected);
apex.debug.log('On Click HEE Row, HEE Selected ',lHEE_Selected);

// Mark selected parent row
$('#hee_report').find('tr.selected').removeClass('selected');
$(this.triggeringElement).closest('tr').addClass('selected');

//Search for specific data attribute
$('#report_purchase_price_report [data-ingangsdatum="15-08-2020"] .delete-ikp');

