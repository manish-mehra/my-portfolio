import Header from "../components/Header"

export default function Skidev() {
  return (
    <div>
    <Header/>
    <>
    <div className='hero'>
        <div className="hero--heading">
            <p className='hero--title'>
            Skidev is a concept and <br/> 
            a half finished startup product.
            </p>

            <p className='hero--subtitle'>
            It's a platform, which will aid students in learning <br/> 
            programming and mastering different skills by providing <br/>
            them the best curated list of free content available on internet.
            </p>

            <p className='technology-used'>
            Team PROJECT / 
            <span>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react-icon"/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="nodejs icon" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="mongodb icon" />
            </span>
            </p>
        </div>
    </div>
    </>

    <video width = "100%"controls>
        <source src="https://user-images.githubusercontent.com/31545725/159149308-b9a6279d-18b4-4c82-bb9d-4795e388e3bc.mp4" type="video/mp4"/>
        Your browser does not support HTML video.
    </video>

    <div className="editor--container">
        
        
        <p className="editor--para h1">About</p>

        <p className="editor--para">After working on research-it, we three students, while still working remotely from home, decided to take on a serious project. A startup. The idea was to build a platform that will help the students to start their programming journey and learn some other creative skills.</p>

        <p className="editor--para">
        All the design mockups for the project were ready, as one of the team members was already working on the idea for a long time.
        </p>

        <p className="editor--para">Key features:</p>

        <ul className="editor--ul">
            <li>skills categories and topic wise links of video, articles tutorials</li>
            <li>User profile with follower and following</li>
            <li>chat room(or channels) for discussions</li>
            <li>personal chat feature</li>
            <li>book a call to senior students for help and guidance</li>
            <li>book a call for financial aid</li>
            <li>course coupons</li>
            <li>coding contests</li>
        </ul>

        <p className="editor--para h1">The Tech Stack</p>
        <p className="editor--para">
        We gave some thought to using Next Js on Frontend. Mainly for one reason: better SEO because of server-side rendering. However, server-side rendering result in exhaustion of the server and we had zero capital in hand. To cut the cost down, we stick to client-side rendering with react.
        </p>

        <p className="editor--para">
        As for the backend, Node Js with express was the obvious choice, as front-end developers. Throughout the project, as I was working as a full-stack developer, I found that it was mentally less draining to work with one language.
        </p>

        <p className="editor--para">
        We wanted a one-click login/signup feature, so I used google cloud and their authentication API. This will also fetch us their profile picture, which will save the users time but also we will also reduce spammers to a significant amount.
        </p>

        <div className="editor--imageContainer">
            <img src="https://user-images.githubusercontent.com/31545725/159149326-e307163c-70dd-4777-a18e-3228afcd3dbc.png" alt="skidev-login" className="editor--image"/>
        </div>

        <p className="editor--para">For the database, we stick to Mongodb and it was hosted on their platform called MongoDB Atlas. So we don’t have to manage our database and worry about scaling.</p>

        <p className="editor--para">As for booking calls and financial aids, instead of MongoDB, the user's data will be pushed to google sheets. It was fairly simple to set up, as Google Clouds provide the API for storing and writing directly to the specific google sheets. And that google sheet can be shared with the members whom we want to call the users without setting a different page and connecting database.</p>

        <div className="editor--imageContainer">
            <img src="https://user-images.githubusercontent.com/31545725/159149665-f7b270cf-235b-41c4-8971-1dbd33818585.png" alt="skidev-googlesheet" className="editor--image"/>
        </div>

        <p className="editor--para h1">Project Status</p>
        <p className="editor--para">Because of our college work and insufficient funds, we couldn’t continue the project. No git commit made to the project since January 2022. But does that mean that all the efforts and time we spent were all gone to waste? Hell, no. In just three months, I learned so much. Because everything I was learning was for a purpose and that narrowed my focus and helped me to learn efficiently. Also, writing code with a team and working toward the end product, which will be used outside of our circle, was an unbelievably motivating and engaging experience.</p>
    </div>

</div>
  )
}
