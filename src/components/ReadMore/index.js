import {useState} from 'react'

import {
  ReadMoreContainer,
  Heading,
  Paragraph,
  ReactImage,
  ReadMoreButton,
  ReadMoreSubContainer,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [reactDescription, setDescription] = useState(false)

  const showLessDescription = reactHooksDescription.slice(0, 170)
  const showMoreDescription = reactHooksDescription

  const readMoreLessButton = () => {
    setDescription(prev => !prev)
  }

  return (
    <ReadMoreContainer>
      <ReadMoreSubContainer>
        <Heading>React Hooks</Heading>
        <Paragraph>Hooks are a new addition to React</Paragraph>
        <ReactImage
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {reactDescription ? (
          <Paragraph>{showMoreDescription}</Paragraph>
        ) : (
          <Paragraph>{showLessDescription}</Paragraph>
        )}
        <ReadMoreButton onClick={readMoreLessButton}>
          {reactDescription ? 'Read Less' : 'Read More'}
        </ReadMoreButton>
      </ReadMoreSubContainer>
    </ReadMoreContainer>
  )
}

export default ReadMore
