import React from 'react';

interface EducationProps {
    degree: string;
    institution: string;
    duration: string;
    grade: string;
}

const Education: React.FC<EducationProps> = ({ degree, institution, duration, grade }) => {
    return (
        <div>
            <h4>{degree}</h4>
            <p>{institution}</p>
            <p>{duration}</p>
            <p>{grade}</p>
        </div>
    );
}

export default Education;
