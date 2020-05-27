import React, { useState } from 'react';
import { UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import langAction from '../../redux/lang/action';

import { AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from './img/brand/edo.png';

export default (props) => {
  const [state, setState] = useState({ lang: 'en', ddlLanguageOpen: false });

  const changeLanguage = (lang) => {
    langAction.changeLanguage(lang);
    setState((state) => ({ ...state, lang }))
  }

  return (
    <React.Fragment>
      <AppSidebarToggler className="d-lg-none" display="md" mobile />
      <AppNavbarBrand style={{ marginLeft: '20px' }}
        full={{ src: logo, height: 45, alt: 'Company Logo' }}
        minimized={{ src: logo, height: 30, alt: 'Company Logo' }}
      />
      <AppSidebarToggler className="d-md-down-none" display="lg" />
      <Nav className="d-md-down-none" navbar>
        <NavItem className="px-3">
        </NavItem>
      </Nav>
      <Nav className="ml-auto mr-2" navbar>
        {
          state.lang === 'en' ? (
            <NavItem className="d-md-down-none">
              <NavLink to="#" onClick={() => changeLanguage('id')} className="nav-link">
                <div>EN</div>
              </NavLink>
            </NavItem>
          ) : (
              <NavItem className="d-md-down-none">
                <NavLink to="#" onClick={() => changeLanguage('en')} className="nav-link">
                  <div>ID</div>
                </NavLink>
              </NavItem>
            )
        }

        <UncontrolledDropdown nav direction="down">
          <DropdownToggle nav>
            <img src={'../../assets/img/avatars/1.jpg'} className="img-avatar" alt="admin@dashboard.com" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
            <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
            <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
            <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
            <DropdownItem onClick={e => props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </React.Fragment>
  );
}
