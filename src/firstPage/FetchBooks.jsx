import { useEffect, useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const FetchBooks = () => {
  const [booksArray, setBooksArray] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books")
      .then((response) => {
        setBooksArray(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleToggleReserved = (id) => {
    const updatedBooksArray = booksArray.map((book) =>
      book.id === id ? { ...book, reserved: !book.reserved } : book
    );
    setBooksArray(updatedBooksArray);

    const bookToUpdate = booksArray.find((book) => book.id === id);
    const updatedBook = { reserved: !bookToUpdate.reserved };

    axios
      .patch(
        `https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${id}`,
        updatedBook
      )
      .then(() => console.log("Reserved status updated successfully"))
      .catch((error) => {
        console.log("Error updating reserved status:", error);
        // Revert the local state change if the request fails
        const updatedBooksArray = booksArray.map((book) =>
          book.id === id ? { ...book, reserved: !book.reserved } : book
        );
        setBooksArray(updatedBooksArray);
      });
  };

  return (
    <Container>
      <h1>Books List</h1>
      <Row>
        {booksArray.map((book) => (
          <Col key={book.id} xs={12} md={6} lg={4}>
            <Card style={{ marginBottom: "20px" }}>
              <Card.Img variant="top" src={book.cover} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Author: {book.author}</Card.Text>
                <Card.Text>Price: ${book.price}</Card.Text>
                <Button
                  variant={book.reserved ? "secondary" : "success"}
                  onClick={() => handleToggleReserved(book.id)}
                >
                  {book.reserved ? "Reserved" : "Available"}
                </Button>
                <Button
                  variant="info"
                  onClick={() => navigate(`/bookreview/${book.id}`)}
                >
                  Leave a review
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
