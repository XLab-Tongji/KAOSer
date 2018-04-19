function whatType() {
    var geMenus=document.getElementsByClassName('geItem');
    var flag;
    for(var i=0;i<geMenus.length;i++){
        if(geMenus[i].innerHTML=='SpecialRequirement'){
            flag=1;
        }
    }
    return flag;
}
