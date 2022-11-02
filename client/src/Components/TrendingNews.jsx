import React from 'react';
import { Link } from 'react-router-dom';
import date from 'date-and-time';

const TrendingNews = ({ value }) => {
  return (
    <div className="col-12 d-flex mb-3" style={{ height: '110px' }}>
      <img src={value.urlToImage} alt={value.title} style={{ width: '40%' }} />
      <div className=" w-100 h-100 d-flex justify-content-center p-1 flex-column  bg-white border border-start-0">
        <div className="topHeading">
          <Link
            to="/"
            className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2"
          >
            {value.source.name}
          </Link>
          <span className=" text-black fw-semibold badge badge-primary text-uppercase font-weight-semi-bold">
            {date.transform(
              value.publishedAt.slice(0, 10),
              'YYYY-MM-DD',
              'MMM DD,YYYY'
            )}
          </span>
        </div>
        <div>
          <Link
            to="/"
            className="h6 m-0 text-black text-uppercase font-weight-semi-bold text-decoration-none"
          >
            <span className="textTruncate">{value.title}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
