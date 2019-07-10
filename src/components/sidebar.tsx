/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from 'perfect-scrollbar';
import {
  FaDiscord,
  FaSpotify,
  FaHome,
  FaBook,
  FaBarcode,
  FaShoppingCart,
} from 'react-icons/fa';
import classNames from 'classnames';

// reactstrap components
import { Nav, Collapse } from 'reactstrap';

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeColor, logo } = this.props;
    let logoImg = null;
    let logoText = null;
    logoImg = (
      <Link
        to="/"
        className="simple-text logo-mini"
        onClick={this.props.closeSidebar}
      >
        <div className="logo-img">💚</div>
      </Link>
    );
    logoText = (
      <Link
        to="/"
        className="simple-text logo-normal"
        onClick={this.props.closeSidebar}
      >
        Neon
      </Link>
    );
    return (
      <div className="sidebar" data={activeColor}>
        <div className="sidebar-wrapper" ref="sidebar">
          <div className="logo">
            {logoImg}
            {logoText}
          </div>
          <Nav>
            <li
              className={classNames({
                active: this.props.location.pathname === '/',
              })}
            >
              <Link to="/">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <a href="/discord">
                <FaDiscord /> Discord
              </a>
            </li>
            <li>
              <a href="/spotify">
                <FaSpotify /> Spotify
              </a>
            </li>
            <li>
              <a href="/market">
                <FaShoppingCart /> Market
              </a>
            </li>
            <li>
              <a href="/price-check-guide">
                <FaBarcode /> Price Check Guide
              </a>
            </li>
            <li>
              <a href="/lending-ledger">
                <FaBook /> Lending Ledger
              </a>
            </li>
          </Nav>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  location: PropTypes.any,
  logo: PropTypes.oneOfType([
    PropTypes.shape({
      innerLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
    PropTypes.shape({
      outterLink: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ]),
  // this is used on responsive to close the sidebar on route navigation
  closeSidebar: PropTypes.func,
};

export default Sidebar;
