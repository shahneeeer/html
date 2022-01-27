let nameNode=document.getElementById("name");
let errNode1=document.getElementById("err1");
function validate(){
    errNode1.innerHTML="";
    nameNode.style.border="2px green solid";
    nameNode.style.backgroundColor="yellow";
    let name=nameNode.value;
    if(name==""){
        errNode1.innerHTML="this field is required";
        nameNode.style.border="2px red solid";
        nameNode.style.backgroundColor="pink";
        return false;

    }
    else
        return true

}


let mobNode=document.getElementById("inp2")
let errNode2=document.getElementById("sp1")
function validation1(){
    errNode2.innerHTML="";
    mobNode.style.border="2px green solid";
    mobNode.style.backgroundColor="yellow";
    let mob=mobNode.value;
    if(mob==""){
        errNode2.innerHTML="this field is required";
        mobNode.style.border="2px red solid";
        mobNode.style.backgroundColor="pink";
        return false

    }
    else
        return true

}


let mailNode=document.getElementById("mailid")
let errNode3=document.getElementById("err3")
function validation3(){
    errNode3.innerHTML="";
    mailNode.style.border="2px green solid";
    mailNode.style.backgroundColor="yellow";
    let emailId=mailNode.value;
    let ss=emailId.substring(emailId.indexOf("@")+1);
    console.log(ss)
    if(emailId==""){
        errNode3.innerHTML="this field is required";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor="pink";
        return false

    }
    else if (!emailId.includes("@" ) || ss===""){
        errNode3.innerHTML="Invalid email id";
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor="pink";
        return false
    
        
    }
    else    
        return true

}




let passNode=document.getElementById("password")
let errNode4=document.getElementById("err4")
function validation4(){
    errNode4.innerHTML="";
    passNode.style.border="2px green solid";
    passNode.style.backgroundColor="yellow";
    let pass=passNode.value;
    let regexpress=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");

    
    
    if(pass==""){
        errNode4.innerHTML="this field is required";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor="pink";
        return false

    }
    else if (!regexpress.test(pass)){
        errNode4.innerHTML="Password should contain";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor="pink"; 
        return false
    }
    else if (pass.length<3 || pass.length>8){
        errNode4.innerHTML="Password should contain";
        passNode.style.border="2px red solid";
        passNode.style.backgroundColor="pink";
        return false
    }
    else
        return true
    
}


let confpassNode=document.getElementById("con_password")
let errNode5=document.getElementById("err5")
function validation5(){
    errNode5.innerHTML="";
    confpassNode.style.border="2px green solid";
    confpassNode.style.backgroundColor="yellow";
    let confpass=confpassNode.value;
    let pass=passNode.value;

    
    
    if(confpass==""){
        errNode5.innerHTML="this field is required";
        confpassNode.style.border="2px red solid";
        confpassNode.style.backgroundColor="pink";
        return false

    }
    else if (pass!=confpass){
        errNode5.innerHTML="Password is not maching";
        confpassNode.style.border="2px red solid";
        confpassNode.style.backgroundColor="pink"; 
        return false
    
    }
    else
        return true
    

}
let checkNode=document.getElementById("showpass1");
function showpass(){
    if(checkNode.checked){
        passNode.type="text";
        confpassNode.type="text";
        
    }
    else{
        passNode.type="password"
        confpassNode.type="password"
    
    }

}






let dropNode=document.getElementById("list")
let errNode8=document.getElementById("err6")
function validation6(){
    errNode8.innerHTML="";
    dropNode.style.border="2px green solid";
    dropNode.style.backgroundColor="yellow";
}





let cardNode=document.getElementById("card");
let errNode9=document.getElementById("err9");
function validation8(){
    errNode9.innerHTML="";
    cardNode.style.border="2px green solid";
    cardNode.style.backgroundColor="yellow";
    let card=cardNode.value;
    if(card==""){
        errNode9.innerHTML="this field is required";
        cardNode.style.border="2px red solid";
        cardNode.style.backgroundColor="pink";
        return false;

    }
    else
        return true

}








function validateform(){
    let st1=validate();
    let st2=validation1();
    
    let st4=validation3();
    let st5=validation4();
    let st3=validation5();
    let st6=validation6();
    let st8=validation8();
    return (st1 && st2 && st3 && st4 && st5 && st6 && st8);
    
}



















