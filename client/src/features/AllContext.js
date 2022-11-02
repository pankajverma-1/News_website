require('jsdom-global')();
const { JSDOM } = require('jsdom');
// const ReactJSDOM = require('react-jsdom');
const { Readability } = require('@mozilla/readability');
const axios = require('axios');
export const AllContext = () => {
    axios
        .get(
            'https://newsapi.org/v2/top-headlines?country=in&apiKey=a9b6d2de3b654c01aaf1e43f6e791ca9'
        )
        .then(function(r1) {
            // At this point we will have some search results from the API. Take the first search result...
            let firstResult = r1.data.articles[0];

            // ...and download the HTML for it, again with axios
            axios.get(firstResult.url).then(function(r2) {
                // We now have the article HTML, but before we can use Readability to locate the article content we need jsdom to convert it into a DOM object
                let dom = new JSDOM(r2.data, {
                    url: firstResult.url,
                });
                // console.log(dom.window.document);

                // now pass the DOM document into readability to parse
                let article = new Readability(dom.window.document).parse();

                // Done! The article content is in the textContent property
                // console.log(article.textContent);
            });
        });
    // cleanup();
};

// AllContext();