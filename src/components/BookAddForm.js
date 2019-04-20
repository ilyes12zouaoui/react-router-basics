import React, { Component } from "react";
class BookAddForm extends Component {
  constructor(props) {
    super(props);

    /*
let a = 10
let b = 15
let c = 20

let result =  (a && b && c)


*/

    this.state = {
      title: "",
      description: "",
      urlImage: "",
      error: {}
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    let error = {};
    if (this.state.title === "") {
      error.title = "title must not be empty";
    }

    if (this.state.description === "") {
      error.description = "description must not be empty";
    }

    if (this.state.urlImage === "") {
      error.urlImage = "urlImage must not be empty";
    }

    if (Object.keys(error).length === 0 && error.constructor === Object) {
      let newBook = {
        title: this.state.title,
        description: this.state.description,
        urlImage: this.state.urlImage
      };
      this.props.insertBook(newBook);

      this.setState(
        { title: "", description: "", urlImage: "", error: {} }
        //() => console.log(this.state)
      );
      //add new book to parent state
    } else {
      this.setState({ error: error });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>
              title :
              <input
                name="title"
                value={this.state.title}
                onChange={this.onInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              description :
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.onInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              urlImage :
              <input
                name="urlImage"
                value={this.state.urlImage}
                onChange={this.onInputChange}
              />
            </label>
          </div>
          <input type="submit" value="add" />
        </form>
        {this.state.error && this.state.error.title && (
          <div style={{ color: "red" }}>{this.state.error.title}</div>
        )}

        {this.state.error && this.state.error.description && (
          <div style={{ color: "red" }}>{this.state.error.description}</div>
        )}

        {this.state.error && this.state.error.urlImage && (
          <div style={{ color: "red" }}>{this.state.error.urlImage}</div>
        )}
      </div>
    );
  }
}

export default BookAddForm;
