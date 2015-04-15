(function ($) {
  $(document).ready(function(){
    $('.field-name-ding-periodical-issues li').children('.item-list').hide();
    $('.field-name-ding-periodical-issues .ding-periodical-fold').click(function(e){
      $(this).next().toggle();
      e.preventDefault();
    });
    $('.field-name-ding-periodical-issues ding-periodical-fold').first().css('display','block');
    
    
  });   
}(jQuery));
