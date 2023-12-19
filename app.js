function toggleContent(boxId){
 let  expandbox = document.getElementById(boxId);
 let radiobtn =document.getElementById('box'+boxId);
 console.log(radiobtn.checked);
 console.log(expandbox.classList.contains('expand-box-visible'));
 if(expandbox.classList.contains('expand-box-visible')){
    expandbox.classList.remove('expand-box-visible');
    radiobtn.checked = false;
}else{
    expandbox.classList.add('expand-box-visible')
    radiobtn.checked = true;
}
}

 