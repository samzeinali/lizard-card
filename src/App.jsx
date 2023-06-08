import Card from "./componnets/card"

const cardData = {
  title: 'Lizard',
  image: '../public/123.jpg',
  image_alt: 'cheverlet',
  description: 'Cheverlet is an iconic American car brand Known for its reliable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world.',
  LearnmoreURL: "#",
  ShareLink: "#"
}

// App React
function App() {
  return (
    <Card
      titleText={cardData.title}
      imageSRC={cardData.image}
      imageALT={cardData.image_alt}
      textDescription={cardData.description}
      pageURL={cardData.LearnmoreURL}
      shareLink={cardData.ShareLink} />
  )
}

export default App
