import { Component } from "react";
import './instaFooter.css';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerChild">
                    <i class="fas fa-home"></i>
                    <i class="fas fa-search"></i>
                    <i class="far fa-plus-square"></i>
                    <i class="far fa-heart Heart"></i>
                    <i class="far fa-user"></i>
                </div>
            </div>
        );
    };
};

export default Footer;