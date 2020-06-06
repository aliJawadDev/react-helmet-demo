import React from 'react';
import Nav from '../Nav'
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <meta name="description" content="This is about us!" />
      </Helmet>
      <Nav />
      <h2>About Page</h2>
    </div>
  );
}

export default About;
