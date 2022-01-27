let nameNode
let errNode1
$(function(){
    nameNode=$("#name");
    errNode1=$("#err1");
    nameNode.blur(function(){
        validate();
    });
});
function validate(){
    errNode1.html("");
    nameNode.css({border:"2px green solid",backgroundColor:"yellow"})
    let name=nameNode.val();
    if(name==""){
        errNode1.html("this field is required");
        nameNode.css({border:"2px red solid",backgroundColor:"pink"})
        
        return false;

    }
    else
        return true

}


let numNode
let errNode2
$(function(){
    numNode=$("#inp2");
    errNode2=$("#sp1");
    numNode.blur(function(){
        validation1();
    });
});
function validation1(){
    errNode2.html("");
    numNode.css({border:"2px green solid",backgroundColor:"yellow"})
  
    let num=numNode.val();
    if(num==""){
        errNode2.html("this field is required");
        numNode.css({border:"2px red solid",backgroundColor:"pink"})
        
    return false

    }
    else
        return true
    

}


let mailNode
let errNode3
$(function(){
    mailNode=$("#mailid");
    errNode3=$("#err3");
    mailNode.blur(function(){
        validation3();
    });
});
function validation3(){
    errNode3.html("");
    mailNode.css({border:"2px green solid",backgroundColor:"yellow"})
    
    let emailId=mailNode.val();
    let ss=emailId.substring(emailId.indexOf("@")+1);
    console.log(ss)
    if(emailId==""){
        errNode3.html("this field is required");
        mailNode.css({border:"2px red solid",backgroundColor:"pink"})
        
        return false

    }
    else if (!emailId.includes("@" ) || ss===""){
        errNode3.html("Invalid email id");
        mailNode.css({border:"2px red solid",backgroundColor:"pink"})
        
        
        return false
    
        
    }
    else
        return true

}





let feedNode
let errNode6
$(function(){
    feedNode=$("#text1");
    errNode6=$("#err4");
    feedNode.blur(function(){
        validate6();
    });
});
function validate6(){
    errNode6.html("");
    feedNode.css({border:"2px green solid",backgroundColor:"yellow"})
    let feed=feedNode.val();
    if(feed==""){
        errNode6.html("this field is required");
        feedNode.css({border:"2px red solid",backgroundColor:"pink"})
        
        return false;

    }
    else
        return true

}



let formNode;
$(function(){
    formNode=$("#formm");
    formNode.submit(function(){
       return validateform();
    });
});

function validateform(){
    let st1=validate();
    let st2=validation1();
    
    let st4=validation3();
    let st6=validate6();

    return (st1 && st2  && st4 && st6 )
        
    
}



















