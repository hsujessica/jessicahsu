import React from 'react'
// import {Link} from 'link'

const Project = props => (
  <div className="project">
    {/* <Link to={`/${props.project.projectSlug}`}> */}
    {/* <a href={props.project.projectView}> */}
    <span>
      <img
        src={props.project.projectImg}
        alt={`screenshot of ${props.project.projectTitle}`}
        className="project-img"
      />
      <span className="project-main-text">
        <p className="project-title">{props.project.projectTitle}</p>
        <p className="project-year">{props.project.projectYear}</p>
      </span>
      {/* </a> */}
    </span>
    <p className="project-details">{props.project.projectDetails}</p>
    {props.project.projectRepo ? (
      <a
        className="project-repo-link"
        href={props.project.projectRepo}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repo
      </a>
    ) : null}
    {/* </Link> */}
  </div>
)

export default Project
