import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <div className="bg-white h-24 flex justify-between p-7 drop-shadow-md pr-8">
      <Link to='/'><img className="h-28 w-48 -mt-11" src="https://i.pinimg.com/originals/c3/b3/14/c3b3146e35033a66d563dbce4e53a0b7.png"/></Link>
      <div>
      <Link className="mr-10" to='/'><FontAwesomeIcon  className="h-7" icon={faHouse} /></Link>
      <Link to="/cart"><FontAwesomeIcon  className="h-7" icon={faCartShopping} /></Link>
      </div>
    </div>
  );
};

export default Navbar;
