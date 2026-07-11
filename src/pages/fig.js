import React from 'react'
import ProjectPage from './../components/ProjectPage'
import Layout from '../components/layout'

const Fig = props => (
  <Layout>
    <ProjectPage project={props.project} />
  </Layout>
)

export default Fig
