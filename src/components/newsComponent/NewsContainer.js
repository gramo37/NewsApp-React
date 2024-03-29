import React, { Component } from 'react'
import NewsItem from './News-item'
import './news.css';
import Loading from '../loading/Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export class NewsContainer extends Component {
    // articles = []
    static defaultProps = {
        country: "in",
        pageSize: 12,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    articles = [
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Ilyes Kacher",
            "title": "Data scientists: don't be afraid to explore new avenues",
            "description": "While there has been an uptick in fully remote jobs thanks to the pandemic, extending the scope of your job search will provide more opportunities that match your interest.",
            "url": "https://techcrunch.com/2021/08/27/europe-based-data-scientists-be-ready-to-relocate/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/GettyImages-1222241303.jpg?w=533",
            "publishedAt": "2021-08-28T06:23:45Z",
            "content": "Im a native French data scientist who cut his teeth as a research engineer in computer vision in Japan and later in my home country. Yet Im writing from an unlikely computer vision hub: Stuttgart, Ge… [+4071 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Brian Heater",
            "title": "OnePlus Buds Pro review: Much better",
            "description": "What does a company have to do to differentiate wireless earbuds in 2021? The near ubiquity of good hardware has made this an increasingly difficult question to answer. I’ve probably tested around 10 different sets of buds over the last year or so, and honest…",
            "url": "https://techcrunch.com/2021/08/27/oneplus-buds-pro-review-much-better/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/CMC_9964.jpg?w=600",
            "publishedAt": "2021-08-27T23:35:10Z",
            "content": "What does a company have to do to differentiate wireless earbuds in 2021? The near ubiquity of good hardware has made this an increasingly difficult question to answer. Ive probably tested around 10 … [+4446 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Miranda Halpern",
            "title": "Making a splash in the marketing world",
            "description": "“There are three common blunders that most SaaS marketers make time and again when it comes to clarity and high-converting content,” says Konrad Sanders, founder and CEO of The Creative Copywriter, “1. Not differentiating from competitors. 2. Not humanizing ‘…",
            "url": "https://techcrunch.com/2021/08/27/making-a-splash-in-the-marketing-world/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/guy-kawasaki-4ShE4r_WHgM-unsplash.jpg?w=600",
            "publishedAt": "2021-08-27T23:05:54Z",
            "content": "There are three common blunders that most SaaS marketers make time and again when it comes to clarity and high-converting content, says Konrad Sanders, founder and CEO of The Creative Copywriter, 1. … [+3847 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Alex Wilhelm",
            "title": "Daily Crunch: In latest tech crackdown, China plans severe algorithm restrictions",
            "description": "Hello friends and welcome to Daily Crunch, bringing you the most important startup, tech and venture capital news in a single package.",
            "url": "https://techcrunch.com/2021/08/27/2195254/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/05/GettyImages-1148122627.jpg?w=600",
            "publishedAt": "2021-08-27T22:10:44Z",
            "content": "To get a roundup of TechCrunchs biggest and most important stories delivered to your inbox every day at 3 p.m. PDT, subscribe here.\r\nHello and welcome to Daily Crunch for Friday, August 27, 2021. Wha… [+7111 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Aisha Malik",
            "title": "TikTok bans viral 'milk crate challenge' over safety concerns",
            "description": "TikTok has banned the popular ‘milk crate challenge’ from its platform due to concerns that users participating in the trend could be seriously injured. The challenge saw TikTok users stacking milk crates into a pyramid and then attempting to climb across the…",
            "url": "https://techcrunch.com/2021/08/27/tiktok-bans-viral-milk-crate-challenge-over-safety-concerns/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/09/GettyImages-1183804986-1.jpg?w=600",
            "publishedAt": "2021-08-27T21:21:31Z",
            "content": "TikTok has banned the popular milk crate challenge from its platform due to concerns that users participating in the trend could be seriously injured. The challenge saw TikTok users stacking milk cra… [+2146 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Walter Thompson, Annie Siebert",
            "title": "Extra Crunch roundup: Pre-pitch tactics, Warby Parker S-1, Israel’s fintech ecosystem",
            "description": "Forget what you've heard: There are *many* shortcuts to success.",
            "url": "https://techcrunch.com/2021/08/27/extra-crunch-roundup-pre-pitch-tactics-warby-parker-s-1-israels-fintech-ecosystem/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/GettyImages-1289393096.jpg?w=600",
            "publishedAt": "2021-08-27T20:57:56Z",
            "content": "Forget what you’ve heard: There are many shortcuts to success.\r\nTapping into someone else’s experience is a tried-and-true method, which is why two-time Y Combinator participant Chris Morton wrote a … [+8169 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sean Michael Kerner",
            "title": "Linux 5.14 set to boost future enterprise application security",
            "description": "Linux is set for a big release this Sunday August 29, setting the stage for enterprise and cloud applications for months to come. The 5.14 kernel update will include security and performance improvements. A particular area of interest for both enterprise and …",
            "url": "https://techcrunch.com/2021/08/27/linux-5-14-set-to-boost-future-enterprise-application-security/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/linus-1.jpg?w=711",
            "publishedAt": "2021-08-27T20:03:21Z",
            "content": "Linux is set for a big release this Sunday August 29, setting the stage for enterprise and cloud applications for months to come. The 5.14 kernel update will include security and performance improvem… [+4065 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Evan Fisher",
            "title": "The pre-pitch: 7 ways to build relationships with VCs",
            "description": "Building relationships with potential investors requires you to think less like a founder and more like a marketer — much of the legwork comes long before it's time to ask for a commitment.",
            "url": "https://techcrunch.com/2021/08/27/the-pre-pitch-7-ways-to-build-relationships-with-vcs/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/GettyImages-1310600143.jpg?w=648",
            "publishedAt": "2021-08-27T19:44:41Z",
            "content": "More posts by this contributor\r\nMost founders fall into an extremely common trap: Just because you produced outstanding results for the last round of investors doesn’t mean new investors will believe… [+2865 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Sean Michael Kerner",
            "title": "Microsoft is discontinuing its Office apps for Chromebook users in favor of web versions",
            "description": "Since 2017, Microsoft has offered its Office suite to Chromebook users via the Google Play store, but that is set to come to an end in a few short weeks. As of Sept. 18, Microsoft is discontinuing support for Office, which includes Word, Excel, PowerPoint, On…",
            "url": "https://techcrunch.com/2021/08/27/microsoft-is-discontinuing-its-office-apps-for-chromebook-users-in-favor-of-web-versions/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2020/12/GettyImages-1170757059.jpg?w=600",
            "publishedAt": "2021-08-27T18:53:30Z",
            "content": "Since 2017, Microsoft hasoffered its Office suite to Chromebook users via the Google Play store, but that is set to come to an end in a few short weeks.\r\nAs of Sept. 18, Microsoft is discontinuing su… [+1876 chars]"
        },
        {
            "source": {
                "id": "techcrunch",
                "name": "TechCrunch"
            },
            "author": "Taylor Hatmaker",
            "title": "Stipop offers developers and creators instant access to a huge global sticker library",
            "description": "With more than 270,000 stickers, Stipop’s library of colorful, character-driven expressions has a little something for everyone. The company offers keyboard and social app stickers through ad-supported mobile apps on iOS and Android, but it’s recently focused…",
            "url": "https://techcrunch.com/2021/08/27/stipop-sticker-library/",
            "urlToImage": "https://techcrunch.com/wp-content/uploads/2021/08/stipop.png?w=764",
            "publishedAt": "2021-08-27T18:39:15Z",
            "content": "With more than 270,000 stickers, Stipop’s library of colorful, character-driven expressions has a little something for everyone.\r\nThe company offers keyboard and social app stickers through ad-suppor… [+3755 chars]"
        }
    ]

    capitalize = (given_input) => {
        return (given_input.substring(0, 1).toUpperCase() + given_input.substring(1, given_input.length))
    }

    updateNews = async () => {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&Page=${this.state.pageNumber}&pageSize=${this.props.pageSize}`
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        this.props.setProgress(40)
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            NoOfArticles: parsedData.totalResults,
            loading: false
        })
        this.props.setProgress(80)
        document.title = `${this.capitalize(this.props.category)} - GramoNews`
        this.props.setProgress(100)
    }

    // This code executes when prev button is clicked
    onPrevClick = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber - 1
        })
        this.updateNews();
    }

    // This code executes when next button is clicked
    onNextClick = async () => {
        await this.setState({
            pageNumber: this.state.pageNumber + 1
        })
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({ pageNumber: this.state.pageNumber + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&Page=${this.state.pageNumber}&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            NoOfArticles: parsedData.totalResults
        })
    }

    // This is called first when the this component is used
    constructor() {
        super();
        // Setting of state initially
        this.state = {
            articles: [],
            pageNumber: 1,
            NoOfArticles: 0,
            loading: true,
        }
        // const [progress, setProgress] = useState(0)

        document.title = `GramoNews`
    }

    // This is called second
    render() {
        return (
            <>
                <div className="text-center my-4" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                    {/* {this.state.loading && <Loading />} */}
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.NoOfArticles}
                    loader={<div className="text-center my-4" style={{ position: "relative" }}>
                        {<Loading />}
                    </div>}
                >
                    <div className="container-fluid my-3 news-container">
                        {this.state.articles.map((ele) => {
                            return (<div className="xyz" key={ele.url}>
                                <NewsItem
                                    title={ele.title ? (ele.title.length > 95 ? ele.title.substring(0, 94) : ele.title) : "Title Not Available"}

                                    desc={ele.description ? (ele.description.length > 120 ? ele.description.substring(0, 119) : ele.description) : "Description Not Available"}

                                    imgUrl={ele.urlToImage}

                                    newsUrl={ele.url}

                                    date={ele.publishedAt} />
                            </div>)
                        })}
                    </div>
                </InfiniteScroll>
            </>
        )
    }

    // This is called third
    async componentDidMount() {
        this.updateNews();
    }
}

export default NewsContainer
