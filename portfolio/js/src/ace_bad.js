(function($){
// 헤더 따라내려오는 기능

// var header=$('#pc_headBox');
// var headoffset1=header.offset().top;
// console.log(headoffset1);

// $(window).on('scroll',function(e){
//     e.preventDefault();
//     var scroll=$(this).scrollTop();
    
//     if(headoffset1<=scroll){
//         header.css({position:'fixed',top:0,zIndex:2000,bottom:'auto',opacity:0.8});}else
//         {header.css({position:'static'});}
    
  

//     console.log(scroll);
//     console.log(headoffset1);

// });



// 과확화면 시간지남에따라 바뀌는기능
var sciorder;
var sci=$('.sci_wrap').find('li');
var sci1=$('.sci_wrap').find('li').eq(0);
var sci2=$('.sci_wrap').find('li').eq(1);
var sci3=$('.sci_wrap').find('li').eq(2);

var sciIndi=$('.sci_indii').find('li');
var sciIndi1=$('.sci_indi').find('li').eq(0);
var sciIndi2=$('.sci_indi').find('li').eq(1);
var sciIndi3=$('.sci_indi').find('li').eq(2);

sciIndi1.on('click',function(e){
    e.preventDefault();
    var sciorder=$(this).index();
    console.log(sciorder);
    sci1.fadeIn();
    sci1.siblings().fadeOut();
    sciIndi1.siblings().removeClass('sci_active');
    sciIndi1.addClass("sci_active");
});

sciIndi2.on('click',function(e){
    e.preventDefault();
    var sciorder=$(this).index();
    console.log(sciorder);
    
    sci2.fadeIn();
    sci2.siblings().fadeOut();
    sciIndi2.siblings().removeClass('sci_active');
    sciIndi2.addClass("sci_active");
});

sciIndi3.on('click',function(e){
    e.preventDefault();
    var sciorder=$(this).index();
    console.log(sciorder);
    sci3.fadeIn();
    sci3.siblings().fadeOut();
    sciIndi3.siblings().removeClass('sci_active');
    sciIndi3.addClass("sci_active");
});

sciIndi.on('click',function(e){
    e.preverntDefault();
    sciorder=$(this).index();
    console.log(sciorder);
    

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
    
    })
// 매트리스 기능~~

    var matli=$('.mat_list');
    var matbtn_wrap=$('.mat_btn_wrap');
    var matbtn=$('.mat_btn');
    var matlinum=1;
    
    matbtn_wrap.on('click',function(e){
        if(matlinum==1){
            matlinum=0;
        e.preventDefault();
        matli.animate({left:-35+'%'})
        matbtn_wrap.animate({left:0+'%'})
        matbtn.css({transform:'rotate('+360+'deg)'});
    }else{
        matlinum=1;
        e.preventDefault();
        matli.animate({left:0+'%'})
        matbtn_wrap.animate({left:35+'%'})
        matbtn.css({transform:'rotate('+180+'deg)'});
    }
    });

    var matul1=$('.mat_ul_1');
    var matul1_li=matul1.children('li');

    var matul2=$('.mat_ul_2');
    var matul2_li=matul2.children('li');

    matul1_li.on('click',function(e){
        e.preventDefault();
        
        var order=$(this).index();
        console.log(order);
        matul2_li.eq(order).fadeIn();
        matul2_li.eq(order).siblings().fadeOut();

        matul1_li.eq(order).css({backgroundColor:'#00acdc',transform:'scale('+1+')'    });
        matul1_li.eq(order).siblings().css({backgroundColor:'#fff',transform:'scale('+0.9+')'});


    });
    










   

    





})(jQuery);