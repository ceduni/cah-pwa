import { ProjectItem } from "./ProjectItem"
import { getProjects } from "../utils/faker";


function ProjectList() {
    const projects = getProjects();
    
    return (
        <div className="work-grid">
            {
                projects.map((project, index) => (
                    <ProjectItem key={index} {...project}></ProjectItem>
                ))
            }
        </div>
    )
}

export default ProjectList;