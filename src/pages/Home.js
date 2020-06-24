import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../components/container/ListOfPhotoCards'
import { Helmet } from 'react-helmet'

const HomePage = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Show us your pet | Petgram </title>
        <meta name='description' content='With Petgram you can share photos of your pet' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props.id
})
