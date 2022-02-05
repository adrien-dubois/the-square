import React, { useState } from 'react';
import { projectsData } from '../../datas/projectDatas';
import { 
  ButtonContainer,
  ButtonLink,
  ButtonSpan,
  ImgSpan,
  ImgTitle,
  ImgTxt,
  ProjectContent, 
  ProjectImg, 
  ProjectLanguages, 
  ProjectLi, 
  ProjectMain, 
  ProjectText, 
  ProjectTitle
} from './SectionProject.elements';

const SectionProject = (props) => {

    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber];

  return (

    <ProjectMain>

      {/* CONTENT */}
      <ProjectContent>
        <ProjectTitle>{project.title} </ProjectTitle>
        <ProjectText>{project.date} </ProjectText>
        <ProjectLanguages>
          {project.languages.map((item) => {
            return <ProjectLi key={item}>{item}</ProjectLi>
          })} 
        </ProjectLanguages>
      </ProjectContent>

      {/* IMAGE */}
      <ProjectImg>
          <div className="img-container hover">
            <ImgSpan>
              <ImgTitle>{project.title}</ImgTitle>
              <ImgTxt>{project.infos}</ImgTxt>
            </ImgSpan>
            <img src={project.img} alt={project.title} />
          </div>

          <ButtonContainer>
            <ButtonLink href={project.link} target='_blank' rel='noopener noreferer'>
              <ButtonSpan>Voir le site</ButtonSpan>
            </ButtonLink>
          </ButtonContainer>
      </ProjectImg>

    </ProjectMain>

  );
};

export default SectionProject;
