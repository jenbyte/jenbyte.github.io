import React from 'react';
import '../index.scss';
import projects from '../projects';
import GithubBtn from '../../GithubBtn';

const ProjectRow = props => {
  return (
    <div key={props.id} className={"row " + props.layout}>
      <div className="info-wrapper">
        <h2 className="project-title">{props.title}</h2>
        <p className="description">{props.info}</p>
        <p className="tech">{props.tech}</p>
        <GithubBtn link={props.link} />
      </div>

      <div className="img-wrapper">
        <img src={props.img} alt={props.title} className={props.class} />
      </div>
    </div>
  );
};

function TitlebarGridList() {
  const isEven = (id) => {
    return id%2 === 0;
  }

  const projectLayout = (id) => {
    return isEven(id) ? "direction" : "direction-rev"
  }

  return (
    <div className="list-container">
      { projects.map(project => {
        console.log({project})
        return(
          <div key={project.id} className="item-container">
              <ProjectRow
                id={project.id}
                title={project.title}
                info={project.description}
                tech={project.tech}
                link={project.github}
                img={project.img}
                layout={projectLayout(project.id)}
                class={project.className}
              />
          </div>
        )
      })}
    </div>
  );
}

export default TitlebarGridList;
