import React from 'react';
import { Card } from 'react-bootstrap';

const ReviewsOfProjects = (props) => {
    const { name, userImage , comments,rating } = props.review
    return (
        <div className="col-md-4 mt-4 d-flex ">
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

export default ReviewsOfProjects;