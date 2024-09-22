import React from 'react';
import Education from './components/education';
import TechnicalSkills from './components/technicalSkills';

const Resume: React.FC = () => {
  return (
    <div>
      <h1>Nickolas Whitman</h1>
      <Education />
      <TechnicalSkills/>


    </div>
  );
};

export default Resume;
