import React from 'react';
import Nav from '../Nav'
import { Helmet } from "react-helmet";


function Contact() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <meta name="description" content="This is contact us!" />
      </Helmet>
    <Nav/>
    <h2>Contact Us</h2>
    </div>
  );
}

export default Contact;