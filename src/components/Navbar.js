import './Navbar.css'

function Navbar() {
  return(
    // <!-- BEGIN NAVBAR -->
    <div className="navbar">
      <img className="logo-image" src="https://linksquares.com/wp-content/themes/linksquares/dist/images/logos/logo_643dd1b1.svg" alt="" />
      <a className="product">Product</a>
      <a className="solutions">Solutions</a>
      <a className="customerStories">Customer Stories</a>
      <a className="resources">Resources</a>
      <a className="company">Company</a>
      <a className="nav-button request-nav">Request a Demo</a>
      <a className="nav-button login-nav">Login</a>
  </div>
  // <!-- END NAVBAR -->
  )
}

export default Navbar;