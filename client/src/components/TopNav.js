import React from 'react';

const TopNav = (isLoggedIn) => {
  return (
    <nav>
      <ul>
        <li>BugTracker (logo)</li>
        <li>
          <a onClick={() => console.log('logout/in')} href="#">
            {isLoggedIn ? `Logout` : `Login`}
          </a>
        </li>
      </ul>
      <hr />
    </nav>
  );
};

export default TopNav;
