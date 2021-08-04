import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from './ProductsPage';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
function Homepage() {
  return (
    <>
      <Carousel className="d-flex flex-wrap justify-content-evenly p-4  m-5">
        <Carousel.Item>
          <img
            style={{
              objectFit: 'cover',
              height: '500px',
              width: 'fitContent',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            className="d-block w-100 carousel-img"
            src={image1}
            alt="support_locals"
          />
          <Carousel.Caption style={{ position: 'absolute', top: '20px' }}>
            <h3 style={{ color: 'white' }}>Support locals and pay less</h3>
            <p
              style={{
                textShadow: '0px 0px 5px rgba(0, 0, 0, 1)',
                width: '75%',
                margin: '0 auto',
                lineHeight: '23px',
              }}
            >
              Our products are produced locally. Our mission is to provide you healthy fresh
              ingredients while paying less
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-img"
            style={{
              objectFit: 'cover',
              height: '500px',
              width: 'fitContent',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            src={image2}
            alt="healthy_and_fresh"
          />
          <Carousel.Caption style={{ position: 'absolute', top: '20px' }}>
            <h3 style={{ color: 'white' }}>Support locals and pay less</h3>
            <p
              style={{
                textShadow: '0px 0px 5px rgba(0, 0, 0, 1)',
                width: '75%',
                margin: '0 auto',
                lineHeight: '23px',
              }}
            >
              Our products are produced locally. Our mission is to provide you healthy fresh
              ingredients while paying less
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{
              objectFit: 'cover',
              height: '500px',
              width: 'fitContent',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            className="d-block w-100 carousel-img"
            src={image3}
            alt="Delivery"
          />
          <Carousel.Caption style={{ position: 'absolute', top: '20px' }}>
            <h3 style={{ color: 'white' }} className="header">
              Support locals and pay less
            </h3>
            <p
              style={{
                textShadow: '0px 0px 5px rgba(0, 0, 0, 1)',
                width: '75%',
                margin: '0 auto',
                lineHeight: '23px',
              }}
            >
              Our products are produced locally. Our mission is to provide you healthy fresh
              ingredients while paying less
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Products />
    </>
  );
}
export default Homepage;
