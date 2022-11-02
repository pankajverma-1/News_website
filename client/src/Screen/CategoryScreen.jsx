import { Avatar } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import CategoryTags from '../Components/CategoryTags';
import NewsCard from '../Components/NewsCard';
import SecondaryNewsCard from '../Components/SecondaryNewsCard';
import TrendingNews from '../Components/TrendingNews';
import date from 'date-and-time';
import LoadingCircle from '../Components/LoadingCircle';

const CategoryScreen = () => {
  const [newsCard, setNewsCard] = useState([]);
  const [secondaryNews, setSecondaryNews] = useState([]);
  const [fullNews, setFullNews] = useState([]);
  const [multipleSlider, setMultipleSlider] = useState([]);
  const [loadingCircle, setLoadingCircle] = useState(true);
  const [loadingError, setLoadingError] = useState('');
  const { value } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topHeadline = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${value}&apiKey=85a36557fe7b4b7d8de7d1e51a645842`
        );
        const generalHeadline = await axios.get(
          `https://newsapi.org/v2/everything?q=${value}&apiKey=85a36557fe7b4b7d8de7d1e51a645842`
        );
        if (topHeadline.status === 200 || generalHeadline.status === 200) {
          setLoadingCircle(false);
        }
        const allNews = topHeadline.data.articles.filter((item) => {
          return (
            item.urlToImage !== null &&
            item.content !== null &&
            item.url !== null &&
            item.title !== null &&
            item.publishedAt !== null &&
            item.author !== null
          );
        });
        const allGeneralNews = generalHeadline.data.articles.filter((item) => {
          return (
            item.urlToImage !== null &&
            item.content !== null &&
            item.url !== null &&
            item.title !== null &&
            item.publishedAt !== null &&
            item.author !== null
          );
        });

        setNewsCard(allGeneralNews.filter((items, i) => i <= 3));
        setSecondaryNews(allGeneralNews.filter((items, i) => i > 3));
        setFullNews(allGeneralNews.filter((items, i) => i === 12));

        setMultipleSlider(
          allNews.filter((items, i) => {
            return i >= 7;
          })
        );
      } catch (error) {
        setLoadingError(error.response.data.message);
      }
    };

    fetchData();
    return () => {
      fetchData();
    };
  }, [value]);
  return (
    <>
      {loadingCircle ? <LoadingCircle error={loadingError} /> : ''}
      <Container>
        <Row>
          <Col lg={8} className="col-12">
            <div className="featuredNews">
              <div className="h4 mb-0">
                CATEGORY: <span className=" text-uppercase">{value}</span>
              </div>
              <Link
                to="/"
                className=" text-decoration-none text-black fw-semibold"
              >
                View All
              </Link>
            </div>
            <div className="row">
              {newsCard.map((value, i) => (
                <NewsCard value={value} key={i} />
              ))}
            </div>
            <div className="row">
              {secondaryNews
                .filter((items, i) => i <= 3)
                .map((value, i) => (
                  <SecondaryNewsCard value={value} key={i} />
                ))}
            </div>
            <div className="row mb-2">
              {fullNews.map((value, i) => (
                <div className="col-12 col-md-6 d-flex">
                  <img
                    src={value.urlToImage}
                    alt={value.title}
                    className=" img-fluid"
                  />
                </div>
              ))}
              {fullNews.map((value, i) => (
                <div className="col-12 col-md-6 ps-md-0">
                  <div
                    className=" w-100 h-100 d-flex justify-content-center p-3 flex-column  bg-white border border-start-0"
                    key={i}
                  >
                    <div className="card-body py-3">
                      <h5 className="card-title">
                        <Link
                          to="/"
                          className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2"
                        >
                          {value.source.name}
                        </Link>
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
                          style={{
                            fontSize: '1rem',
                            color: '#a1a1a1',
                            fontFamily: "'Montserrat', sans-serif",
                            lineHeight: '1.5',
                          }}
                          className="textTruncate3"
                        >
                          {value.content}
                        </p>
                      </p>
                    </div>
                    {value.author.length >= 24 ? (
                      <div className="d-flex align-items-center justify-content-between border-top pt-2">
                        <div
                          className="d-flex align-items-center"
                          style={{ width: '70%' }}
                        >
                          <Avatar className=" me-2">
                            {value.author.slice(0, 1)}
                          </Avatar>
                          <span style={{ width: '75%' }}>{value.author}</span>
                        </div>
                        <div className="date fw-semibold">
                          {date.transform(
                            value.publishedAt.slice(0, 10),
                            'YYYY-MM-DD',
                            'MMM DD,YYYY'
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="border-top pt-2 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <Avatar className=" me-2">
                            {value.author.slice(0, 1)}
                          </Avatar>
                          <span>{value.author}</span>
                        </div>
                        <div className="date fw-semibold">
                          {date.transform(
                            value.publishedAt.slice(0, 10),
                            'YYYY-MM-DD',
                            'MMM DD,YYYY'
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              {secondaryNews
                .filter((items, i) => i >= 4 && i <= 7)
                .map((value, i) => (
                  <SecondaryNewsCard value={value} key={i} />
                ))}
            </div>
          </Col>
          <Col lg={4} className="col-12">
            <div
              className=" bg-white p-0 border"
              style={{ margin: '2rem 0 0' }}
            >
              <div className="featuredNews m-0 col-12">
                <h4 className="m-0 text-uppercase font-weight-bold">
                  Trending News
                </h4>
              </div>

              <div
                className=""
                style={{ margin: '2.5rem 0 0 0', padding: '1px 1rem' }}
              >
                {multipleSlider
                  .filter((items, i) => i <= 7)
                  .map((value, i) => (
                    <TrendingNews value={value} key={i} />
                  ))}

                {newsCard.map((value, i) => (
                  <TrendingNews value={value} key={i} />
                ))}
              </div>
            </div>
            <div
              className=" bg-white p-0 border"
              style={{ margin: '2rem 0 0' }}
            >
              <div className="featuredNews m-0 col-12">
                <h4 className="m-0 text-uppercase font-weight-bold">Tages</h4>
              </div>
              <div
                className=""
                style={{ margin: '1rem 0', padding: '1px 1rem' }}
              >
                <CategoryTags />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryScreen;
