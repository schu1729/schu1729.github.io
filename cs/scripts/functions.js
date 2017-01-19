$(document).ready(function(){
    $('button').mouseenter(function(){
        $(this).fadeTo('slow',1);
    });
    $('button').mouseleave(function(){
        $(this).fadeTo('slow',.5);
    });
    $('#hint1').click(function(){
    	$('#ex1').slideToggle();
    });
    $('#hint2').click(function(){
    	$('#ex2').slideToggle();
    });
    $('#vid').click(function(){
       $('#vid1').slideToggle();
    });
    $('#hint3').click(function(){
        $('#ex3').slideToggle();
    })
    $('#hint4').click(function(){
        $('#ex4').slideToggle();
    })
    $('#wex1').click(function(){
        $('div#wexsol1').slideToggle();
    })
    $('#wex2').click(function(){
        $('div#wexsol2').slideToggle();
    })

});

function openQ(){
    document.getElementById('qq1').style.height ="100%";

}
function closeQ(){
    document.getElementById('qq1').style.height ="0%";

}
function correct(){

}
function wrong(){
    
}
function checkQ1(){
    if(document.getElementById('q1t').checked){
        document.getElementById('qq1_check').innerHTML="try again";
    }else if(document.getElementById('q1f').checked){
        document.getElementById('qq1_check').innerHTML="correct";
    };
};
function checkQ2(){
    if(document.getElementById('q2').value=="1"){
        document.getElementById('qq2_check').innerHTML="correct";
    }else{
      document.getElementById('qq2_check').innerHTML="try again";
    };
};