import React from 'react'
import Section1 from './components/Section1/Section1'

const App = () => {

  const users = [
    {
      img: 'https://i.pinimg.com/1200x/73/3d/1e/733d1ecff1b2a4a5d57d97562415ed5c.jpg',
      intro: '',
      tag: 'Satisfied'
    },
    {
      img: 'https://i.pinimg.com/1200x/ec/7c/df/ec7cdfb100b4154268b94b40ee59367b.jpg',
      intro: '',
      tag: 'Underserved'
    },
    {
      img: 'https://i.pinimg.com/1200x/3f/53/30/3f5330bb0f95048b6a43db6b86d21a63.jpg',
      intro: '',
      tag: 'Underbanked'
    },
    {
      img: 'https://i.pinimg.com/1200x/a0/98/7c/a0987c62ac7bae44ca7ed129e75bdd75.jpg',
      intro: '',
      tag: 'Underbooked'
    },
    {
      img:' https://i.pinimg.com/736x/15/7b/a0/157ba0a08947b02da64716c8fff53904.jpg',
      intro: '',
      tag: 'Undercooked'
    }
  ]

  return (
    <div>
      <Section1 users={users}  />
    </div>
  )
}

export default App
