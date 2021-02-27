import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const BannerText = ({ mobile }) => (
  <Container text  style={ mobile ? null : {backgroundColor: 'rgba(0,0,0,0.2)', position: 'relative', left: '375px', }}>
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

BannerText.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
const DesktopContainer = ({Child}) => {
	const [state, setState] = useState({})

  const hideFixedMenu = () => setState({ fixed: false })
  const showFixedMenu = () => setState({ fixed: true })

    const { fixed } = state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={showFixedMenu}
          onBottomPassedReverse={hideFixedMenu}
        >
			  <Segment
					inverted
					className='homeContainer'
					textAlign='center'
					style={{ minHeight: 500, padding: '1em 0em'  }}
					vertical
				>
            <Menu
							className='homeMenu'
              fixed={'top'}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container >
                <Menu.Item as={Link} to='/' active>
                  Ana Sayfa
                </Menu.Item>
                <Menu.Item as={Link} to='/elbise'>Elbise</Menu.Item>
                <Menu.Item as={Link} to='/ust-giyim'>Üst Giyim</Menu.Item>
                <Menu.Item as={Link} to='/posts'>Alt Giyim</Menu.Item>
								<Menu.Item as={Link} to='/indirimli-urunler'>İndirimli Ürünler</Menu.Item>
                <Menu.Item position='right'>
                  <Button as={Link} to='/' icon='search' style={{ marginLeft: '0.5em', paddingLeft: '18px', paddingRight: '18px' }}>
                  </Button>
                  <Button as={Link} to='/sepet' icon='shopping basket' primary style={{ marginLeft: '0.5em', paddingLeft: '20px', paddingRight: '20px' }}>
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
					<BannerText />
				</Segment>
        </Visibility>
				<Child />
      </Media>
    )
  }

DesktopContainer.propTypes = {
  Child: PropTypes.element,
}

const MobileContainer = ({Child}) => {
	const [state, setState] = useState({})

  const handleSidebarHide = () => setState({ sidebarOpened: false })

  const handleToggle = () => setState({ sidebarOpened: true })

    const { sidebarOpened } = state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as={Link} to='/' active>
              Ana Sayfa
            </Menu.Item>
            <Menu.Item as={Link} to='/elbise'>Elbise</Menu.Item>
            <Menu.Item as={Link} to='/ust-giyim'>Üst Giyim</Menu.Item>
            <Menu.Item as={Link} to='/posts'>Alt Giyim</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
							className='mobilebanner'
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item onClick={handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as={Link} to='/' icon='search' style={{ marginLeft: '0.5em', paddingLeft: '18px', paddingRight: '18px' }}>
                    </Button>
                    <Button as={Link} to='/sepet' primary icon='shopping basket' style={{ marginLeft: '0.5em', paddingLeft: '20px', paddingRight: '20px' }}>
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
						<Child />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
}

MobileContainer.propTypes = {
  Child: PropTypes.element,
}

const ResponsiveContainer = ({ Child }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer Child={Child} ></DesktopContainer>
    <MobileContainer Child={Child} ></MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  Child: PropTypes.element,
}

const HomepageLayout = ({ Child }) => (
  <ResponsiveContainer Child={Child}>
  </ResponsiveContainer>
)

export default HomepageLayout
