import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import parse from "html-react-parser";
import {Reveal, Image, Grid, Header, Button, } from 'semantic-ui-react'

      // <div key={item.postUrl} className="container">
      //   <div className="container pt-4 m-auto p-5">
      //     <h2 className="text-center pb-4" 
						// tabIndex='0'
					// >{item.postHeader}</h2>
      //     <div>{parse(item.postBody)}</div>
      //     <p
      //       className="border-bottom pb-5"
      //       style={{ textAlign: "right", color: "#9FA4A7" }}>
      //       {item.date}
      //     </p>
      //   </div>
      // </div>

const DummyBody = (props) => {
  let { slug } = useParams();
  return props.state
    .filter((item) => item.postUrl === 'slug/' + slug)
    .map((item) => (
			<Grid key={item.postUrl} container stackable verticalAlign='middle' style={{margin: '20px 0px',}}>
					<Grid.Column width={10}>
						<Reveal animated='move right'>
							<Reveal.Content visible>
								<Image src='https://cdn.dsmcdn.com/mnresize/415/622/ty74/product/media/images/20210225/14/66899714/142499060/1/1_org_zoom.jpg' size='medium' />
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
    ));
};

const mapStateToProps = (state) => {
  return {
    state: state.postState,
  };
};

export default connect(mapStateToProps)(DummyBody);
