import React, { Component } from "react";
import './UserPost.css';
import likeIcon1 from '../../Images/user1.jpg';
import likeIcon2 from '../../Images/user5.jpg';
import likeIcon3 from '../../Images/user2.jpg';


class UserPost extends Component {
    render() {
        return (
            <div className="main">
                <div className="userDetails">
                    <div className="userDetailsChild">
                        <img className="userIcon" src={this.props.userImage} alt={this.props.userName} />
                        <div className="NamenLocation">
                            <div className="userName">{this.props.userName}</div>
                            <div className="userLocation">{this.props.userLocation}</div>
                        </div>
                    </div>
                    <i className="fas fa-ellipsis-h"></i>
                </div>
                <div className="PicOrVideo">
                    <img className="userPicOrVideo" src={this.props.UserPost} alt="Error" />
                </div>
                <div className="LikeCommentSection">
                    <i className="far fa-heart"></i>
                    <i className="far fa-comment"></i>
                    <i className="far fa-paper-plane"></i>
                    <i className="far fa-bookmark"></i>
                </div>
                <div className="LikeCount">
                    <img className="LikeIcon1" src={likeIcon1} width="23px" height="23px" alt="*" />
                    <img className="LikeIcon2" src={likeIcon2} width="23px" height="23px" alt="*" />
                    <img className="LikeIcon3" src={likeIcon3} width="23px" height="23px" alt="*" />
                    <p>Liked by <b>aliyanishere</b> and <b>70</b> others</p>
                </div>
                <div className="Caption">
                    <p><b>{this.props.userName}</b>{this.props.caption}<i>more</i></p>
                    <p className="viewComment">View all 10 comments</p>
                </div>
                <div className="Comment">
                    <img src={this.props.userImage} alt={this.props.userName} />
                    <p className="addComment">Add a comment...</p>
                </div>
                <div>
                    <p className="postingTime">3 hours ago</p>
                </div>
            </div>
        );
    }
}

export default UserPost;