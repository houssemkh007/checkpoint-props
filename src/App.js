import logo from './logo.svg';
import './App.css';
import ProfileData from './component/profile/ProfileData';
import myimg from './myimg.jpg' 

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const profile=[{fullName:"Khemakhem houssem",bio:"blablabla",profession:"ceo of NASA "}]
  const handleName=(name)=>{
alert(`the user name is ${name}`)
  }
  return (
    <div>
    <ProfileData profile={profile} handleName={handleName}>{myimg}</ProfileData>
    </div>
  );
}

export default App;
