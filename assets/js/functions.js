//stiky menu start--//
var fixed_top = $(".primary-menu");

$(window).on('scroll', function(){
  
  if( $(this).scrollTop() > 100 ){  
    fixed_top.addClass("fixed-menu animated fadeInDown");
  }
  else{
    fixed_top.removeClass("fixed-menu animated fadeInDown");
  }
}); 
//stiky menu end--//
//mobile menu start//
function openNav(){
    document.getElementById("myNav").style.width="100%";
  
  }
  
  function closeNav(){
    document.getElementById("myNav").style.width="0%";
    
  }
  //mobile menu end//

   //<!--date-time in modal -->

   $(function () {
    $('#usr1').datepicker({
      'format': 'yyyy-mm-dd',
      'autoclose': true
    });
  });

// <!--date-time in modal end -->

        $('.next-button').click(function(){
            $('.nav > .active').next('a').trigger('click');
            //trigger the click on the tab same like we click on the tab
        });

        $('.previous-button').click(function(){
            $('.nav > .active').prev('a').trigger('click');
            //trigger the click on the tab same like we click on the tab
        })
