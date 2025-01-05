import React from 'react';
import Education from './components/education';
import TechnicalSkills from './components/technicalSkills';
import RelatedWorkExperience from './components/relatedWorkExperience';
import ResumeHeader from './components/resumeHeader';

const Resume: React.FC = () => {
    return (
        <div id="Nickolas Whitman's Resume" style={{ paddingBottom: '4px' }}>
            <ResumeHeader />
            <div style={{ paddingLeft: '20px' }}>
                <Education />
                <br />
                <TechnicalSkills />
                <br />
                <RelatedWorkExperience />
            </div>
        </div>
    );
};

export default Resume;
