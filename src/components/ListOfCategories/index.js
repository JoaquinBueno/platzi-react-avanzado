import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../category'
import { List, Item } from './style'

// Custom Hook
function useCategoriesData () {
  const [categories, setCategories] = useState([])

  const [loading, setLoading] = useState([])
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-joaquinbueno.joaquinbueno.vercel.app/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])

  // Returns state of categories and loading
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  // Getting state values
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed &&
      setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  }, [showFixed])

  const renderList = (fixed) => {
    // Using the loading state to render something while the website is fetching the api
    return (
      <List fixed={fixed}>
        {
          loading ? <Item key='loading'> <Category /> </Item>
            : categories.map(category => <Item key={category.id}><Category {...category} path={`/pet/${category.id}`} /></Item>)
        }
      </List>
    )
  }

  return (
    <>
      {renderList()}
      {showFixed && renderList(true)}
    </>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
