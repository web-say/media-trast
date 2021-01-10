$(window).bind('scroll',function(e){
  showEelementIn('.zebra-reverse-mic');
  showEelementIn('.zebra-glasses');
});

function showEelementIn(paramsElement){
  //элемент на экране
  if ($(document).scrollTop() + $(window).height() > $(paramsElement).offset().top && $(document).scrollTop() - $(paramsElement).offset().top < $(paramsElement).height()){
    $(paramsElement).addClass('active');
   } else {
     if($(paramsElement).hasClass('active')){
      $(paramsElement).removeClass('active');
     }
  }
}
