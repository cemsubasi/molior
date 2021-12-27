import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Message, Grid, Header, Button } from 'semantic-ui-react';
import CardContent from '../../common/CardContent';
import CardDescription from '../../common/CardDescription';
import { AddToCart } from '../../store/actions/cart';

const MyButton = ({ ea, setDummyState, dummyState }) => {
  const product = useSelector((state) => state.product);
  useEffect(() => {
    setDummyState(ea);
  }, [ea, setDummyState]);
  useEffect(() => {
    setDummyState(
      product.data
        .filter((el) => el.productHeader === ea.productHeader && el.publish)
        .sort((arg1, arg2) => arg2.discount - arg1.discount)
        .filter((item) => item.stock > 0)[0]
    );
  }, [ea.productHeader, product.data, setDummyState]);
  return (
    <Button
      key={ea.productURL}
      primary={ea.size === dummyState.size}
      onClick={() => setDummyState(ea)}>
      {ea.size}
    </Button>
  );
};

MyButton.propTypes = {
  item: PropTypes.object,
  dummyState: PropTypes.object,
  message: PropTypes.bool,
  setDummyState: PropTypes.func,
  setMessage: PropTypes.func,
};

function DummyItemProperties({
  item,
  dummyState,
  message,
  setDummyState,
  setMessage,
}) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  return (
    <>
      <Header as="h3" style={{ fontSize: '2em' }}>
        {item.productHeader}
      </Header>
      <p style={{ fontSize: '1.33em' }}>{item.productBody}</p>
      <CardContent style={{ fontSize: '1.33em' }} props={dummyState} />
      <Header style={{ fontSize: '1.33em' }}>
        <CardDescription props={dummyState} />
      </Header>
      <Grid container stackable style={{ marginTop: '5px' }}>
        <Grid.Row>
          <p floated="left" style={{ fontSize: '1.33em' }}>
            Beden:
          </p>
        </Grid.Row>
        <Grid.Row>
          <div>
            {product.data
              .filter(
                (el) => el.productHeader === item.productHeader && el.publish
              )
              .sort((arg1, arg2) => arg1.size - arg2.size)
              .map(
                (ea) =>
                  ea.stock > 0 && (
                    <MyButton
                      key={ea.id}
                      ea={ea}
                      setDummyState={setDummyState}
                      dummyState={dummyState}
                    />
                  )
              )}
          </div>
        </Grid.Row>
        <Grid.Row textAlign="center">
          <div style={{ marginTop: '10px' }}>
            {message && (
              <Message
                warning
                header="Uyarı"
                content="Sepete eklemeden önce beden seçmelisiniz."
              />
            )}
            <Button
              icon={{
                name:
                  dummyState && !(dummyState.stock > 0 || dummyState.length > 0)
                    ? 'box'
                    : 'shopping basket',
              }}
              onClick={() => {
                if (dummyState.id) {
                  dispatch(AddToCart(dummyState));
                } else {
                  setMessage(true);
                  setTimeout(() => setMessage(false), 5000);
                }
              }}
              content={
                dummyState && !(dummyState.stock > 0 || dummyState.length > 0)
                  ? 'Tükendi'
                  : 'Sepete Ekle'
              }
              disabled={
                dummyState && !(dummyState.stock > 0 || dummyState.length > 0)
              }
              size="large"
            />
            <p style={{ marginTop: '15px' }}>Tahmini teslimat süresi: 2 gün</p>
          </div>
        </Grid.Row>
      </Grid>
    </>
  );
}
DummyItemProperties.propTypes = {
  item: PropTypes.object,
  dummyState: PropTypes.object,
  message: PropTypes.bool,
  setDummyState: PropTypes.func,
  setMessage: PropTypes.func,
};

export default DummyItemProperties;
