import React from 'react';
import classNames from 'classnames';
import { FaBell, FaBars, FaHome } from 'react-icons/fa';

// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Input,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavLink,
  Nav,
  Container,
  Modal,
  UncontrolledTooltip,
} from 'reactstrap';

export interface NeonNavbarProps {
  location: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleMiniClick: any;
  sidebarOpened: boolean;
  toggleSidebar: () => {};
  brandText: string;
}
export interface NeonNavbarState {
  collapseOpen: boolean;
  modalSearch: boolean;
  color: string;
}

class NeonNavbar extends React.Component<NeonNavbarProps, NeonNavbarState> {
  defaultProps = {
    sidebarOpened: true,
    toggleSidebar: () => {},
  };

  // eslint-disable-next-line @typescript-eslint/explicit-member-accessibility
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      modalSearch: false,
      color: '',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateColor);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateColor);
  }

  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  updateColor = () => {
    if (window.innerWidth < 993 && this.state.collapseOpen) {
      this.setState({
        color: 'bg-white',
      });
    } else {
      this.setState({
        color: 'navbar-transparent',
      });
    }
  };

  // this function opens and closes the collapse on small devices
  toggleCollapse = () => {
    if (this.state.collapseOpen) {
      this.setState({
        color: 'navbar-transparent',
      });
    } else {
      this.setState({
        color: 'bg-white',
      });
    }
    this.setState({
      collapseOpen: !this.state.collapseOpen,
    });
  };

  // this function is to open the Search modal
  toggleModalSearch = () => {
    this.setState({
      modalSearch: !this.state.modalSearch,
    });
  };

  render() {
    return (
      <>
        <Navbar
          className={classNames('navbar-absolute', {
            [this.state.color]:
              this.props.location.pathname.indexOf('full-screen-map') === -1,
          })}
          expand="lg"
        >
          <Container fluid>
            <div className="navbar-wrapper">
              <div
                className={classNames('navbar-toggle d-inline', {
                  toggled: this.props.sidebarOpened,
                })}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  style={{ color: '#fafafa' }}
                  onClick={this.props.toggleSidebar}
                >
                  <FaHome />
                </button>
              </div>
              <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                Neon Home Page
              </NavbarBrand>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <Collapse navbar isOpen={this.state.collapseOpen}>
              <Nav className="ml-auto" navbar>
                <InputGroup className="search-bar" tag="li">
                  <Button
                    color="link"
                    data-target="#searchModal"
                    data-toggle="modal"
                    id="search-button"
                    onClick={this.toggleModalSearch}
                  >
                    <i className="tim-icons icon-zoom-split" />
                    <span className="d-lg-none d-md-block">Search</span>
                  </Button>
                </InputGroup>
                <UncontrolledDropdown nav style={{ display: 'none' }}>
                  <DropdownToggle
                    caret
                    color="default"
                    data-toggle="dropdown"
                    nav
                  >
                    <div className="notification d-none d-lg-block d-xl-block" />
                    <FaBell></FaBell>
                    <p className="d-lg-none">Notifications</p>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-navbar" right tag="ul">
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Mike John responded to your email
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        You have 5 more tasks
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Your friend Michael is in town
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Another notification
                      </DropdownItem>
                    </NavLink>
                    <NavLink tag="li">
                      <DropdownItem className="nav-item">
                        Another one
                      </DropdownItem>
                    </NavLink>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <li className="separator d-lg-none" />
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
        <Modal
          modalClassName="modal-search"
          isOpen={this.state.modalSearch}
          toggle={this.toggleModalSearch}
        >
          <div className="modal-header">
            <Input id="inlineFormInputGroup" placeholder="SEARCH" type="text" />
            <button
              aria-label="Close"
              className="close"
              data-dismiss="modal"
              type="button"
              onClick={this.toggleModalSearch}
            >
              <i className="tim-icons icon-simple-remove" />
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

export default NeonNavbar;
