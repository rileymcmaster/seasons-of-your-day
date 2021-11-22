import loopVideo from './loopVideo.mp4'
export { loopVideo }
const img1L = require('./large/Photo1.jpg')
const img2L = require('./large/Photo2.jpg')
const img3L = require('./large/Photo3.jpg')
const img4L = require('./large/Photo4.jpg')
const img5L = require('./large/Photo5.jpg')
const img6L = require('./large/Photo6.jpg')
const img7L = require('./large/Photo7.jpg')
const img8L = require('./large/Photo8.jpg')
const img9L = require('./large/Photo9.jpg')
const img10L = require('./large/Photo10.jpg')
const img11L = require('./large/Photo11.jpg')
const img12L = require('./large/Photo12.jpg')
const img13L = require('./large/Photo13.jpg')
const img14L = require('./large/Photo14.jpg')
const img15L = require('./large/Photo15.jpg')
const img16L = require('./large/Photo16.jpg')
const img17L = require('./large/Photo17.jpg')
const img18L = require('./large/Photo18.jpg')
const img19L = require('./large/Photo19.jpg')
const img20L = require('./large/Photo20.jpg')
const img21L = require('./large/Photo21.jpg')
const img22L = require('./large/Photo22.jpg')
const img23L = require('./large/Photo23.jpg')

const img1S = require('./small/Photo1.jpg')
const img2S = require('./small/Photo2.jpg')
const img3S = require('./small/Photo3.jpg')
const img4S = require('./small/Photo4.jpg')
const img5S = require('./small/Photo5.jpg')
const img6S = require('./small/Photo6.jpg')
const img7S = require('./small/Photo7.jpg')
const img8S = require('./small/Photo8.jpg')
const img9S = require('./small/Photo9.jpg')
const img10S = require('./small/Photo10.jpg')
const img11S = require('./small/Photo11.jpg')
const img12S = require('./small/Photo12.jpg')
const img13S = require('./small/Photo13.jpg')
const img14S = require('./small/Photo14.jpg')
const img15S = require('./small/Photo15.jpg')
const img16S = require('./small/Photo16.jpg')
const img17S = require('./small/Photo17.jpg')
const img18S = require('./small/Photo18.jpg')
const img19S = require('./small/Photo19.jpg')
const img20S = require('./small/Photo20.jpg')
const img21S = require('./small/Photo21.jpg')
const img22S = require('./small/Photo22.jpg')
const img23S = require('./small/Photo23.jpg')

const allImagesSmall = {
  img1S,
  img2S,
  img3S,
  img4S,
  img5S,
  img6S,
  img7S,
  img8S,
  img9S,
  img10S,
  img11S,
  img12S,
  img13S,
  img14S,
  img15S,
  img16S,
  img17S,
  img18S,
  img19S,
  img20S,
  img21S,
  img22S,
  img23S
}

const allImagesLarge = {
  img1L,
  img2L,
  img3L,
  img4L,
  img5L,
  img6L,
  img7L,
  img8L,
  img9L,
  img10L,
  img11L,
  img12L,
  img13L,
  img14L,
  img15L,
  img16L,
  img17L,
  img18L,
  img19L,
  img20L,
  img21L,
  img22L,
  img23L
}

const flashText = [
  'you’ll fall asleep under a tree',
  'you’ll think of me',
  'won’t you linger on?',
  'make my branches strong',
  'till I can shade you'
]

export const soloOverlay1 = img7L

const buildPhotoset = (images, text) => {
  let imagesSmall = []
  let imagesLarge = []

  images.forEach((image) => {
    const small = `img${image}S`
    const large = `img${image}L`
    imagesSmall.unshift(allImagesSmall[small])
    imagesLarge.unshift(allImagesLarge[large])
  })
  return {
    imagesSmall,
    imagesLarge,
    text: text || ''
  }
}

const buildFullBleedSets = (photos) => {
  const separatePhotos = photos.map((photo) => {
    return buildPhotoset([photo])
  })
  return separatePhotos
}

// title
export const photosetTitle = buildPhotoset([1])
// decks
export const photosetDeck1 = buildPhotoset([15, 9, 13, 14, 18, 5], 'I’m a mountain in the glories that we claim')
export const photosetDeck2 = buildPhotoset(
  [17, 18, 11, 10, 20],
  'Why don’t you take a friend in the shade. Somewhere where all the minutes stay around'
)
export const photosetDeck3 = buildPhotoset([16, 4, 22])
// fullbleed
export const photosetFullbleed = buildFullBleedSets([8, 12, 6, 3, 2, 19])
//flash
export const photosetFlash = buildPhotoset([7], flashText)
//end
export const photosetEnd = buildPhotoset([23])
