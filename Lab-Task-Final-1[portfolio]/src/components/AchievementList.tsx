import React from 'react';
import Achievement from './Achievement';

const AchievementList: React.FC = () => {
    const achievements = [
        { position: '4th', competition: 'AIUB Intra Competitive Programming Contest', year: '2022' },
        { position: '5th', competition: 'AIUB Intra Competitive Programming Contest', year: '2024' }
    ];

    return (
        <div>
            <h2>Achievements: </h2>
            {
                achievements.map((achievement, index) => (
                    <Achievement
                        key={index}
                        position={achievement.position}
                        competition={achievement.competition}
                        year={achievement.year}
                    />
                ))
            }
        </div>
    );
}

export default AchievementList;
