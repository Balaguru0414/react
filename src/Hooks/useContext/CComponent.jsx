import { Component } from "react";

class CComponent extends Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? "#333" : "#ccc",
      color: !dark ? "#333" : "#ccc",
      padding: "2rem",
      margin: "2rem",
    };
  }
  render() {
    return <>ClassComponent</>;
  }
}

export default CComponent;
