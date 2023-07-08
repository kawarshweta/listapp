import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white h-24 flex justify-between p-7 drop-shadow-md">
      <Link to='/'><img className="h-28 w-48 -mt-11" src="https://i.pinimg.com/originals/c3/b3/14/c3b3146e35033a66d563dbce4e53a0b7.png"/></Link>
      <div>
      <Link className="ml-6 font-mono" to='/'>Home</Link>
      <Link to="/cart"><img className="h-24 w-24 ml-28 -mt-16" src="https://static.vecteezy.com/system/resources/thumbnails/004/798/846/small/shopping-cart-logo-or-icon-design-vector.jpg"/></Link>
      </div>
    </div>
  );
};

export default Navbar;
