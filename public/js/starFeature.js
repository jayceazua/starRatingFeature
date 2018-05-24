/**
 * Star rating class
 * @constructor
 */
function StarRating() {
  this.init();
}

/**
 * Initialize
 */
StarRating.prototype.init = function() {
  this.stars = document.querySelectorAll('#rating span');
  for (var i = 0; i < this.stars.length; i++) {
    this.stars[i].setAttribute('data-count', i);
    this.stars[i].addEventListener('mouseenter', this.enterStarListener.bind(this));
    this.stars[i].addEventListener('click', this.redirectClickOnStars.bind(this));
  }
  document.querySelector('#rating').addEventListener('mouseleave', this.leaveStarListener.bind(this));
};

/**
 * This method is fired when a user hovers over a single star
 * @param e
 */
StarRating.prototype.enterStarListener = function(e) {
  this.fillStarsUpToElement(e.target);
};

/**
 * This method is fired when the user leaves the #rating element, effectively removing all hover states.
 */
StarRating.prototype.leaveStarListener = function() {
  this.fillStarsUpToElement(null);
};

/**
 * Fill the star ratings up to a specific position.
 * @param el
**/
StarRating.prototype.fillStarsUpToElement = function(el) {
  // Remove all hover states:
  for (var i = 0; i < this.stars.length; i++) {
    if (el == null || this.stars[i].getAttribute('data-count') > el.getAttribute('data-count')) {
      this.stars[i].classList.remove('hover');
    } else {
      this.stars[i].classList.add('hover');
    }
  }
};

/**
  * This addEventListener makes it able to click
**/

StarRating.prototype.redirectClickOnStars = function(e) {
  let starValue = Number(e.target.id);

  if (starValue <= 2) {
    console.log('send an email.');
    //<a class="" title="" href="mailto:bayley@digitalfuturemarketing.com?subject=How%20Can%20We%20Do%20Better%3F&amp;body=Tell%20us%20about%20your%20experience%2C%20and%20we%27ll%20do%20our%20best%20to%20make%20it%20right.%20" target="_blank">
  } else {
    console.log('redirect to leave a review');
    // <a href="https://www.yelp.com/writeareview/biz/eQ92EcJlPPN_IZV9nOiA_g?return_url=%2Fbiz%2FeQ92EcJlPPN_IZV9nOiA_g&amp;source=biz_details_war_button" target="_blank">
  }

};

// Run:
new StarRating();
