(function($) {

  function getGlobalSiblings($el) {
    var $collection = $el.siblings();
    while (!$el.parent().hasClass('main-page-content') && $el.parent.length > 0) {
      $el = $el.parent();
      $collection = $collection.add($el.siblings());
    }
    return $collection;
  }

  function setFocus($el) {
    $collection = getGlobalSiblings($el);
    $el.css({'z-index': 101})
    $collection.foggy({ cssFilterSupport: true });
    $('.focussify-darken-layer').show();
  }

  function clearFocus($el) {
    $collection = getGlobalSiblings($el);
    $collection.foggy(false);
    $('.focussify-darken-layer').hide();
    $el.css({'z-index': 'initial'})
  }   

  $.fn.focussify = function(options) {
    var settings;
    settings = $.extend({ //default settings
      opacity: 0.6,
      tent_color: 'black'
    }, options);

    if (!$('.focussify-darken-layer').length) {
      $("<div/>").addClass("focussify-darken-layer").css({
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        'background-color': settings.tent_color,
        opacity: settings.opacity.toString(),
        display: 'none',
        'z-index': '99',
      }).appendTo($("body"));
    }
    if (options == false) {
      if (this.data('focussed')) {
        clearFocus(this);
        this.data('focussed', false)
      } else {
        console.warn('[jQuery.focussify]: Element is not focussed !')
      }
    } else {
      if (!this.data('focussed')) { // checking if already focussed
        setFocus(this);
        this.data('focussed', true) // turning focussed flag on
      }else {
        console.warn('[jQuery.focussify]: Element is already focuseed !')
      }
    }
    return this;
  }

})(jQuery)
