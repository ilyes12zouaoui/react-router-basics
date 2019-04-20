import React, { Component } from "react";
import BookItem from "./BookItem";
class BookList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <hr style={{ width: "80%", margin: "auto", marginTop: "20px" }} />
        {this.props.bookList.map(book => {
          return (
            <BookItem
              title={book.title}
              description={book.description}
              urlImage={book.urlImage}
            />
          );
        })}
      </div>
    );
  }
}

export default BookList;
