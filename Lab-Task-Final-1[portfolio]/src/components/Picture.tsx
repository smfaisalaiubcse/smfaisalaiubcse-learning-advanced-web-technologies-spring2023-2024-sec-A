import React from 'react';
import './Picture.css'; // Import the CSS file for styling

const Picture: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
    return (
        <div className="picture-container">
            <img src={src} alt={alt} className="picture" />
        </div>
    );
}

export default Picture;
