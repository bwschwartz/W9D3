import { API, broadcast } from "./util";
import { followUserFunc } from "./util/api";

export default class FollowToggle {
  constructor(toggleButton) {
    this.toggleButton = toggleButton;
    this.toggleButton.addEventListener('click', this.handleClick.bind(this));
  }

  async handleClick(event) {
    event.preventDefault();
    if (this.followState === "followed") {
      this.unfollow();
    } else if (this.followState === "unfollowed") {
      this.follow();
    }
    console.log(this.followState);
  }

  async follow() {
    this.followState = 'following';
    console.log(this.followState);
    const follow = await followUserFunc(this.toggleButton.dataset.userId);
    this.followState = 'followed';
    console.log(this.followState);
  }

  async unfollow() {
    this.followState = 'unfollowed';
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}