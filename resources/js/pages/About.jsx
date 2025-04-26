import React from 'react'
import Layout from './Layout';
import { Head } from '@inertiajs/react'

 function About() {
  return (
    <>
    <Head title='About' />
    <div>About</div>
    </>
  )
}
About.layout = page => <Layout>{page}</Layout>
export default About;
