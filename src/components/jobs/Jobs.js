/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Jobs.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/skin.png';


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Jobs = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'MICROSOFT', 
      postion: 'Postion: Ambassador',
      duration:'Duration: Sept 2019 - May 2022',
      description: `Helping fellow students build their coding skills online with 
      Microsoft Learn, organizing a virtual hackathon to solve real-world challenges, earning certifications, or building digital 
      communities. Learned new skills, solve real-world problems, and 
      build communities across the globe.
      `,
      alter: 'SKIN CANCER DETECTION SYSTEM',
      project_link: 'https://drive.google.com/file/d/1924dFYX-2D_apoemBwtatjoKefcnCZW0/view?usp=sharing',
    },
    { 
      id: 2,
      title: 'PEERPOWER CLUB FOUNDATION', 
      postion: 'Postion: Backend Developer',
      duration:'Duration: Dec 2021 - Feb 2022',
      description: `Collaborate with the front-end developers to integrate user-facing elements with severs-side logic using reactjs.Gathered and address technical and design requirements. 
      Supported and trained internal teams, updating git 
      repositories.
      Assisted in troubleshooting and debugging applications for 
      improving performance`,
      alter: 'VeriTru Project',
      project_link: 'https://drive.google.com/file/d/1gBxx0t633t5XGZ4pL7hpsyqFLr0v0zoc/view?usp=sharing',
    },
    { 
      id: 3,
      title: 'HOPE FOUNDATION ', 
      postion: 'Postion: Software developer',
      duration:'Duration: Jun 2021 - Jul 2021',
      description: `Worked on android and web applications 
      Gathered the detailed requirements for the application and 
      its function. 
      Created both the front end and the back end of the 
      applications. 
      Collaborated with cross-functional teams to define, design, 
      ship new features. `,
      alter: 'DiGiHEALTH CENTER',
      project_link: ' https://github.com/amk-tech-1003/DiGiHealthWeb.git',
    },
    { 
      id: 4,
      title: 'INIESTA WEBTECH SOLUTION pvt ltd', 
      postion: 'Postion: Web developer',
      duration:'Duration: April 2021 - Jun 2021',
      description: `Developed user friendly web-based applications using 
      scalable APIs, worked on technology like PHP, JS, Bootstrap, 
      MySQL.
    Followed agile methodologies and best practices.
      Worked with the team to manage, optimize and customize 
      multiple web applications.`,
      alter: 'PRICE COMPARER',
      project_link: 'https://drive.google.com/file/d/19ewmECNA08TP5SHPhLqOS-EupzCuV-I_/view?usp=sharing',
    },
    
  ]);

  return (
    <section id="jobs">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <br/><br/>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <h3 className="postion">
                  {project.postion}
              </h3>
              <h3 className="duration">
                  {project.duration}
              </h3>
              <p className="description">
                { project.description }
              </p>
              <p className="project_link">
                <a href={ project.project_link }>Link</a>
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
