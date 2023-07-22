import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.googleusercontent.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here ! Also expects programming tips and tricks that will take your coding skills to the..."
      />
      <hr />
      <VideoRow
        views="1.4M"
        subs="659K"
        description="Get Your FREE Infura Bonus 👉 https://www.infura.io/?utm_source=cle..."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Solidity Tutorial for Beginners - Full Course in 16 Hours (2023)"
        image="https://i.ytimg.com/vi/aGonv5DP910/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsd1lrp9wDgnu7kP-XoW9GwKrf0Q"
      />

      <VideoRow
        views="329K"
        subs="660K"
        description="It's been a minute since I've made tutorials on Python, so to cover the long overdue I created the Best Free Python Programming ..."
        timestamp="10 months ago"
        channel="Clever Programmer"
        title="Python Tutorial for Beginners - Full Course in 12 Hours (2022)"
        image="https://i.ytimg.com/vi/B9nFMZIYQl0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtkgmNHaPmQTelxsmgwlZcYXQBWQ"
      />
      <VideoRow
        views="212K"
        subs="660K"
        description="In this FREE LIVE training, Qazi will show you how to create a full stack, LinkedIn CLONE using React, Firebase, Redux, and ..."
        timestamp="2 years ago"
        channel="Clever Programmer"
        title="Build LinkedIn with React JS (Firebase + Styled Components + Redux)"
        image="https://i.ytimg.com/vi/xP3cxbDUtrc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB3iLEtMXzcZY4sLqmhpT1G4H-iPQ"
      />
      <VideoRow
        views="105K"
        subs="660K"
        description="Day 4 of the React JS Challenge, Sonny & Qazi will be building the E-Commerce Amazon clone LIVE! . SHOW UP. You don't ..."
        timestamp="Stramed 2 years ago"
        channel="Clever Programmer"
        title="🔴Build Amazon Clone w/ Full E-Commerce + Stripe using React JS for Beginners (Challenge Day 4)"
        image="https://i.ytimg.com/vi/sB2b3ZYMQgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCoG1Hna-tHkyGdyK6Sxp4ho9qAdA"
      />
      <VideoRow
        views="152K"
        subs="660K"
        description="These 7 Skills are practically guaranteed to help you land a job if you start applying them today. Timestamp 00:00 ReactJS ..."
        timestamp="2 years ago"
        channel="Clever Programmer"
        title="7 Skills You Need as a JavaScript Developer in 2020"
        image="https://i.ytimg.com/vi/Pht0qCHsKbA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA77j7fEDLZN6EsOHiHOqfYtB4dHw"
      />
      <VideoRow
        views="99K"
        subs="660K"
        description="Here at Clever Programmer we're all about revolutionizing education and the software industry. Join us for this Mini Bootcamp this ..."
        timestamp="Streamed 2 years ago"
        channel="Clever Programmer"
        title="🔴React JS 8 Hour Bootcamp (Learn Redux, React JS, Styled Components) | LIVE"
        image="https://i.ytimg.com/vi/Dt3o4l_OFa0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7XbZ_-gT1uazZnh4BBmet2MN42w"
      />
      <VideoRow
        views="33K"
        subs="660K"
        description="------ I will reply to ALL the comments that arrive within the first hour! Follow Clever Programmer on Facebook: ..."
        timestamp="2 Years ago"
        channel="Clever Programmer"
        title="🔴 How to Build the Tesla Home Page with ReactJS for Beginners FROM SCRATCH | Tesla Clone"
        image="https://i.ytimg.com/vi/Wn8Q8VbZIMQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDdeYVtzEt8pcjgwo0wIdhobMbJrQ"
      />
      <VideoRow
        views="326K"
        subs="660K"
        description="In this FREE LIVE training, Qazi will show you how to create a full stack, Disney+ CLONE using React, Firebase, Redux, and ..."
        timestamp="2 years ago"
        channel="Clever Programmer"
        title="ASMR | Build Disney+ with React JS (Firebase + Styled Components + Redux)"
        image="https://i.ytimg.com/vi/R_OERlafbmw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGQYM8yNmkykRdZWXGn_dx9usTOg"
      />
      <VideoRow
        views="1M"
        subs="660K"
        description="We just created the Best Free JavaScript Programming Course on the planet Made with lots of ❤️. Kickstart your Web ..."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="JavaScript Tutorial for Beginners - Full Course in 12 Hours (2022)"
        image="https://i.ytimg.com/vi/lI1ae4REbFM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGQckVsUUFmdZOb4JZO4kJeJQc7Q"
      />
      <VideoRow
        views="522K"
        subs="660K"
        description="In this FREE LIVE training, Qazi and Sonny will build a WhatsApp Clone LIVE with REACT JS and firebase! Do you want to ..."
        timestamp="Streamed 2 years ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a WhatsApp Clone with REACT JS for Beginners!"
        image="https://i.ytimg.com/vi/pUxrDcITyjg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_Jda5dMekKZH-buTERFKi4kj5aw"
      />
      <VideoRow
        views="501K"
        subs="660K"
        description="In this tutorial you're going to learn all about: Functional components in React JS Props and States in React JS ..."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="ReactJS Tutorial for Beginners - Full Course in 20 Hours [2022]"
        image="https://i.ytimg.com/vi/0mVbNp1ol_w/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA2EpGWB4EsWmk5fhbtYw-BZ28tvQ"
      />
      <VideoRow
        views="149K"
        subs="660K"
        description="Here's a modern portfolio you could have to impress an employer Build it with me & add your own ✨sass ✨ to it and make it ..."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="🔴 Build Modern Portfolio with NextJS, TypeScript, SSR, and React Bricks CMS"
        image="https://i.ytimg.com/vi/Ym6RYyRBPaA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAFQD4eoOszUgiKWJxdTo95Yyh-Xw"
      />
      <VideoRow
        views="294K"
        subs="660K"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a YouTube Clone with REACT JS . #reactjs #youtube ..."
        timestamp="Streamed 2 years ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
      />
      <VideoRow
        views="2.7M"
        subs="660K"
        description="Here is the best free javascript programming course on the planet. Made with lots of ❤️. Take your web development skills to the ..."
        timestamp="3 years ago"
        channel="Clever Programmer"
        title="JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]"
        image="https://i.ytimg.com/vi/Qqx_wzMmFeA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAZL9Ldmue5DGEbP8XFu-dqWljy8g"
      />
      <VideoRow
        views="2.1M"
        subs="660K"
        description="It's that time of the year where I make a video on the top 5 best programming languages to learn in 2020 ❤️. I got some juicy ..."
        timestamp="3 years ago"
        channel="Clever Programmer"
        title="Top 5 Programming Languages to Learn in 2020 to Get a Job Without a College Degree"
        image="https://i.ytimg.com/vi/tCAt8eEKPDc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDi2tKzi3NUkcsP7CKPkpUGz0GPOA"
      />
      <VideoRow
        views="3291K"
        subs="660K"
        description="Build Uber Eats Clone with React Native


        👉 You'll use React Native to build a native mobile app for iOS and Android
        
        👉 This build will be beginner-friendly so you can build it regardless of your skill level"
        timestamp=" Streamed 1 year ago"
        channel="Clever Programmer"
        title="🔴 Build Uber Eats with React Native & YELP API | Redux | Firebase | Google API"
        image="https://i.ytimg.com/vi/jmvbhuJXFow/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCM4ixEbBlhT4ARE4v1ACevDkeu-Q"
      />
      <VideoRow
        views="217K"
        subs="660K"
        description="In today's build, you're gonna learn about

        👉  How to use React JS to build the Frontend of a Web Application
        👉  How to use thirdweb to build the backend needed for an Ethereum APP
        👉  Hosting your Web 3.0 APP on the Internet using Vercel
        
        and more...
        
        Love your beautiful face 🔥
        "
        timestamp="1 year  ago"
        channel="Clever Programmer"
        title="🔴 Build Modern Cryptopunk Clone with React.js & Web 3.0"
        image="https://i.ytimg.com/vi/hhZtiytNaBQ/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBHyUcJ69usG31pBbPP-B0yLoA6Cg"
      />
      <VideoRow
        views="83K"
        subs="660K"
        description="In this tutorial, you're gonna be building the TikTok Web 3.0 dApp using Solana, Rust, Anchor Framework, Next JS, and Netlify 🚀"
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="🔴  Build TikTok Web 3.0 Blockchain App with Solana | Rust | Next.js | Netlify"
        image="https://i.ytimg.com/vi/qIGs3XWybgU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBhbUUj8lKQCyLvzL86GSVWF2Nhgw"
      />
      <VideoRow
        views="40K"
        subs="660K"
        description="We just created this Medium Clone.
        Made with lots of ❤️. Kickstart your Web Development career or take it to the next level with this course. This course is perfect for Beginners as well as Intermediate Developers."
        timestamp="1 year  ago"
        channel="Clever Programmer"
        title="🔴 Build Medium App with Next.js and Firebase"
        image="https://i.ytimg.com/vi/xnshvkVrsw8/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCBtk0PxAZZZzv4bHzPZssmqIrIXg"
      />
      <VideoRow
        views="78K"
        subs="660K"
        description="In this tutorial, you're gonna be building the CoinMarketCap Blockchain Web 3.0 App using Moralis, Solidity, Next JS, Netlify and Tailwind CSS 🔥"
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="Build CoinMarketCap Web 3.0 Blockchain App with Moralis | Next.js | Tailwind CSS"
        image="https://i.ytimg.com/vi/fim8DfBPVks/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAkISNKp-Gfqs3xGZGfe0ZyKShYQw"
      />
      <VideoRow
        views="368K"
        subs="660K"
        description="In this FREE LIVE training, Sonny and David will build a MERN Stack Whatsapp Clone LIVE  and deploy it with firebase & Heroku!🚀🔥 
        "
        timestamp="Streamed 2years ago"
        channel="Clever Programmer"
        title="🔴 Build a Whatsapp Clone with MERN Stack (MongoDB, Express, React, Node JS)"
        image="https://i.ytimg.com/vi/gzdQDxzW2Tw/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDYvbwsNmwr8w1WDSjtjQDPOoCKqg"
      />
      <VideoRow
        views="129K"
        subs="660K"
        description="In this tutorial, you're gonna be building the Spotify Blockchain Web3 dApp using Next.js, Solana, Phantom, QuickNode & Digital Ocean 🚀"
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="🔴 Build Spotify Blockchain Web3 dApp with Next.js, Solana, Phantom, QuickNode & Digital Ocean"
        image="https://i.ytimg.com/vi/JbZPQJpfahI/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBTr8gxitCFVKwu1NTDvuzZNNmq4g"
      />
      <VideoRow
        views="521K"
        subs="660K"
        description="In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, INSTAGRAM CLONE using React, Firebase & Material-UI... 👇"
        timestamp="Streamed 3years ago"
        channel="Clever Programmer"
        title="🔴 How to Build a Instagram Clone with REACT JS for Beginners (in 3 Hours!)"
        image="https://i.ytimg.com/vi/f7T48W0cwXM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLD0puuLvu2y5IxVdwYUaZ1Kv8vSPA"
      />
      <VideoRow
        views="450K"
        subs="660K"
        description="In this FREE LIVE training, Qazi & Sonny will show you how to build a TINDER Clone with REACT JS 🚀"
        timestamp="Streamed 2years ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a TINDER Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/DQfeB_FKKkc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDvG0SRoAI1R9dhhDry_xZg7ZufzA"
      />
      <VideoRow
        views="437K"
        subs="660K"
        description="In this FREE LIVE training, Qazi and Sonny will build a Facebook Clone LIVE with REACT JS and firebase!🚀🔥 "
        timestamp="Streamed 2years  ago"
        channel="Clever Programmer"
        title="🔴 Build a Facebook Clone with REACT JS for Beginners!"
        image="https://i.ytimg.com/vi/B-kxUMHBxNo/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCiERBReZa9O1FclFZILIfxceZ-Mw"
      />
      <VideoRow
        views="624K"
        subs="660K"
        description="In this FREE LIVE training, Qazi and Sonny will show you how simple it is to create a full stack, NETFLIX CLONE using React, Firebase & Material-UI... 👇"
        timestamp="Streamed 3years  ago"
        channel="Clever Programmer"
        title="🔴 How to Build a NETFLIX Clone with REACT JS for Beginners (in 3 Hours!)"
        image="https://i.ytimg.com/vi/XtMThy8QKqU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDagomaQuGRi8WtBHHp9lg7a0mqSA"
      />
      <VideoRow
        views="280K"
        subs="660K"
        description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... 
http://cleverprogrammer.com"
        timestamp="4 years  ago"
        channel="Clever Programmer"
        title="How To Think And Problem Solve In Coding"
        image="https://i.ytimg.com/vi/tCAt8eEKPDc/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDwxzdRvvGpmXAKXLSgqFtclgpZog"
      />
      <VideoRow
        views="1.7M"
        subs="660K"
        description="In this Exclusive React VIDEO training, we will be covering... ✓ Learn how to build the FULL Amazon website with FULL ..."
        timestamp="2 years ago"
        channel="Clever Programmer"
        title="Let's Build a Full-Stack AMAZON Clone with REACT JS for Beginners (Full E-Comm Store in 8 Hrs) 2021"
        image="https://i.ytimg.com/vi/RDV3Z1KCBvo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQhP-fa4hpoVZvk3TgJ4G3cWDWTg"
      />
      <VideoRow
        views="369K"
        subs="660K"
        description="Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music ..."
        timestamp="9 months ago"
        channel="Clever Programmer"
        title="Build and Deploy a Better Spotify 2.0 Clone Music App with React 18! (Tailwind, Redux, RapidAPI)"
        image="https://i.ytimg.com/vi/I1cpb0tYV74/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACCxHbZvo9jmkSJ06G-rq9flVTDw"
      />
      <VideoRow
        views="274K"
        subs="660K"
        description="#developer #artificialintelligence #ai #chatgpt #chatgpt3 #future."
        timestamp="5 months ago"
        channel="Clever Programmer"
        title="Will Ai replace Programmers? Here is my take."
        image="https://i.ytimg.com/vi/CKy6CTEiY_U/hq720_2.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGABwAcABBvABAfgBtgiAAoAPigIMCAAQARhlIFAoQTAP&rs=AOn4CLDgbgIIR0DOQwahNY3-vfxPr1fWDg"
      />
      <VideoRow
        views="39K"
        subs="660K"
        description="In this video, I go over 6 ways on how to make money as a developer even if you don't have a college degree. A lot of people have ..."
        timestamp="1 year months ago"
        channel="Clever Programmer"
        title="Make money with coding.. WITHOUT a college degree!"
        image="https://i.ytimg.com/vi/5NziONFxrPw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvUjD8_u3227mUnSZMcP1qtIP8uw"
      />
    </div>
  );
};
export default SearchPage;
