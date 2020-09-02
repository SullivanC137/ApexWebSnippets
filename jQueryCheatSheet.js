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

/* Old, working code to mark first row 
   Report static id = vkp_prices_report */
//$('#report_vkp_prices_report').find('tr.selected').removeClass('selected');
//$('#report_vkp_prices_report').find('tbody tr:first-of-type').addClass('selected');

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
$('oj-inputsearch-input-P4_SEARCH_TEXT_FIELD_HIDDEN').val'some text');
