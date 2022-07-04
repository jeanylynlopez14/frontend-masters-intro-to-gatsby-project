import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout title="About this site" description="More info abou this site">
      <h1>About this site!</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
