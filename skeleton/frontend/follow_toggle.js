const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = el.dataset.userId;
    this.followState = el.dataset.initialFollowState; 
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === 'following' || this.followState === 'unfollowing') {
      this.$el.prop('disabled', true)
    } else {
      this.$el.prop('disabled', false)
    }

    if (this.followState === "unfollowed") {
      this.$el.html('Follow!');
    } else if (this.followState === "followed") {
      this.$el.html('Unfollow!');
    }
  }

  handleClick() {
    this.$el.on('click', e => {
      console.log("hello");
      e.preventDefault();
      
      if (this.followState === 'unfollowed') {
        this.followState = 'following';
        this.render();
        APIUtil.followUser(this.userId).then( (curr) => {curr.followState = 'followed'}, () => {console.log('ERROR')});
        console.log("yoooo");
        // debugger
      } else {
        console.log("cheese");
        this.followState = 'unfollowing';
        this.render();
        APIUtil.unfollowUser(this.userId).then( () => {this.followState = 'unfollowed'});
      }

      this.render();
    });
  }
}

module.exports = FollowToggle;