import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import {Message, Reveal, Image, Grid, Header, Button, } from 'semantic-ui-react'
import {add2cart} from './DummyAction'

const DummyBody = (props) => {
  let { slug } = useParams();
	const [dummyState, setDummyState] = useState({})
	const [message, setMessage] = useState(false)

	
  return props.state
    .filter((item) => item.productURL === 'slug/' + slug)
    .map((item) => (
			<Grid key={item.productURL} container stackable verticalAlign='middle' style={{margin: '20px 0px 110px',}}>
					<Grid.Column width={10}>
						<Reveal animated='move right'>
							<Reveal.Content visible>
								<Image src={item.data_url} size='medium' />
							</Reveal.Content>
							<Reveal.Content hidden>
								<Image src='https://cdn.dsmcdn.com/mnresize/415/622/ty76/product/media/images/20210225/14/66899714/142499060/5/5_org_zoom.jpg' size='medium' />
							</Reveal.Content>
						</Reveal>
					</Grid.Column>
					<Grid.Column floated='right' width={6} style={{marginLeft: '0px', borderLeft: '1px solid rgba(0,0,0,0.1)', }}>
						<Header as='h3' style={{fontSize: '2em',}}>
							Molior Spring Collection #21 Black Queen
						</Header>
						<p style={{fontSize: '1.33em',}}>
							Siyah Fisto Detaylı Vual Plaj Elbise
						</p>
						<Header as='h2'>110TL</Header>
						<Grid container stackable  style={{marginTop: '5px'}}>
						<Grid.Row>
						<p floated='left' style={{fontSize: '1.33em', }}>
							Beden:
						</p>
						<div>
			{
				props.state.filter(el => el.productHeader === item.productHeader).sort((arg1, arg2) => arg1.size-arg2.size).map(ea => ea.stock > 0 && <Button key={ea.productURL} onClick={()=>setDummyState(ea)}>{ea.size}</Button>)
			}
						</div>
						</Grid.Row>
						<Grid.Row textAlign='center'>
						<div  style={{marginTop: '10px'}}>
			{
				message &&   
						<Message
						warning
						header='Uyarı'
						content='Sepete eklemeden önce beden seçmelisiniz.'
					/>
			}
						<Button icon={{name: 'shopping basket'}} onClick={()=>{
								if(dummyState.id){
									props.add2cart(dummyState)
									console.log('cart', props.cart)
									console.log(dummyState)
									setDummyState({})
								} 
								else{
									setMessage(true)
									setTimeout(()=>setMessage(false), 5000)
								}
							}} 
							content='Sepete Ekle'size='large'/>
						<p style={{marginTop: '15px'}}>Tahmini teslimat süresi: 2 gün</p>
						</div>
						</Grid.Row>
						</Grid>
					</Grid.Column>
			</Grid>
    ));
};

const mapStateToProps = (state) => {
  return {
    state: state.postState,
		cart: state.cart,
  };
};

export default connect(mapStateToProps, {add2cart})(DummyBody);
