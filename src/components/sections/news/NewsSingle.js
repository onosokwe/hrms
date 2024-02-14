import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Header from "../../Header";
import Footer from "../../Footer";
import Loader from "../../../utils/Loader";
import { getNews, postNewsComment } from "../../../utils/actions";
import { alertSuccess, alertError } from "../../../utils/alerts";
import { ucWords, ucFirst } from "../../../utils/strings";

const INIT_STATE = {
    name: "",
    email: "",
    comment: "",
};

export default function NewsSingle(props) {
    let { id } = props.match.params;
    const [loading, setLoading] = useState(true);
    const [loadingComment, setLoadingComment] = useState(false);
    const [news, setData] = useState([]);
    const [comments, setComments] = useState([]);
    const [state, setState] = useState(INIT_STATE);
    
    useEffect(() => {
        getNews(id)
            .then((res) => {
                setData(res.data.data);
                setComments(res.data.comments);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err.response);
            });
    }, [id]);
    
    const handleChange = (e) => {
        e.persist();
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleComment = (news_id) => {
        setLoadingComment(true);

        if(state.name && state.email && state.comment && news_id){
            const data = {
                ...state,
                news_id
            }
            postNewsComment(data)
                .then((res) => {
                    alertSuccess(res.data.message);
                    setLoadingComment(false);
                })
                .catch((err) => {
                    setLoadingComment(false);
                    alertError(err.response.data.error);
                });
        } else {
            alertError('All fields are required');
            setLoadingComment(false);
        }
    };

    return (
        <div>
            <Header />
                {loading ? (
                    <Loader />
                ) : (
                    <section className="single-post-content" style={{marginTop: 90, backgroundColor: '#fff'}}>
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-md-12 post-content mt-4">

                                    <div className="single-post mt-4">
                                        <div className="post-meta">
                                            <span className="date">{news.news_category}</span> 
                                            <span className="mx-1">•</span> 
                                            <span>{new Date(news.createdAt).toDateString()}</span>
                                        </div>

                                        <h1 className="mb-5">{news.news_title && parse(news.news_title)} </h1>
                                        
                                        <div className="my-4" style={{backgroundColor: '#999', width:'100%' }}>
                                            <img 
                                                src={news.featuredImg} 
                                                alt="news" 
                                                className="img-fluid" 
                                                style={{
                                                    width: '100%', height:'100%'
                                                }} 
                                            />
                                            <figcaption style={{padding:20}}>
                                                Source: {news.news_source}
                                            </figcaption>
                                        </div>
                                        
                                        <p style={{lineHeight: 1.9, textAlign: 'justify', fontSize: 16}}>
                                            {parse(news.news_details)}
                                        </p>

                                    </div>

                                    <div className="comments">
                                        <h5 className="comment-title py-4">{comments && comments.length} Comments</h5>
                                        {comments && comments.map((comment, i) => (
                                            
                                        <div className="comment d-flex mb-4 bg-light p-3 rounded" key={i}>
                                            <div className="flex-shrink-0">
                                                <div className="avatar avatar-sm rounded-circle">
                                                    <img src={news.featuredImg} alt="" className="avatar-img img-fluid" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-2 ms-sm-3">
                                                <div className="comment-meta d-flex align-items-baseline">
                                                    <h6 className="me-2">{ucWords(comment.name && comment.name)}</h6>
                                                    <span className="text-muted">2d</span>
                                                </div>
                                                <div className="comment-body">
                                                    {parse(ucFirst(comment.comment && comment.comment))}
                                                </div>
                                            </div>
                                        </div>
                                        ))}
                                        {(comments && comments.length <= 0) ? 
                                            <div className="comment d-flex mb-4 bg-light p-3 rounded">Be the first to comment</div>
                                        : null}
                                    </div>

                                    <div className="justify-content-center mt-5">
                                        <h5 className="comment-title">Leave a Comment</h5>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <label htmlFor="comment-name">Name</label>
                                                <input 
                                                    type="text" 
                                                    onChange={handleChange} 
                                                    className="form-control" 
                                                    id="comment-name" 
                                                    name="name"
                                                    placeholder="Enter your name" 
                                                    required
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label htmlFor="comment-email">Email</label>
                                                <input 
                                                    type="email" 
                                                    onChange={handleChange} 
                                                    name="email" 
                                                    className="form-control" 
                                                    id="comment-email" 
                                                    placeholder="Enter your email" 
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label htmlFor="comment-message">Your Comment: <span>limit of 300 characters</span></label>
                                                <textarea 
                                                    name="comment"
                                                    className="form-control" 
                                                    onChange={handleChange} 
                                                    id="comment-message" 
                                                    placeholder="Enter your comment" 
                                                    cols="30" 
                                                    rows="3"
                                                    maxLength={300}
                                                    required
                                                >    
                                                </textarea>
                                            </div>
                                            <div className="col-12">
                                                <button 
                                                    type="submit" 
                                                    onClick={() => handleComment(news._id)} 
                                                    className="btn btn-primary"
                                                >
                                                    {!loadingComment ? "Post comment" : 
                                                    <i className="fa fa-spinner fa-spin"></i>}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </div> 

                            </div>
                        </div>
                    </section>
                )}
            <Footer />
        </div>
    );
}
