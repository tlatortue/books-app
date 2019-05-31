import React from 'react';
import { Table, Button } from 'reactstrap';
import axios from 'axios';

function App() {
  state = {
    books: []
  };
  componentWillMount() {
    axios.get('http://localhost:3000/').then((response) => {
      this.setState({
        books: response.data
      });
    });
  }
  render() {
    let books = this.state.books.map((book) => {
      return (
        <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.title}</td>
            <td>{book.rating}</td>
            <td>
              <Button color="success" size="sm" className="mr-1">Edit</Button>
              <Button color="danger" size="sm" className="mr-1">Delete</Button>
            </td>
          </tr>
      )
    });
  }
  return (
    <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {books}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
