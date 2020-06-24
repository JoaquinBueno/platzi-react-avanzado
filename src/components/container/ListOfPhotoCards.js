import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCardsComponent } from '../ListOfPhotoCards/ListOfPhotoCards'

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent)
