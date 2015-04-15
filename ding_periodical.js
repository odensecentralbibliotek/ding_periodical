(function ($) {
  $(document).ready(function(){
    $('.field-name-ding-periodical-issues li').children('.item-list').hide();
    $('.field-name-ding-periodical-issues .ding-periodical-fold').click(function(e){
      $(this).next().toggle();
      e.preventDefault();
    });
    if($('.field-name-ding-periodical-issues .itemlist ').is(":hidden"))
    {
        $('.field-name-ding-periodical-issues .itemlist ').css('display','block');
    }
    
  });   
}(jQuery));
