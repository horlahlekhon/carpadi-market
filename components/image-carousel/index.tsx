import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


// pls Note: that carInfoDetail is involved in the 
// large screen media query for the image carousel component
// That is: 'IN LINE 102'

export type ImageType = { id: number; url: string };

const ImageCarousel: React.FC<{ images?: ImageType[] }> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType>();
  const carouselItemsRef = useRef<HTMLDivElement[] | null[]>([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx: number) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
     
    }
  };

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= images.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <div className="carousel-container">
      <div className="d-block d-lg-none">
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <div className="carousel">
        <div className="carousel__images">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.url})` }}
                key={image.id}
                className={`carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
              </div>
        <button
          className="carousel__button carousel__button-left"
          onClick={handleLeftClick}
        >
          <IoIosArrowBack className="l-arr"/>
        </button>
        <button
          className="carousel__button carousel__button-right"
          onClick={handleRightClick}
        >
          <IoIosArrowForward className="r-arr"/>
        </button>
      </div>
      </div>

     {/* this is for large screen, and 
     carInfoDetail Div is involved right here */}
      <div className="d-none d-lg-block">
      <div className="image-carousel-lgScr">
      <div
        className="selected-image"
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      />
      <div className='carInfoDetail'>
        {/* add individual car name here */}
        <h2>Honda Arccord EX-L</h2>
        {/* add individual car price here */}
        <h4>N 3.5M</h4>
          {/* add individual car description here */}
        <p>Accident free | full customs duty paid | good history report ...</p>
        <a href='' className='message-btn'>Message</a>
        <a href='' className='call-btn'>Call Seller</a>
      </div>
      </div>
      <div className="carousel">
        <div className="carousel__images">
          {images &&
            images.map((image, idx) => (
              <div
                onClick={() => handleSelectedImageChange(idx)}
                style={{ backgroundImage: `url(${image.url})` }}
                key={image.id}
                className={`carousel__image ${
                  selectedImageIndex === idx && "carousel__image-selected"
                }`}
                ref={(el) => (carouselItemsRef.current[idx] = el)}
              />
            ))}
              </div>
        <button
          className="carousel__button carousel__button-left"
          onClick={handleLeftClick}
        >
          <IoIosArrowBack className="l-arr"/>
        </button>
        <button
          className="carousel__button carousel__button-right"
          onClick={handleRightClick}
        >
          <IoIosArrowForward className="r-arr"/>
        </button>
      </div>
      
      </div>
    </div>
  );
};

export default ImageCarousel;
