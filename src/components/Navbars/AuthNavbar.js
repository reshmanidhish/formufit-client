import dotImg from "../../assets/img/welcome-page/dot.png";
const AdminNavbar = () => {
  return (
    <>
    <header className="header header-auth">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
                  <a href="/">
                    <div className="logo d-flex flex-row align-items-center justify-content-start">
                      <img src={dotImg} alt="" />{" "}
                      <div>
                        Formu<span>fit</span>
                      </div>
                    </div>
                  </a>
                  <nav className="main_nav">
                    <ul className="d-flex flex-row align-items-center justify-content-start">
                      <li className="active">
                        <a href="/">Home</a>
                      </li>
                      
                      <li>
                        <a href="/">Blog</a>
                      </li>
                      <li>
                        <a href="/">Contact</a>
                      </li>
                      <li>
                        <a href="/auth/register">Sign up</a>
                      </li>
                      <li>
                        <a href="/auth/login">Login</a>
                      </li>
                    </ul>
                  </nav>
                  <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div>652-345 3222 11</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
    {/* <header className="header header-auth">
   <div className="container">
      <div className="row">
         <div className="col">
            <div className="header_content d-flex flex-row align-items-center justify-content-start trans_400">
               <a href="/">
                  <div className="logo d-flex flex-row align-items-center justify-content-start">
                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk2RkYyNTEzQkJGRTExRTg4QUY1RERCNjU1Rjk0QjEwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjk2RkYyNTE0QkJGRTExRTg4QUY1RERCNjU1Rjk0QjEwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTZGRjI1MTFCQkZFMTFFODhBRjVEREI2NTVGOTRCMTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTZGRjI1MTJCQkZFMTFFODhBRjVEREI2NTVGOTRCMTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Rn896AAACXUlEQVR42pRWS24TQRDt7hnPx05YIIwQC7yHXCIHgCVg9oElYoHCDSALiJA4AoQkSw5AOARsIY6i8ElEJDx/T8/wyvQEMtM9Hsp6suLueq+7qroq/NXhmLXYNeAesApcB4bADDgEJsAHYAf4YiLgBgEifgbcBizWboUSeQIc1BdtjcMt4DWwrGNzHBdwWM+2mRAWK8tSFEUxzmV+M8uy+1mWvm0TeAi8AEST2GF9f8As6/yFOOfz34Al13HfSNm/EsXhJsQaAneATfKpk/f7A+Z7vjFGvnUBWGaO8Lng1vNiII/iPNz5Of12lgOK+Sdg6X/ILd5jF52rrCe8+lIA3KCcVKF4qiOneLeRD92Rjpwprg2mYj0C7up2DXB6k9HJEY626qIKHAlF3kgqEoYqEcaYG07+r825hXpETFc1JutDoKOtksCKbsW2e0avDqevbIUELmmfuODmu3Orq8BQGJfKlt5Qyq4C80ScaEmKwug0K5Ku/MdCPbCGSZkbvSL5q6vARxJ4r1upeonOYgh0vMWeUK22EY80S1vDdJodLcrFvI2TwD6wq9sRRqHROy9n7CSdtN2EOPerKlpXDaoWppTFSdwqcgyR0+wrS2TAZJmj+Er6DvD3+vdwctauaRKtAVv1dh3hFhwfz/NacxL/TTwV+FqSJAdhFJzrQdvAI10+aOM0mKKyFtZ/iT2PsXebfHQT7aUa4I2RSeEiuGpk2mpk/nkzkuV5HqDyHqA4thbN5HeqP22olivq1UWoVcuuymOnoV/lZKycqn9baEJdVus/1APdU+SfTTH7LcAAWlTsORjHvakAAAAASUVORK5CYII=" alt=""/> 
                     <div>Formu<span>fit</span></div>
                  </div>
               </a>
               <nav className="main_nav">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                     <li><a href="/">Home</a></li>
                     <li><a href="/">Blog</a></li>
                     <li><a href="/">Contact</a></li>
                     <li className="active"><a href="/auth/signup">Sign up</a></li>
                     <li><a href="/auth/login">Login</a></li>
                  </ul>
               </nav>
               <div className="phone d-flex flex-row align-items-center justify-content-start ml-auto">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <div>652-345 3222 11</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</header> */}
     {/* <div className="menu trans">
          <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center navbar-welcome-top">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
              <li>
                <a href="services.html">Classes & Services</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          <div className="menu_phone d-flex flex-row align-items-center justify-content-start">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>652-345 3222 11</span>
          </div>
        </div> */}
      {/* <Navbar className="navbar-top navbar-horizontal navbar-dark navbar-welcome-top" expand="md">
        <Container className="px-4">
          <NavbarBrand to="/" tag={Link}>
            <img
              alt="..."
              src={require("../../assets/img/brand/formufit.png")}
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={require("../../assets/img/brand/argon-react.png")}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link-icon" to="/" tag={Link}>
                  <i className="ni ni-planet" />
                  <span className="nav-link-inner--text">Dashboard</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/auth/register"
                  tag={Link}
                >
                  <i className="ni ni-circle-08" />
                  <span className="nav-link-inner--text">Register</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className=" login" to="/auth/login" tag={Link}>
                  <i className="ni ni-key-25" />
                  <span className="nav-link-inner--text">Login</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  to="/admin/user-profile"
                  tag={Link}
                >
                  <i className="ni ni-single-02" />
                  <span className="nav-link-inner--text">Profile</span>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar> */}
    </>
  );
};

export default AdminNavbar;
