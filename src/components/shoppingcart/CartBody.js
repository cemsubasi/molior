import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Container, Button, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import CartPlaceholder from './CartPlaceholder';
import CartBanner from './CartBanner';
import CartItem from './CartItem';
import CartBill from './CartBill';

function CartUI() {
  const cart = useSelector((state) => state.cart.data);
  const [state, setState] = useState([]);

  useEffect(
    () =>
      setState(
        cart.filter(
          (item, index, self) =>
            index === self.findIndex((e) => e.id === item.id)
        )
      ),
    [cart]
  );

  return (
    <>
      <CartBanner select="cart" />
      <Grid columns={2} stackable textAlign="center">
        <Grid.Row>
          <Grid.Column width={12} style={{ margin: 'auto' }}>
            <List relaxed="very" style={{ margin: '10px' }}>
              {state?.map((item, index) => (
                <CartItem item={item} key={index} />
              ))}
            </List>
          </Grid.Column>
          <Grid.Column width={4} style={{ textAlign: 'center' }}>
            <CartBill />
            <Button
              as={Link}
              to="/payment"
              primary
              style={{ margin: '1em 0', textAlign: 'center' }}>
              Sepeti Onayla
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}

function CartBody() {
  const cart = useSelector((state) => state.cart.data);
  return (
    <Container style={{ margin: '3em 0 8em 0' }}>
      {cart.length > 0 ? (
        <CartUI />
      ) : (
        <>
          <CartBanner select="cart" />
          <CartPlaceholder />
        </>
      )}
    </Container>
  );
}

export default CartBody;
