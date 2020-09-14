import React from 'react';

function NewsPlate(props) {

    // const loadMore = () => {
    //     window.open(props.data.url,'_blank')
    // }

    return (
        <div className="container">
            <section className="plate">
            <img  className="imageDiv" src={props.data.urlToImage} alt="responsive" />
            
            <div className="info">
            Published: <b>{props.data.publishedAt.slice(0, 10)}</b><br />
            Source: <b>{props.data.source.name}</b> 
             
            <div className="title">
            <b>{props.data.title}</b>
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