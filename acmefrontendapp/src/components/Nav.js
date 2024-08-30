import { Link, useNavigate } from 'react-router-dom';

export default function Nav() {
  const history = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    console.log("reached!!")
    history('/');
  };

  return (
    <div className="Nav">
      <ul className="Nav_list">
        <Link to="/" className="Nav_li">Home</Link>
        <Link to="/AboutUs" className="Nav_li">About us</Link>
        <Link to="/ContactUs" className="Nav_li">Contact us</Link>
        {localStorage.getItem('token') ? (<>
          <Link to="/"><li className="Nav_li" onClick={handleLogout} >Logout</li></Link>
          <Link to="/Customize" className='Nav_li'>Customize</Link>
          </>
        ) : (
          <Link to="/Login" className="Nav_li">Admin</Link>
        )}
      </ul>
    </div>
  );
}
