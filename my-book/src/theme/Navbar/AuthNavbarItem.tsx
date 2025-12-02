
// my-book/src/theme/Navbar/AuthNavbarItem.tsx
import React from 'react';
import NavbarItem from '@theme/NavbarItem';
import { useAuth } from '../../../context/AuthContext'; // Adjust path

const AuthNavbarItem: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  if (isAuthenticated) {
    return (
      <NavbarItem
        label="Logout"
        onClick={logout}
        activeClassName="navbar__link--active"
        className="button button--secondary button--sm"
      />
    );
  } else {
    return (
      <>
        <NavbarItem
          to="/signin"
          label="Sign In"
          position="right"
          activeClassName="navbar__link--active"
          className="button button--primary button--sm mr-2"
        />
        <NavbarItem
          to="/signup"
          label="Sign Up"
          position="right"
          activeClassName="navbar__link--active"
          className="button button--success button--sm"
        />
      </>
    );
  }
};

export default AuthNavbarItem;
