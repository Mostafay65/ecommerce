import React from "react";
const style = { color: "#ffd700" };
function Rating({ rating }) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <>
            {[...Array(fullStars)].map((_, index) => (
                <i
                    key={`full-${index}`}
                    className="fa-solid fa-star"
                    style={style}
                ></i>
            ))}

            {halfStar === 1 && (
                <i className="fa-solid fa-star-half-stroke" style={style}></i>
            )}

            {[...Array(emptyStars)].map((_, index) => (
                <i
                    key={`empty-${index}`}
                    className="fa-regular fa-star"
                    style={style}
                ></i>
            ))}
        </>
    );
}

export default Rating;
