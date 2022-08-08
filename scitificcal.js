function designate(a){
    forms.display.value+=a;

}
function del(){
    var war =forms.display.value;
    forms.display.value=war.substring(0,war.length-1);

}
function ac(){
    forms.display.value="";
}


function equal(){

    forms.display.value=eval(forms.display.value);
    
}
function sqrt(){
    var rema=forms.display.value;
    var divine= Math.sqrt(rema);
    forms.display.value=divine;
}
function per(){
    var perc=forms.display.value;
    var ops=eval(perc);
    var tage= ops+"%";
    forms.display.value=tage;
}
function fact(){
    var n= forms.display.value;
    let answer= 1;
    if(n ==0 || n==1){
        answer=1;
    }else{
        for(var i=n; i>=1; i-- ){
            answer=answer *i;
        }
    }
    forms.display.value=answer;
}
function rad(){
    var radian=forms.display.value;
    var radia=(radian*180)/3.14;
    forms.display.value=radia;
}
function square(){
    var sq= forms.display.value;
    var ree=Math.pow(sq,2);
    forms.display.value=ree;
}
function logarithm(){
    var loga= forms.display.value;
    var leg=Math.log(loga);
    forms.display.value=leg;
}
function pi(){
    var pii= forms.display.value;
    var padi= pii*3.141;
    forms.display.value=padi;
}
function sine(){
    var trigo=forms.display.value;
    var ho= Math.sin(trigo);
    forms.display.value=ho;
}
function cos(){
    var trigo=forms.display.value;
    var ho= Math.cos(trigo);
    var d= ho *(180/Math.PI);
    forms.display.value=d;
}
function tan(){
    var trigo=forms.display.value;
    var ho= Math.tan(trigo);
    forms.display.value=ho;
}
function asine(){
    var asha=forms.display.value;
    var nolo=Math.asin(asha);
    forms.display.value=nolo;
}

function atan(){
    var asha=forms.display.value;
    var nolo=Math.atan(asha);
    forms.display.value=nolo;
}
function acos(){
    var asha=forms.display.value;
    var nolo=Math.acos(asha);
    forms.display.value=nolo;
}



