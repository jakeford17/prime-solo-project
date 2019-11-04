import React from "react";
import { withRouter } from "react-router-dom";

//Component makes sure user starts at the top of Profile, Position, and Edit Pages
class ScrollToTopOnMount extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTopOnMount);