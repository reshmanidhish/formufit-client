import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import {Link} from "react-router-dom";
// reactstrap components
import {
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Nav,
  Navbar,
  UncontrolledDropdown,
} from "reactstrap";

const AdminNavbar = (props) => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
      // <Navbar className="navbar-top navbar-expand border-bottom navbar-dark bg-gradient-default fixed-top">
      // <Navbar className="navbar-expand-md navbar-dark bg-gradient-default fixed-top" expand="md" id="navbar-main">
        <Navbar className="navbar-top navbar-expand border-bottom navbar-light fixed-top"  id="navbar-main">
          <Container fluid>
            {/* <button
                className="navbar-toggler d-block"
                type="button"
                onClick={props.toggleCollapse}
            >
              <span className="navbar-toggler-icon" />
            </button> */}
          <Link
              className="navbar-brand"
              to="/"
          >

            {/*{props.brandText}*/}
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle">
                    <img
                        alt="..."
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                    />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                    {user.username}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/user-profile" tag={Link}>
                  <i className="ni ni-single-02" />
                  <span>My profile</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-settings-gear-65" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-calendar-grid-58" />
                  <span>Activity</span>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
                  <i className="ni ni-support-16" />
                  <span>Support</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                  <i className="ni ni-user-run" />
                  <span onClick={logOutUser}>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>

  );
};

export default AdminNavbar;
