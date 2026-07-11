import React from 'react'
import ProjectPage from './../components/ProjectPage'
import Layout from '../components/layout'

const FoodFriends = props => (
  <Layout>
    <div>
      <ProjectPage project={props.project} />
    </div>
  </Layout>
)

export default FoodFriends
