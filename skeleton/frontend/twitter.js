const FollowToggle = require('./follow_toggle.js');

$( () => {
  $buttons = $('button.follow-toggle');
  $buttons.each(function (i, el) {
    let test = new FollowToggle(el); 
  });
});