
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export const BookReview = () => {

    const { id } = useParams();
    const [post, setPost] = useState({});


    useEffect(() => {
        axios
            .get(`https://65d1faa1987977636bfbc142.mockapi.io/api/react-test/books/${id}`)
            .then(response => setPost(response.data))
            .catch((error) => console.log(error))
    }, []);
    console.log("data", post)

    return (
        <>
            <div className="book-page-container">
                <Card className="book-card" style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={post.cover} />
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Blood Group: {post.author}</ListGroup.Item>
                        <ListGroup.Item>Age: {post.price}</ListGroup.Item>
                        <ListGroup.Item>Gender: {post.category}</ListGroup.Item>
                        <ListGroup.Item>
                            <form action=""><label>
                                Leave a Comment:
                                <textarea
                                    rows="5"
                                    name="cover"
                                    required

                                />
                            </label></form></ListGroup.Item>

                    </ListGroup>
                </Card>
            </div>
        </>
    );
};


