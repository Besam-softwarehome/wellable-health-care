import React from "react";
import "./Services1.css";
import {
  FaHeartbeat,
  FaBone,
  FaTint,
  FaBrain,
  FaShieldVirus,
  FaBaby,
  FaFemale,
  FaMale,
  FaWheelchair,
  FaLungs,
  FaLaptopMedical
} from "react-icons/fa";
import { GiKidneys, GiStomach  } from "react-icons/gi";
// import data from '../../Carddata'
// import {
//   FaHeartbeat,
//   FaMicroscope,
//   FaSearch,
//   FaUserMd,
//   FaNotesMedical
// } from "react-icons/fa";
import Title from "../Title/Title";

   const services = [
    
         {
        icon: <FaLaptopMedical />,
        title: "Computerized Full Body Scanning",
        description:
          "Advanced computerized scanning to detect health issues early."
      },
      {
        icon: <FaBone />,
        title: "Back & Joint Pains",
        description:
          "Treatment for chronic back pain, arthritis, and joint discomfort."
      },
      {
        icon: <FaTint />,
        title: "Diabetes Care",
        description:
          "Support and treatment for diabetes management."
      },
      {
        icon: <GiStomach />,
        title: "Gases & Ulcers",
        description:
          "Relief for stomach gases, ulcers, and digestion problems."
      },
      {
        icon: <FaHeartbeat />,
        title: "Hypertension (BP)",
        description:
          "Monitoring and treatment for high blood pressure."
      },
      {
        icon: <FaBrain />,
        title: "Stroke Recovery",
        description:
          "Supportive care and rehabilitation after stroke."
      },
      {
        icon: <GiKidneys />,
        title: "Kidney Conditions",
        description:
          "Treatment and support for kidney health problems."
      },
      {
        icon: <FaShieldVirus />,
        title: "STI Treatment",
        description:
          "Confidential care and treatment for STIs."
      },
      {
        icon: <FaBaby />,
        title: "Infertility Care",
        description:
          "Support for male and female fertility challenges."
      },
      {
        icon: <FaFemale />,
        title: "Fibroids Treatment",
        description:
          "Diagnosis and treatment for fibroids."
      },
      {
        icon: <FaMale />,
        title: "Erectile Dysfunction",
        description:
          "Private treatment for men's wellness concerns."
      },
      {
        icon: <FaWheelchair />,
        title: "Piles (Hemorrhoids)",
        description:
          "Relief and treatment for piles discomfort."
      },
      {
        icon: <FaLungs />,
        title: "Breathing Difficulties",
        description:
          "Care for shortness of breath and respiratory issues."
      },
//   {
//     icon: <FaHeartbeat />,
//     title: "Full Body Checkup",
//     desc: "Comprehensive screening of major body systems to assess your overall health and detect hidden conditions early."
//   },
//   {
//     icon: <FaMicroscope />,
//     title: "Medical Screening",
//     desc: "Advanced diagnostic analysis based on your health history to identify underlying health issues accurately."
//   },
//   {
//     icon: <FaSearch />,
//     title: "Disease Detection",
//     desc: "Early detection of chronic, infectious, and lifestyle-related diseases for timely intervention."
//   },
//   {
//     icon: <FaUserMd />,
//     title: "Treatment & Care",
//     desc: "Personalized treatment plans and medical guidance to restore and maintain your health."
//   },
//   {
//     icon: <FaNotesMedical />,
//     title: "Health Assessment",
//     desc: "Detailed evaluation of your health status with instant results to guide preventive care decisions."
//   }
   ];

const Services = () => {
  return (
    <section className="services">
      <Title 
      title='Our Services'
      paragraph='We provide reliable, fast, and affordable health screening and treatment services to help you stay healthy.'
      />

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;