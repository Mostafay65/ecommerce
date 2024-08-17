import React, { useState } from "react";
import styles from "./ImageSliger.module.css"; // Replace with your CSS module

export default function ImageSlider({
    images,
    SetProductImage,
    SelectedImage,
    SetSelectedImage,
    NumberOfImages
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex + NumberOfImages < images.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={`${styles.sliderContainer}`}>
            <button onClick={handlePrev} disabled={currentIndex === 0}>
                &#8249;
            </button>
            <div className={`${styles.slider}`}>
                {images
                    .slice(currentIndex, currentIndex + NumberOfImages)
                    .map((imgpath, index) => (
                        <img
                            onClick={() => {
                                SetProductImage(imgpath);
                                SetSelectedImage(index + currentIndex);
                            }}
                            className={`${styles.subimg}`}
                            src={imgpath}
                            key={index + currentIndex}
                            style={{
                                opacity:
                                    SelectedImage === index + currentIndex
                                        ? "100%"
                                        : "50%",
                                border:
                                    SelectedImage === index + currentIndex
                                        ? "3px solid #A5D4CB"
                                        : "",
                            }}
                            alt=""
                        />
                    ))}
            </div>
            <button
                onClick={handleNext}
                disabled={currentIndex + NumberOfImages >= images.length}
            >
                &#8250;
            </button>
        </div>
    );
}
