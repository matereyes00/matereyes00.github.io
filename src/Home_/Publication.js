import React from 'react';
import './Home.css';

const Publication = ({ PubTitle, PubId, PubDescription,articleUrl, PubDate, PubAuthors }) => {
    
    return (
        <div id={PubId}>
            <h1><a href={articleUrl} target="_blank" rel="noreferrer">{PubTitle}</a></h1>
            <h4>{PubDate} | {PubAuthors}</h4>
            <p>{PubDescription}</p>
        </div>
    );
};

export default Publication;
