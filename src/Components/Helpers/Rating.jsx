import React from "react";

function Rating({ rating }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <i key={`full-${index}`} className="fa-solid fa-star"></i>
            ))}

            {halfStar === 1 && <i className="fa-solid fa-star-half-stroke"></i>}

            {[...Array(emptyStars)].map((_, index) => (
                <i key={`empty-${index}`} className="fa-regular fa-star"></i>
            ))}
        </>
    );
}

export default Rating;
