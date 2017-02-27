(function ( $ ) {
  var divPos = {};
  var tooltiptext, tooltipdirection;
    $.fn.tooltip = function( options ) {
      $('div[data-bp-tooltip]').on('mouseenter',function() {
        tooltiptext = $(this).attr('data-bp-tooltip');
        if (tooltiptext) {
          tooltipdirection = $(this).attr('data-bp-direction');
          if (tooltipdirection) {
            $(this).append("<div class='tooltip "+tooltipdirection+"'><span>"+tooltiptext+"</span></div>")
          }else {
            $(this).append("<div class='tooltip'><span>"+tooltiptext+"</span></div>")
          }
        }
      })
      $('div[data-bp-tooltip]').on('mouseleave',function() {
        if (tooltiptext) {
          $(".tooltip").remove()
        }
      })
    }
}( jQuery ));
