

$('#BuyNowButton').click(function() {
    var self = $(this);
    if(self.hasClass('#BuyNowButton')){
        self.text('BUY NOW!');
      } else {
        self.text('Added to Cart');
        setTimeout(function() {
            self.text('BUY NOW!').data('Item Added to Cart');
        }, 2000);
    }
    $('.counter').html(function(i, val) {
      return +val+1 });
});
