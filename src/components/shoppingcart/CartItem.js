import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Button, List, Image } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IncreaseItemCount,
  DecreaseItemCount,
  RemoveFromCart,
} from '../../store/actions/cart';

function CartItem({ item }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  return (
    <List.Item>
      <Image
        rounded
        size="small"
        floated="left"
        src={item.images[0].data_url}
      />
      <List.Content
        floated="left"
        style={{
          minWidth: '240px',
          textAlign: 'left',
          paddingLeft: '0px',
          marginTop: '.5em',
        }}>
        <List.Header
          as={Link}
          to={item.productURL}
          style={{ fontSize: '1.77em' }}>
          {item.productHeader}
        </List.Header>
        <List.Description style={{ fontSize: '1.33em', marginTop: '1em' }}>
          {item.productBody}
          <p
            style={{
              fontSize: '1em',
              marginTop: '0.3em',
              marginBottom: '0.1em',
            }}>
            <span>Fiyat: </span>
            {item.discount ? (
              <React.Fragment>
                <span
                  style={{
                    textDecoration: 'line-through',
                    marginRight: '10px',
                  }}>
                  {item.price + ' TL'}
                </span>
                <span>
                  {(+item.price - (+item.price * item.discount) / 100).toFixed(
                    2
                  ) + ' TL'}
                </span>
              </React.Fragment>
            ) : (
              <span>{item.price + ' TL'}</span>
            )}
          </p>
          <p style={{ marginBottom: '0.1em' }}>
            <b>Beden: </b> {item.size}
          </p>
          <p>Adet: {cart?.filter((el) => item.id === el.id).length}</p>
        </List.Description>
        <div>
          <div style={{ margin: '7px 0px' }}>
            <Button icon onClick={() => dispatch(IncreaseItemCount(item))}>
              {' '}
              <Icon name="plus" />{' '}
            </Button>
            <Button icon onClick={() => dispatch(DecreaseItemCount(item))}>
              {' '}
              <Icon name="minus" />{' '}
            </Button>
            <Button icon onClick={() => dispatch(RemoveFromCart(item))}>
              {' '}
              <Icon name="trash" />{' '}
            </Button>
          </div>
        </div>
      </List.Content>
    </List.Item>
  );
}

CartItem.propTypes = {
  item: PropTypes.object,
};
export default CartItem;
