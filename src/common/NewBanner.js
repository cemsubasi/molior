import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const NewBanner = ({ mobile }) => (
  <Container text  style={ mobile ? null : {backgroundColor: 'rgba(0,0,0,0.2)', position: 'relative', left: '375px', top: '150px'}}>
    <Header
      as='h1'
      content='Molior Boutique'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
				color: '#FFF' ,
      }}
    />
    <Header
      as='h2'
      content='2021 Bahar ve Yaz Koleksiyonu'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.8em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
				color: '#FFF' ,
      }}
    />
    <Button color='white' size='huge' style={{margin: '20px 0px'}}>
     Alışverişe Başla 
      <Icon name='right arrow' />
    </Button>
  </Container>
)

NewBanner.propTypes = {
  mobile: PropTypes.bool,
}

export default NewBanner;
