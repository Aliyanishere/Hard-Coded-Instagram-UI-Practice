import React, { Component } from "react";
import './InstaNav.css';
import CameraIcon from '../../Images/Camera Icon.png';
import InstaLogo from '../../Images/InstagramLogo.png';
import igTvIcon from '../../Images/ig tv Icon.png';

class InstaNav extends Component {
    render() {
        return (
            <div className="Nav">
                <div className="navChild">
                    <img className="camIcon" src={CameraIcon} alt="Camera" width={28} />
                    <img className="instaLogo" src={InstaLogo} alt="Instagram" width={110} />
                    <img className="igTvIcon" src={igTvIcon} alt="IG Tv" width={28} />
                    <i className="far fa-paper-plane fa-lg"><i class="fas fa-circle"></i></i>
                </div>
            </div>
        );
    }
}

export default InstaNav;