import React from 'react';

const CustomerReview = (props) => {
    const{name}=props.review
    return (
        <div>
           <h3>{name}</h3>
        </div>
    );
};

export default CustomerReview;