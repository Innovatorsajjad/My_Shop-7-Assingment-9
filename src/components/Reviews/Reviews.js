import React, { useEffect, useState } from 'react';
import CustomerReview from '../CustomerReview/CustomerReview';

const Reviews = () => {
    const [reviws, setReviews] = useState([]);
    useEffect(() => {
        fetch("Review.json")
            .then(Response => Response.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div className='d-flex row'>
            {
                reviws.map((review) => (
                    <CustomerReview key={review.id} review={review}></CustomerReview>
                ))
            }
        </div>
    );
};

export default Reviews;