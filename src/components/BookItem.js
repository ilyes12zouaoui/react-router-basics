import React, { Component } from "react";
class BookItem extends Component {
  render() {
    return (
      <div
        style={{
          height: "400px",
          width: "400px",
          margin: "15px",
          display: "inline-block"
        }}
      >
        <div style={{ height: "200px" }}>
          <img
            style={{ display: "block", width: "100%", height: "100%" }}
            src={this.props.urlImage}
          />
        </div>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default BookItem;
