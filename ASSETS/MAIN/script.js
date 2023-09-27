var open = $('.bar-top');
var close = $('.close-top');
open.click(function(){
  open.css('display','none');
  close.css('display','block');
});
close.click(function(){
  close.css('display','none');
  open.css('display','block');
});