import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import { Header, Card, Image, Icon, Container, Grid,  } from 'semantic-ui-react'
import { axiosCall, url } from '../../Data'

function CardComponent() {
	const [state, setState] = useState([])
	useEffect(()=> axiosCall('get', url)
		.then(res => setState(res.filter((item, index, self) => index === self.findIndex(e => e.productHeader === item.productHeader) && item.category === 'ust-giyim'))	
		), [])

	return(
			state !== [] && state.map(item => 
				<Grid.Column key={item.productURL} mobile={16} tablet={8} computer={4}>
			  <Card as={Link} to={item.productURL} style={{margin: 'auto', }}>
		    <Image 
				 style={{margin: 'auto', }}
				 label={{
						as: 'a',
						color: 'red',
						content: '10',
						icon: 'percent',
						ribbon: true,
					}}
					src={item.data_url}
					wrapped ui={false} />
		    <Card.Content>
		      <Card.Header>Daniel</Card.Header>
		      <Card.Meta>Joined in 2016</Card.Meta>
		      <Card.Description>
		        Daniel is a comedian living in Nashville.
		      </Card.Description>
		    </Card.Content>
		    <Card.Content extra>
		      <div>
		        <Icon name='percent' />
		       10 indirim 
		      </div>
					<div style={{marginLeft: '10px', color: 'red' }}>
						<Icon name='shipping fast' color='red'/>
						Bedava
					</div>
		    </Card.Content>
		  </Card>
		</Grid.Column>
	)
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
					<CardComponent />
				</Grid>
			</Container>
		</React.Fragment>
	)
}

export default Elbise
