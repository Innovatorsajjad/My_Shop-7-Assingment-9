import React from 'react';
import "./CustomerReview.css";

const CustomerReview = (props) => {
    const{name,userImage}=props.review
    return (
        <div className="card">
            <img src={userImage} alt="" />
        </div>
    );
};

export default CustomerReview;