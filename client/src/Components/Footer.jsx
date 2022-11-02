import { CopyrightOutlined } from '@mui/icons-material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryTags from './CategoryTags';
import date from 'date-and-time';
import { useEffect } from 'react';

const Footer = () => {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const url =
      'https://newsapi.org/v2/everything?domains=ndtv.com&language=en&apiKey=85a36557fe7b4b7d8de7d1e51a645842';
    const { data } = await axios.get(url);

    const allNews = data.articles.filter((item) => {
      return (
        item.urlToImage !== null &&
        item.content !== null &&
        item.url !== null &&
        item.title !== null &&
        item.publishedAt !== null
      );
    });
    setNews(allNews);
  };

  useEffect(() => {
    fetchNews();

    return () => {
      fetchNews();
    };
  }, []);

  return (
    <>
      <Container fluid className="p-0">
        <div className="footer row text-white px-4 py-5">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="h3">About Us</div>
            <p style={{ fontSize: '1.3rem' }} className=" fst-italic">
              Hii, I'm pankaj. I'm a MERN stack developer . I developed this
              Website Using React And Redux .
            </p>
            <div className="h5 fst-italic">
              I have created Some Other Project
            </div>
            <a
              href="https://amazon-clone-mern-a.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-white"
            >
              <div className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2">
                Amazon Clone
              </div>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="h3">POPULAR NEWS</div>
            {news
              .filter((item, i) => i <= 2)
              .map((value, i) => (
                <div key={i} className="py-1">
                  <a
                    href={value.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-white"
                  >
                    <div className="topHeading">
                      <div className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2">
                        {value.source.name}
                      </div>
                      <span className=" text-white fw-semibold badge badge-primary text-uppercase font-weight-semi-bold">
                        {date.transform(
                          value.publishedAt.slice(0, 10),
                          'YYYY-MM-DD',
                          'MMM DD,YYYY'
                        )}
                      </span>
                    </div>
                    <div>
                      <div className="h6 m-0 text-white text-uppercase font-weight-semi-bold text-decoration-none">
                        <span className="textTruncate3">{value.title}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
          </div>
          <div className="col-12 col-md-6 col-lg-3 px-3">
            <div className="h3">CATEGORIES</div>
            <div className="">
              <CategoryTags />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="h3">POPULAR PHOTO</div>
            {news
              .filter((item, i) => i < 9)
              .map((value, i) => (
                <a
                  href={value.url}
                  target="_blank"
                  rel="noreferrer"
                  key={i}
                  className="text-decoration-none text-white"
                >
                  <img
                    src={value.urlToImage}
                    alt={value.title}
                    style={{
                      width: '5rem',
                      height: '5rem',
                      objectFit: 'cover',
                      margin: '5px',
                    }}
                  />
                </a>
              ))}
          </div>
        </div>
        <div className="bottomFooter text-white p-4 d-flex justify-content-center">
          <CopyrightOutlined />
          <span className="h5 ms-1">
            <span style={{ color: '#FFCC00' }}>The News.</span> All Rights
            Reserved.
          </span>
        </div>
      </Container>
    </>
  );
};

export default Footer;
