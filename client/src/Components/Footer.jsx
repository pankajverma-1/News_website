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
    // const { data } = await axios.get(url);
    const { data } = {
      status: 'ok',
      totalResults: 7307,
      articles: [
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            '"Hardest Thing Was Staying Alive": Ukraine Hospital That Was Open During War',
          description:
            'In six months of Russian occupation and eight months of fighting, Izyum hospital in eastern Ukraine never stopped working, operating on wounded civilians in its basement while awaiting liberation.',
          url: 'https://www.ndtv.com/world-news/hardest-thing-was-staying-alive-ukraine-hospital-that-was-open-during-war-3487139',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/snjbsn7g_izyum-ukraine-hospital_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T12:14:44Z',
          content:
            "Doctor Yuri Kuznetsov, 52, stands in the destroyed surgery room in Izyum's hospital.\r\nIzyum, Ukraine: In six months of Russian occupation and eight months of fighting, Izyum hospital in eastern Ukrai… [+3498 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: "5 Points On Imran Khan's March During Which He Was Shot",
          description:
            'An unidentified assailant on Thursday fired gunshots at a rally of Imran Khan in Wazirabad, injuring the former Pakistan Prime Minister.',
          url: 'https://www.ndtv.com/world-news/5-points-on-imran-khans-march-during-which-he-was-shot-3487120',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/rdcaq5nk_imran-khan-650_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T12:10:50Z',
          content:
            '<li>Imran Khan, who was shot in the leg, is said to be out of danger. The gunman is arrested.\r\n</li><li>Since Friday, the 70-year-old has been at the head of a roadshow - a so-called long march start… [+605 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Russia-Ukraine War Fuelling Widespread Cybersecurity Attacks: Report',
          description:
            "Geopolitics such as Russia's invasion of Ukraine has led to more damaging and widespread cybersecurity attacks in the year to July.",
          url: 'https://www.ndtv.com/world-news/russia-ukraine-war-fuelling-widespread-cybersecurity-attacks-report-3487110',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/05ph6p5_cyberattack-generic_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T12:10:14Z',
          content:
            "The European Union in May agreed on tougher cybersecurity rules. (Representational)\r\nBrussels: Geopolitics such as Russia's invasion of Ukraine has led to more damaging and widespread cybersecurity a… [+1521 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Man, Jailed For Life, Admits He Sexually Abused Dead Bodies Of 101 Women',
          description:
            'A hospital electrician serving a full-life sentence in Britain for murdering two women and sexually abusing corpses in mortuaries on Thursday admitted defiling a further 23 dead women.',
          url: 'https://www.ndtv.com/world-news/uk-man-jailed-for-life-admits-he-sexually-abused-dead-bodies-of-101-women-3487095',
          urlToImage:
            'https://c.ndtvimg.com/mi2p3td8_death-generic_625x300_12_August_18.jpg',
          publishedAt: '2022-11-03T12:06:13Z',
          content:
            'He also pleaded guilty to 51 other offences relating to victims 78 in mortuaries.\r\nLondon: A hospital electrician serving a full-life sentence in Britain for murdering two women and sexually abusing … [+2378 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Watch: India Tests AD-1 Missile. Can Intercept Target From 5,000 Km Away',
          description:
            'In a major capability boost, India can now destroy incoming enemy ballistic missiles fired at it from 5,000 km with the successful test firing of the AD-1 missile launched for the first time on Wednesday off the Odisha coast.',
          url: 'https://www.ndtv.com/india-news/watch-india-tests-ad-1-missile-can-intercept-target-from-5-000-km-away-3487092',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/9uv41u9o_ad1-missile-launch-650_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T12:04:20Z',
          content:
            'It is mainly endo-atmospheric but it also works in the low exo-atmospheric region.\r\nNew Delhi: In a major capability boost, India can now destroy incoming enemy ballistic missiles fired at it from 5,… [+2044 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            '"We Don\'t Need To Be Judged," Urvashi Writes In Post On Body Positivity',
          description: '"I don\'t need no validation," wrote Urvashi Dholakia',
          url: 'https://www.ndtv.com/entertainment/urvashi-dholakia-shares-post-on-body-positivity-we-dont-need-to-be-judged-for-our-shapes-she-writes-3487089',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/r5vpv4o8_-urvashi_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T12:03:35Z',
          content:
            'Urvashi Dholakia shared this image.(courtesy: urvashidholakia)\r\nNew Delhi: Actress Urvashi Dholakia shared a set of pictures of herself from her pool session on her Instagram, on Thursday. The 43-yea… [+1382 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Watch: Make Spicy Chicken Schezwan Fried Rice For Mid-Week Indulgence',
          description:
            'We have found a quick and easy recipe that let you enjoy spicy fried rice at home, it is called chicken schezwan fried rice.',
          url: 'https://food.ndtv.com/food-drinks/watch-make-spicy-chicken-schezwan-fried-rice-for-mid-week-indulgence-3487085',
          urlToImage:
            'https://c.ndtvimg.com/2022-08/gplm565_fried-rice_625x300_30_August_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T12:02:49Z',
          content:
            "With the weekend right around the corner, we can't help but crave something delicious! As foodies, we can't help but daydream about all the delicious dishes we like. Momos, schezwan paneer, chow mein… [+1719 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Psychologist Reveals Biggest Sleep Killer And How To Fix It In 15 Minutes',
          description:
            'A psychologist revealed a 15-minute solution to the main problem that can prevent someone from sleeping at night.',
          url: 'https://www.ndtv.com/world-news/psychologist-reveals-biggest-sleep-killer-and-how-to-fix-it-in-15-minutes-3487073',
          urlToImage:
            'https://c.ndtvimg.com/2022-06/jpbi2d5o_sleep_625x300_24_June_22.png',
          publishedAt: '2022-11-03T11:59:37Z',
          content:
            "The psychologist indicated that ruminating causes inadequate sleep.\r\nJust like food and exercise, a good night's sleep is crucial for overall health. Your emotions, health, and cognitive function all… [+1897 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Hina Khan's In-Flight Meal Is Giving Us Ultimate Breakfast Goal - See Pic",
          description:
            'Be it at her home or during vacations and work trips, Hina Khan never misses a chance to indulge in yummy delicacies.',
          url: 'https://food.ndtv.com/news/hina-khans-in-flight-meal-is-giving-us-ultimate-breakfast-goal-see-pic-3487061',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/29c59pqg_-hina-khan-_625x300_13_October_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T11:56:55Z',
          content:
            "Television actor Hina Khan has been impressing us for years with her acting skills and fashion statement. In fact, she became a household name with her stint in TV shows 'Yeh Rishta Kya Kehlata Hai' … [+1898 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Press Trust of India',
          title:
            'IIT Madras Enables Crowdsourcing To Track Waterlogging In Chennai',
          description:
            'IIT Madras has enabled a method for users to track waterlogging in Chennai through WhatsApp and the website- chennaiwaterlogging.org. Through this, the public can report the flooded location, water depth, and add photos of inundated sites.',
          url: 'https://www.ndtv.com/education/iit-madras-enables-crowdsourcing-track-waterlogging-in-chennai',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/iit_madras_featured-image.jpg',
          publishedAt: '2022-11-03T11:54:58Z',
          content:
            'Chennai:The Indian Institute of Technology (IIT) Madras has enabled a crowdsourcing method to track waterlogging in Chennai through WhatsApp: +1 (415) 523-8886 and the website- chennaiwaterlogging.\r\n… [+2496 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Manya Singh',
          title:
            'Sleep: Do You Often Experience Nightmares? Read The Causes & Treatment',
          description:
            'Read this article, to understand the many causes behind nightmares and how they can be treated.',
          url: 'https://doctor.ndtv.com/living-healthy/sleep-do-you-often-experience-nightmares-here-are-the-causes-treatment-3484353',
          urlToImage:
            'https://c.ndtvimg.com/2022-07/0lf9f4eo_insomnia-home-remedies-how-to-sleep-_625x300_11_July_22.jpg',
          publishedAt: '2022-11-03T11:53:17Z',
          content:
            'A nightmare is a frightening dream that causes you to wake up and is connected to unpleasant emotions like fear or worry. Children frequently experience nightmares, but anyone can experience them. Ty… [+5227 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Over 45% Voter Turnout Till 3 pm In 6 States' Assembly By-Elections",
          description:
            'An average voter turnout of 45.60 per cent was recorded till 3 pm Thursday in the by-elections to seven assembly constituencies underway in six states, including Bihar and Uttar Pradesh.',
          url: 'https://www.ndtv.com/india-news/over-45-voter-turnout-till-3-pm-in-6-states-assembly-by-elections-3487028',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/qh43nq4o_bypolls_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T11:51:52Z',
          content:
            'By-Elections 2022: The results of the elections are set to be announced on Sunday. (File)\r\nNew Delhi: An average voter turnout of 45.60 per cent was recorded till 3 pm Thursday in the by-elections to… [+5579 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'From Figs To Cow Milk, 5 Superfoods That Can Help Boost Fertility In Women',
          description:
            'Fertility in women: A few superfoods can help enhance fertility in woman. Here are some of these foods recommended by nutritionist.',
          url: 'https://www.ndtv.com/health/fertility-in-women-from-figs-to-cow-milk-5-superfoods-to-boost-fertility-3486962',
          urlToImage:
            'https://c.ndtvimg.com/2018-11/lk4cpuv_fertility_625x300_12_November_18.jpg',
          publishedAt: '2022-11-03T11:43:21Z',
          content:
            "A few modifications in diet can help improve fertility in women\r\nThough the journey of parenthood is surreal, some unwanted complications can crop up and steal the thunder. In today's fast-paced life… [+2850 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: 'Gunman Who Attacked Imran Khan Arrested: What We Know So Far',
          description:
            'Former Pakistani Prime Minister Imran Khan was injured in a shooting at one of his rallies in Pakistan on Thursday.',
          url: 'https://www.ndtv.com/world-news/imran-khan-shooting-gunman-who-attacked-imran-khan-arrested-what-we-know-so-far-3486995',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/2eaq85ms_imran-khan-gunman-tv_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T11:43:18Z',
          content:
            '<li>Imran Khan was shot in the leg by a gunman. He is said to be out of danger.\r\n</li><li>One person has been killed, and several others were injured, reports said. The gunman fired multiple shots.\r\n… [+428 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Alia\'s Appreciation Post For "Wonderfully Weird" Soni Razdan, Shaheen',
          description:
            'Her film Brahmastra will release on Disney+Hotstar and Hulu on November 4',
          url: 'https://www.ndtv.com/entertainment/alia-bhatt-s-appreciation-post-for-mom-soni-razdan-and-sister-shaheen-is-too-cute-to-miss-3486805',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/l2jj7td8_alia_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T11:40:46Z',
          content:
            "Alia Bhatt shared this picture. (courtesy: aliaabhatt)\r\nAlia Bhatt doesn't need an occasion to appreciate her mom Soni Razdan and sister Shaheen Bhatt. The actress, who will soon welcome her first ch… [+1887 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Edited by NDTV News Desk',
          title:
            'Updates: Imran Khan Injured After Firing At His Rally, Gunman Shot Dead',
          description:
            "Imran Khan, former Pakistan Prime Minister, got injured today in a firing incident at one of his rallies. According to local media, shots were fired on the container-mounted-truck carrying Imran Khan in Pakistan's Punjab province.",
          url: 'https://www.ndtv.com/world-news/updates-imran-khans-convoy-fired-upon-during-rally-in-pakistans-punjab-3486968',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/sfk6g2e_imran-khan-injured-ndtv-650_650x400_03_November_22.jpg',
          publishedAt: '2022-11-03T11:38:23Z',
          content:
            'New Delhi: Imran Khan, former Pakistan Prime Minister, got injured today when unidentified gunmen fired during one of his rallies. According to local media, shots were fired on the container-mounted-… [+2327 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'New Zealand Aims To Become Dark Sky Nation: All You Need To Know About It',
          description:
            'Dark skies are crucial for nocturnal and migratory birds. It is also essential for insects, as artificial light at night can reduce their activity.',
          url: 'https://www.ndtv.com/world-news/new-zealand-aims-to-become-dark-sky-nation-all-you-need-to-know-about-it-3486963',
          urlToImage:
            'https://c.ndtvimg.com/2022-09/73e89pr8_night-sky-generic_625x300_03_September_22.jpg',
          publishedAt: '2022-11-03T11:38:12Z',
          content:
            'Niue is the only certified dark sky country in the world.\r\nNew Zealand is aiming for an unprecedented goal - to become certified as a dark sky nation. Major parts of the island nation are affected by… [+1994 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Imran Khan Injured In Firing At Rally In Pakistan's Gujranwala, Taken To Hospital: Reports - NDTV",
          description:
            "<ol><li>Imran Khan Injured In Firing At Rally In Pakistan's Gujranwala, Taken To Hospital: Reports  NDTV\r\n</li><li>Shots fired during Imran Khan's march, ex-Pakistan PM's manager injured  Republic World\r\n</li><li>News Live: Imran Khan safe after firing at ral…",
          url: 'https://www.ndtv.com/world-news/firing-at-imran-khans-rally-in-pakistan-3486916',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/sfk6g2e_imran-khan-injured-ndtv-650_650x400_03_November_22.jpg',
          publishedAt: '2022-11-03T11:34:13Z',
          content:
            'Imran Khan being shifted to a car after firing during his "long march" against Shehbaz Sharif government.\r\nFormer Pakistan prime minister Imran Khan was injured in firing during his rally in Gujranwa… [+1892 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Press Trust of India',
          title:
            'Programme To Encourage Students To Join Professional Courses: Sisodia',
          description:
            'A program will be designed in which ITI students and graduates can interact with school students and encourage them to pursue professional courses in these institutes, Deputy Chief Minister Manish Sisodia said.',
          url: 'https://www.ndtv.com/education/programme-encourage-students-join-professional-courses-be-designed-soon-delhi-deputy-chief-minister',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/manish-sisodia-featured-image.jpg',
          publishedAt: '2022-11-03T11:33:25Z',
          content:
            'New Delhi:A program will be designed in which ITI students and graduates can interact with school students and encourage them to pursue professional courses in these institutes, Deputy Chief Minister… [+1061 chars]',
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
            "<ol><li>Amid Virat Kohli 'Fake Fielding' Row, BCB To Raise 'Controversial Umpiring' Issue: Report  NDTV Sports\r\n</li><li>Bangladesh accuse Kohli of 'fake fielding' during tense India victory  ESPNcricinfo\r\n</li><li>BCB to raise controversial umpiring issue in…",
          url: 'https://sports.ndtv.com/t20-world-cup-2022/amid-virat-kohli-fake-fielding-row-bcb-to-raise-controversial-umpiring-issue-report-3486588',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/o64cgd68_virat-kohli-and-shakib-al-hasan-afp_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T11:22:22Z',
          content:
            "The India vs Bangladesh Super 12 match at the ICC T20 World Cup 2022 triggered a huge controversy with Bangla Tigers' wicket-keeper batter Nurul Hasan accusing Virat Kohli of 'fake fielding'. Even Ba… [+1541 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Kerala Congress Launches Widespread Protests Against State Government',
          description:
            'The Opposition Congress party today launched State-wide agitations against the alleged anti-people policies and administrative failure of the Left government in Kerala.',
          url: 'https://www.ndtv.com/kerala-news/kerala-congress-launches-widespread-protests-against-state-government-3486845',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/5949s50k_kerala-congress-protest-twitter_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T11:10:34Z',
          content:
            'Hundreds of party activists took out protest-marches across Kerala.\r\nThiruvananthapuram: The Opposition Congress party today launched State-wide agitations against the alleged anti-people policies an… [+1912 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Thieves Steal An Entire School In South Africa's Cape Town, Brick By Brick",
          description:
            'The school has entirely disappeared after robbers stole every single brick from it.',
          url: 'https://www.ndtv.com/world-news/thieves-steal-an-entire-school-in-south-africas-cape-town-brick-by-brick-3486843',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/4p6k0gd_uitzig-secondary-school-_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T11:10:14Z',
          content:
            "The school had to be shut down because of gangsterism and vandalism.\r\nEveryone has probably seen or heard about theft incidents multiple times because they are so prevalent in today's world. However,… [+1738 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "After Losing Gujarat To BJP 6 Times In A Row, Here's Where Congress Stands",
          description:
            'The Congress, once a dominant political force in Gujarat, has lost the six previous Assembly elections in a row to the BJP since 1995 and hopes to regain past glory.',
          url: 'https://www.ndtv.com/india-news/after-losing-gujarat-to-bjp-six-times-in-a-row-heres-where-congress-stands-3486832',
          urlToImage:
            'https://c.ndtvimg.com/2022-05/d12jrc8k_congress-generic-pti_625x300_14_May_22.jpg',
          publishedAt: '2022-11-03T11:07:15Z',
          content:
            'Congress gave a tough fight to the BJP in 2017 winning 77 of the 182 seats. (Representational)\r\nAhmedabad: The Congress, once a dominant political force in Gujarat, has lost the six previous Assembly… [+2894 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'PM To Campaign In Gujarat On Sunday, 1st Visit After Poll Dates Announced',
          description:
            'Prime Minister Narendra Modi will head to Gujarat this Sunday, his first visit since the announcement of poll dates for his home state.',
          url: 'https://www.ndtv.com/india-news/pm-narendra-modi-to-campaign-in-gujarat-on-sunday-first-visit-after-poll-dates-are-announced-3486821',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/bqkv7i0g_pm-modi-pti-pic_650x400_31_October_22.jpg',
          publishedAt: '2022-11-03T11:04:16Z',
          content:
            'The Prime Minister will address rallies in Bhavnagar, Surendranagar, Valsad.\r\nPrime Minister Narendra Modi will head to Gujarat this Sunday, his first visit since the announcement of poll dates for h… [+697 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Train Travels 900 Km Across Bihar, UP With Corpse In Toilet: Police',
          description:
            'Police today said they discovered the dead body of a man that had travelled undetected for 900 kilometres (560 miles) across northern India locked inside a train toilet.',
          url: 'https://www.ndtv.com/india-news/train-travels-900-km-across-bihar-up-with-corpse-in-toilet-police-3486788',
          urlToImage:
            'https://c.ndtvimg.com/2018-12/386vglso_train-generic_625x300_27_December_18.jpg',
          publishedAt: '2022-11-03T10:59:45Z',
          content:
            'Missing posters of the man have been distributed around railway stations in Bihar. (Representational)\r\nNew Delhi: Police today said they discovered the dead body of a man that had travelled undetecte… [+1624 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'NDTV Sports Desk',
          title:
            "Watch: Iftikhar Ahmed's Mammoth 106 Meter Six In T20 WC Clash vs SA",
          description:
            'Batters Iftikhar Ahmed and Shadab Khan took Pakistan to a massive total against South Africa in their Super 12 Group 2 clash of the ongoing T20 World Cup',
          url: 'https://sports.ndtv.com/t20-world-cup-2022/iftikhar-ahmeds-mammoth-106-meter-six-in-t20-world-cup-clash-against-south-africa-watch-3486774',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/598e1hig_iftikhar-ahmed_625x300_03_November_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T10:55:37Z',
          content:
            'Batters Iftikhar Ahmed and Shadab Khan took Pakistan to a massive total against South Africa in their Super 12 Group 2 clash of the ongoing T20 World Cup, at the Sydney Cricket Ground on Thursday. Af… [+1422 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            '"Pull Up" Gujarat Government: Mallikarjun Kharge To PM On Bridge Tragedy',
          description:
            'Congress president Mallikarjun Kharge on Thursday urged Prime Minister Narendra Modi to pull up the Gujarat government to come clean on the "sloppy investigation process" in the recent Morbi bridge collapse tragedy in which 135 people were killed and',
          url: 'https://www.ndtv.com/india-news/pull-up-gujarat-government-mallikarjun-kharge-to-pm-on-bridge-tragedy-3486770',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/pfcmrkn_new-congress-president-mallikarjun-kharge_650x400_19_October_22.jpg',
          publishedAt: '2022-11-03T10:54:20Z',
          content:
            '"Is this negligence too an act of god?", Mallikarjun Kharge asked.\r\nCongress president Mallikarjun Kharge on Thursday urged Prime Minister Narendra Modi to pull up the Gujarat government to come clea… [+2722 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Press Trust of India',
          title:
            'Over 20K Schools Shut Down In India In 2020-21: Education Ministry',
          description:
            'The UDISE+ report on school education in India for 2021-22 also pointed out that only 44.85 per cent schools had computer facilities while nearly 34 per cent had internet connection.',
          url: 'https://www.ndtv.com/education/over-20k-schools-shut-down-in-india-during-2020-21-number-of-teachers-declined-1-95-per-cent-ministry-of-education',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/2/report-featured-image.jpg',
          publishedAt: '2022-11-03T10:53:40Z',
          content:
            'New Delhi:More than 20,000 schools shut down across the country during 2020-21 while the number of teachers also declined by 1.95 pc in comparison to the previous year, according to a new report by t… [+2185 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Press Trust of India',
          title:
            'Enrolment Rises In Primary-Higher Secondary School Edu Levels: Report',
          description:
            'The gross enrolment ratio across primary, upper primary and higher secondary school education levels in the country saw an increase in 2021-22 compared to 2020-21 despite a drop in admissions in pre-primary sections due to Covid-19.',
          url: 'https://www.ndtv.com/education/enrolment-rises-in-primary-higher-secondary-school-edu-levels-drop-in-pre-primary-due-covid-report',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/school-students-featured-image.jpg',
          publishedAt: '2022-11-03T10:52:43Z',
          content:
            'New Delhi:The gross enrolment ratio across primary, upper primary and higher secondary school education levels in the country saw an increase in 2021-22 compared to 2020-21 despite a drop in admissio… [+3265 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Adarsh Srivastava',
          title: 'Punjab NEET UG Counselling 2022: Round 1 Seat Allotment Out',
          description:
            'Punjab NEET UG Counselling 2022: BFUHS Faridkot has declared the Punjab NEET UG 2022 round 1 seat allotment result today, November 3.',
          url: 'https://www.ndtv.com/education/punjab-neet-ug-counselling-2022-round-1-seat-allotment-out-at-bfuhs-ac-in',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/Punjab-NEET-UG-2022.jpg',
          publishedAt: '2022-11-03T10:50:50Z',
          content:
            'New Delhi:Baba Farid University of Health Sciences (BFUHS), Faridkot, has declared the Punjab National Eligibility cum Entrance Test Undergraduate (NEET UG) 2022 round 1 seat allotment result today, … [+1799 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: 'Climate Change To Produce More Rainbows, Says Study',
          description:
            "The researchers said that places located as high altitude and less population density will benefit the most from the overall increase in 'rainbow days'.",
          url: 'https://www.ndtv.com/science/climate-change-to-produce-more-rainbows-says-study-3486759',
          urlToImage:
            'https://c.ndtvimg.com/2020-05/8rqvppjk_rainbowdelhi_625x300_31_May_20.jpg',
          publishedAt: '2022-11-03T10:49:49Z',
          content:
            'Researchers have revealed unusual consequences of climate change.\r\nClimate change will have an unusual consequences - the world will get to see more rainbows. In a study published in Global Environme… [+1721 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'What We Know About Clock-Maker Oreva That Caused Bridge Tragedy: 10 Facts - NDTV',
          description:
            "<ol><li>What We Know About Clock-Maker Oreva That Caused Bridge Tragedy: 10 Facts  NDTV\r\n</li><li>Why no CBI, ED action over Morbi bridge collapse incident? WB CM Mamata Banerjee asks  Deccan Herald\r\n</li><li>Gujarat Tragedy: Cops Visit Bridge Contractor's Of…",
          url: 'https://www.ndtv.com/india-news/what-we-know-about-clock-maker-oreva-accused-of-gujarat-bridge-tragedy-10-facts-3486332',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/to6vrf58_gujarat-bridge-collapse-afp-pic_650x400_31_October_22.jpg',
          publishedAt: '2022-11-03T10:45:00Z',
          content:
            '<li>Gujarat-based Oreva, known for making clocks, watches, fans, e-bikes and LED lights, was given a 15-year contract by the Morbi civic body to operate and maintain the bridge. Investigations have f… [+1978 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'NDTV Sports Desk',
          title:
            "Explained: What Does 'Fake Fielding' Mean According To ICC Law",
          description:
            'Bangladesh vice-captain Nurul Hasan alleged that on-field umpires had missed a "fake throw" by Virat Kohli that could have tied the match',
          url: 'https://sports.ndtv.com/t20-world-cup-2022/explained-what-does-fake-fielding-mean-according-to-icc-law-3486723',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/5kl59er_virat-kohli-fake-fielding_625x300_03_November_22.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T10:42:34Z',
          content:
            "After India's five-run win over Bangladesh via DLS method in a 2022 T20 World Cup Super 12 game on Thursday, a controversy broke out after vice-captain Nurul Hasan alleged that on-field umpires had m… [+1841 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Agence France-Presse',
          title: "Harry Kane Eyes Becoming England's Greatest Goalscorer",
          description:
            "History beckons for Harry Kane in Qatar with the England captain just two goals away from matching Wayne Rooney's record of 53 for the Three Lions",
          url: 'https://sports.ndtv.com/fifa-world-cup-2022/harry-kane-eyes-becoming-englands-greatest-goalscorer-and-ending-trophy-drought-in-qatar-3486718',
          urlToImage:
            'https://c.ndtvimg.com/2022-09/qp2rm4_harry-kane_625x300_27_September_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T10:41:40Z',
          content:
            "History beckons for Harry Kane in Qatar with the England captain just two goals away from matching Wayne Rooney's record of 53 for the Three Lions. But unless Kane lifts the World Cup aloft at the Lu… [+3044 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'NDTV Sports Desk',
          title:
            'T20 World Cup, Pakistan vs South Africa, Live Score: Rain Stops Play; South Africa 69/4 In 9 Overs v.. - NDTV Sports',
          description:
            "<ol><li>T20 World Cup, Pakistan vs South Africa, Live Score: Rain Stops Play; South Africa 69/4 In 9 Overs v..  NDTV Sports\r\n</li><li>Match Preview - Pakistan vs South Africa, ICC Men's T20 World Cup 2022/23, 36th Match, Group 2  ESPNcricinfo\r\n</li><li>Pakist…",
          url: 'https://sports.ndtv.com/t20-world-cup-2022/t20-world-cup-2022-pakistan-vs-south-africa-live-score-updates-3485763',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/4843sb8o_shaheen-afridi-afp_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T10:41:15Z',
          content:
            'T20 World Cup, PAK vs SA, Live Updates: The Group 2 match between Pakistan and South Africa has been interrupted due to rain, with the Proteas trailing 16 runs as per DLS par score. Chasing a target … [+1491 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Ukraine Conflict Widened The Scope Of Political Leveraging: S Jaishankar',
          description:
            'External Affairs minister S Jaishankar feels that the Ukraine conflict has dramatically widened the scope of political leveraging as trade, debt and tourism are being weaponised and used as pressure points.',
          url: 'https://www.ndtv.com/india-news/ukraine-conflict-widened-the-scope-of-political-leveraging-s-jaishankar-3486695',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/nlhm0gqo_s-jaishankar-ani_625x300_19_October_22.jpg',
          publishedAt: '2022-11-03T10:37:02Z',
          content:
            'India has maintained a neutral stand on the Russia-Ukraine war.\r\nKolkata: External Affairs minister S Jaishankar feels that the Ukraine conflict has dramatically widened the scope of political levera… [+3690 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Photos Of Rehmat Gashkori, Pakistani Doppelganger Of Rajinikanth, Go Viral',
          description:
            'Mr Gashkori realised he resembled the popular Indian film star when his colleagues started saying he looked like Rajinikanth.',
          url: 'https://www.ndtv.com/offbeat/pakistani-rajinikanth-thailavars-doppelganger-makes-splash-on-the-internet-with-viral-pics-3486688',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/q6rcf3mg_this-pakistani-man-resembles-rajinikanth_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T10:34:32Z',
          content:
            'Rehmat Gashkori, a retired government employee from Pakistan, remarkably resembles Thalaivar.\r\nCelebrity lookalikes are our favourite thing on the internet. Spotting someone who looks like our favour… [+2599 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Agence France-Presse',
          title:
            'Gareth Bale Shrugs Off Fitness Fears Ahead Of Wales World Cup Return | Football News',
          description:
            'Inactivity in club football has rarely prevented Gareth Bale from flourishing at international level and Wales fans will desperately be hoping that remains true at the World Cup',
          url: 'https://sports.ndtv.com/fifa-world-cup-2022/gareth-bale-shrugs-off-fitness-fears-ahead-of-wales-world-cup-return-3486677',
          urlToImage:
            'https://c.ndtvimg.com/2022-06/6n4hsgdo_gareth-bale-afp_625x300_01_June_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T10:33:15Z',
          content:
            'Inactivity in club football has rarely prevented Gareth Bale from flourishing at international level and Wales fans will desperately be hoping that remains true at the World Cup. The 33-year-old Wels… [+3877 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Weekend Special: 5 Delicious Custard Apple Desserts You Must Try',
          description:
            "Planning a small get-together with family or simply when you want to treat your sweet tooth with something extravagant, these recipes are fit for all. So, what are we waiting for? Let's get started. Take a look below.",
          url: 'https://food.ndtv.com/food-drinks/weekend-special-5-delicious-custard-apple-desserts-you-must-tr-3486587',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/6eiadufg_custard-apple_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T10:08:43Z',
          content:
            "The weekend is about to come, and it's the time to let your hair down, relax, and binge on some delicious food. Some people prefer to dine out, while others prefer to create magic in the comfort of t… [+2107 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Sensex Falls A Modest 70 Points, Despite A Deep Sell-Off In Global Stocks',
          description:
            'Stock Market India: Equity benchmarks fell on Thursday to extend losses from the previous session.',
          url: 'https://www.ndtv.com/business/stock-market-india-sensex-falls-a-modest-70-points-despite-a-deep-sell-off-in-global-stocks-3486436',
          urlToImage:
            'https://c.ndtvimg.com/2022-04/csmcsih8_bse-sensex_625x300_19_April_22.jpg',
          publishedAt: '2022-11-03T10:05:04Z',
          content:
            "Stock Market India: Sensex, Nifty extend losses for second straight session\r\nIndian equity benchmarks fell on Thursday to extend losses from the previous session after the US Federal Reserve's hawkis… [+1815 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Mridusmita Deka',
          title:
            'Last Date To Apply For CEED, UCEED 2023 Without Late Fee Tomorrow',
          description:
            'CEED, UCEED 2023: Tomorrow is the last date to register online for the design entrance tests -- CEED, UCEED.',
          url: 'https://www.ndtv.com/education/last-date-apply-for-ceed-uceed-2023-without-late-fee-tomorrow',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/uceed-ceed-application-2023-featured-image.jpg',
          publishedAt: '2022-11-03T10:02:08Z',
          content:
            'New Delhi:The last date to apply online for Common Entrance Exam for Design (CEED 2023) and Undergraduate Common Entrance Exam for Design (UCEED 2023) is tomorrow, November 4. CEED and UCEED are elig… [+1835 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Arpita Das',
          title:
            'IIT Roorkee Inaugurates 9th International Groundwater Conference 2022',
          description:
            'IIT Roorkee holds its 9th International Groundwater Conference 2022 from November 2 to November 4. The event was graced by Professor K K Pant, Director, IIT Roorkee and Professor SM Hassanizadeh, Hydrogeology Department, Utrecht University.',
          url: 'https://www.ndtv.com/education/iit-roorkee-inaugurates-9th-international-groundwater-conference-2022-on-subsurface-water-management',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/iit-roorkee-featured-image.jpg',
          publishedAt: '2022-11-03T10:00:54Z',
          content:
            'New Delhi:The Indian Institute of Technology (IIT) Roorkee inaugurates the 9th International Groundwater Conference-2022 (IGWC-2022). The mega event is being hosted by IIT Roorkee from November 2 to … [+3900 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Inside Pics From Esha Deol's Birthday Party With Rakul Preet And Others",
          description: 'Esha Deol shared pictures from her birthday album',
          url: 'https://www.ndtv.com/entertainment/pics-from-esha-deol-s-birthday-celebrations-are-all-about-love-3486435',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/2od073io_-esha-deol-_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:57:07Z',
          content:
            'Esha Deol with friends. (courtesy: iameshadeol)\r\nNew Delhi: Esha Deol celebrated her 41st birthday on Wednesday with her family and friends by her side. She lit up our Instagram feed with pictures fr… [+2110 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Long Hours, Racial Bias: Jeff Bezos Sued By Former Housekeeper',
          description:
            'Mercedes Wedaa, stated that she sometimes worked 10 to 14 hours a day, without rest or meal breaks.',
          url: 'https://www.ndtv.com/world-news/jeff-bezos-sued-by-former-housekeeper-over-racial-bias-horrible-working-conditions-3486533',
          urlToImage:
            'https://c.ndtvimg.com/2022-07/ri0hq7i_jeff-bezos_650x400_04_July_22.jpg',
          publishedAt: '2022-11-03T09:53:43Z',
          content:
            'The ex-housekeeper alleged that she was not allowed to take legally required breaks.\r\nTrouble has mounted for Amazon co-founder Jeff Bezos as he has been slapped with a lawsuit by a former housekeepe… [+1886 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Skincare Tips: 9 Ayurveda-Backed Herbs That Can Help Boost Your Skin Health',
          description:
            'Skincare tips: In this article, we discuss the best herbs to add to your routine and diet for better skin health as suggested by Ayurveda.',
          url: 'https://www.ndtv.com/health/skincare-9-ayurveda-backed-herbs-that-boost-skin-health-3470115',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/sbovhk9_tulsi-leaves-for-skin_625x300_04_October_22.jpg',
          publishedAt: '2022-11-03T09:53:17Z',
          content:
            'Skincare: Tulsi can aid in the fight against wrinkles and other outward indications of ageing\r\nThe ancient Indian medical system known as Ayurveda contains extensive knowledge on herbs that promote h… [+4430 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Press Trust of India',
          title:
            "Kohli, Rodrigues, Deepti Sharma Nominated For ICC 'Player Of The Month'",
          description:
            "Batting maestro Virat Kohli, along with the Asia Cup winning duo of Jemimah Rodrigues and Deepti Sharma, were on Thursday nominated for the ICC 'Player of the Month' award in the men's and women categories, respectively",
          url: 'https://sports.ndtv.com/cricket/virat-kohli-jemimah-rodrigues-deepti-sharma-nominated-for-icc-player-of-the-month-3486502',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/pmfjtnu_virat-kohli-afp_625x300_03_November_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T09:43:06Z',
          content:
            "Batting maestro Virat Kohli, along with the Asia Cup winning duo of Jemimah Rodrigues and Deepti Sharma, were on Thursday nominated for the ICC 'Player of the Month' award in the men's and women cate… [+2079 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Rupee Falls 23 Paise To 82.92 Per Dollar As Fed Signals More Hikes',
          description:
            'The rupee weakened against a strong dollar, which rose to the highest in a week.',
          url: 'https://www.ndtv.com/business/rupee-today-rupee-falls-20-paise-to-82-90-against-a-strong-dollar-as-fed-signals-more-hikes-3486465',
          urlToImage:
            'https://c.ndtvimg.com/2022-08/muvr4tq_rupee-generic-reuters_625x300_05_August_22.jpg',
          publishedAt: '2022-11-03T09:38:29Z',
          content:
            'Rupee weakens against a robust dollar\r\nThe rupee weakened against a strong dollar, which rose to the highest in a week as the US Federal Reserve signalled interest rates would likely peak above what … [+1366 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "When Little Sunny Deol, Sister Lali Visited The Sets Of Dharmendra's Film",
          description: '"Fearless sister and brother," wrote Sunny Deol',
          url: 'https://www.ndtv.com/entertainment/when-little-sunny-deol-and-sister-lali-visited-the-sets-of-dharmendras-film-3486258',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/c4jtfpbg_sunny-deol_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:37:42Z',
          content:
            'Sunny Deol shared this image. (courtesy: iamsunnydeol)\r\nNew Delhi: It had been quite a while since Sunny Deol shared priceless pictures from his family album. So, making the best use of Throwback Thu… [+2370 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'As 2022 Gujarat Election Nears, Here Are The Top 10 Issues In The State',
          description:
            "From Prime Minister Narendra Modi's enduring sway to dissatisfaction over inflation and unemployment, here are the top 10 factors expected to play a role in elections to the 182-member Gujarat assembly:",
          url: 'https://www.ndtv.com/india-news/as-2022-gujarat-elections-near-here-are-the-top-10-issues-in-the-state-3486223',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/mc95vn1_narendra-modi-roadshow_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:35:40Z',
          content:
            '<li>Narendra Modi: BJP has a trump card in the form of the Prime Minister, who was Chief Minister of Gujarat from 2001 to 2014. It has been eight years since he left the chair but his sway over follo… [+3153 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Judge Hearing Salman Khan Defamation Case Retires, Case To Be Heard Afresh',
          description:
            'A judge of the Bombay High Court on Thursday said it would not be possible to pronounce order on an appeal filed by actor Salman Khan in a defamation case against his neighbour due to the paucity of time.',
          url: 'https://www.ndtv.com/india-news/judge-hearing-salman-khan-defamation-case-retires-case-to-be-heard-afresh-3486473',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/itli3bf8_salman-khan-large_625x300_01_November_22.jpg',
          publishedAt: '2022-11-03T09:33:46Z',
          content:
            "Salman Khan's appeal would now be placed before another judge and heard afresh. (File)\r\nA judge of the Bombay High Court on Thursday said it would not be possible to pronounce order on an appeal file… [+2000 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            '"Sea Of Love As I See It": SRK Shares Birthday Video From Mannat',
          description:
            'Shah Rukh Khan shared a video from his birthday festivities at Mannat',
          url: 'https://www.ndtv.com/entertainment/shah-rukh-khan-shares-video-from-birthday-celebrations-at-mannat-sea-of-love-as-i-see-it-3486461',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/86k99co8_mannat_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:31:44Z',
          content:
            'SRK in a still from the video. (courtesy: iamsrk)\r\nNew Delhi: Shah Rukh Khan, overwhelmed with all the love he received on his 57th birthday on Wednesday, thanked his fans once again. The actor docum… [+1753 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Adarsh Srivastava',
          title:
            'IIM Ahmedabad Redesigns Website, Logo As A Key Initiative For Future',
          description:
            'Indian Institute of Management Ahmedabad (IIMA) has announced two major initiatives in line with its future growth plans.',
          url: 'https://www.ndtv.com/education/iim-ahmedabad-redesigns-website-logo-key-initiative-in-future-growth-plans',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/IIMA-Ahmedabad.jpg',
          publishedAt: '2022-11-03T09:31:03Z',
          content:
            'New Delhi:Indian Institute of Management Ahmedabad (IIMA) has announced two major initiatives in line with its future growth plans. The Institute will launch a redesigned website with a refreshed log… [+2032 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'A 23-Tonne Chunk Of Dead Space Rocket Set To Crash Back To Earth',
          description:
            'An official of the company that tracks orbital reentries said that "88% of the world\'s population is at risk".',
          url: 'https://www.ndtv.com/world-news/a-23-tonne-chunk-of-dead-space-rocket-set-to-crash-back-to-earth-report-3486452',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/62l0jifg_tiangong-space-station-launch-afp_625x300_31_October_22.jpg',
          publishedAt: '2022-11-03T09:29:13Z',
          content:
            'The module was launched by the Long March 5B rocket on Monday. (AFP Photo)\r\nChina is building its space station and the debris from the rockets that are taking its part to space is set to fall on the… [+1886 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            '"Arrest Me If You Can": Jharkhand Chief Minister On Central Agency Summons',
          description:
            '"Part of a plot to harass a tribal chief minister", says the Jharkhand Chief Minister',
          url: 'https://www.ndtv.com/india-news/hemant-soren-jharkhand-mining-case-arrest-me-if-you-can-jharkhand-chief-minister-after-summons-3486451',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/ci0oip1_hemant-soren_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:28:07Z',
          content:
            "Ranchi: If I am guilty, why are you questioning me? Just come and arrest me if you can, said Jharkhand Chief Minister Hemant Soren today, calling central probe agency ED's summons to him part of a pl… [+2887 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: '6 Non-Dairy Milk Options Vegans Can Add To Their Diet',
          description:
            'Vegan diet: In this article, we compare different kinds of milk and understand which one might be the best for you.',
          url: 'https://www.ndtv.com/health/vegan-diet-try-these-non-dairy-milk-options-and-nutritional-value-3484370',
          urlToImage:
            'https://c.ndtvimg.com/2022-07/743p3qqg_right-time-to-drink-milk-in-constipation_625x300_29_July_22.jpg',
          publishedAt: '2022-11-03T09:25:30Z',
          content:
            'Vegan diet: Oat milk contains more protein than almond milk\r\nVarious people opt for non-dairy milk for various reasons. The main reasons for opting for vegan milk would be if someone is lactose intol… [+5404 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'HDFC Ltd Profit Jumps 24% To Rs 7,043 Crore In September Quarter',
          description:
            'Mortgage lender HDFC Ltd on Thursday said its consolidated net profit increased by 24 per cent to Rs 7,043 crore in the September 2022 quarter.',
          url: 'https://www.ndtv.com/business/hdfc-ltd-q2-profit-rises-24-pc-to-rs-7-043-crore-3486429',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/agkcmnt8_image_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:20:17Z',
          content:
            'HDFC Ltd Q2 profit rises 24% to Rs 7,043 crore\r\nNew Delhi: Mortgage lender HDFC Ltd on Thursday said its consolidated net profit increased by 24 per cent to Rs 7,043 crore in the September 2022 quart… [+778 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "'Everything I Love': Vaani Kapoor Gorged On Delicious Pani Puri",
          description:
            'Actress Vaani Kapoor recently gorged on some flavourful and delicious Pani Puri. Take a look at what she shared!',
          url: 'https://food.ndtv.com/news/everything-i-love-vaani-kapoor-gorged-on-delicious-pani-puri-3486438',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/j1463mh8_vaani-kapoor_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:19:57Z',
          content:
            "Vaani Kapoor has slowly made a mark for herself in the Bollywood industry. Whether it was the action-packed 'Bell Bottom' with Akshay Kumar or romantic films like 'Befikre', the actress has donned al… [+1758 chars]",
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
            '<ol><li>"Feedback Appreciated, Now Pay $8": Elon Musk vs US Politician  NDTV\r\n</li><li>$8 For Blue Tick: Will The Subscription Model Under Elon Musk Save Twitter?  India Today\r\n</li><li>Elon Musk announces monthly fee for Twitter blue tick - BBC News  BBC New…',
          url: 'https://www.ndtv.com/world-news/elon-musk-hits-back-after-us-politician-slams-twitter-verification-fee-3485558',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/cag8i3dg_us-politician_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T09:03:00Z',
          content:
            'Elon Musk has caused a stir with his initial moves.\r\nNew Delhi: After taking over Twitter, Elon Musk has caused a stir with his initial moves. He also announced that verified Twitter users will be so… [+2493 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Foreign Currency Worth Crores Seized From 3 Indians At Mumbai Airport',
          description:
            'Three members of a family were arrested and foreign currency worth 4,97,000 USD (Rs 4.1 crore) was seized from them, said officials.',
          url: 'https://www.ndtv.com/mumbai-news/foreign-currency-worth-crores-seized-from-3-indians-at-mumbai-airport-3486271',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/tiojeod_mumbai-customs_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T08:33:45Z',
          content:
            'The arrested accused were sent to judicial custody.\r\nMumbai: Three members of a family were arrested and foreign currency worth 4,97,000 USD (Rs 4.1 crore) was seized from them, said officials.\r\nAcco… [+1188 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Waterlogging, Homes Inundated In Chennai Outskirts As Heavy Rains Continue',
          description:
            'Parts of north Chennai remain inundated for the second day as the city received six times the average rainfall on Wednesday. Most areas in the city are likely to witness heavy to very heavy downpour in the coming days.',
          url: 'https://www.ndtv.com/chennai-news/waterlogging-homes-inundated-in-chennai-outskirts-as-heavy-rains-continue-3486270',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/h3n7oapg_bhagvati-chennai-waterlogging_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T08:33:15Z',
          content:
            'Chennai resident Bagavathi Vijaya stands in ankle-deep water inside her house.\r\nChennai: Parts of north Chennai remain inundated for the second day as the city received six times the average rainfall… [+2899 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Mridusmita Deka',
          title:
            'IIMC Counselling 2022 Round-2 Seat Allocation Result Out; Direct Link',
          description:
            'IIMC Round-2 Counselling Result: Candidates will be required to insert the CUET PG roll number and password to access the IIMC counselling round-2 seat allocation result.',
          url: 'https://www.ndtv.com/education/iimc-counselling-2022-round-2-seat-allocation-result-out-pg-admission-direct-link-here',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/results-featured-image.jpg',
          publishedAt: '2022-11-03T08:24:22Z',
          content:
            'New Delhi:The Indian Institute of Mass Communication (IIMC) has declared the round-2 seat allocation result. The seat allotment result 2022 has been announced for admission to postgraduate (PG) progr… [+1601 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: '5 Delicious Punjabi Recipes To Spruce Up Your Lunch Spread',
          description:
            'Here we bring you a list of classic Punjabi dishes that would be a great addition to your lunch spread. Take a look.',
          url: 'https://food.ndtv.com/food-drinks/5-delicious-punjabi-recipes-to-spruce-up-your-lunch-spread-3486234',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/5e3a1r8o_saag_625x300_03_November_22.png?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T08:20:49Z',
          content:
            'Punjab is known for its rich cultural heritage, lush-green wheat fields, beautiful rivers and most importantly, its food. Punjabi cuisine offers an extensive range of both vegetarian and non-vegetari… [+2018 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Love Again First Look: Priyanka's Dreamy Date With Sam Heughan",
          description:
            'Priyanka Chopra shared an update on her film on Instagram',
          url: 'https://www.ndtv.com/entertainment/love-again-first-look-priyanka-chopras-dreamy-date-with-sam-heughans-3486215',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/ls4e8tqg_priyanka-chopra_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T08:13:33Z',
          content:
            'Priyanka Chopra with Sam Heughan. (courtesy: priyankachopra)\r\nNew Delhi: Priyanka Chopra shared the first look of her next Hollywood project Love Again, a musical, in which she will co-star with Sam … [+1421 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Agence France-Presse',
          title:
            'Aaron Finch Admits He Could Miss Crunch T20 WC Clash Against Afghanistan',
          description:
            'The defending champions will probably have to beat Afghanistan on Friday by a big margin in Adelaide to have any chance of making the semi-finals as one of the two top teams in Group 1.',
          url: 'https://sports.ndtv.com/t20-world-cup-2022/thats-the-worst-possible-scenario-aaron-finch-admits-he-could-miss-crunch-t20-wc-clash-against-afghanistan-3486192',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/t3tl20p8_aaron-finch_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T08:08:04Z',
          content:
            "Australia captain Aaron Finch said Thursday he could pull out of his team's pivotal final Super 12 match at the Twenty20 World Cup against Afghanistan because of a hamstring injury. Finch hit form on… [+2478 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            '"100% Impartial": On Gujarat Poll Delay Charge, Election Body\'s Response',
          description:
            'Announcing the Gujarat election on December 1 and 5, the Election Commission today denied any "bias" or any deliberate delay.',
          url: 'https://www.ndtv.com/india-news/gujarat-election-election-commission-of-india-100-impartial-poll-panels-reply-to-gujarat-election-delay-charge-3486186',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/v2cp3kig_election-commission_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T08:05:42Z',
          content:
            'The Gujarat elections will be held in two phases - on December 1 and 5. (Representational)\r\nNew Delhi: Announcing the Gujarat election on December 1 and 5, the Election Commission today denied any "b… [+2075 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Patient, Bloodied, Lies On Floor, Dog Walks Around In UP Hospital Shocker - NDTV',
          description:
            "A video from a government hospital in Uttar Pradesh's Kushinagar shows a man covered in blood and lying on the floor of an emergency ward.",
          url: 'https://www.ndtv.com/india-news/patient-bloodied-lies-on-floor-dog-walks-around-in-up-hospital-shocker-3486139',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/n9c2him8_up-hospital-_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T07:58:47Z',
          content:
            "The man was later referred to a hospital in Gorakhpur.\r\nKushinagar, Uttar Pradesh: A video from a government hospital in Uttar Pradesh's Kushinagar shows a man covered in blood and lying on the floor… [+942 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: "Adani Wilmar's Profit Plunges 73% In September Quarter",
          description:
            'Adani Wilmar reported a 73 per cent slump in second quarter profit on Thursday, as the Fortune cooking oil maker reeled under input cost inflation.',
          url: 'https://www.ndtv.com/business/indias-adani-wilmar-second-quarter-profit-plunges-73-3486100',
          urlToImage:
            'https://i.ndtvimg.com/i/2016-05/adani-wilmar-625-300_625x300_81464184333.jpg',
          publishedAt: '2022-11-03T07:57:18Z',
          content:
            'Adani Wilmar second quarter profit slumps 73%\r\nBENGALURU: Adani Wilmar reported a 73 per cent slump in second quarter profit on Thursday, as the Fortune cooking oil maker reeled under input cost infl… [+273 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Agence France-Presse',
          title:
            'Kane Williamson Wants To Hit Top Gear With T20 World Cup Semis In Sight',
          description:
            'Kane Williamson has struggled to convert starts into bigger scores or to accelerate, with his strike rate at a modest 122.51 runs per 100 balls',
          url: 'https://sports.ndtv.com/t20-world-cup-2022/kane-williamson-wants-to-hit-top-gear-with-t20-world-cup-semi-final-in-sight-3486168',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/tuttt6e_kane-williamson-afp_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T07:55:07Z',
          content:
            'New Zealand captain Kane Williamson said Thursday he was staying patient and working to hit top gear as the Black Caps look to clinch a Twenty20 World Cup semi-final berth against Ireland. New Zealan… [+2745 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Press Trust of India',
          title:
            'Kerala Government To Impart Soccer Training To One Lakh Students',
          description:
            'The Kerala government will give basic football training to one lakh students between 10 to 12 years across the state.',
          url: 'https://www.ndtv.com/education/ker-govt-impart-soccer-training-one-lakh-students',
          urlToImage:
            'https://cache.careers360.mobi/media/article_images/2022/11/3/featured-image-Kerala-CM-Pinarayi-Vijayan.jpg',
          publishedAt: '2022-11-03T07:54:47Z',
          content:
            'Thiruvananthapuram:As the much-awaited soccer World Cup is just weeks away, the Kerala government is planning to give basic football training to one lakh students across the state. The special progra… [+1214 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Pranita Chaubey',
          title:
            'Shah Rukh Khan Reveals He Called "Bigger Stars" Salman Khan, Hrithik Roshan, Tiger Shroff For Fitness Advice',
          description:
            'Shah Rukh Khan Reveals He Called "Bigger Stars" Salman Khan, Hrithik Roshan, Tiger Shroff For Fitness Advicendtv.com',
          url: 'https://www.ndtv.com/entertainment/shah-rukh-khan-reveals-he-called-bigger-stars-salman-khan-hrithik-roshan-tiger-shroff-for-fitness-advice-3486050',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/p0fibpfg_srk-_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T07:53:54Z',
          content:
            'SRK shared this image.(courtesy: iamsrk)\r\nNew Delhi: Shah Rukh Khan, on his 57th birthday (on Wednesday), attended a fan event in Mumbai, where he talked about his forthcoming film Pathaan and how he… [+1375 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Stephen King's 'Tom Sawyer' Dig At Elon Musk Over Twitter Blue Tick Fee",
          description:
            'Days after his Twitter exchange with Elon Musk over the fee for a verified badge, bestselling author Stephen King took a swipe at the Tesla CEO, likening him to fictional character Tom Sawyer.',
          url: 'https://www.ndtv.com/world-news/stephen-king-elon-musk-twitter-blue-tick-stephen-kings-tom-sawyer-dig-at-elon-musk-over-twitters-blue-tick-fee-3486154',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/qjaccnb8_stephen-king_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T07:52:24Z',
          content:
            'Stephen King has taken a swipe at new Twitter boss Elon Musk\r\nNew Delhi: Days after his Twitter exchange with Elon Musk over the fee for a verified badge, bestselling author Stephen King took a swipe… [+2942 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Teenagers In US Allegedly Beat Spanish Teacher To Death Over Bad Grades',
          description:
            'When questioned by the police, one of the teenagers said he was frustrated with the way Nohema Graber taught Spanish.',
          url: 'https://www.ndtv.com/world-news/teenagers-in-us-allegedly-beat-spanish-teacher-to-death-over-bad-grades-3486134',
          urlToImage:
            'https://c.ndtvimg.com/2019-06/hf08g2no_murder-generic_625x300_27_June_19.jpg',
          publishedAt: '2022-11-03T07:49:04Z',
          content:
            "Nohema Graber's body was found in a park in November last year. (Representational Image)\r\nTwo teenagers in Iowa, in the United States, killed their Spanish teacher over bad grades, prosecutors said d… [+1767 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            '6 Grain Ships Leave Ukraine Ports After Russia Rejoins Deal: Turkey',
          description:
            "Six grain ships left Ukraine's ports on Thursday, a day after Russia rejoined a deal to allow exports through the Black Sea, Turkey's defence minister said.",
          url: 'https://www.ndtv.com/world-news/6-grain-ships-leave-ukraine-ports-after-russia-rejoins-deal-turkey-3486133',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/fgkugmm8_russia-grain-reuters_625x300_31_October_22.jpg',
          publishedAt: '2022-11-03T07:48:24Z',
          content:
            "Russia rejoined a deal to allow exports through the Black Sea on Wednesday. (File)\r\nSix grain ships left Ukraine's ports on Thursday, a day after Russia rejoined a deal to allow exports through the B… [+962 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Inside Kareena's Lunch Date With Karisma And Family In London. See Pic",
          description:
            'Kareena Kapoor is currently shooting for her film with Hansal Mehta',
          url: 'https://www.ndtv.com/entertainment/inside-kareena-kapoor-s-lunch-date-with-sister-karisma-and-family-3485954',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/t6j23q4_kareena_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T07:46:16Z',
          content:
            'Kareena Kapoor shared this image. (courtesy: kareenakapoorkhan)\r\nNew Delhi: Kareena Kapoor is busy shooting for her next film in London. But she also manages to scoop out some time from her schedule … [+1918 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Video: Gujarat Poll Dates Out, Arvind Kejriwal And Party's Numbers Claim",
          description:
            'AAP takes aim at BJP\'s "huge corruption that came to the fore in Morbi", where a bridge collapse on October 30 killed more than 130 people',
          url: 'https://www.ndtv.com/india-news/gujarat-assembly-election-dates-out-arvind-kejriwal-aap-say-people-will-vote-against-corruption-evident-in-morbi-3486127',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/h8h4rf58_arvind-kejriwal-in-gujarat-ani-pic_650x400_03_November_22.jpg',
          publishedAt: '2022-11-03T07:45:49Z',
          content:
            'New Delhi: Minutes after the Election Commission announced the poll schedule for Gujarat voting on December 1 and , result on the 8th AAP chief Arvind Kejriwal was quick to declare that his party wou… [+2268 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Press Trust of India',
          title: 'Indian Olympic Association Polls To Be Held On December 10',
          description:
            'A bench of Justices DY Chandrachud and Hima Kohli also allowed circulation of the draft amended constitution among members of the IOA as per rules, so that it could be adopted in the general body meeting scheduled to be held on November 10.',
          url: 'https://sports.ndtv.com/othersports/indian-olympic-association-polls-to-be-held-on-december-10-3485999',
          urlToImage:
            'https://c.ndtvimg.com/2022-08/8loi7smg_indian-olympic-association-twitter_625x300_16_August_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T07:11:43Z',
          content:
            'The Supreme Court on Thursday approved a fresh timeline submitted by the Justice (retd) LN Rao committee for holding of elections of the executive committee of the Indian Olympic Association (IOA), a… [+1320 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Watch: Rahul Gandhi Teaches Karate-Loving Boy The Right Way To Punch',
          description:
            'The 23-second video shows Mr Gandhi patiently correcting and teaching a kid the right karate technique.',
          url: 'https://www.ndtv.com/india-news/in-heartwarming-video-rahul-gandhi-teaches-karate-loving-boy-the-right-way-to-punch-3485983',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/829lur5_the-23second-video-has-been-uploaded-on-twitter_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T07:07:13Z',
          content:
            "The video was shared by Congress on Twitter.\r\nMr Rahul Gandhi's heartwarming interactions with the public during Bharat Jodo Yatra continues to make headlines and garner attention. In a recent video … [+1873 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Video Of Lion Walking With Its Cubs Is The Cutest Thing On Internet Today',
          description: 'The video has amassed over 2 million views on Twitter.',
          url: 'https://www.ndtv.com/offbeat/viral-video-of-lion-walking-with-its-cubs-is-the-cutest-thing-on-internet-today-3485982',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/96942ig_the-internet-loved-the-adorable-family-moment_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T07:07:13Z',
          content:
            "The Internet loved the adorable family moment\r\nHaving a dull day at work? We've something which will cheer you up. A video of a majestic lion walking with its cute little cubs in a forest has gone vi… [+1709 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Gujarat Tragedy: Cops Visit Bridge Contractor's Office. This Happens Next - NDTV",
          description:
            "<ol><li>Gujarat Tragedy: Cops Visit Bridge Contractor's Office. This Happens Next  NDTV\r\n</li><li>Oreva made temporary repairs in 2020, kept rickety Morbi bridge open till 2022  Times of India\r\n</li><li>No Repair, Only Painting Of Morbi Bridge | When Will 'Re…",
          url: 'https://www.ndtv.com/india-news/gujarat-morbi-bridge-collapse-police-visit-office-of-oreva-company-that-repaired-morbi-bridge-owners-still-missing-3485835',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/6c6atf4g_morbi-bridge-_625x300_02_November_22.jpg',
          publishedAt: '2022-11-03T07:06:53Z',
          content:
            "150-year-old cables of the suspension bridge in Morbi weren't replaced as part of renovation, say police.\r\nMorbi (Gujarat): Some police personnel this morning went to the office of Oreva Group, contr… [+1826 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "RBI's Panel Meets To Finalise Inflation Report For Government",
          description:
            "The RBI's panel met to finalise a report for the government on why it failed to keep retail inflation below the target of 6 per cent.",
          url: 'https://www.ndtv.com/business/rbis-rate-setting-panel-meets-to-finalise-inflation-report-for-govt-3485866',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/hgofmbno_reserve-bank-of-india_625x300_02_November_22.jpeg',
          publishedAt: '2022-11-03T07:03:02Z',
          content:
            "RBI's rate-setting panel meets to finalise inflation report for government\r\nMumbai: The Reserve Bank's rate setting panel on Thursday met to finalise a report for the government on why it failed to k… [+2779 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: 'Indian Banks Look For Bulk Deposits On Strong Credit Growth',
          description:
            'Indian banks may rely more on raising funds through certificates of deposits for the rest of the year, as credit demand remains strong.',
          url: 'https://www.ndtv.com/business/indian-banks-look-for-bulk-deposits-on-strong-credit-growth-amid-tight-liquidity-3485915',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/ovqe7uf_reuters-image_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T07:00:01Z',
          content:
            'MUMBAI: Indian banks may rely more on raising funds through certificates of deposits for the rest of the year, as credit demand remains strong and inflows from retail deposits lag, leading to tighter… [+2235 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'NDTV Sports Desk',
          title:
            '"When We Search For Excuses, We Don\'t Grow": Bhogle To Bangladesh Fans',
          description:
            "As the 'fake fielding' allegations against Virat Kohli spiral up on social media, Harsha Bhogle has advised Bangladesh fans to not 'search for excuses' behind their team's defeat.",
          url: 'https://sports.ndtv.com/t20-world-cup-2022/when-we-search-for-excuses-we-dont-grow-harsha-bhogle-to-bangladesh-fans-over-fake-fielding-controversy-3485947',
          urlToImage:
            'https://c.ndtvimg.com/2019-12/lok9ji78_harsha-bhogle-facebook_625x300_25_December_19.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T06:57:40Z',
          content:
            "It isn't uncommon for India vs Bangladesh cricket matches to spiral up controversies. After the two sides square off in the T20 World Cup 2022 Group 2 match on Wednesday, Bangladesh wicket-keeper bat… [+2746 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Gujarat Votes On December 1, 5; Result On 8th Along With Himachal's",
          description:
            'The high-voltage Assembly election in Gujarat will be held in two phases, on December 1 and December 5, the Election Commission announced today.',
          url: 'https://www.ndtv.com/india-news/gujarat-assembly-election-2022-gujarat-votes-on-december-1-5-result-on-december-8-3485938',
          urlToImage:
            'https://c.ndtvimg.com/2022-02/jtvegvdo_election-2022-election-generic-evm-generic-ani-650_625x300_20_February_22.jpg',
          publishedAt: '2022-11-03T06:56:37Z',
          content:
            'The results for the election will be declared along with that of Himachal Pradesh polls\r\nNew Delhi: The high-voltage Assembly election in Gujarat will be held in two phases, on December 1 and Decembe… [+2772 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: 'Watch: Over 2,000 Liquor Bottles Hidden Inside Wooden Doors',
          description:
            'Two persons were arrested in Delhi on Thursday for attempting to smuggle over 2,000 bottles of liquor into Bihar by hiding them inside wooden doors, the police said.',
          url: 'https://www.ndtv.com/delhi-news/watch-over-2-000-liquor-bottles-hidden-inside-wooden-doors-3485937',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/v9fafcko_illegal-liquor_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:56:30Z',
          content:
            'Further investigations are underway, the police said.\r\nNew Delhi: Two persons were arrested in Delhi on Thursday for attempting to smuggle over 2,000 bottles of liquor into Bihar by hiding them insid… [+826 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: 'Bikaji Foods Raises Rs 262 Crore From Anchor Investors',
          description:
            'Manufacturer of snacks and sweets Bikaji Foods International Ltd has mobilised Rs 262 crore from anchor investors.',
          url: 'https://www.ndtv.com/business/bikaji-foods-raises-rs-262-cr-from-anchor-investors-3485786',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/0h3hubco_image_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:54:42Z',
          content:
            "Bikaji Foods raises Rs 262 crore from anchor investors\r\nNew Delhi: Manufacturer of snacks and sweets Bikaji Foods International Ltd has mobilised Rs 262 crore from anchor investors.\r\nThe company's in… [+2172 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: '10 Veg South Indian Recipes You Can Enjoy For Lunch',
          description:
            'We have found the recipes of popular vegetarian South Indian recipes you can make for lunch.',
          url: 'https://food.ndtv.com/food-drinks/10-veg-south-indian-recipes-you-can-enjoy-for-lunch-3485924',
          urlToImage:
            'https://c.ndtvimg.com/2022-08/fg5hvru_south-indian-thali-onam_625x300_30_August_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T06:52:24Z',
          content:
            'South Indian cuisine is one of the most vibrant and flavourful cuisines of India! Some of the best Indian dishes are often credited to South Indian cuisine! This wholesome cuisine is home to many cla… [+3051 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            "Viral Video: Cute Dog Pretending He's Not Hungry Is Too Funny To Miss",
          description:
            "An adorable dog video has surfaced online wherein a dog is trying to act as if he doesn't care about food. Watch the hilarious viral video here!",
          url: 'https://food.ndtv.com/news/viral-video-cute-dog-pretending-hes-not-hungry-is-too-funny-to-miss-3485923',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/vh88emvo_dog-likes-food_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:52:13Z',
          content:
            'Imagine that you are following a special diet regime that requires you to eat only healthy food. You are at a restaurant with a friend, and while you are eating a salad, he or she is gorging upon a d… [+2980 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: 'Agence France-Presse',
          title:
            "From Sickly Child To World Number 1, Thai Golfer Chases Tiger Wood's Tail",
          description:
            "Thai teenager Atthaya Thitikul reached the top of the world women's golf rankings this week after a stunning debut year on the LPGA Tour",
          url: 'https://sports.ndtv.com/golf/from-sickly-child-to-world-number-one-thai-golfer-atthaya-thitikul-chases-tiger-woods-tail-3485920',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/mq0vn1d_atthaya-thitikul-afp_625x300_03_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675',
          publishedAt: '2022-11-03T06:50:35Z',
          content:
            "Atthaya Thitikul took up golf as a sickly six-year-old to improve her poor health. Now she has joined Tiger Woods as one of the sport's youngest world number ones. Thai teenager Atthaya reached the t… [+3746 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Rs 1.27 Crore "Unaccounted Cash" Seized In Hyderabad Day Before Key Polls',
          description:
            "Unaccounted cash worthRs 1.27 crore was recovered from a man at Telangana's Hyderabad last evening - the eve of a crucial election in the state, officials have said.",
          url: 'https://www.ndtv.com/telangana-news/rs-1-27-crore-unaccounted-cash-seized-in-telanganas-hyderabad-3485900',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/06onca48_telangana-bypoll_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:46:04Z',
          content:
            "Police have arrested three people from Narayanguda area of the city\r\nHyderabad: Unaccounted cash worth Rs 1.27 crore was recovered from a man at Telangana's Hyderabad last evening - the eve of a cruc… [+1304 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'India Like An Island Of Calm, Despite Global Risks: Nirmala Sitharaman',
          description:
            'Nirmala Sitharaman said the country seems like an island of a certain level of calm.',
          url: 'https://www.ndtv.com/business/india-seems-like-an-island-of-a-certain-level-of-calm-fm-nirmala-sitharaman-3484117',
          urlToImage:
            'https://c.ndtvimg.com/2022-09/1ngfbpk_nirmala-sitharaman-reuters_625x300_07_September_22.jpg',
          publishedAt: '2022-11-03T06:45:10Z',
          content:
            'India seems to be an oasis of stability and calm, says Finance Minister\r\nBengaluru (Karnataka): Finance Minister Nirmala Sitharaman on Wednesday said from 2020 till today, India seems to come to a si… [+2441 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Sonam Kapoor, Holidaying In Austria With Anand Ahuja, Shares Pics',
          description:
            '"Thank you Anand Ahuja for putting my needs above your own," wrote Sonam Kapoor',
          url: 'https://www.ndtv.com/entertainment/sonam-kapoor-holidaying-in-austria-with-husband-anand-ahuja-shares-pics-3485891',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/bn3p0j28_-sonam-kapoor_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:43:59Z',
          content:
            'Sonam Kapoor with Anand Ahuja. (courtesy: sonamkapoor)\r\nNew Delhi: Sonam Kapoor shared postcard-worthy shots from her morning walk with husband Anand Ahuja. Sonam Kapoor shared a mushy picture with A… [+1525 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'In Team Thackeray\'s "Symbolic" Fight In Andheri, Eye On Mega Prize Mumbai - NDTV',
          description:
            '<ol><li>In Team Thackeray\'s "Symbolic" Fight In Andheri, Eye On Mega Prize Mumbai  NDTV\r\n</li><li>Mumbai News Live Updates: Over 9% polling till 11 am in Andheri East; foreign currency worth Rs. 4.1 crore seized in Mumbai airport  The Indian Express\r\n</li><li…',
          url: 'https://www.ndtv.com/india-news/maharashtra-bypoll-andheri-uddhav-shiv-sena-first-on-new-symbol-has-symbolic-value-3485488',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/86udu3no_rutuja-latke_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:27:03Z',
          content:
            'Shiv Sena (Uddhav Balaseheb Thackeray) candidate Rutuja Latke and her son after voting.\r\nMumbai: The Andheri East assembly bypoll in Maharashtra may not look like much of a contest for Uddhav Thacker… [+3615 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Watch: Mom Surprises Son With Mansion, His Reaction Is Viral On Instagram',
          description:
            "The text super on the video says the children have no clue what's about the happen and the woman has been keeping it secret for weeks.",
          url: 'https://www.ndtv.com/offbeat/watch-mom-surprises-son-with-mansion-his-reaction-is-viral-on-instagram-3485790',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/9b82sq88_woman-buys-new-house-for-kids-650_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:15:54Z',
          content:
            'The reaction of the boy has won the internet.\r\nA video of a woman surprising her children with a brand new house is going viral on social media. The video posted on Instagram handle Martistry shows t… [+1692 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: 'Apple Users In India To Get 5G From Next Week',
          description:
            'Tech giant Apple will roll out the much-awaited software upgrades for 5G network in India for its users from next week.',
          url: 'https://www.ndtv.com/india-news/apple-users-in-india-to-get-5g-from-next-week-3485776',
          urlToImage:
            'https://c.ndtvimg.com/2022-10/ni3iecpg_apple-reuters_625x300_28_October_22.jpg',
          publishedAt: '2022-11-03T06:12:47Z',
          content:
            'India announced the launch of 5G services on October 1.\r\nNew Delhi: Tech giant Apple will roll out the much-awaited software upgrades for 5G network in India for its users from next week.\r\nThe servic… [+3367 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Viral Video: Mumbai Bank Officer Advertises Deposit Plans Using Megaphone',
          description:
            'Indian bankers are taking to the streets with megaphones and enlisting grocers to sign up customers as they seek to lure cash deposits to fund the fastest credit growth in a decade.',
          url: 'https://www.ndtv.com/india-news/viral-video-mumbai-bank-officer-advertises-deposit-plans-using-megaphone-3485752',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/0uf8qt_mumbai-banker_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T06:03:10Z',
          content:
            'A spokesperson for the bank declined to provide details.\r\nIndian bankers are taking to the streets with megaphones and enlisting grocers to sign up customers as they seek to lure cash deposits to fun… [+2906 chars]',
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'N Korea Fired Inter-Continental Ballistic Missile, But Launch Failed: Seoul',
          description:
            "Seoul's Joint Chiefs of Staff said they had detected the launch of a long-range ballistic missile -- the ICBM -- early Thursday, followed shortly by two short-range ballistic missiles.",
          url: 'https://www.ndtv.com/world-news/north-korea-fired-inter-continental-ballistic-missile-but-launch-failed-seoul-3485742',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/lngc89l8_south-korea-missile_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T05:58:59Z',
          content:
            "The launches come during Seoul and Washington's largest-ever joint air drills.\r\nSeoul: North Korea unsuccessfully fired an intercontinental ballistic missile during a new salvo of launches Thursday, … [+4099 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'US, Seoul Agree To Extend Joint Air Drills After N. Korea Missile Tests',
          description:
            'South Korea\'s air force said Thursday it would extend ongoing joint air drills with the United States due to North Korea\'s "recent provocations"',
          url: 'https://www.ndtv.com/world-news/us-seoul-agree-to-extend-joint-air-drills-after-n-korea-missile-tests-3485719',
          urlToImage:
            'https://i.ndtvimg.com/i/2018-01/missile-generic-pixabay_650x400_81517334193.jpg',
          publishedAt: '2022-11-03T05:50:04Z',
          content:
            "South Korea's air force said it would extend ongoing joint air drills with the United States.\r\nSouth Korea's air force said Thursday it would extend ongoing joint air drills with the United States --… [+478 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Hemant Soren\'s "Tribal Chief Minister" Charge Over Central Agency Summons',
          description:
            "The Enforcement Directorate's summons to him is a plot to harass a tribal Chief Minister by misusing constitutional institutions, Jharkhand Chief Minister Hemant Soren has said.",
          url: 'https://www.ndtv.com/india-news/hemant-soren-jharkhand-mining-case-hemant-sorens-tribal-chief-minister-charge-over-central-agency-summons-3485718',
          urlToImage:
            'https://c.ndtvimg.com/2022-11/rgf2e978_hemant-soren_625x300_03_November_22.jpg',
          publishedAt: '2022-11-03T05:49:46Z',
          content:
            "Hemant Soren was asked to appear at the ED's regional office in Ranchi today\r\nThe Enforcement Directorate's summons to him is a plot to harass a tribal Chief Minister by misusing constitutional insti… [+2501 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title:
            'Weight Loss Tips: 8 Signs Intermittent Fasting Is Not For You',
          description:
            'Intermittent Fasting: In this article, we outline the circumstances in which intermittent fasting should be absolutely avoided.',
          url: 'https://www.ndtv.com/health/weight-loss-tip-8-signs-intermittent-fasting-is-not-for-you-3481785',
          urlToImage:
            'https://c.ndtvimg.com/2020-08/tfeovsm8_intermittent-fasting_625x300_24_August_20.jpg',
          publishedAt: '2022-11-03T05:48:39Z',
          content:
            "Intermittent Fasting: Constant headaches can be a sign you shouldn't follow intermittent fasting\r\nIntermittent fasting is a type of eating that alternates between regular meals and fasting. According… [+4272 chars]",
        },
        {
          source: {
            id: null,
            name: 'NDTV News',
          },
          author: null,
          title: "India's Twitter-Alternative Koo Crosses 50 Million Downloads",
          description:
            'Key metrics like referrals, number of active users, time spent and engagements have also improved for the app.',
          url: 'https://www.ndtv.com/business/as-elon-musk-takes-over-twitter-indian-rival-koo-crosses-50-million-downloads-and-aims-for-100-million-3485663',
          urlToImage:
            'https://c.ndtvimg.com/2021-08/c5hvdnv8_koo-app_625x300_20_August_21.jpg',
          publishedAt: '2022-11-03T05:46:24Z',
          content:
            "Koo, India's multi-language microblogging app, crosses 50 million downloads\r\nHomegrown microblogging platform Koo has announced that it has crossed over 50 million downloads for its app.\r\nThe company… [+1917 chars]",
        },
      ],
    };

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
            <div className="d-flex align-items-center">
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
              <a
                href="https://github.com/pankajverma-1/Amazon_Clone"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <div className="text-uppercase font-weight-semi-bold p-2">
                  code
                </div>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <a
                href="https://github.com/pankajverma-1/News_website"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-white"
              >
                <div className="bg-primary text-decoration-none badge badge-primary text-uppercase font-weight-semi-bold p-2">
                  This website
                </div>
              </a>
              <a
                href="https://github.com/pankajverma-1/News_website"
                target="_blank"
                rel="noreferrer"
                className="text-white"
              >
                <div className="text-uppercase font-weight-semi-bold p-2">
                  code
                </div>
              </a>
            </div>
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
