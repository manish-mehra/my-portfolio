import Header from "../components/Header"
import {useEffect} from 'react'

export default function ResearchIt() {
  
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
    <div>
        <Header/>
        <>
        <div className='hero'>
            <div className="hero--heading">
                <p className='hero--title'>
                    Research It is a platform<br/>
                    providing rich collection of<br/>
                    scientific research papers and journals.
                </p>

                <p className='hero--subtitle'>
                Check out the site <a href="https://research-it.netlify.app/" target="_blank">here</a> or source <a href="https://github.com/manish-mehra/Research-Papers-Store" target="_blank">code</a>
                </p>

                <p className='technology-used'>
                Team PROJECT / 
                <span>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react-icon"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg" alt="firebase icon" />
                </span>
                </p>
            </div>
        </div>
        </>

        <img src="https://user-images.githubusercontent.com/31545725/158547435-5c6918d5-4fb0-476c-a341-7481cb15a3e9.png" alt="research-it image" className="editor--image"/>

        <div className="editor--container">
            
            
            <p className="editor--para h1">About</p>

            <p className="editor--para">Research It was my first team project as an aspiring web developer. I build this project along with the two other student developers remotely during the coronavirus pandemic. The problem was put forward by one of the teammates, who was having a hard time finding research papers. He talked about this problem to his classmates and they were in the same place. Even though there exist so many research paper stores online, it's still a time-consuming task to find research papers accordingly to your curriculum. </p>

            <p className="editor--para">
            Instead of just building a simple site, we wanted to add a crucial feature and that was saving research paper for later reading or to a kind of shelve so that you don't have to search it again. For that, we needed some kind of login functionality with each user having their separate selves to store their papers in the library.
            </p>

            <div className="editor--imageContainer">
                <img src="https://user-images.githubusercontent.com/31545725/158547507-bbc22919-e165-4b8f-94ec-056da0f07574.png" alt="" className="editor--image"/>
                <img src="https://user-images.githubusercontent.com/31545725/158547541-7534a256-59f4-4a76-b9f6-71386949d01e.png" alt="" className="editor--image"/>
            </div>

            <p className="editor--para">
            All three of us did not know the backend and because of the time limitations, we have to build this project before the semester ends. So, after countless hours of research, we agreed upon using firebase as our backend/database layer. Firebase is a baas(backend as a service) owned by Google, which takes away the pain of building and managing servers and databases. All we have to focus on is building an interactive interface without much caring about the functionalities like authentication or scalability of the app.
            </p>

            <div className="editor--imageContainer">
                <img src="https://user-images.githubusercontent.com/31545725/158547601-269f64ec-fb34-4b7e-a0b7-b17319de4516.png" alt="" className="editor--image"/>
                <img src="https://user-images.githubusercontent.com/31545725/158547617-e4f67c3a-f907-4827-ae61-81f5722e15b9.png" alt="" className="editor--image"/>
            </div>

            <p className="editor--para">
            All three of us were working from home from three different states and that added one more challenge of remaining synced and connected throughout this project. So we end up using Trello to sync our timeline and track our progress. That turned out to be very helpful as our project grew complex.
            </p>
            <div className="editor--imageContainer">
                <img src="https://user-images.githubusercontent.com/31545725/158547649-dd1b4554-bfd2-4458-9b08-181146f5c607.png" alt="research-it trello" className="editor--image"/>
            </div>

            <p className="editor--para">
            Throughout this project, I learned several skills which include using GitHub, writing clean code, managing the team, and dealing with conflicts on both code and interpersonal levels. Now, I feel confident working with a team and taking on bigger projects. 
            </p>
        </div>

    </div>
  )
}
