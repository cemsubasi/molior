import React from 'react'
import {Link} from 'react-router-dom'
import {Button, Segment, Header, Card, Image, Icon, Container, Grid,  } from 'semantic-ui-react'

		 // <Segment circular style={{width: '50', height: '50', position: 'relative'}}>
		 //      <Header as='h2'>
		 //        Sale!
		 //        <Header.Subheader>$10.99</Header.Subheader>
		 //      </Header>
		 //    </Segment>

function CardComponent() {
	console.log(Card)
	return(
			  <Card as={Link} to='slug/1612545405428' style={{margin: 'auto', }}>
		    <Image 
				 style={{margin: 'auto', }}
				 label={{
						as: 'a',
						color: 'red',
						content: '10',
						icon: 'percent',
						ribbon: true,
					}}
					src='https://cdn.dsmcdn.com/mnresize/415/622/ty74/product/media/images/20210225/14/66899714/142499060/1/1_org_zoom.jpg' 
					wrapped ui={false} />
		    <Card.Content>
		      <Card.Header>Daniel</Card.Header>
		      <Card.Meta>Joined in 2016</Card.Meta>
		      <Card.Description>
		        Daniel is a comedian living in Nashville.
		      </Card.Description>
		    </Card.Content>
		    <Card.Content extra>
		      <a>
		        <Icon name='percent' />
		       10 indirim 
		      </a>
					<a style={{marginLeft: '10px', color: 'red' }}>
						<Icon name='shipping fast' color='red'/>
						Bedava
					</a>
		    </Card.Content>
		  </Card>
	)
}

function Elbise() {
	let count = 10;
	return(
		<React.Fragment>
			<Header style={{marginBottom: '25px', textAlign: 'center', }}>
				Elbise araması için eşleşen {count} sonuç 
			</Header>
			<Container style={{marginBottom: '50px ', }}>
				<Grid>
		      <Grid.Column mobile={16} tablet={8} computer={4}>
						<CardComponent />
		      </Grid.Column>
		      <Grid.Column mobile={16} tablet={8} computer={4}>
						<Card style={{margin: 'auto', }}>
						<Image src='https://cdn.dsmcdn.com/mnresize/415/622/ty76/product/media/images/20210225/14/66899714/142499060/5/5_org_zoom.jpg' wrapped ui={false} />
						<Card.Content>
						<Card.Header>Daniel</Card.Header>
						<Card.Meta>Joined in 2016</Card.Meta>
						<Card.Description>
							Daniel is a comedian living in Nashville.
						</Card.Description>
						</Card.Content>
						<Card.Content extra>
							<a>
							<Icon name='user' />
							10 Friends
							</a>
						</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={4}>
						<CardComponent />
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={4}>
						<CardComponent />
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={4}>
						<CardComponent />
					</Grid.Column>
					<Grid.Column mobile={16} tablet={8} computer={4}>
						<CardComponent />
					</Grid.Column>
				</Grid>
			</Container>
		</React.Fragment>
	
	)
}

export default Elbise
