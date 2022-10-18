import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext);
    console.log(user);
    const handleLogOut=()=>{
        logOut()
        .then(()=>{
          
        })
        .catch(err=>{console.log(err)})
    }
    return (
        <div className='container mx-auto '>





            <div className="navbar bg-neutral text-neutral-content  flex justify-between">
                <Link className="btn btn-ghost normal-case text-xl" to={'/login'}>Login</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/register'}>Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/home'}>Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to={'/order'}>Orders</Link>
              { user?.email && <p >Welcome,<small className="text-xl text-yellow-500">{user?.displayName}</small>   </p>}
<img src="https://lh3.googleusercontent.com/a/ALm5wu2CTxBJTSVR0Vy1fVJMyaKRH_DDkS9uyH_B8YxH=s96-c" alt='' className="img-responsive rounded-full drop-shadow-sm"/>
              {
                user?.email?<button onClick={handleLogOut} className="btn btn-accent">LogOut</button>:<button onClick={handleLogOut} className="btn btn-accent"><Link to={'login'}>SignIn</Link></button>
              }
            </div>


        </div>
    );
};

export default Header;