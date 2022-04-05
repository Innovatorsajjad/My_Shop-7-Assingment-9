import React from 'react';
import { Card } from 'react-bootstrap';
import "./CustomerReview.css";

const CustomerReview = (props) => {
    const { name, userImage , comments,rating } = props.review
    console.log(props.review)
    return (
        <div className="col-md-4 mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top img-fluid" src={userImage}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                         <p>{comments}</p>
                        }
                        <h4>Rating : {rating} stars</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CustomerReview;