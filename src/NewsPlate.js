import React from 'react';

function NewsPlate(props) {


    return (
        <div className="container">
            <section className="plate">
            <img  className="imageDiv" src={props.data.image.thumbnail.contentUrl} alt="responsive" />
            
            <div className="info">
            Published: <b>{props.data.datePublished.slice(0, 10)}</b><br />
            Source: <b>{props.data.provider.map((name,index) => 
                        (<span key={index}>{name.name}</span>))}</b> 
             
            <div className="title">
            <b>{props.data.name}</b>
            </div>
            
            <div className="description">
            <p>{props.data.description}</p>
            </div>

            
            <a href={props.data.url} target="_blank" rel="noopener noreferrer">
                <button className="btn">Learn more..</button>
            </a>
            

            </div> 
            </section>


             
        </div>
    );
}

export default NewsPlate;