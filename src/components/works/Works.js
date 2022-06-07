/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/


const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'SKIN CANCER DETECTION SYSTEM', 
      description: `Analysing all the seven types of skin cancers, 
      they are MEL, NV, BCC, AKIEC, BKL, DF, 
      VASC to get the better understanding of how 
      to build the CNN model which will perform 
      image processing on various image and detect 
      type of cancer. `,
      alter: 'SKIN CANCER DETECTION SYSTEM',
      project_link: ' https://github.com/amk-tech-1003/Skin_Cancer_Detection_ML',
    },
    { 
      id: 2,
      title: 'EMOTION DETECTION USING NLP', 
      description: `Classifier able to classify emotions present in
      of 8 types : 'joy' ,'sadness', 'fear', 'anger',
      'surprise', 'neutral', 'disgust', 'shame' , which 
      will help in assisting company’s to be able to 
      take insights into emotions of their valuable 
      customers expressed.`,
      alter: 'VeriTru Project',
      project_link: ' https://github.com/amk-tech-1003/Emotion-Detection-NLP.git',
    },
    { 
      id: 3,
      title: 'DiGiHEALTH CENTER ', 
      description: `System will help to analyse more than 100+ possible 
      diseases from the provided symptoms, Can also generate the report by the given data in pdf format.`,
      alter: 'DiGiHEALTH CENTER',
      project_link: ' https://github.com/amk-tech-1003/DiGiHealthWeb.git',
    },
    { 
      id: 4,
      title: 'PRICE COMPARER', 
      description: `Application which compare the prices of the given product from different ecommerce website such as Amazon and Flipkart and show you the display the price alog with the links to buys the product.`,
      alter: 'PRICE COMPARER',
      project_link: ' https://github.com/amk-tech-1003/PriceComparer.git',
    },
    
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <br/><br/>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
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
