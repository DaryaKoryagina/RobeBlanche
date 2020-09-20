$(document).ready(function() {
    var burger = document.querySelector('.burger-container'),
    header = document.querySelector('.header__small');
    $('.form-head').click(function(){
  
        if($(this).closest('.grop-from').attr('id')=='signup'){
            $('.grop-from').attr('id' , 'name');
            $('.icon-action').addClass('back');
        }  
        else if($(this).closest('.grop-from').attr('id')=='success'){
              $('.grop-from').attr('id' , 'signup');
              $('input').val('');
        }
        
    });
    $('.form-action').click(function(){
 
        var form_id = $('.grop-from').attr('id');
          $('.icon-action').addClass('back');
      
        if($('#control-' + form_id).val() != ''){
          switch (form_id) {
              case 'name':
                  form_id = "phone";
                  break;
              case "phone":
                form_id = "success";
                //   form_id = "email";
                  break;
            //   case "email":
            //       form_id = "password";
            //       break;
            //   case "password":
            //       form_id = "password-repeat";
            //       break;
            //   case "password-repeat":
            //       form_id = "success";
            //       break;   
            case "success":
                  form_id = "signup";
                  break; 
          }
           $('.icon-action').addClass('back');
          
      }
      
      else{
        
         switch (form_id) {
              case 'name':
                  form_id = "signup";
                  $('.icon-action').removeClass('back');
                  break;
              case "phone":
                  form_id = "name";
                  break;
            //   case "email":
            //       form_id = "phone";
            //       break;
            //   case "password":
            //       form_id = "email";
            //       break;
            //   case "password-repeat":
            //       form_id = "password";
            //       break; 
             case "success":
                  form_id = "signup";
                  break; 
          }
         $('.icon-action').removeClass('back');
      }
     
      $('.grop-from').attr('id' , form_id);
      
    });
    
    $('input').keyup(function(){
       $('.grop-from').removeClass('error');
        
        if($(this).val()!=''){
          $('.icon-action').removeClass('back');
        }
      else{
        $('.icon-action').addClass('back');
      }
      
      
    })
    // $(document).ready(function(){
    //     $(window).scroll(function(){
    //         if($(window).scrollTop()>800){
    //             $('#signup').fadeIn(900)
    //         }else{
    //             $('#signup').fadeOut(700)
    //         }
    //     });
    // });
    $(window).scroll(function(){
        if($(window).scrollTop()>3000){
        $('#signup').show()
        }
        else{$('#signup').hide()  
        }
        })
burger.onclick = function() {
    console.log(123)
    header.classList.toggle('menu-opened');
}
    $('#section-slider .slider-items').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        pageDots: false
    });

    $('.introduction-slider-items').flickity({
        // options
        
        cellAlign: 'left',
        pageDots: false,
        contain: true
    });
    $('.introduction-slider-nav-items').flickity({
        asNavFor: '.introduction-slider-items',
        cellAlign: 'left',
        
        prevNextButtons: false,
        pageDots: false,
        contain: true
    });
    var $carousel = $('.slider-block-for').flickity({
        // options
        cellAlign: 'left',
        prevNextButtons: false,
        contain: true,
        pageDots: false
    });

    $('.button--previous').on('click', function() {
        $carousel.flickity('previous');
    });

    $('.button--next').on('click', function() {
        $carousel.flickity('next');
    });

    $('.tehnology .row').children().each(function() {
        console.log($(this));
        var tehnology = $(this).find('.tehnology-round');
        var numberTehnology = tehnology.data('number');

        var strokeDashOffsetValue = 100 - (numberTehnology * 100);


        var progressBar = tehnology.find(".js-progress-bar");


        progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
    });

    $('.pinc-items').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
    
    });
    $('.carousel').flickity({
        // options
        groupCells: true,
        asNavFor: '.pinc-items',
        cellAlign: 'left',
        prevNextButtons: false,
        pageDots: false,
        // contain: true
    });

});


