import React from 'react';
const Home = () => {
  return (
    <div>
      <p>Your assigned bugs</p>
      <main>
        <ul className="title">
          <li>Project Name</li>
          <li>Description</li>
          <li>Bug Type</li>
          <li>Status</li>
        </ul>
        <div id="groupName">
          <ul className="bug">
            <li>Project Name</li>
            <li>Description</li>
            <li>Bug Type</li>
            <li>Status</li>
          </ul>
          <ul className="bug-detail">
            <li>Project Name</li>
            <li>Description</li>
            <li>Bug Type</li>
            <li>Status</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
