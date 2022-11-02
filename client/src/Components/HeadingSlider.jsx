import React from 'react';
import { Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const HeadingSlider = ({ breakingNews }) => {
  return (
    <>
      <Col
        sm={4}
        md={3}
        className=" d-flex align-items-center justify-content-sm-end  col-12"
        style={{
          background: 'black',
        }}
      >
        <div
          className=" bg-primary h4"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '300',
            padding: '0.4rem',
            margin: '1px',
          }}
        >
          <span>Breaking News</span>
        </div>
      </Col>
      <Col sm={8} md={9} className="p-0 col-12">
        <div className="NewsheadingSlider">
          <Carousel>
            {breakingNews.map((value, i) => (
              <Carousel.Item key={i}>
                <div className="d-block w-100" style={{ height: '4rem' }}></div>
                <Carousel.Caption>
                  <a
                    href={value.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-white text-truncate m-0"
                    style={{ fontSize: '1.6rem' }}
                  >
                    {value.title}
                  </a>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Col>
    </>
  );
};

export default HeadingSlider;
