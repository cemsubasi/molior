import React from 'react'
import HeaderComponent from '../../common/HeaderComponent'
import NewFooter from '../../common/NewFooter'
import {Reveal, Image, Grid, Header, Button, Segment, } from 'semantic-ui-react'

function Elbise() {
	return(
		<HeaderComponent>
			<Grid container stackable verticalAlign='middle' style={{margin: '20px 0px',}}>
					<Grid.Column width={10}>
						<Reveal animated='move right' style={{marginTop: '50px',}}>
							<Reveal.Content visible>
								<Image src='https://cdn.dsmcdn.com/mnresize/415/622/ty74/product/media/images/20210225/14/66899714/142499060/1/1_org_zoom.jpg' size='medium' />
							</Reveal.Content>
							<Reveal.Content hidden>
								<Image src='https://cdn.dsmcdn.com/mnresize/415/622/ty76/product/media/images/20210225/14/66899714/142499060/5/5_org_zoom.jpg' size='medium' />
							</Reveal.Content>
						</Reveal>
					</Grid.Column>
					<Grid.Column floated='right' width={6} style={{marginLeft: '0px', borderLeft: '1px solid gray', }}>
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
							<Button primary>36</Button>
							<Button>38</Button>
							<Button>40</Button>
						</div>
						</Grid.Row>
						<Grid.Row textAlign='center'>
						<div  style={{marginTop: '10px'}}>
						<Button as='a' icon={{name: 'shopping basket'}} content='Sepete Ekle'size='large'/>
						<p style={{marginTop: '15px'}}>Tahmini teslimat süresi: 2 gün</p>
						</div>
						</Grid.Row>
						</Grid>
					</Grid.Column>
			</Grid>
				<NewFooter />
		</HeaderComponent>
	)
}

export default Elbise
