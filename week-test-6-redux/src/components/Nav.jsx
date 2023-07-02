import {Link} from 'react-router-dom'
function Nav(props) {
    
    return (
      <div className="nav">
        <div className="title flexC">
          <h2>Geekster</h2>
        </div>
  
        <div className="menu flexC" style={{display:"flex", flexDirection:"column", gap:"15px"}}>
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    );
  }
  
  export default Nav;