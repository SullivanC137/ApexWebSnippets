//script creates a text file and downloads it
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
