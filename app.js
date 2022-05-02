var foto;
window.onload = function() {
    foto = new Foto();
}

function selectImage() {
    document.getElementById('foto-file').click();
}

function makeBright(){
    foto.makeBright();
}

function makeGrayScale(){
    foto.grayscale();
}

function makeDark(){
    foto.makeDark();
}

function makeBlur(){
    foto.applyBlurFilter();
}

function makeEmboos(){
    foto.applyEmbossFilter();
}

function makeSharp(){
    foto.applySharpFilter();
}

function download()  
{
    foto.export(); 
}


function openColorpicker(){
    document.getElementById("color-picker").click() 
    ;
}

function makeColorize(elem){
    var color = elem.value;

    foto.colorize(color);
}

function openColorizeColorPicker(){
    document.getElementById("colorize-color-picker").click() 
    ;
}

function makeTransparent(){
    foto.makeTransparent();
}

function applyColorFilter(elem){
    var color = elem.value;
    foto.applyColorFilter(color);
}

function crop(){
    foto.cropSelected();
}

function flipvertically(){
    foto.flipVertically();
}


function rotate(elem){
    foto.rotate(elem.value);
}

function getLink()  
{
    image = document.querySelector('.image');
    link = image.src;
    // link.select();
    navigator.clipboard.writeText(link);
}
