import React from 'react'
import { ImgWrapper, Img, Article } from './style'
import { FavButton } from '../FavButton/index'
import { useNearScreen } from '../hooks/useNearScreen'
import { ToggleLikeMutation } from '../container/ToggleLikeMutation'
import { Link } from '@reach/router'
import propTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'
export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({
                    variables: {
                      input: { id }
                    }
                  })
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }
          </ToggleLikeMutation>

        </>}

    </Article>
  )
}

PhotoCard.propTypes = {
  id: propTypes.string.isRequired,
  liked: propTypes.bool.isRequired,
  src: propTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
