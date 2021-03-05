import React, {useState, useEffect,} from 'react'
import {Link} from 'react-router-dom'
import { Segment, Button, Header, Card, Image, Icon, Container, Grid,  } from 'semantic-ui-react'
import {connect} from 'react-redux'

function CardComponent(props) {
	const [state, setState] = useState([])
	useEffect(()=>{
		if(props.state)
			setState(props.state.filter((item, index, self) => index === self.findIndex(e => e.productHeader === item.productHeader) && item.category === 'elbise'))	

	}
	,[props.state])

const PlaceHolder = () => {

	return(
		<Container text>
	  <Segment placeholder style={{margin: '1em 0 20em 0'}}>
	    <Header icon>
	      <Icon name='undo' />
				Üzgünüm bu bölümde hiç ürün yok.
				Başka kategorilere bakmanızı öneririz.
	    </Header>
	    <Button primary >Alışverişe Devam</Button>
	  </Segment>
		</Container>
)
}

	return(
			state.map ? state.map(item => 
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
		      <Card.Header>{item.productHeader}</Card.Header>
		      <Card.Meta>{item.productBody}</Card.Meta>
		      <Card.Description>
					Fiyat:{' '}
								{item.discount ? 
									<React.Fragment>
									<span style={{textDecoration: 'line-through', marginRight: '10px'}}>{item.price + ' TL'}</span> 
									<span>{item.price - (item.price * item.discount/100).toFixed(2) + ' TL'}</span>
									</React.Fragment>
									: <span>{item.price + ' TL'}</span>
								}
		      </Card.Description>
		    </Card.Content>
		    <Card.Content extra>
				{
					item.discount > 0 && item.price > 149 ?
					<React.Fragment>
		      <div>
		        <Icon name='percent' color='red' />
					{item.discount} indirim 
						<Icon style={{marginLeft: '15px'}} name='shipping fast' color='red'/>
						Bedava
					</div>
					</React.Fragment>
					:
					item.discount > 0 ?
		      <div>
		        <Icon name='percent' color='red' />
					{item.discount} indirim 
		      </div>
					: item.shipping === true || item.price > 149 ?
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
		: 
		{PlaceHolder}
	)
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
					<CardComponent {...props} />
				</Grid>
			</Container>
		</React.Fragment>
	)
}
const mapStateToProps = (state) => {
	return{
		state: state.postState,
	}
}

export default connect(mapStateToProps, )(Elbise) 
