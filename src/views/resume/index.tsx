import React from 'react';
import ResumePDF from 'src/assets/Nickolas_Whitman_Resume.pdf';

const Resume: React.FC = () => {
    return (
        <iframe
            src={ResumePDF}
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Nickolas Whitman's Resume PDF"
            allowFullScreen
        />
    );
};

export default Resume;
