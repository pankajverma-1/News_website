import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import { Link } from 'react-router-dom';
import Slider from '../Components/Slider';
import MultiplySlider from '../Components/MultiplySlider';
import NewsCard from '../Components/NewsCard';
import { Avatar } from '@mui/material';
import TrendingNews from '../Components/TrendingNews';
import CategoryTags from '../Components/CategoryTags';
import axios from 'axios';
import SideSliderNews from '../Components/SideSliderNews';
import HeadingSlider from '../Components/HeadingSlider';
import SecondaryNewsCard from '../Components/SecondaryNewsCard';
import LoadingCircle from '../Components/LoadingCircle';
import { Helmet } from 'react-helmet-async';
import date from 'date-and-time';

const HomeScreen = () => {
  // Api a9b6d2de3b654c01aaf1e43f6e791ca9

  const [sideSliderNews, setSideSliderNews] = useState([]);
  const [sliderNews, setSliderNews] = useState([]);
  const [breakingNews, setBreakingNews] = useState([]);
  const [multipleSlider, setMultipleSlider] = useState([]);
  const [newsCard, setNewsCard] = useState([]);
  const [secondaryNews, setSecondaryNews] = useState([]);
  const [fullNews, setFullNews] = useState([]);
  const [loadingCircle, setLoadingCircle] = useState(true);
  const [loadingError, setLoadingError] = useState('');

  const fetchData = async () => {
    try {
      // const topHeadline = await axios.get(
      //   'https://newsapi.org/v2/top-headlines?country=in&apiKey=85a36557fe7b4b7d8de7d1e51a645842'
      // );
      const topHeadline = {
        data: {
          status: 'ok',
          totalResults: 38,
          articles: [
            {
              source: {
                id: 'al-jazeera-english',
                name: 'Al Jazeera English',
              },
              author: 'Abid Hussain',
              title:
                'Pakistan’s ex-PM Imran Khan shot in leg at protest march - Al Jazeera English',
              description:
                'Party official confirms former prime minister has been shot at a rally but is not in danger.',
              url: 'https://www.aljazeera.com/news/2022/11/3/pakistans-ex-pm-imran-khan-injured-by-gunfire-during-long-march',
              urlToImage:
                'https://www.aljazeera.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-03-at-3.06.16-PM.png?resize=1920%2C1440',
              publishedAt: '2022-11-03T12:05:52Z',
              content:
                'Islamabad, Pakistan Imran Khan, the former prime minister of Pakistan, has sustained a bullet injury in his leg after a gunman opened fire at a rally in Wazirabad.\r\nAzhar Mashwani, an official with K… [+1271 chars]',
            },
            {
              source: {
                id: 'cnn',
                name: 'CNN',
              },
              author: 'Hanna Ziady',
              title:
                'Bank of England fights inflation with biggest rate hike in 33 years - CNN',
              description:
                'The Bank of England raised interest rates by three quarters of a percentage point on Thursday, the biggest hike in 33 years, as it tries to contain soaring inflation even as the UK economy slides towards recession.',
              url: 'https://www.cnn.com/2022/11/03/economy/bank-of-england-interest-rates/index.html',
              urlToImage:
                'https://media.cnn.com/api/v1/images/stellar/prod/221102115338-bank-of-england-1027.jpg?c=16x9&q=w_800,c_fill',
              publishedAt: '2022-11-03T12:02:00Z',
              content:
                'The Bank of England raised interest rates by three quarters of a percentage point on Thursday, the biggest hike in 33 years, as it tries to contain soaring inflation even as the UK economy slides tow… [+1701 chars]',
            },
            {
              source: {
                id: 'google-news',
                name: 'Google News',
              },
              author: null,
              title:
                "Scientists find evidence of 'substantial' transmission of monkeypox before symptoms appear - The Hindu",
              description: null,
              url: 'https://news.google.com/__i/rss/rd/articles/CBMilQFodHRwczovL3d3dy50aGVoaW5kdS5jb20vc2NpLXRlY2gvaGVhbHRoL3NjaWVudGlzdHMtZmluZC1ldmlkZW5jZS1vZi1zdWJzdGFudGlhbC10cmFuc21pc3Npb24tb2YtbW9ua2V5cG94LWJlZm9yZS1zeW1wdG9tcy1hcHBlYXIvYXJ0aWNsZTY2MDkwODAzLmVjZdIBmgFodHRwczovL3d3dy50aGVoaW5kdS5jb20vc2NpLXRlY2gvaGVhbHRoL3NjaWVudGlzdHMtZmluZC1ldmlkZW5jZS1vZi1zdWJzdGFudGlhbC10cmFuc21pc3Npb24tb2YtbW9ua2V5cG94LWJlZm9yZS1zeW1wdG9tcy1hcHBlYXIvYXJ0aWNsZTY2MDkwODAzLmVjZS9hbXAv?oc=5',
              urlToImage: null,
              publishedAt: '2022-11-03T11:39:00Z',
              content: null,
            },
            {
              source: {
                id: null,
                name: 'Cricbuzz',
              },
              author: null,
              title:
                'Mumbai vs Vidarbha, Semi Final 2, Syed Mushtaq Ali Trophy 2022 - Cricbuzz',
              description:
                'Follow Mumbai vs Vidarbha, Semi Final 2, Nov 03, Syed Mushtaq Ali Trophy 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz',
              url: 'https://www.cricbuzz.com/live-cricket-scores/54514/mum-vs-vid-semi-final-2-syed-mushtaq-ali-trophy-2022',
              urlToImage: null,
              publishedAt: '2022-11-03T11:37:56Z',
              content:
                'Umesh Yadav to Prithvi Shaw, no run\r\nPrithvi Shaw and Rahane are at the crease. Prithvi Shaw is on strike. Umesh Yadav will open the attack\r\n Welcome back for the chase. A slip in place and off we go… [+3329 chars]',
            },
            {
              source: {
                id: null,
                name: 'The Indian Express',
              },
              author: 'Express Web Desk',
              title:
                'Arrest me, dares Hemant Soren; plays Adivasi vs outsider card - The Indian Express',
              description:
                '“Have I murdered someone? What crime have I committed? If I have, then arrest me, why send a summon”, asked Soren on a day he was to appear before the ED.',
              url: 'https://indianexpress.com/article/india/jharkhand-chief-minister-hemant-soren-ed-summon-8247421/',
              urlToImage:
                'https://indianexpress.com/wp-content/themes/indianexpress/images/IE-OGimage.jpg',
              publishedAt: '2022-11-03T11:12:21Z',
              content:
                'Jharkhand Chief Minister Hemant Soren Thursday attacked the BJP, without once naming the party or any of its leaders, daring it to arrest him rather than sending summons through ED.The comments from … [+3002 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: 'NDTV Sports Desk',
              title:
                "Amid Virat Kohli 'Fake Fielding' Row, BCB To Raise 'Controversial Umpiring' Issue: Report - NDTV Sports",
              description:
                "The Bangladesh Cricket Board has reportedly decided to raise the 'controversial umpiring' issue from the match against India in a 'proper forum'.",
              url: 'https://sports.ndtv.com/t20-world-cup-2022/amid-virat-kohli-fake-fielding-row-bcb-to-raise-controversial-umpiring-issue-report-3486588',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/o64cgd68_virat-kohli-and-shakib-al-hasan-afp_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
              publishedAt: '2022-11-03T11:00:00Z',
              content:
                "The India vs Bangladesh Super 12 match at the ICC T20 World Cup 2022 triggered a huge controversy with Bangla Tigers' wicket-keeper batter Nurul Hasan accusing Virat Kohli of 'fake fielding'. Even Ba… [+1541 chars]",
            },
            {
              source: {
                id: null,
                name: 'Hindustan Times',
              },
              author: 'HT News Desk',
              title:
                "'If enemies target us...': DRDO chief on ballistic missile defence system - Hindustan Times",
              description:
                'India has made significant advances in developing endo-atmospheric and exo-atmospheric intercept systems to destroy incoming hostile missiles. | Latest News India',
              url: 'https://www.hindustantimes.com/india-news/if-enemies-target-us-drdo-chief-on-ballistic-missile-defence-system-101667471591207.html',
              urlToImage:
                'https://images.hindustantimes.com/img/2022/11/03/1600x900/8fab6434-5abf-11ed-8f96-a5c1f3470f4c_1667471609071_1667471609071_1667471621583_1667471621583.jpg',
              publishedAt: '2022-11-03T10:43:27Z',
              content:
                "The AD-1 interceptor missile that completed its maiden test Wednesday is 'a significant jump' in the Indian military's ability to protect the country from long-range ballistic missiles, Defence Resea… [+1538 chars]",
            },
            {
              source: {
                id: null,
                name: 'Hindustan Times',
              },
              author: 'HT Entertainment Desk',
              title:
                'Shah Rukh Khan shares video that shows just how many people were outside Mannat - Hindustan Times',
              description:
                'Shah Rukh Khan shared a video giving his view of him greeting his fans outside Mannat on his birthday. The actor thanked the fans for showering love upon him. | Bollywood',
              url: 'https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-shares-video-that-shows-just-how-many-people-were-outside-mannat-for-his-birthday-101667470414961.html',
              urlToImage:
                'https://images.hindustantimes.com/img/2022/11/03/1600x900/Shah_Rukh_Khan_Mannat_1667470698266_1667470720216_1667470720216.jpg',
              publishedAt: '2022-11-03T10:36:17Z',
              content:
                'On Shah Rukh Khans birthday--Wednesday--the actor resumed a tradition: meeting his fans outside his Bandra bungalow Mannat. Shah Rukh would often meet fans while standing atop a platform on the wall … [+1682 chars]',
            },
            {
              source: {
                id: null,
                name: 'Moneycontrol',
              },
              author: 'Manish M. Suvarna',
              title:
                'RBI to chart own rate path despite 75-bps hike by US Fed - Moneycontrol',
              description:
                'The Indian central bank may look at various domestic and global factors before deciding on a rate hike, founders and managing directors of some companies say',
              url: 'https://www.moneycontrol.com/news/business/rbi-to-follow-suit-as-us-fed-raises-75-bps-experts-9443401.html',
              urlToImage:
                'https://images.moneycontrol.com/static-mcnews/2021/03/RBI_shutterstock_1686527644-770x433.jpg',
              publishedAt: '2022-11-03T10:31:42Z',
              content:
                'The Reserve Bank of India (RBI) will likely increase its policy repo rate by 35-50 basis points (bps) in the upcoming monetary policy after the US Federal Reserve raised its benchmark interest rate b… [+5989 chars]',
            },
            {
              source: {
                id: null,
                name: 'Deccan Herald',
              },
              author: null,
              title:
                '[ATTENTION] Luxe Keto ACV Gummies Reviews HOAX INFORMED ACV Burn Keto Gummies! - Deccan Herald',
              description:
                'Luxe Keto ACV Gummies Review: All information you need to know Luxe Keto ACV Gummies are a novel and effective aid to dieting since they focus on preventing the body from producing healthy protein by increasing ketone levels in the blood. To learn more about …',
              url: 'https://www.deccanherald.com/brandspot/pr-spot/attention-luxe-keto-acv-gummies-reviews-hoax-informed-acv-burn-keto-gummies-1159033.html',
              urlToImage:
                'https://www.deccanherald.com/sites/dh/files/dfhxfgb-1159033-1667471274.jpg',
              publishedAt: '2022-11-03T10:27:54Z',
              content:
                'Luxe Keto ACV Gummies Review: All information you need to knowLuxe Keto ACV Gummies are a novel and effective aid to dieting since they focus on preventing the body from producing healthy protein by … [+13481 chars]',
            },
            {
              source: {
                id: null,
                name: 'The Indian Express',
              },
              author: 'Sports Desk',
              title:
                'Pakistan vs South Africa Live Score, T20 World Cup 2022: Promising start for Temba Bavuma - The Indian Express',
              description:
                'T20 World Cup 2022, Pakistan vs South Africa Live Scorecard: Pakistan will lock horns against Bangladesh in Sydney.',
              url: 'https://indianexpress.com/article/sports/cricket/pakistan-vs-south-africa-live-score-t20-world-cup-2022-8246420/',
              urlToImage:
                'https://images.indianexpress.com/2022/11/Pakistan-South-Africa-Pakistan-vs-South-Africa-PAK-vs-SA-T20-World-Cup-2022-Match-36.jpeg',
              publishedAt: '2022-11-03T10:23:47Z',
              content:
                'Pakistan vs South Africa Live Cricket Score, T20 WC 2022, 36th Match, Super 12 Group 2:: An 82-run sixth-wicket partnership between Iftikhar Ahmed (51) and Shadab Khan (52) helped Pakistan post 185 f… [+532 chars]',
            },
            {
              source: {
                id: null,
                name: 'Zee Business',
              },
              author: 'ZeeBiz WebTeam',
              title:
                'Stock Market HIGHLIGHTS: Sensex, Nifty end with minor losses as SBI, Titan trigger pullback - Zee Business',
              description:
                'Stock Market HIGHLIGHTS: Sensex, Nifty end with minor losses as SBI, Titan trigger pullback',
              url: 'https://www.zeebiz.com/market-news/live-updates-sensex-nifty-live-updates-fomc-fed-reserve-jerome-powell-hdfc-vodafone-idea-sbi-IPO-hero-moto-gail-nikkei-dow-jones-bitcoin-206005',
              urlToImage:
                'https://cdn.zeebiz.com/sites/default/files/2022/11/03/208668-nseweb.jpg',
              publishedAt: '2022-11-03T10:16:41Z',
              content:
                "Stock Markets LIVE: Triggered by strong show by SBI and Titan stocks, frontline indices Nifty and Sensex pulled back from day's lows to end near their Wednesday closing levels. The markets traded wit… [+1322 chars]",
            },
            {
              source: {
                id: null,
                name: 'Hindustan Times',
              },
              author: 'HT Tech',
              title:
                "Sad ending! NASA's InSight spacecraft set to be killed on Mars - HT Tech",
              description:
                "NASA's InSight spacecraft's death is expected to be announced next week. Check the latest details here.",
              url: 'https://tech.hindustantimes.com/tech/news/sad-ending-nasa-s-insight-spacecraft-set-to-be-killed-on-mars-71667469229918.html',
              urlToImage:
                'https://images.hindustantimes.com/tech/img/2022/11/03/1600x900/Untitled_design_-_2022-11-03T150241926_1667469268708_1667469268819_1667469268819.png',
              publishedAt: '2022-11-03T10:06:30Z',
              content:
                "It's a tale of a tragic end and a huge loss to humanity. NASA's InSight spacecraft is going to die soon. In a touching statement, the spacecraft said that the day is coming when it will fall silent f… [+3322 chars]",
            },
            {
              source: {
                id: null,
                name: 'Deccan Herald',
              },
              author: null,
              title:
                'Astronomers spot largest, potentially hazardous asteroid detected in eight years - Deccan Herald',
              description:
                'Twilight observations have enabled astronomers to spot three near-Earth asteroids (NEA) hiding in the glare of the Sun. These NEAs are part of an elusive population that lurks inside the orbits of Earth and Venus. One of the asteroids is the largest object th…',
              url: 'https://www.deccanherald.com/video/science-and-environment/astronomers-spot-largest-potentially-hazardous-asteroid-detected-in-eight-years-1159015.html',
              urlToImage:
                'https://www.deccanherald.com/sites/dh/files/article_images/2022/11/03/nov03v15-1159015-1667469906.jpg',
              publishedAt: '2022-11-03T10:05:06Z',
              content:
                'Twilight observations have enabled astronomers to spot three near-Earth asteroids (NEA) hiding in the glare of the Sun. These NEAs are part of an elusive population that lurks inside the orbits of Ea… [+739 chars]',
            },
            {
              source: {
                id: null,
                name: 'GSMArena.com',
              },
              author: 'Yordan',
              title:
                'Google Play Games on PC enters public beta, expands to more markets - GSMArena.com news - GSMArena.com',
              description: 'It is now available in 13 countries and regions.',
              url: 'https://www.gsmarena.com/google_play_games_on_pc_is_now_in_public_beta_as_it_expands_to_more_markets-news-56383.php',
              urlToImage:
                'https://fdn.gsmarena.com/imgroot/news/22/11/google-play-games-open-beta-new-markets/-952x498w6/gsmarena_001.jpg',
              publishedAt: '2022-11-03T09:18:01Z',
              content:
                'Google brought its Play Games service to PC earlier this year, with the first users from select regions able to sign up for a closed beta.\r\nThe Android Developers blog, which is the official tribune … [+1007 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: null,
              title:
                '"Feedback Appreciated, Now Pay $8": Elon Musk vs US Politician - NDTV',
              description:
                "Elon Musk's announcement that verified Twitter users will be soon charged to keep their blue tick which has prompted reactions from many users of the platform.",
              url: 'https://www.ndtv.com/world-news/elon-musk-hits-back-after-us-politician-slams-twitter-verification-fee-3485558',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/cag8i3dg_us-politician_625x300_03_November_22.jpg',
              publishedAt: '2022-11-03T09:03:00Z',
              content:
                'Elon Musk has caused a stir with his initial moves.\r\nNew Delhi: After taking over Twitter, Elon Musk has caused a stir with his initial moves. He also announced that verified Twitter users will be so… [+2504 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: null,
              title:
                'Video: Gujarat Votes on December 1 And 5, Arvind Kejriwal Makes Big Claim - NDTV',
              description:
                'AAP takes aim at BJP\'s "huge corruption that came to the fore in Morbi", where a bridge collapse on October 30 killed more than 130 people',
              url: 'https://www.ndtv.com/india-news/gujarat-assembly-election-dates-out-arvind-kejriwal-aap-say-people-will-vote-against-corruption-evident-in-morbi-3486127',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/h8h4rf58_arvind-kejriwal-in-gujarat-ani-pic_650x400_03_November_22.jpg',
              publishedAt: '2022-11-03T08:20:39Z',
              content:
                'New Delhi: Minutes after the Election Commission announced the poll schedule for Gujarat voting on December 1 and , result on the 8th AAP chief Arvind Kejriwal was quick to declare that his party wou… [+2236 chars]',
            },
            {
              source: {
                id: null,
                name: 'Jagran.com',
              },
              author: 'Prerna Targhotra',
              title:
                'Lunar Eclipse 2022: City-Wise Timings For Last Chandra Grahan Of The Year - Jagran English',
              description: '',
              url: 'https://english.jagran.com/lifestyle/lunar-eclipse-2022-citywise-timings-for-last-chandra-grahan-of-the-year-in-delhi-noida-gurugram-pune-mumbai-ranchi-hyderabad-bengaluru-ahmedabad-patna-vapi-vijaypur-mumbai-bhopal-raipur-chennai-kolkata-lucknow-chandigarh-bhubaneshwar-haridwar-10053306',
              urlToImage:
                'https://imgeng.jagran.com/images/2022/nov/citywisetimingsofchandragrahan20221667462666847.jpg',
              publishedAt: '2022-11-03T07:55:16Z',
              content:
                'POPULARLY KNOWN as Chandra Grahan, the second and last lunar eclipse of the year 2022 will be witnessed on November 07 and 08 globally. This Chandra Grahan will be of magnitude 1.36 and will be visib… [+2004 chars]',
            },
            {
              source: {
                id: null,
                name: '123telugu.com',
              },
              author: null,
              title:
                'OTT: Wonder Women Trailer – A tale of pregnant women - 123telugu',
              description:
                'Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets',
              url: 'https://www.123telugu.com/mnews/ott-wonder-women-trailer-a-tale-of-pregnant-women.html',
              urlToImage:
                'https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif',
              publishedAt: '2022-11-03T07:30:00Z',
              content:
                'Famous female director Anjali Menon is coming back with another interesting movie. Titled Wonder Women, the movie has Nithya Menen, Parvathy Thiruvothu, and Nadiya Moidu in pivotal roles.\r\nThe Traile… [+664 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: null,
              title:
                "Elections In 6 States Today, See What's At Stake: 10 Facts - NDTV",
              description:
                'In contests symbolic of the fierce turf war between the BJP and regional parties, seven assembly constituencies in six states will elect new legislators in bypolls on Thursday, with Telangana and Bihar hosting two of the more closely watched clashes.',
              url: 'https://www.ndtv.com/india-news/telangana-bihar-haryana-among-big-bypoll-battles-today-10-points-3485271',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/qh43nq4o_bypolls_625x300_03_November_22.jpg',
              publishedAt: '2022-11-03T07:04:00Z',
              content:
                "<li>Telangana has been primed for a high-stakes battle between the BJP and Chief Minister K Chandrashekar Rao's party TRS following allegations by the latter of attempts to poach its MLAs with eye-po… [+2453 chars]",
            },
          ],
        },
        status: 200,
        statusText: '',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json; charset=utf-8',
          expires: '-1',
          pragma: 'no-cache',
        },
        config: {
          transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
          },
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {},
          headers: {
            Accept: 'application/json, text/plain, */*',
          },
          method: 'get',
          url: 'https://newsapi.org/v2/top-headlines?country=in&apiKey=85a36557fe7b4b7d8de7d1e51a645842',
        },
        request: {},
      };
      // const generalHeadline = await axios.get(
      //   'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=85a36557fe7b4b7d8de7d1e51a645842'
      // );
      const generalHeadline = {
        data: {
          status: 'ok',
          totalResults: 38,
          articles: [
            {
              source: {
                id: 'al-jazeera-english',
                name: 'Al Jazeera English',
              },
              author: 'Abid Hussain',
              title:
                'Pakistan’s ex-PM Imran Khan shot in leg at protest march - Al Jazeera English',
              description:
                'Party official confirms former prime minister has been shot at a rally but is not in danger.',
              url: 'https://www.aljazeera.com/news/2022/11/3/pakistans-ex-pm-imran-khan-injured-by-gunfire-during-long-march',
              urlToImage:
                'https://www.aljazeera.com/wp-content/uploads/2022/11/Screen-Shot-2022-11-03-at-3.06.16-PM.png?resize=1920%2C1440',
              publishedAt: '2022-11-03T12:05:52Z',
              content:
                'Islamabad, Pakistan Imran Khan, the former prime minister of Pakistan, has sustained a bullet injury in his leg after a gunman opened fire at a rally in Wazirabad.\r\nAzhar Mashwani, an official with K… [+1271 chars]',
            },
            {
              source: {
                id: 'cnn',
                name: 'CNN',
              },
              author: 'Hanna Ziady',
              title:
                'Bank of England fights inflation with biggest rate hike in 33 years - CNN',
              description:
                'The Bank of England raised interest rates by three quarters of a percentage point on Thursday, the biggest hike in 33 years, as it tries to contain soaring inflation even as the UK economy slides towards recession.',
              url: 'https://www.cnn.com/2022/11/03/economy/bank-of-england-interest-rates/index.html',
              urlToImage:
                'https://media.cnn.com/api/v1/images/stellar/prod/221102115338-bank-of-england-1027.jpg?c=16x9&q=w_800,c_fill',
              publishedAt: '2022-11-03T12:02:00Z',
              content:
                'The Bank of England raised interest rates by three quarters of a percentage point on Thursday, the biggest hike in 33 years, as it tries to contain soaring inflation even as the UK economy slides tow… [+1701 chars]',
            },
            {
              source: {
                id: 'google-news',
                name: 'Google News',
              },
              author: null,
              title:
                "Scientists find evidence of 'substantial' transmission of monkeypox before symptoms appear - The Hindu",
              description: null,
              url: 'https://news.google.com/__i/rss/rd/articles/CBMilQFodHRwczovL3d3dy50aGVoaW5kdS5jb20vc2NpLXRlY2gvaGVhbHRoL3NjaWVudGlzdHMtZmluZC1ldmlkZW5jZS1vZi1zdWJzdGFudGlhbC10cmFuc21pc3Npb24tb2YtbW9ua2V5cG94LWJlZm9yZS1zeW1wdG9tcy1hcHBlYXIvYXJ0aWNsZTY2MDkwODAzLmVjZdIBmgFodHRwczovL3d3dy50aGVoaW5kdS5jb20vc2NpLXRlY2gvaGVhbHRoL3NjaWVudGlzdHMtZmluZC1ldmlkZW5jZS1vZi1zdWJzdGFudGlhbC10cmFuc21pc3Npb24tb2YtbW9ua2V5cG94LWJlZm9yZS1zeW1wdG9tcy1hcHBlYXIvYXJ0aWNsZTY2MDkwODAzLmVjZS9hbXAv?oc=5',
              urlToImage: null,
              publishedAt: '2022-11-03T11:39:00Z',
              content: null,
            },
            {
              source: {
                id: null,
                name: 'Cricbuzz',
              },
              author: null,
              title:
                'Mumbai vs Vidarbha, Semi Final 2, Syed Mushtaq Ali Trophy 2022 - Cricbuzz',
              description:
                'Follow Mumbai vs Vidarbha, Semi Final 2, Nov 03, Syed Mushtaq Ali Trophy 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz',
              url: 'https://www.cricbuzz.com/live-cricket-scores/54514/mum-vs-vid-semi-final-2-syed-mushtaq-ali-trophy-2022',
              urlToImage: null,
              publishedAt: '2022-11-03T11:37:56Z',
              content:
                'Umesh Yadav to Prithvi Shaw, no run\r\nPrithvi Shaw and Rahane are at the crease. Prithvi Shaw is on strike. Umesh Yadav will open the attack\r\n Welcome back for the chase. A slip in place and off we go… [+3329 chars]',
            },
            {
              source: {
                id: null,
                name: 'The Indian Express',
              },
              author: 'Express Web Desk',
              title:
                'Arrest me, dares Hemant Soren; plays Adivasi vs outsider card - The Indian Express',
              description:
                '“Have I murdered someone? What crime have I committed? If I have, then arrest me, why send a summon”, asked Soren on a day he was to appear before the ED.',
              url: 'https://indianexpress.com/article/india/jharkhand-chief-minister-hemant-soren-ed-summon-8247421/',
              urlToImage:
                'https://indianexpress.com/wp-content/themes/indianexpress/images/IE-OGimage.jpg',
              publishedAt: '2022-11-03T11:12:21Z',
              content:
                'Jharkhand Chief Minister Hemant Soren Thursday attacked the BJP, without once naming the party or any of its leaders, daring it to arrest him rather than sending summons through ED.The comments from … [+3002 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: 'NDTV Sports Desk',
              title:
                "Amid Virat Kohli 'Fake Fielding' Row, BCB To Raise 'Controversial Umpiring' Issue: Report - NDTV Sports",
              description:
                "The Bangladesh Cricket Board has reportedly decided to raise the 'controversial umpiring' issue from the match against India in a 'proper forum'.",
              url: 'https://sports.ndtv.com/t20-world-cup-2022/amid-virat-kohli-fake-fielding-row-bcb-to-raise-controversial-umpiring-issue-report-3486588',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/o64cgd68_virat-kohli-and-shakib-al-hasan-afp_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
              publishedAt: '2022-11-03T11:00:00Z',
              content:
                "The India vs Bangladesh Super 12 match at the ICC T20 World Cup 2022 triggered a huge controversy with Bangla Tigers' wicket-keeper batter Nurul Hasan accusing Virat Kohli of 'fake fielding'. Even Ba… [+1541 chars]",
            },
            {
              source: {
                id: null,
                name: 'Hindustan Times',
              },
              author: 'HT News Desk',
              title:
                "'If enemies target us...': DRDO chief on ballistic missile defence system - Hindustan Times",
              description:
                'India has made significant advances in developing endo-atmospheric and exo-atmospheric intercept systems to destroy incoming hostile missiles. | Latest News India',
              url: 'https://www.hindustantimes.com/india-news/if-enemies-target-us-drdo-chief-on-ballistic-missile-defence-system-101667471591207.html',
              urlToImage:
                'https://images.hindustantimes.com/img/2022/11/03/1600x900/8fab6434-5abf-11ed-8f96-a5c1f3470f4c_1667471609071_1667471609071_1667471621583_1667471621583.jpg',
              publishedAt: '2022-11-03T10:43:27Z',
              content:
                "The AD-1 interceptor missile that completed its maiden test Wednesday is 'a significant jump' in the Indian military's ability to protect the country from long-range ballistic missiles, Defence Resea… [+1538 chars]",
            },
            {
              source: {
                id: null,
                name: 'Hindustan Times',
              },
              author: 'HT Entertainment Desk',
              title:
                'Shah Rukh Khan shares video that shows just how many people were outside Mannat - Hindustan Times',
              description:
                'Shah Rukh Khan shared a video giving his view of him greeting his fans outside Mannat on his birthday. The actor thanked the fans for showering love upon him. | Bollywood',
              url: 'https://www.hindustantimes.com/entertainment/bollywood/shah-rukh-khan-shares-video-that-shows-just-how-many-people-were-outside-mannat-for-his-birthday-101667470414961.html',
              urlToImage:
                'https://images.hindustantimes.com/img/2022/11/03/1600x900/Shah_Rukh_Khan_Mannat_1667470698266_1667470720216_1667470720216.jpg',
              publishedAt: '2022-11-03T10:36:17Z',
              content:
                'On Shah Rukh Khans birthday--Wednesday--the actor resumed a tradition: meeting his fans outside his Bandra bungalow Mannat. Shah Rukh would often meet fans while standing atop a platform on the wall … [+1682 chars]',
            },
            {
              source: {
                id: null,
                name: 'Moneycontrol',
              },
              author: 'Manish M. Suvarna',
              title:
                'RBI to chart own rate path despite 75-bps hike by US Fed - Moneycontrol',
              description:
                'The Indian central bank may look at various domestic and global factors before deciding on a rate hike, founders and managing directors of some companies say',
              url: 'https://www.moneycontrol.com/news/business/rbi-to-follow-suit-as-us-fed-raises-75-bps-experts-9443401.html',
              urlToImage:
                'https://images.moneycontrol.com/static-mcnews/2021/03/RBI_shutterstock_1686527644-770x433.jpg',
              publishedAt: '2022-11-03T10:31:42Z',
              content:
                'The Reserve Bank of India (RBI) will likely increase its policy repo rate by 35-50 basis points (bps) in the upcoming monetary policy after the US Federal Reserve raised its benchmark interest rate b… [+5989 chars]',
            },
            {
              source: {
                id: null,
                name: 'Deccan Herald',
              },
              author: null,
              title:
                '[ATTENTION] Luxe Keto ACV Gummies Reviews HOAX INFORMED ACV Burn Keto Gummies! - Deccan Herald',
              description:
                'Luxe Keto ACV Gummies Review: All information you need to know Luxe Keto ACV Gummies are a novel and effective aid to dieting since they focus on preventing the body from producing healthy protein by increasing ketone levels in the blood. To learn more about …',
              url: 'https://www.deccanherald.com/brandspot/pr-spot/attention-luxe-keto-acv-gummies-reviews-hoax-informed-acv-burn-keto-gummies-1159033.html',
              urlToImage:
                'https://www.deccanherald.com/sites/dh/files/dfhxfgb-1159033-1667471274.jpg',
              publishedAt: '2022-11-03T10:27:54Z',
              content:
                'Luxe Keto ACV Gummies Review: All information you need to knowLuxe Keto ACV Gummies are a novel and effective aid to dieting since they focus on preventing the body from producing healthy protein by … [+13481 chars]',
            },
            {
              source: {
                id: null,
                name: 'The Indian Express',
              },
              author: 'Sports Desk',
              title:
                'Pakistan vs South Africa Live Score, T20 World Cup 2022: Promising start for Temba Bavuma - The Indian Express',
              description:
                'T20 World Cup 2022, Pakistan vs South Africa Live Scorecard: Pakistan will lock horns against Bangladesh in Sydney.',
              url: 'https://indianexpress.com/article/sports/cricket/pakistan-vs-south-africa-live-score-t20-world-cup-2022-8246420/',
              urlToImage:
                'https://images.indianexpress.com/2022/11/Pakistan-South-Africa-Pakistan-vs-South-Africa-PAK-vs-SA-T20-World-Cup-2022-Match-36.jpeg',
              publishedAt: '2022-11-03T10:23:47Z',
              content:
                'Pakistan vs South Africa Live Cricket Score, T20 WC 2022, 36th Match, Super 12 Group 2:: An 82-run sixth-wicket partnership between Iftikhar Ahmed (51) and Shadab Khan (52) helped Pakistan post 185 f… [+532 chars]',
            },
            {
              source: {
                id: null,
                name: 'Zee Business',
              },
              author: 'ZeeBiz WebTeam',
              title:
                'Stock Market HIGHLIGHTS: Sensex, Nifty end with minor losses as SBI, Titan trigger pullback - Zee Business',
              description:
                'Stock Market HIGHLIGHTS: Sensex, Nifty end with minor losses as SBI, Titan trigger pullback',
              url: 'https://www.zeebiz.com/market-news/live-updates-sensex-nifty-live-updates-fomc-fed-reserve-jerome-powell-hdfc-vodafone-idea-sbi-IPO-hero-moto-gail-nikkei-dow-jones-bitcoin-206005',
              urlToImage:
                'https://cdn.zeebiz.com/sites/default/files/2022/11/03/208668-nseweb.jpg',
              publishedAt: '2022-11-03T10:16:41Z',
              content:
                "Stock Markets LIVE: Triggered by strong show by SBI and Titan stocks, frontline indices Nifty and Sensex pulled back from day's lows to end near their Wednesday closing levels. The markets traded wit… [+1322 chars]",
            },
            {
              source: {
                id: null,
                name: 'Hindustan Times',
              },
              author: 'HT Tech',
              title:
                "Sad ending! NASA's InSight spacecraft set to be killed on Mars - HT Tech",
              description:
                "NASA's InSight spacecraft's death is expected to be announced next week. Check the latest details here.",
              url: 'https://tech.hindustantimes.com/tech/news/sad-ending-nasa-s-insight-spacecraft-set-to-be-killed-on-mars-71667469229918.html',
              urlToImage:
                'https://images.hindustantimes.com/tech/img/2022/11/03/1600x900/Untitled_design_-_2022-11-03T150241926_1667469268708_1667469268819_1667469268819.png',
              publishedAt: '2022-11-03T10:06:30Z',
              content:
                "It's a tale of a tragic end and a huge loss to humanity. NASA's InSight spacecraft is going to die soon. In a touching statement, the spacecraft said that the day is coming when it will fall silent f… [+3322 chars]",
            },
            {
              source: {
                id: null,
                name: 'Deccan Herald',
              },
              author: null,
              title:
                'Astronomers spot largest, potentially hazardous asteroid detected in eight years - Deccan Herald',
              description:
                'Twilight observations have enabled astronomers to spot three near-Earth asteroids (NEA) hiding in the glare of the Sun. These NEAs are part of an elusive population that lurks inside the orbits of Earth and Venus. One of the asteroids is the largest object th…',
              url: 'https://www.deccanherald.com/video/science-and-environment/astronomers-spot-largest-potentially-hazardous-asteroid-detected-in-eight-years-1159015.html',
              urlToImage:
                'https://www.deccanherald.com/sites/dh/files/article_images/2022/11/03/nov03v15-1159015-1667469906.jpg',
              publishedAt: '2022-11-03T10:05:06Z',
              content:
                'Twilight observations have enabled astronomers to spot three near-Earth asteroids (NEA) hiding in the glare of the Sun. These NEAs are part of an elusive population that lurks inside the orbits of Ea… [+739 chars]',
            },
            {
              source: {
                id: null,
                name: 'GSMArena.com',
              },
              author: 'Yordan',
              title:
                'Google Play Games on PC enters public beta, expands to more markets - GSMArena.com news - GSMArena.com',
              description: 'It is now available in 13 countries and regions.',
              url: 'https://www.gsmarena.com/google_play_games_on_pc_is_now_in_public_beta_as_it_expands_to_more_markets-news-56383.php',
              urlToImage:
                'https://fdn.gsmarena.com/imgroot/news/22/11/google-play-games-open-beta-new-markets/-952x498w6/gsmarena_001.jpg',
              publishedAt: '2022-11-03T09:18:01Z',
              content:
                'Google brought its Play Games service to PC earlier this year, with the first users from select regions able to sign up for a closed beta.\r\nThe Android Developers blog, which is the official tribune … [+1007 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: null,
              title:
                '"Feedback Appreciated, Now Pay $8": Elon Musk vs US Politician - NDTV',
              description:
                "Elon Musk's announcement that verified Twitter users will be soon charged to keep their blue tick which has prompted reactions from many users of the platform.",
              url: 'https://www.ndtv.com/world-news/elon-musk-hits-back-after-us-politician-slams-twitter-verification-fee-3485558',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/cag8i3dg_us-politician_625x300_03_November_22.jpg',
              publishedAt: '2022-11-03T09:03:00Z',
              content:
                'Elon Musk has caused a stir with his initial moves.\r\nNew Delhi: After taking over Twitter, Elon Musk has caused a stir with his initial moves. He also announced that verified Twitter users will be so… [+2504 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: null,
              title:
                'Video: Gujarat Votes on December 1 And 5, Arvind Kejriwal Makes Big Claim - NDTV',
              description:
                'AAP takes aim at BJP\'s "huge corruption that came to the fore in Morbi", where a bridge collapse on October 30 killed more than 130 people',
              url: 'https://www.ndtv.com/india-news/gujarat-assembly-election-dates-out-arvind-kejriwal-aap-say-people-will-vote-against-corruption-evident-in-morbi-3486127',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/h8h4rf58_arvind-kejriwal-in-gujarat-ani-pic_650x400_03_November_22.jpg',
              publishedAt: '2022-11-03T08:20:39Z',
              content:
                'New Delhi: Minutes after the Election Commission announced the poll schedule for Gujarat voting on December 1 and , result on the 8th AAP chief Arvind Kejriwal was quick to declare that his party wou… [+2236 chars]',
            },
            {
              source: {
                id: null,
                name: 'Jagran.com',
              },
              author: 'Prerna Targhotra',
              title:
                'Lunar Eclipse 2022: City-Wise Timings For Last Chandra Grahan Of The Year - Jagran English',
              description: '',
              url: 'https://english.jagran.com/lifestyle/lunar-eclipse-2022-citywise-timings-for-last-chandra-grahan-of-the-year-in-delhi-noida-gurugram-pune-mumbai-ranchi-hyderabad-bengaluru-ahmedabad-patna-vapi-vijaypur-mumbai-bhopal-raipur-chennai-kolkata-lucknow-chandigarh-bhubaneshwar-haridwar-10053306',
              urlToImage:
                'https://imgeng.jagran.com/images/2022/nov/citywisetimingsofchandragrahan20221667462666847.jpg',
              publishedAt: '2022-11-03T07:55:16Z',
              content:
                'POPULARLY KNOWN as Chandra Grahan, the second and last lunar eclipse of the year 2022 will be witnessed on November 07 and 08 globally. This Chandra Grahan will be of magnitude 1.36 and will be visib… [+2004 chars]',
            },
            {
              source: {
                id: null,
                name: '123telugu.com',
              },
              author: null,
              title:
                'OTT: Wonder Women Trailer – A tale of pregnant women - 123telugu',
              description:
                'Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets',
              url: 'https://www.123telugu.com/mnews/ott-wonder-women-trailer-a-tale-of-pregnant-women.html',
              urlToImage:
                'https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif',
              publishedAt: '2022-11-03T07:30:00Z',
              content:
                'Famous female director Anjali Menon is coming back with another interesting movie. Titled Wonder Women, the movie has Nithya Menen, Parvathy Thiruvothu, and Nadiya Moidu in pivotal roles.\r\nThe Traile… [+664 chars]',
            },
            {
              source: {
                id: null,
                name: 'NDTV News',
              },
              author: null,
              title:
                "Elections In 6 States Today, See What's At Stake: 10 Facts - NDTV",
              description:
                'In contests symbolic of the fierce turf war between the BJP and regional parties, seven assembly constituencies in six states will elect new legislators in bypolls on Thursday, with Telangana and Bihar hosting two of the more closely watched clashes.',
              url: 'https://www.ndtv.com/india-news/telangana-bihar-haryana-among-big-bypoll-battles-today-10-points-3485271',
              urlToImage:
                'https://c.ndtvimg.com/2022-11/qh43nq4o_bypolls_625x300_03_November_22.jpg',
              publishedAt: '2022-11-03T07:04:00Z',
              content:
                "<li>Telangana has been primed for a high-stakes battle between the BJP and Chief Minister K Chandrashekar Rao's party TRS following allegations by the latter of attempts to poach its MLAs with eye-po… [+2453 chars]",
            },
          ],
        },
        status: 200,
        statusText: '',
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'application/json; charset=utf-8',
          expires: '-1',
          pragma: 'no-cache',
        },
        config: {
          transitional: {
            silentJSONParsing: true,
            forcedJSONParsing: true,
            clarifyTimeoutError: false,
          },
          transformRequest: [null],
          transformResponse: [null],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {},
          headers: {
            Accept: 'application/json, text/plain, */*',
          },
          method: 'get',
          url: 'https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=85a36557fe7b4b7d8de7d1e51a645842',
        },
        request: {},
      };

      if (topHeadline.status === 200 || generalHeadline.status === 200) {
        setLoadingCircle(false);
      }
      const allNews = topHeadline.data.articles.filter((item) => {
        return (
          item.urlToImage !== null &&
          item.content !== null &&
          item.url !== null &&
          item.title !== null &&
          item.publishedAt !== null
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

      setSliderNews(allNews.filter((items, i) => i < 3));
      setSideSliderNews(
        allNews.filter((items, i) => {
          return i >= 3 && i <= 6;
        })
      );
      setBreakingNews(
        allNews.filter((items, i) => {
          return i >= 7 && i <= 12;
        })
      );
      setMultipleSlider(
        allNews.filter((items, i) => {
          return i >= 7;
        })
      );
    } catch (error) {
      console.log(error);
      setLoadingError(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      fetchData();
    };
  }, []);

  return (
    <>
      {loadingCircle ? <LoadingCircle error={loadingError} /> : ''}
      <Helmet>
        <title>The News</title>
      </Helmet>
      <Container fluid className="p-0">
        <Row>
          <Col md={12} lg={7}>
            <Slider News={sliderNews} />
          </Col>
          <Col md={12} lg={5}>
            <Row className="h-100">
              <SideSliderNews sideSliderNews={sideSliderNews} />
            </Row>
          </Col>
        </Row>
        <Row>
          <HeadingSlider breakingNews={breakingNews} />
        </Row>
      </Container>
      <Container className=" position-relative">
        <MultiplySlider multipleSlider={multipleSlider} />
      </Container>
      <Container>
        <Row>
          <Col lg={8} className="col-12">
            <div className="featuredNews">
              <div className="h4 mb-0">LATEST NEWS</div>
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
                <div className="col-12 col-md-6 d-flex" key={i}>
                  <img
                    src={value.urlToImage}
                    alt={value.title}
                    className=" img-fluid"
                  />
                </div>
              ))}
              {fullNews.map((value, i) => (
                <div className="col-12 col-md-6 ps-md-0" key={i}>
                  <div
                    className=" w-100 h-100 d-flex justify-content-center p-3 flex-column  bg-white border border-start-0"
                    key={i}
                  >
                    <a
                      href={value.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-decoration-none text-black"
                    >
                      <div className="card-body py-3">
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
                    </a>
                    <div className="d-flex align-items-center justify-content-between px-0 pt-3 border-top">
                      <div className="d-flex align-items-center">
                        <Avatar className=" me-2">
                          {value.author.slice(0, 1)}
                        </Avatar>
                        <span>{value.author}</span>
                      </div>
                      <div className="date">
                        {date.transform(
                          value.publishedAt.slice(0, 10),
                          'YYYY-MM-DD',
                          'MMM DD,YYYY'
                        )}
                      </div>
                    </div>
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

                {/* {secondaryNews
                  .filter((items, i) => i >= 8)
                  .map((value, i) => (
                    <TrendingNews value={value} key={i} />
                  ))}} */}
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

export default HomeScreen;
