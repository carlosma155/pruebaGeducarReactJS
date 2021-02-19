import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getUser, getPosts, unmountUserDetails, unmountPosts, getComments, setToogle, unmountComments } from '../actions';
import CardProfile from '../components/CardProfile';
import Posts from '../components/Posts';
import '../assets/styles/UserDetails.scss';


const UserDetails = (props) => {

    const { userDetails, postsList } = props;
    const userId = props.match.params.userId;
    const user = userDetails;
    const [currentItem, setCurrentItem]= useState(0);

    useEffect(() => { 
        props.getUser(userId) 
        props.getPosts(userId)              
        return () => {
            props.unmountUserDetails({})
            props.unmountPosts([])
        }  
    }, [])

    const handleClick = (id) => {

        props.unmountComments([])
        props.getComments(id)
        props.setToogle();
        setCurrentItem(id);
    }

    return (
        <div className="container userDetailsContainer">
            <div className="row">
                <div className="col-5">                    
                    <CardProfile user={user} />                    
                </div>
                <div className="col-7">
                    <h3>Posts</h3>
                    {postsList.map(post => 
                            <li className="col-12" key={post.id}>
                                <Posts handleClick={handleClick} itemActive={post.id === currentItem} {...post} />
                            </li>                        
                    )}
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userDetails: state.userDetails,
        postsList: state.postsList
    }
}

const mapToDispatchToProps = {    
    getUser,
    getPosts,    
    unmountUserDetails,
    unmountPosts,
    getComments,
    setToogle,
    unmountComments
}

export default connect (mapStateToProps, mapToDispatchToProps) (UserDetails);
