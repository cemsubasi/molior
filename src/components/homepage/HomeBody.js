import React from 'react';
import {Link} from 'react-router-dom'
import {
  Button,
	Icon,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import logo from '../../images/molior8.png'
import logo2 from '../../images/molior2.png'

const HomeBody = () => {
	return (
		<div>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
             Elbise 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
							Beğenebileceğinizi düşündüğümüz en yeni elbise modellerini burada topladık. 
            </p>
            <Header as='h3' style={{ fontSize: '1.5em' }}>
							Tek Tek ve Özenle Seçildi
            </Header>
            <p style={{ fontSize: '1.33em' }}>
							Yüzlerce modelin arasından sizin için seçtik. 
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://glamshops.ro/pics/reviews/emami-scandinavian-design.jpg'/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Hemen İncele</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              <Icon name='whatsapp'/>
							{' '}Whatsapp İletişim Hattı
            </Header>
            <p style={{ fontSize: '1.33em' }}>053X XXX XX XX</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              <Icon name='fast shipping'/>
             {' '} 150 TL ve Üzerine Ücretsiz Kargo 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>7</b> Gün İçerisinde Değişim Hakkı
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column floated='left' width={6}>
            <Image bordered rounded size='large' src={logo2} as={Link} to='/ust-giyim'/>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
             Üst Giyim 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
							Beğenebileceğinizi düşündüğümüz en yeni elbise modellerini burada topladık. 
            </p>
            <Header as='h3' style={{ fontSize: '1.5em' }}>
							Tek Tek ve Özenle Seçildi
            </Header>
            <p style={{ fontSize: '1.33em' }}>
							Yüzlerce modelin arasından sizin için seçtik. 
            </p>
          <Grid.Column textAlign='center'>
            <Button as={Link} to='/ust-giyim' size='huge'>Hemen İncele</Button>
          </Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <Divider as={Link} to='/' >Molior Boutique</Divider>
        </Divider>

      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
             Alt Giyim 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
							Beğenebileceğinizi düşündüğümüz en yeni elbise modellerini burada topladık. 
            </p>
            <Header as='h3' style={{ fontSize: '1.5em' }}>
							Tek Tek ve Özenle Seçildi
            </Header>
            <p style={{ fontSize: '1.33em' }}>
							Yüzlerce modelin arasından sizin için seçtik. 
            </p>
          <Grid.Column textAlign='center'>
            <Button as={Link} to='/alt-giyim' style={{textAlign: 'center'}} size='huge'>Hemen İncele</Button>
          </Grid.Column>
          </Grid.Column>
          <Grid.Column width={6}>
            <Image rounded as={Link} to='/alt-giyim' size='large' src={logo}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
		</div>
	)
}

export default HomeBody;
