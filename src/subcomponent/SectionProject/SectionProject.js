import React, { useState } from 'react';
import { projectsData } from '../../datas/projectDatas';
import { 
  ButtonContainer,
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

    <ProjectMain className='container'>

      {/* CONTENT */}
      <ProjectContent className='section__heading'>
        <ProjectTitle>{project.title} </ProjectTitle>
        <ProjectText darkSquare={project.darkSquare} darkDate={project.darkDate} >{project.date} </ProjectText>
        <ProjectLanguages>
          {project.languages.map((item) => {
            return <ProjectLi darkLang={project.darkLang} key={item}>{item}</ProjectLi>
          })} 
        </ProjectLanguages>
      </ProjectContent>

      {/* IMAGE */}
      <ProjectImg>
          <div className="img-container hover">
            <ImgSpan>
              <ImgTitle>{project.title}</ImgTitle>
              <ImgTxt lightInfos={project.lightInfos} >{project.infos}</ImgTxt>
            </ImgSpan>
            <img src={project.img} alt={project.title} />
          </div>

          <ButtonContainer>
            <a href={project.link} target='_blank' rel='noopener noreferer'>
              <ButtonSpan>Voir le site</ButtonSpan>
            </a>
          </ButtonContainer>
      </ProjectImg>

    </ProjectMain>

  );
};

export default SectionProject;
