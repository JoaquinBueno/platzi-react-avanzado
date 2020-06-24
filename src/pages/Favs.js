import React from 'react'
import { FavsWithQuery } from '../components/container/getFavorites'
import { Layout } from '../components/Layout'

export default () => (
  <>
    <Layout title='Your Favorite Photos' subtitle='Here you will find your favorites photos'>
      <FavsWithQuery />
    </Layout>
  </>
)
