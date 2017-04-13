$(document).ready(function() {
$("#search-toggle").click(function () {
$("#search-toggle-open").toggle('slow')
});
});

$(document).ready(function() {
$("#search-toggle2").click(function () {
$("#search-toggle-open").toggle('slow')
});
});

$(document).ready(function() {
$("#menu-toggle").click(function () {
$("#menu-toggle-open").toggle('slow')
});
});


jQuery(document).ready(function(){
  var
      menuWrap = jQuery('.menu_wrap')
  ,	menuWrapWidth = jQuery('.menu_wrap').width()
  ,	isMenuOpened = false
  ,	_window = jQuery(window)
  ,	skillsBlock = jQuery('.skills_block')
  ,	skillsFilter = jQuery('.skills_filters', skillsBlock)
  ,	skillsWrapperList = jQuery('.skills_wrapper', skillsBlock)
  ,	currWrapId = 0
  ;

  menuWrap.css({left: -menuWrapWidth, top:0});
  jQuery('.switcher').on('click', function(){
          console.log("!!!!!!");
      menuWrapWidth = jQuery('.menu_wrap').width();
      if(!isMenuOpened){
          isMenuOpened = true;
          menuWrap.addClass('opened').css({left: 0});
      }else{
          isMenuOpened = false;
          menuWrap.removeClass('opened').css({left: -menuWrapWidth});
      }
  })

  jQuery('.totopbtn').on('click', function(){
      jQuery('html, body').stop().animate({'scrollTop':jQuery('header').height()},900);
  })
  });
