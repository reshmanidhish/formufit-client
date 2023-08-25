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

  return (
      // <Navbar className="navbar-top navbar-expand border-bottom navbar-dark bg-gradient-default fixed-top">
      // <Navbar className="navbar-expand-md navbar-dark bg-gradient-default fixed-top" expand="md" id="navbar-main">
        <Navbar className="navbar-top navbar-expand border-bottom navbar-light fixed-top"  id="navbar-main">
          <Container fluid>
            <button
                className="navbar-toggler d-block"
                type="button"
                onClick={props.toggleCollapse}
            >
              <span className="navbar-toggler-icon" />
            </button>
          <Link
              className="navbar-brand"
              to="/"
          >

            {/*{props.brandText}*/}
          </Link>
          {/*<Form className="navbar-search  form-inline mr-3 d-none d-md-flex ml-lg-auto">*/}
          {/*  <FormGroup className="mb-0">*/}
          {/*    <InputGroup className="input-group-alternative">*/}
          {/*      <InputGroupAddon addonType="prepend">*/}
          {/*        <InputGroupText>*/}
          {/*          <i className="fas fa-search" />*/}
          {/*        </InputGroupText>*/}
          {/*      </InputGroupAddon>*/}
          {/*      <Input placeholder="Search" type="text" />*/}
          {/*    </InputGroup>*/}
          {/*  </FormGroup>*/}
          {/*</Form>*/}
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
                      Jessica Jones
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Welcome!</h6>
                </DropdownItem>
                <DropdownItem to="/admin/user-profile" tag={Link}>
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
                  <span>Logout</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>

  );
};

export default AdminNavbar;
