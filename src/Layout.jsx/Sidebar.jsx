import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
  { label: 'Home', path: '/Home' },
  { label: 'User', path: '/User' },
  { label: 'Settings', path: '/Settings' },
  { label: 'Camera', path: '/Camera' },
];

const navTitleStyle = {
  width: '100%',
  margin: '4px 8px 8px',
  fontSize: '12px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: '#8fa5c9',
};

const inactiveLinkStyle = {
  display: 'block',
  textDecoration: 'none',
  textAlign: 'left',
  background: 'rgba(7, 11, 19, 0.34)',
  color: '#d6deef',
  borderRadius: '10px',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  padding: '10px 12px',
  transition:
    'background 140ms ease, border-color 140ms ease, color 140ms ease, box-shadow 140ms ease',
};

const activeLinkStyle = {
  ...inactiveLinkStyle,
  background: 'rgba(39, 211, 255, 0.14)',
  border: '1px solid rgba(39, 211, 255, 0.38)',
  boxShadow: '0 0 0 3px rgba(39, 211, 255, 0.1)',
  color: '#f3f6ff',
};

const navLinkStyle = ({ isActive }) => (isActive ? activeLinkStyle : inactiveLinkStyle);

function Sidebar() {
  return (
    <aside className="sidebar">
      <p style={navTitleStyle}>
        Navigation
      </p>
      {menuItems.map((item) => (
        <NavLink key={item.path} to={item.path} className="sidebar-navlink" style={navLinkStyle}>
          {item.label}
        </NavLink>
      ))}
    </aside>
  );
}

export default React.memo(Sidebar);
