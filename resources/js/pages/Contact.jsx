import React from 'react'
import Layout from './Layout';

function Contact() {
  return (
    <div>Contact</div>
  )
}

Contact.layout = page => <Layout children={page}  />

export default  Contact;
