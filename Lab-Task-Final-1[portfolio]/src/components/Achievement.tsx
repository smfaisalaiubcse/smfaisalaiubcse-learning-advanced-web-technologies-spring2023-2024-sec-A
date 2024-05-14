import React from 'react';

interface AchievementProps {
    position: string;
    competition: string;
    year: string;
}

const Achievement: React.FC<AchievementProps> = ({ position, competition, year }) => {
    return (
        <div>
            <p>{position} at {competition} [{year}]</p>
        </div>
    );
}

export default Achievement;
