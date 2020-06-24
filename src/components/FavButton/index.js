import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import propTypes from 'prop-types'

export const FavButton = ({ liked, likes, onClick }) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={onClick}>
      <Icon size='32px' />{likes} likes
    </Button>
  )
}

FavButton.propTypes = {
  liked: propTypes.bool.isRequired,
  likes: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired
}
