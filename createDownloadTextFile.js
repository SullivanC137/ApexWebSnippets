//script creates a text file and downloads it
/*
____ _  _ ____ ___  ____ _  _ ____ ____ ____ ___ ____ _ _    
|__| |\/| |__|   /  |  | |\ | |___ |__/ |___  |  |__| | |    
|  | |  | |  |  /__ |__| | \| |___ |  \ |___  |  |  | | |___ 
*/
// for example from https://amazoneretail.com/product-category/melkproducten/

//function to download file
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
var filename = window.location.href.replace(/[^a-zA-Z0-9]/g,'_');
var file_contents = '\r';
var products = $('li').closest('.product-col');
products.each(function(){
    file_contents = file_contents + '\r' +
                $(this).find('.product-loop-title').find('h3').text()   //descr
    +' ; '+     $(this).find('.product-loop-title').find('span').text() //cont
    +' ; '+     $(this).find('.price').find('bdi').text()               //price
    +' ; '+     $(this).find('.product-image').find('img').attr('src')  //image link
               ;
})

download(filename,file_contents);
// ----------------------------------------------------------------------------- //
/*
_  _ ____ _  _ _ ___  _  _ ____ ___ 
|_/  |__/ |  | | |  \ |  | |__|  |  
| \_ |  \ |__| | |__/  \/  |  |  |  
*/
// for example from https://www.kruidvat.nl/elektronica-media/telefonie/c/20089
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
var filename = window.location.href.replace(/[^a-zA-Z0-9]/g,'_');
var file_contents = '\r';
var products = document.getElementsByClassName('tile__product-slide swiper-slide');
for (let product of products){
    let name,
        description,
        oldPrice,
        newPrice,
        picture;
    name        = product.getElementsByClassName('tile__product-slide-product-name')[0].outerText;
    description = product.getElementsByClassName('tile__product-slide-product-description')[0].outerText;
    if (product.getElementsByClassName('pricebadge__old-price-wrapper')[0] === undefined){
        oldPrice = '';  // no old price
    } else {
        oldPrice    = product.getElementsByClassName('pricebadge__old-price-wrapper')[0].outerText.replace(/\n/g,'');
    }
    if (product.getElementsByClassName('pricebadge__new-price-wrapper ')[0] === undefined){
        newPrice = '';  // no new price
    } else {
        newPrice    = product.getElementsByClassName('pricebadge__new-price-wrapper ')[0].outerText.replace(/\n/g,'');
    }
    if (product.getElementsByClassName('tile__product-slide-image lazyloaded')[0] === undefined){
        picture = ''; // no picture
    } else {
        picture     = product.getElementsByClassName('tile__product-slide-image lazyloaded')[0].src;
    }
    file_contents = file_contents + '\r' + name
                                   +' ; '+ description
                                   +' ; '+ oldPrice
                                   +' ; '+ newPrice
                                   +' ; '+ picture
    ;
    }

    download(filename,file_contents);

// ----------------------------------------------------------------------------- //
