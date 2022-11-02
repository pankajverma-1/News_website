import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';
import date from 'date-and-time';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 992, min: 576 },
    items: 3,
  },

  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const MultiplySlider = ({ multipleSlider }) => {
  return (
    <>
      <div className="featuredNews">
        <div className="h2 mb-0">FEATURED NEWS</div>
      </div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={5850}
      >
        {multipleSlider.map((value, index) => (
          <div key={index} className="multipleSlider">
            <img
              className="img-fluid img"
              style={{ height: '20rem' }}
              src={value.urlToImage}
              alt={value.title}
            />
            <div className="overlay"></div>
            <div className="mb-2 sidePhoto">
              <div className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2 me-2">
                {value.source.name}
              </div>
              <div className="text-white text-uppercase fw-semibold">
                {date.transform(
                  value.publishedAt.slice(0, 10),
                  'YYYY-MM-DD',
                  'MMM DD,YYYY'
                )}
              </div>
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
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MultiplySlider;
