import Header from "../components/Header"

export default function CryptoUpdates() {
  return (
    <div>
        <Header/>
        <>
        <div className='hero'>
            <div className="hero--heading">
                <p className='hero--title'>
                    Crypto Updates India is<br/>
                    a website to track cryptocurrency prices <br/>
                    and get the latest headlines from different<br/>
                    news sources.
                </p>

                <p className='hero--subtitle'>
                Check out the site <a href="https://crypto-updates-india.netlify.app/" target="_blank">here</a> or source <a href="https://github.com/manish-mehra/crypto-updates-india" target="_blank">code</a>
                </p>

                <p className='technology-used'>
                INDIVIDUAL PROJECT / 
                <span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react-icon"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg" alt="nodejs image" />
                </span>
                </p>
            </div>
        </div>
        </>

        <div className="editor--container">
            <p className="editor--para h1">About</p>

            <p className="editor--para">I didn't have any serious interest in cryptocurrencies, but I still prefer to stay informed on this subject. Finding information, precisely enough information, is getting tedious these days. You visit a website and then proceed to visit ten more sites. This compulsion to cram your head with more information is humans' natural tendency. Moreover, every site you visit, either they are filled with loads of ads or trying to sell you some uncanny scheme. Initially, I planned to make a cryptocurrency price tracker using React. And it would use some freely available price tracking API. </p>

            <div className="editor--imageContainer">
                <img src="https://user-images.githubusercontent.com/31545725/157828358-380ceeb4-8b62-4654-8ec1-a20448617ddf.png" alt="" className="editor--image"/>
            </div>

            <p className="editor--para">
            But then, I found myself scrolling through different news sites to read the headlines. As the reading from only one news source is not a reliable way of staying informed these days, this makes this whole thing very time-consuming. So, I decided to attach some sort of curated list of headlines from different news sites. Instead of consuming a news API, I decided to build my API using node js and deployed it to Heroku. 
            </p>

            <div className="editor--imageContainer">
                <img src="https://user-images.githubusercontent.com/31545725/157827521-1cc11bed-cd0f-49b9-b116-43df364c91fc.png" alt="" className="editor--image"/>
            </div>

            <p className="editor--para">
            So what it does is that it scrapes the web page and for that I used cheerio. Cheerio simply parses markup and provides an API for manipulating the resulting data structure. It doesn't load any CSS or script or load anything from external resources. In simpler terms, it only fetched the HTML file. For every news site, I set up a route that forwards requests to controller functions. Because every news site has a different structure, you have to write different query functions for independent pages.
            </p>

            <div className="editor--imageContainer">
                <img src="https://user-images.githubusercontent.com/31545725/157827552-306b0ff4-d58f-4879-a42f-72028740f233.png" alt="" className="editor--image"/>
            </div>

            <p className="editor--para">
            One challenge I faced in this project is design. I'm not good at design, so I struggled to come up with a user-friendly interface. I took my inspiration from different sources and tried to make it as minimal as possible. 
            </p>

            <p className="editor--para">
            I think this web app can be improved in many ways. One way, to reduce the load on a server if the user grows is by setting up a caching server. Instead of scraping webpages at every request, we can cache the fetched data for some time, let's say six hours, and this will significantly improve the performance by less exhausting the server. The other idea I had in my mind was if the user could log in and save the news article for later reading. 
            </p>

            <p className="editor--para">
            For me, this project wasn't complex to build from a technical perspective. But building it as a product for a user(in this case, me), was a challenge and a good learning opportunity. I had to take all those small details and feedback, to improve the app. And that was a good model of the real-world scenario and gave me confidence that I would be able to provide value to a real project.
            </p>
        </div>

    </div>
  )
}
