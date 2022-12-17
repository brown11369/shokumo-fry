import { Link, useNavigate} from "react-router-dom";
export default function Menu() {

    const navigat = useNavigate()

    let user=JSON.parse(localStorage.getItem('user'))

    function logout(){

        localStorage.removeItem('user')
        localStorage.removeItem('userToken')
        navigat('/')

}


    return (
        <>
            {/* <!-- ------- header section ------- --> */}
            <header className="box header">
                <div className="container">
                    <div className="logo"> <Link to="/">Shokumo<span className="fury">fry</span></Link></div>
                    <div className="search">
                        <input className="srch" type="text" placeholder="Search for Products" />
                        <Link><button className="homebtn sub_btn">Search</button></Link>
                    </div>
                    <div className="header-link">
                        
                        {user===null?<Link to="/user-sign" className="bold-nav-link">Login / Register</Link>:<>
                        <Link className="bold-nav-link" to="/cart"><i className="fa-solid fa-cart-shopping"></i></Link>
                        <Link className="bold-nav-link" to="/order">Order</Link>
                        <Link className="bold-nav-link" to="/order"><i className="fas fa-user-circle"></i>{user?.name}</Link>
                        <span onClick={logout}><i className="fas fa-sign-out"></i>Log Out</span>
                        
                        </>}
                        {/* <a className="bold-nav-link" href="#">Login / Register</a> */}
                    </div>
                </div>
            </header>

            {/* <!-- ------- navigation section ------- --> */}

            <nav className="box navigation">
                <div className="nav container">
                    <div className="prime-navigation-link">
                        <Link className="bold-link dropdown-link" to="/restaurants">Restaurants</Link>
                    </div>
                    <div className="prime-navigation-link">
                        <Link className="link" to="/">Home</Link>
                        <Link className="link" to="/shop">Shop</Link>
                        {/* <Link className="link" href="#">Pages</Link> */}
                        <Link className="link" to="/blogs">Blogs</Link>
                        <Link className="link" to="/contact">Contact</Link>
                    </div>
                    <div className="prime-navigation-link">
                        <Link className="bold-link" href="#">Hotline: 1-800-234-5678</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}