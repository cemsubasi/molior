import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, useHistory, } from 'react-router-dom'
import { Table, Step, Grid, Header, Icon, Container, Segment, Button, List, Image, } from 'semantic-ui-react'
import {add2cart} from '../dummypage/DummyAction'
import {deleteFromCart, banFromCart} from './CartAction'
import {axiosCall} from '../../Data'

const PlaceHolder = () => {

	const history = useHistory()
	return(
		<Container text>
	  <Segment placeholder style={{margin: '1em 0 20em 0'}}>
	    <Header icon>
	      <Icon name='cart arrow down' />
					Sepet Boş 
	    </Header>
	    <Button primary onClick={history.goBack}>Alışverişe Devam</Button>
	  </Segment>
		</Container>
	)
}
				
function Cart(props) {
	const [state, setState] = useState({})

	useEffect(()=> 
			setState(props.state.filter((item, index, self) => index === self.findIndex(e => e.id === item.id)))	
	,[props.state])

	function click(arg){
		return axiosCall('post', '/offer', arg).then(res => console.log('answer', res))
	}

	return(
		<Container style={{margin: '3em 0 8em 0'}}>
		{
			props.state.length > 0 ? 
		
			<>
			<Grid columns={2} stackable textAlign='center' style={{margin: '1em 0'}}>
			<Grid.Row style={{marginBottom: '1em'}}>
			  <Step.Group widths={3} style={{padding: '0px'}}>
			    <Step active>
			      <Icon name='shopping cart' />
			      <Step.Content>
			        <Step.Title>Sepet</Step.Title>
			      </Step.Content>
			    </Step>
			    <Step disabled>
			      <Icon name='credit card' />
			      <Step.Content>
			        <Step.Title>Ödeme</Step.Title>
			      </Step.Content>
			    </Step>
			    <Step disabled>
			      <Icon name='info' />
			      <Step.Content>
			        <Step.Title>Sipariş Onay</Step.Title>
			      </Step.Content>
			    </Step>
			  </Step.Group>
			</Grid.Row>
			</Grid>
			<Grid columns={2} stackable textAlign='center' >
			<Grid.Row >
			<Grid.Column width={12} style={{margin: 'auto'}}>
				<List animated relaxed='very' style={{margin:'10px'}}>
		{
			state.map && state.map((item, index, )=> 
					<List.Item key={index}>
						<Image rounded size='small' floated='left' src={item.data_url} />
						<List.Content floated='left' style={{minWidth: '240px', textAlign: 'left', paddingLeft: '0px', marginTop: '.5em'}}>
							<List.Header as={Link} to={item.productURL} style={{fontSize: '1.77em'}}>{item.productHeader}</List.Header>
							<List.Description style={{fontSize: '1.33em', marginTop: '1em'}}>
								{item.productBody}
								<p style={{fontSize: '1em', marginTop: '0.3em', marginBottom: '0.1em'}}>
									<span>Fiyat: </span>
								{item.discount ? 
									<React.Fragment>
									<span style={{textDecoration: 'line-through', marginRight: '10px'}}>{item.price + ' TL'}</span> 
									<span>{+item.price - (+item.price * item.discount/100) + ' TL'}</span>
									</React.Fragment>
									: <span>{item.price + ' TL'}</span>
								}
								</p>
									<p style={{marginBottom: '0.1em'}}><b>Beden: </b> {item.size}
									</p>
							<p >
							Adet: {props.state.filter && props.state.filter(el => item.id === el.id).length}
							</p>
							</List.Description>
							<div>
								<div style={{margin: '7px 0px'}}>
									<Button icon onClick={()=>props.add2cart(item)}> <Icon name='plus'/> </Button>
									<Button icon onClick={()=>props.deleteFromCart(item)}> <Icon name='minus' /> </Button>
									<Button icon onClick={()=>props.banFromCart(item)}> <Icon name='trash' /> </Button>
								</div>
							</div>
						</List.Content>
					</List.Item>
			)
		}
				</List>
			</Grid.Column>
			<Grid.Column width={4} style={{textAlign: 'center'}}>
			<Table basic='very' style={{marginTop: '2em', margin: 'auto',  minWidth: '200px'}} celled collapsing>
			    <Table.Header>
			      <Table.Row>
			        <Table.HeaderCell style={{fontSize: '1.33em'}}>Sipariş Özeti</Table.HeaderCell>
			        <Table.HeaderCell style={{fontSize: '1.13em', textAlign: 'right'}} ><Icon name='try' /></Table.HeaderCell>
			      </Table.Row>
			    </Table.Header>
			    <Table.Body>
			      <Table.Row>
			        <Table.Cell>
			          <Header as='h4' image>
			            <Header.Content>
			              Ürünler Toplam
			            </Header.Content>
			          </Header>
			        </Table.Cell>
			        <Table.Cell textAlign= 'right'>{props.state.reduce((total, curr)=> 
					total + +curr.price 
				, 0) + ' TL'}</Table.Cell>
			      </Table.Row>
			      <Table.Row>
			        <Table.Cell>
			          <Header as='h4' >
			              İndirim
			          </Header>
			        </Table.Cell>
			        <Table.Cell textAlign='right' >{props.state.reduce((total, curr)=> 
					total - (curr.discount * +curr.price) /100
				, 0) + ' TL'}</Table.Cell>
			      </Table.Row>
			      <Table.Row>
			        <Table.Cell>
			          <Header as='h4' >
			             Ürün Adedi 
			          </Header>
			        </Table.Cell>
			        <Table.Cell  textAlign='right' >{props.state.length}</Table.Cell>
			      </Table.Row>
			      <Table.Row>
			        <Table.Cell>
			          <Header as='h4' >
			              Tutar
			          </Header>
			        </Table.Cell>
			        <Table.Cell textAlign='right' >{props.state.reduce((total, curr)=> 
					total + +curr.price - (curr.discount * +curr.price) /100
				, 0) + ' TL'}</Table.Cell>
			      </Table.Row>
			    </Table.Body>
			  </Table>
					<Button primary onClick={()=>click(props.state)} style={{margin: '1em 0', textAlign: 'center'}}>Sepeti Onayla</Button>
			</Grid.Column>
			</Grid.Row>
			</Grid>
			</>
			: <PlaceHolder />
}
		</Container>
	)
}
const mapStateToProps = (state) => {
	return {
		state: state.cart,
	}
}

export default connect(mapStateToProps, {add2cart, deleteFromCart, banFromCart})(Cart)
