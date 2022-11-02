import Carousel from 'react-bootstrap/Carousel';

import date from 'date-and-time';

const Slider = ({ News }) => {
  return (
    <>
      <Carousel>
        {News.map((value, i) => (
          <Carousel.Item className="banner" key={i}>
            <img
              className="d-block w-100 img "
              src={value.urlToImage}
              alt={value.title}
              style={{ minHeight: '500px' }}
            />
            <div className="overlay"></div>
            <Carousel.Caption className="h2 m-0 text-white text-uppercase font-weight-bold">
              <a
                href={value.url}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2"
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
              <a
                href={value.url}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-white"
              >
                <h5 className=" text-truncate w-75">{value.title}</h5>
                <p className="textTruncate">{value.content}</p>
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;
