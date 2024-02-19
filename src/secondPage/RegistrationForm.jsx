import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "./secondPage.css"


export const RegistrationForm = () => {
  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    price: "",
    cover: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/book", form)
      .then((res) => {
        console.log(res);
        setForm({
          title: "",
          author: "",
          category: "",
          price: "",
          cover: "",
        });
      })
      .catch((error) => console.log(error));
  };
  console.log('form', form)

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2 className="h2-second-page">Registration Form</h2>
            <form className="form-container" onSubmit={handleSubmit}>
              <p>
                <label>
                  Title
                  <input
                    type="text"
                    name="title"
                    required
                    value={form.title}
                    onChange={handleFormChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Author
                  <input
                    type="text"
                    name="author"
                    required
                    value={form.author}
                    onChange={handleFormChange}
                  />
                </label>
              </p>

              <p>
                <label>
                  Category
                  <input
                    type="text"
                    name="category"
                    required
                    value={form.category}
                    onChange={handleFormChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Price
                  <input
                    type="number"
                    name="price"
                    required
                    value={form.price}
                    onChange={handleFormChange}
                  />
                </label>
              </p>
              <p>
                <label>
                  Cover Image URL
                  <textarea
                    rows="5"
                    name="cover"
                    required
                    value={form.cover}
                    onChange={handleFormChange}
                  />
                </label>
              </p>
              <Button variant="success" type="submit">
                Submit Form
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
