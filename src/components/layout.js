import React from 'react'
import Helmet from 'react-helmet'

import Header from './header'
import './main.css'
import About from './About'
import Divider from './Divider'
import { graphql, StaticQuery } from 'gatsby'

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Jessica Hsu Portfolio' },
            {
              name: 'keywords',
              content:
                'Frontend Web Software Engineer JavaScript TypeScript React Node Svelte UI UX Web Developer',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
        <Divider />
        <About />
        <Divider />
      </>
    )}
  />
)

export default Layout
