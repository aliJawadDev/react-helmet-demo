import React from 'react';
import Nav from '../Nav'
import { Helmet } from "react-helmet";


function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home Page</title>
        <meta name="description" content="This is Home Page!" />
      </Helmet>
    <Nav/>
    <h2>Home Page</h2>
    </div>
  );
}

export default Home;
