import React from 'react'



const projectsList = [
    {
        name: "Crypto Updates India",
        description: "Track crypto prices and fetch latest headlines.",
        image: "https://user-images.githubusercontent.com/31545725/156877184-1108c861-470d-4c75-98d5-a4d236b63540.png",
        link: "/crypto-updates-india"
    },
    {
        name: "Research It",
        description: "A research paper store",
        image: "https://user-images.githubusercontent.com/31545725/156877186-28d706e5-26d9-4ef3-9a49-5bccc6d0ac8a.png",
        link: "/research-it"
    },
    {
        name: "Skidev",
        description: "All in one place for students to start their programming journey",
        image: "https://user-images.githubusercontent.com/31545725/156877189-e504b5f5-ece1-4335-bc5b-cb944b79d38e.png",
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
                        <a href={project.link} className = "projects--imageWrapperLink">
                            <img src={project.image} alt={project.description}/>
                        </a>
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
