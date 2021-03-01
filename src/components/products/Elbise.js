import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import { Header, Card, Image, Icon, Container, Grid,  } from 'semantic-ui-react'
import { axiosCall, url } from '../../Data'

function CardComponent() {
	const [state, setState] = useState([])
	useEffect(()=> axiosCall('get', url)
		.then(res => setState(res.filter((item, index, self) => index === self.findIndex(e => e.productHeader === item.productHeader) && item.category === 'elbise'))	
		), [])

	return(
			state.map && state.map(item => 
				<Grid.Column key={item.productURL} mobile={16} tablet={8} computer={4}>
			  <Card as={Link} to={item.productURL} style={{margin: 'auto', }}>
				{item.discount > 0 ? 
		    <Image 
				 style={{margin: 'auto', }}
				 label={{
						color: 'red',
						content: item.discount,
						icon: 'percent',
						ribbon: true,
					}}
					src={item.data_url}
					wrapped ui={false} />
				: 
		    <Image 
				 style={{margin: 'auto', }}
					src={item.data_url}
					wrapped ui={false} />
				}
		    <Card.Content>
		      <Card.Header>Daniel</Card.Header>
		      <Card.Meta>Joined in 2016</Card.Meta>
		      <Card.Description>
		        Daniel is a comedian living in Nashville.
		      </Card.Description>
		    </Card.Content>
		    <Card.Content extra>
				{
					item.discount > 0 ?
		      <div>
		        <Icon name='percent' />
		       item.discount indirim 
		      </div>
					: item.shipping === true ?
					<div style={{marginLeft: '10px', color: 'red' }}>
						<Icon name='shipping fast' color='red'/>
						Bedava
					</div>
					: null
				}
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
