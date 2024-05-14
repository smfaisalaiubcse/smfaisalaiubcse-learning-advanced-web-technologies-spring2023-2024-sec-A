import React, { useState } from 'react';
import Education from './Education';

const EducationList: React.FC = () => {
    const educationList = [
        {
            degree: 'BSc CSE',
            institution: 'American International University Bangladesh',
            duration: 'Oct 2020 – Oct 2024',
            grade: 'CGPA-3.88'
        },
        {
            degree: 'HSC',
            institution: 'Saidpur Govt. Science College',
            duration: 'Jul 2017 – Jul 2019',
            grade: 'GPA-5.00'
        },
        {
            degree: 'SSC',
            institution: 'Cantonment Public School And College Saidpur',
            duration: 'Jan 2014 – Jun 2017',
            grade: 'GPA – 5.00'
        }
    ];

    // const [count, setCount] = useState(0);

    // const addCount = () => {
    //     setCount(count + 1);
    // }

    // const reduceCount = () => {
    //     setCount(count - 1);
    // }

    // const testAlert = (item: string) => {
    //     alert(item);
    // }

    return (
        <div>
            <h2>Education: </h2>
            {
                educationList.map((edu, index) => (
                    <Education
                        key={index}
                        degree={edu.degree}
                        institution={edu.institution}
                        duration={edu.duration}
                        grade={edu.grade}
                    />
                ))
            }
            {/* <button onClick={addCount}> + </button>
            <h2>{count}</h2>
            <button onClick={reduceCount}> - </button> */}
        </div>
    );
}

export default EducationList;
