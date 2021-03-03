import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, } from 'react-router-dom'
import { Header, Icon, Container, Segment, Button, List, Image, } from 'semantic-ui-react'


const SegmentExamplePlaceholder = () => (
	  <Segment placeholder style={{margin: '20px 0px'}}>
	    <Header icon>
	      <Icon name='cart arrow down' />
					Sepet Boş 
	    </Header>
	    <Button primary>Sepeti Kapat</Button>
	  </Segment>
)

function Cart(props) {
	const [state, setState] = useState({})
	useEffect(()=> 
		setState(props.state)
	,[props.state])

	console.log('state', state)
	return(
		<Container text>
		{
			props.state.length > 0 ? 
		
			<Segment style={{margin: '20px 0px'}}>
				<Header textAlign='center' >{`Sepette ${props.state.length} ürün bulunmaktadır.`}</Header>
				<List animated relaxed='very' style={{margin:'10px'}}>
		{
			props.state.map && props.state.map((item, index, )=> 
					<List.Item key={index}>
						<Image rounded size='small' src={item.data_url} />
						<List.Content>
							<List.Header as={Link} to={item.productURL}>{item.productHeader}</List.Header>
							<List.Description>
								{item.productBody}
								<div>
									<b>Arrested Development</b>
								</div>{' '}
								just now.
							</List.Description>
							<div>
								<div style={{margin: '7px 0px'}}>
									<Button> + </Button>
									<Button> - </Button>
									<Button> Delete </Button>
								</div>
							</div>
						</List.Content>
					</List.Item>
			)
		}
				</List>
			</Segment>
			: <SegmentExamplePlaceholder />
}
		</Container>
	)
}
const mapStateToProps = (state) => {
	return {
		state: state.cart,
	}
}

export default connect(mapStateToProps)(Cart)
