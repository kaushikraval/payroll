import React from 'react';
import { Carousel } from 'primereact/carousel';
import SlideOne from '../../Assets/images/slide1.svg';
import SlideTwo from '../../Assets/images/slide2.svg';

export default function LoginSlider() {
  const products = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Best Employee Experience Platform',
      description:
        'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. You achieve what you believe.',
      image: SlideOne,
    },
    {
      id: '1001',
      code: 'nvklal433',
      name: 'Finally a place where it all comes together',
      description:
        'Employees like you can even make Mondays a joy. Thanks for your hard work and super attitude.',
      image: SlideTwo,
    },
    {
      id: '1002',
      code: 'nvklal433',
      name: 'Best Employee Experience Platform',
      description:
        'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. You achieve what you believe.',
      image: SlideOne,
    },
  ];

  const productTemplate = product => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="slide_img_wrap">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="slide_content_wrap">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <ul>
              <li>Working Everyday Towards Perfection </li>
              <li>Grow Consistently Every Day</li>
              <li>Inspiring Teams To Build The Best</li>
              <li>Creating Value Adding Services</li>
            </ul>
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
