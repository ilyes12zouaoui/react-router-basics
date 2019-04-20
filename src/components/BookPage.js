import React, { Component } from "react";
import BookAddForm from "./BookAddForm";
import BookList from "./BookList";

class BookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [
        {
          title: "cool book 1",
          description: "cool description 1",
          urlImage:
            "https://paulzizkaphotography.files.wordpress.com/2011/08/moraineflatwm.jpg"
        },
        {
          title: "cool book 2",
          description: "cool description 2",
          urlImage:
            "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      ]
    };

    this.insertBook = this.insertBook.bind(this);
  }

  insertBook(book) {
    let newList = [...this.state.bookList, book];
    this.setState({ bookList: newList });
  }

  render() {
    return (
      <div>
        book page :
        <BookAddForm insertBook={this.insertBook} />
        <BookList bookList={this.state.bookList} />
      </div>
    );
  }
}

export default BookPage;
