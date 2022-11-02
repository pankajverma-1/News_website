import React from 'react';
import date from 'date-and-time';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideSliderNews = ({ sideSliderNews }) => {
  return (
    <>
      {sideSliderNews.map((value, i) => (
        <Col sm={12} md={6} className="p-0 position-relative" key={i}>
          <img
            className="img-fluid w-100 h-100 img"
            src={value.urlToImage}
            alt={value.title}
          />
          <div className="overlay"></div>
          <div className="mb-2 sidePhoto">
            <a
              href={value.url}
              target="_blank"
              className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2"
              rel="noreferrer"
            >
              {value.source.name}
            </a>
            <span className="ms-2 badge badge-primary text-uppercase font-weight-semi-bold">
              {date.transform(
                value.publishedAt.slice(0, 10),
                'YYYY-MM-DD',
                'MMM DD,YYYY'
              )}
            </span>
            <div>
              <a
                href={value.url}
                target="_blank"
                rel="noreferrer"
                className="h6 m-0 text-white text-uppercase font-weight-semi-bold text-decoration-none"
              >
                <span className="textTruncate">{value.content}</span>
              </a>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default SideSliderNews;
