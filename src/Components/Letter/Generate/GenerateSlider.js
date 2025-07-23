import React from 'react';
import { Carousel } from 'primereact/carousel';
import SlideOne from '../../../Assets/images/letter-img.png';
import SlideTwo from '../../../Assets/images/slide2.svg';

export default function LoginSlider() {
  const products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Best Employee Experience Platform',
      image: SlideOne,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Finally a place where it all comes together',
      image: SlideTwo,
    },
    {
      id: '1002',
      code: 'nvklal433',
      name: 'Best Employee Experience Platform',
      image: SlideOne,
    },
  ];

  const productTemplate = product => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="slide_letter_img">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Carousel
      value={products}
      autoplayInterval={3000}
      itemTemplate={productTemplate}
    />
  );
}
