menu = {};

// ready event
menu.ready = function() {

  // selector cache
  var
    $menuItem = $('.menu a.item, .menu .link.item'),
    // alias
    handler = {
      activate: function() {
        var activeTab = $('.menu > a.item.active > i').attr('href');
        activeTab = "#" + activeTab;
        console.log(activeTab);
        $(activeTab).removeClass('active');
        $(activeTab).addClass('tab-content hide');

        $(this)
        .addClass('active')
        .closest('.ui.menu')
        .find('.item')
        .not($(this))
        .removeClass('active');

        var targetTab = $('.menu > a.item.active > i').attr('href');
        targetTab = "#" + targetTab;
        $(targetTab).removeClass('hide');
        $(targetTab).addClass('active');
      }
    }
  ;
  $menuItem
    .on('click', handler.activate)
  ;
  
};
// attach ready event

$(document).ready(menu.ready);


