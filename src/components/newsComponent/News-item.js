import React, { Component } from 'react'
import './news-item.css'

export class NewsItem extends Component {
    render() {
        let { title, desc, imgUrl, newsUrl, date } = this.props;
        return (
            <>
                <div className="card m-2 card-item-container" style={{ width: "18rem", height: "550px" }}>
                    <img height="200px" src={!imgUrl ? "https://images.moneycontrol.com/static-mcnews/2021/08/sensex_nifty_sensex_market-2-770x430.jpg" : imgUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>

                    </div>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary readMore mb-2" >Read more</a>
                    <div className="card-footer text-muted cardFooter">
                        <p className="mx-4 text-center my-2 mb-0">Published on: {new Date(date).toGMTString()}</p>
                    </div>

                </div>
            </>
        )
    }
}

export default NewsItem
