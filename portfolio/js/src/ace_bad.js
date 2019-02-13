(function($){
// 과확화면 시간지남에따라 바뀌는기능
var sci1=$('.sci_wrap').find('li').eq(0);
var sci2=$('.sci_wrap').find('li').eq(1);
var sci3=$('.sci_wrap').find('li').eq(2);

var sciIndi1=$('.sci_indi').find('li').eq(0);
var sciIndi2=$('.sci_indi').find('li').eq(1);
var sciIndi3=$('.sci_indi').find('li').eq(2);

sciIndi1.on('click',function(e){
    e.preventDefault();
    sci1.fadeIn();
    sci1.siblings().fadeOut();
    sciIndi1.siblings().removeClass('sci_active');
    sciIndi1.addClass("sci_active");
});

sciIndi2.on('click',function(e){
    e.preventDefault();
    sci2.fadeIn();
    sci2.siblings().fadeOut();
    sciIndi2.siblings().removeClass('sci_active');
    sciIndi2.addClass("sci_active");
});

sciIndi3.on('click',function(e){
    e.preventDefault();
    sci3.fadeIn();
    sci3.siblings().fadeOut();
    sciIndi3.siblings().removeClass('sci_active');
    sciIndi3.addClass("sci_active");
});







// var scifade=setInterval(function(){
//     sci1.fadeToggle(2000)

// },15000);


//    신제품창 좌우이동하는기능
    var new_btn_wrap=$('.new_btn');
    var btnNew=$('.new_btn2');
    var newul=$('.newproduct_wrap').find('ul');
    var newnum=0;

new_btn_wrap.on('click',function(e){
    e.preventDefault();
    if(newnum==0){
    newnum+=1;
    btnNew.css({animationName:'new_btn1',animationDuration:500+'ms'})
    newul.stop(true,true).animate({marginLeft:newnum*-100+'%'},500,function(){
        btnNew.css({marginLeft:50+'%'})

    });
    
    }else{
        newnum-=1;
        btnNew.css({animationName:'new_btn2',animationDuration:500+'ms'})
        newul.stop(true,true).animate({marginLeft:newnum*100+'%'},500,function(){
            btnNew.css({marginLeft:0+'%' })

        });
       
    }
});
// 스타일별 상품 좌우이동하는기능
var stylebtnP=$('.prev_style_btn');
var stylebtnN=$('.next_style_btn');
var styleul=$('.style_product');
var styleli=styleul.children('li');
var stylefirst=styleli.eq(-1).clone(true);

styleul.prepend(stylefirst);
styleli=styleul.find('li');
var stylelen=styleli.length;
var stylenum=1;


styleul.css({width:stylelen*100+"%",marginLeft:-100+'%'});
styleli.css({width:100/stylelen+"%"});

stylebtnN.on('click',function(e){
    e.preventDefault();
    stylenum+=1;
    if(stylenum==stylelen){stylenum=1; 
        styleul.css({marginLeft:0+'%'});
        styleul.stop(false,false).animate({marginLeft:stylenum*-100+'%'})
        console.log(stylenum);
    }  else{
        styleul.stop(false,false).animate({marginLeft:stylenum*-100+'%'})
       console.log(stylenum);
    }
});
stylebtnP.on('click',function(e){
    e.preventDefault();
    stylenum--;
    if(stylenum==-1){ stylenum=stylelen-2;
        styleul.css({marginLeft:(stylelen-1)*-100+'%' });
        styleul.stop(false,false).animate({marginLeft:stylenum*-100+'%'})
        console.log(stylenum);
    }else{
        styleul.stop(false,false).animate({marginLeft:stylenum*-100+'%'})
        console.log(stylenum);
    }
    // 매트리스 페이드인 아웃 하는기능~

    

    








});


   

    





})(jQuery);