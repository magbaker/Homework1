// Buy Now Button
$('#BuyNowButton').click(function() {
  var self = $(this);
  if (self.hasClass('#BuyNowButton')) {
    self.text('BUY NOW!');
  } else {
    self.text('Added to Cart');
    setTimeout(function() {
      self.text('BUY NOW!').data('Item Added to Cart');
    }, 500);
  }
  $('.counter').html(function(i, val) {
    return +val + 1
  });
});

// Tabs
// $('ul.Tabs').each(function(){
//
//   var $active, $content, $links = $(this).find('a');
//   $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
//   $active.addClass('active');
//   $content = $($active[0].hash);
//   $links.not($active).each(function () {
//     $(this.hash).hide();
//   });
//
//   $(this).on('click', 'a', function(e){
//     $active.removeClass('active');
//     $content.hide();
//     $active = $(this);
//     $content = $(this.hash);
//     $active.addClass('active');
//     $content.show();
//     e.preventDefault();
//   });
// });
