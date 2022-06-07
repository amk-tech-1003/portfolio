/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Skills.css';

// Import ../../assets/recentprojects/


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Skills = () => {
  const classes = useStyles();


  return (
    <section id="skills">
      <Container component="main" className={classes.main} maxWidth="md">
        
          <div className="project" >
            <br/><br/>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text= "Languages" />
              </h3>
              <h3 className="postion">
                  <ul>
                      <li>C</li>
                      <li>C++</li>
                      <li>Java</li>
                      <li>Python</li>
                      <li>Sql</li>
                      <li>HTML</li>
                  </ul>
              </h3>
             
            </div>
          </div>
        
      </Container>
      <Container component="main" className={classes.main} maxWidth="md">
        
          <div className="project" >
            <br/><br/>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text= "Web Framework" />
              </h3>
              <h3 className="postion">
                  <ul>
                      <li>Flask</li>
                      <li>Django</li>
                      <li>PHP</li>
                      <li>React JS</li>
                  </ul>
              </h3>
              
            </div>
          </div>
        
      </Container>
      <Container component="main" className={classes.main} maxWidth="md">
        
          <div className="project" >
            <br/><br/>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text= "Applications/ Tools" />
              </h3>
              <h3 className="postion">
                  <ul>
                      <li>Android Studio</li>
                      <li>Visual studio</li>
                      <li>Anaconda</li>
                      <li>MySQL</li>
                      <li>Eclipse</li>
                      <li>Azure</li>
                  </ul>
              </h3>
              
            </div>
          </div>
        
      </Container>
    </section>
  );
};
