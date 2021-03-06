import React, { Component } from 'react'
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';

class NewsCard extends Component {
    render() {
        const {
            id, newsTitle, newsText 
        } = this.props.item;


        return (
            <InfoConsumer>
                {data => (
                    <div className="card-container mt-2 mb-3 p-5">
                        <div className="card-body">
                            <h5 key={id} className="card-title">{newsTitle}</h5>
                            <p className="card-text">{newsText}</p>
                            <Link
                                className="card-link"
                                to="/news"
                            >
                                Read more...
                            </Link>
                        </div>
                    </div>
                )}
            </InfoConsumer>                
        )
    }
}

export default NewsCard
