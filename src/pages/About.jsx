import React from 'react';
import photo from '../assets/images/photo.jpg'; // Adjust the path according to your project structure
import { skills } from '../constants';
import CTA from '../components/CTA';
import Footer from '../components/Footer'; // Import the Footer component

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm <span className="blue-gradient_text font-semibold drop-shadow">Awez</span>
      </h1>
      <div className="flex justify-center mt-4">
        <img 
          src={photo} 
          alt="Photo" 
          className="rounded-full w-32 h-32" 
        />
      </div>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I'm an AI ML Data Scientist from India. I'm passionate about data science and
          machine learning.
        </p>
      </div>
      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-x1"/>
              <div className="btn-front rounded-x1 flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
      <Footer /> {/* Add the Footer component here */}
    </section>
  );
}

export default About;




