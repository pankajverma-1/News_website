import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import date from 'date-and-time';

const NewsCard = ({ value }) => {
  return (
    <div className="col-12 col-lg-6 my-2">
      <div className="card rounded-0" style={{ height: '88vh' }}>
        <img
          src={value.urlToImage}
          alt={value.title}
          className="card-img-top rounded-0"
          style={{
            height: '200px',
            objectFit: 'cover',
          }}
        />
        <a
          href={value.url}
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none text-black"
        >
          <div className="card-body">
            <h5 className="card-title">
              <div className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2">
                {value.source.name}
              </div>
              <span className="ms-2 badge badge-primary text-uppercase text-black fw-light">
                {date.transform(
                  value.publishedAt.slice(0, 10),
                  'YYYY-MM-DD',
                  'MMM DD,YYYY'
                )}
              </span>
            </h5>

            <p className="card-text">
              <div className="textTruncate h3">{value.title}</div>
              <p
                className="textTruncate3"
                style={{
                  fontSize: '1rem',
                  color: '#a1a1a1',
                  fontFamily: "'Montserrat', sans-serif",
                  lineHeight: '1.5',
                }}
              >
                {value.content}
              </p>
            </p>
          </div>
        </a>
        {value.author.length >= 24 ? (
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center justify-content-between">
              <div
                className="d-flex align-items-center"
                style={{ width: '70%' }}
              >
                <Avatar className=" me-2">{value.author.slice(0, 1)}</Avatar>
                <span style={{ width: '75%' }}>{value.author}</span>
              </div>
              <div className="date fw-semibold">
                {date.transform(
                  value.publishedAt.slice(0, 10),
                  'YYYY-MM-DD',
                  'MMM DD,YYYY'
                )}
              </div>
            </li>
          </ul>
        ) : (
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <Avatar className=" me-2">{value.author.slice(0, 1)}</Avatar>
                <span>{value.author}</span>
              </div>
              <div className="date fw-semibold">
                {date.transform(
                  value.publishedAt.slice(0, 10),
                  'YYYY-MM-DD',
                  'MMM DD,YYYY'
                )}
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
