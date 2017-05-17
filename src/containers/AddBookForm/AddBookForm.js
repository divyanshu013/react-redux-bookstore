import React from 'react';

class AddBookForm extends React.Component {
  constructor() {
    super();
    this.state = {
      book: {
        title: ''
      }
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    const book = { ...this.state.book };
    book.title = e.target.value;
    this.setState({
      book
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(`Submit ${this.state.book.title}`);
  }

  render() {
    return (
      <div>
        <h2>Add Books</h2>
        <input
          type="text"
          onChange={this.handleTitleChange}
          value={this.state.book.title}
        />

        <input
          type="submit"
          value="Save"
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default AddBookForm;
