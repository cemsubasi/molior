import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import { Header, Card, Image, Icon, Container, Grid,  } from 'semantic-ui-react'
import {connect} from 'react-redux'

function CardComponent(props) {
	const [state, setState] = useState([])
	useEffect(()=>{
		if(props.state)
	setState(props.state.filter((item, index, self) => index === self.findIndex(e => e.productHeader === item.productHeader) && item.discount > 0))
	}
	,[props.state])

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
	))
}

function Elbise(props) {
	let count = 10;
	return(
		<React.Fragment>
			<Header style={{marginBottom: '25px', textAlign: 'center', }}>
				Elbise araması için eşleşen {count} sonuç 
			</Header>
			<Container style={{marginBottom: '50px ', }}>
				<Grid>
					<CardComponent {...props}/>
				</Grid>
			</Container>
		</React.Fragment>
	)
}
const mapStateToProps = (state) => {
	return {
		state: state.postState,
	}
}

export default connect(mapStateToProps)(Elbise)
