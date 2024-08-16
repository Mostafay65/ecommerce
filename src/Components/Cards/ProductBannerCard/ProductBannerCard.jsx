import React from "react";
import Rating from "../../Helpers/Rating";
const ProductBunnerCard = ({ Product }) => {
    return (
        <div className=" d-flex align-items-center py-2 border-bottom">
            <img src={Product.imageCover} alt="" width={110} height={110} />
            <div className="d-flex flex-column justify-content-around ml-3">
                <h6 style={{ color: "#088178" }}>{Product.title}</h6>
                <p style={{ color: "#465B52" }}>${Product.price}</p>
                <div>
                    <Rating rating={3.6}></Rating>
                </div>
            </div>
        </div>
    );
};

export default ProductBunnerCard;
