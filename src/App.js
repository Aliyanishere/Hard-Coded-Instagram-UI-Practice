import './App.css';
import InstaNav from './InstaComponents/InstaNav/InstaNav.jsx';
import UserPost from './InstaComponents/UserPost/UserPost';
import Footer from './InstaComponents/instaFooter/instaFooter';
import userImage1 from './Images/user2.jpg';
import userPost1 from './Images/userPost1.jpg';
import userImage2 from './Images/user1.jpg';
import userPost2 from './Images/userPost2.jpg';
import userImage3 from './Images/user3.png';
import userPost3 from './Images/userPost3.jpeg';
import userImage4 from './Images/user4.png';
import userPost4 from './Images/userPost4.jpg';
import userImage5 from './Images/user5.jpg';
import userPost5 from './Images/userPost5.jpg';

function App() {
  return (
    <div className="App">
      <InstaNav />
      <UserPost userImage={userImage1} userName="Aliyan_hussain" userLocation="Karachi, Pakistan" UserPost={userPost1} caption="At hawksbay Kar..." />
      <UserPost userImage={userImage2} userName="Ahmedhussain" userLocation="Lahore, Pakistan" UserPost={userPost2} caption="Kuch metha hojae..." />
      <UserPost userImage={userImage3} userName="Suleyman" userLocation="Ankara, Turkey" UserPost={userPost3} caption="Searching for likes..." />
      <UserPost userImage={userImage4} userName="Oliver" userLocation="New York, US" UserPost={userPost4} caption="Today I visit Kar..." />
      <UserPost userImage={userImage5} userName="Jaintkumar" userLocation="Delhi, India" UserPost={userPost5} caption="Today I visit Kar..." /><br /><br />
      <Footer />
    </div>
  );
}

export default App;
