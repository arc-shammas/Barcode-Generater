let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("barImage");
let qrText = document.getElementById("barText");



function generateBar(){
    if(qrText.value.length > 0){
        barImage.src = "https://barcodeapi.org/api/auto/" + barText.value
        imgBox.classList.add("show-img");
    }else{
        barText.classList.add('error');
        setTimeout(()=>{
            barText.classList.remove('error');
        },1000)
    }
    
}
