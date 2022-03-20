import { Link } from "react-router-dom"


const projectsList = [
    {
        name: "Crypto Updates India",
        description: "Track crypto prices and fetch latest headlines.",
        image: "https://user-images.githubusercontent.com/31545725/159154598-b0a55557-8b07-4cd8-9624-2f88daaeb08c.png",
        link: "/crypto-updates-india"
    },
    {
        name: "Research It",
        description: "A research paper store",
        image: "https://user-images.githubusercontent.com/31545725/159154602-9581265f-1bd3-47d7-b53a-cf4ae1d2955a.png",
        link: "/research-it"
    },
    {
        name: "Skidev",
        description: "All in one place for students to start their programming journey",
        image: "https://user-images.githubusercontent.com/31545725/159154605-e7ae6be3-b78c-4eff-87bc-916bcd059b52.png",
        link: "/skidev"
    },

]

export default function Projects() {

  return (
    <div className='projects'>
        <ul className='projects--items'>
            {
                projectsList.map((project)=>{
                    return  <li key = {project.name} className = "projects--item">
                        <Link to={project.link} className = "projects--imageWrapperLink">
                            <img src={project.image} alt={project.description}/>
                        </Link>
                        <span className='projects--headingWrapper'>
                            <p className='projects--title'>{project.name}</p>
                            <p className='projects--description'>{project.description}</p>
                        </span>
                    </li>
                })
            }
        </ul>
    </div>
  )
}
