import React from 'react'
import Layout from '../components/layout'
import Gallery from '../components/Gallery'

const ceramicImages = [
  {
    src: 'https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/ceramics00.jpg',
    alt: 'set of 4 identical porcelain tea cups',
  },
  {
    src: 'https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/ceramics01.jpg',
    alt: 'assortment of green and blue-hued ceramic mugs',
  },
  {
    src: 'https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/ceramics03.jpg',
    alt: 'twin porcelain blue-grey and white patterned mugs',
  },
    {
    src: 'https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/ceramics02.jpg',
    alt: 'assortment of ceramic mugs',
  },
      {
    src: 'https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/ceramics04.jpg',
    alt: 'set of 4 identical porcelain lobster-colored tea cups',
  },
]

const Craft = () => {
  return (
    <Layout>
      <div className="craft-container">
        <Gallery images={ceramicImages} />
         
        {/* <img
          src="https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/marbledclay.jpg"
          alt="clay dish"
        /> */}
        <Gallery images={[{src: "https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/holepunch.JPG", alt: "greeting card with a golden toast stamp and A toast to you text"}]} />
    
    <Gallery images={[{ src:"https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/1777g-ananas.jpg", alt: "1777g ananas pineapple"}, { src:"https://raw.githubusercontent.com/hsujessica/jessicahsu/master/src/static/22g-ananas.jpg",
          alt:"22g ananas pineapple"}]} />

 
      </div>
    </Layout>
  )
}

export default Craft
