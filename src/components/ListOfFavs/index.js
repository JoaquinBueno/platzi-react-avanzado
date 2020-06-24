import React from 'react'
import { Grid, Image, Link } from './styles'
import propTypes from 'prop-types'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
        favs.map(fav => <Link key={fav.id} to={`/detail/${fav.id}`}>
          <Image src={fav.src} />)
        </Link>
        )
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      src: propTypes.string.isRequired
    })
  )
}
