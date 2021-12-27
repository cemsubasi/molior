import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button, Form } from 'semantic-ui-react';

import { countries } from '../../assets/jsons/countries.json';
import Dimmer from '../../common/Dimmer';
import CartBanner from '../shoppingcart/CartBanner';
import { AddAnOrder } from '../../store/actions/order';

function PaymentBody() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);

  const INITIAL_STATE = {
    name: '',
    surname: '',
    address: '',
    phone: '',
    email: '',
    country: 'Turkey',
    state: '',
    zip: '',
    cardNumber: '',
    day: 1,
    month: 1,
    cvc: '',
    terms: false,
  };

  function submit(arg) {
    return dispatch(AddAnOrder(arg));
    // return axiosCall("post", "/order", arg)
    // 	.then(dimmerHandler)
    // 	.catch((err) => console.log("Baglanti Hatasi: Cart", err));
  }

  const [state, setState] = useState(INITIAL_STATE);
  const [dimmer, setDimmer] = useState(false);
  const stateHandler = (e, data) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
      [data.name]: data.value,
    });

  const opt = [];
  countries.forEach((each, index) => {
    opt[index] = {};
    opt[index].key = index;
    opt[index].text = each.country;
    opt[index].value = each.country;
  });
  const opt2 = [];
  if (countries.some((each) => each.country === state.country)) {
    countries
      .find((each) => each.country === state.country)
      .states.forEach((each, index) => {
        opt2[index] = {};
        opt2[index].key = index;
        opt2[index].text = each;
        opt2[index].value = each;
      });
  }
  const optMonth = [];
  for (let i = 0; i < 12; i++) {
    optMonth[i] = { key: i, text: i + 1, value: i + 1 };
  }
  const optDay = [];
  for (let i = 0; i < 31; i++) {
    optDay[i] = { key: i, text: i + 1, value: i + 1 };
  }
  // const dimmerHandler = () => {
  //   setDimmer(true);
  //   setTimeout(() => setDimmer(false), 2000);
  // };
  return (
    <>
      <Dimmer open={dimmer} />
      <Container style={{ margin: '3em 0 8em 0' }}>
        <CartBanner select="card" />
        <Form>
          <Form.Group unstackable widths={2}>
            <Form.Input
              label="Ad"
              name="name"
              value={state.name}
              onChange={stateHandler}
              placeholder="Ad"
              required
            />
            <Form.Input
              label="Soyad"
              name="surname"
              value={state.surname}
              onChange={stateHandler}
              placeholder="Soyadınız"
              required
            />
          </Form.Group>
          <Form.Group widths={2}>
            <Form.Input
              label="Adres"
              name="address"
              value={state.address}
              onChange={stateHandler}
              width={8}
              placeholder="Adres"
              required
            />
            <>
              <Form.Input
                label="Telefon"
                name="phone"
                value={state.phone}
                onChange={stateHandler}
                width={4}
                placeholder="Telefon"
                required
              />
              <Form.Input
                label="E-posta"
                name="email"
                value={state.email}
                onChange={stateHandler}
                width={4}
                placeholder="E-posta"
                type="email"
                required
              />
            </>
          </Form.Group>
          <Form.Group widths={3}>
            <Form.Dropdown
              search
              selection
              wrapSelection={false}
              label="İl"
              name="country"
              placeholder="İl"
              onChange={(e, data) => stateHandler(e, data)}
              value={state.country}
              options={opt}
              required
            />
            <Form.Dropdown
              search
              selection
              wrapSelection={false}
              label="İlçe"
              name="state"
              placeholder="İlçe"
              onChange={(e, data) => stateHandler(e, data)}
              value={state.state}
              options={opt2}
              required
            />
            <Form.Input
              label="Posta Kodu"
              name="zip"
              value={state.zip}
              onChange={stateHandler}
              placeholder="Posta Kodu"
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              label="Kart Numarası"
              name="cardNumber"
              value={state.cardNumber}
              onChange={stateHandler}
              width={6}
              placeholder="4543 XXXX XXXX 1234"
              required
            />
            <>
              <Form.Dropdown
                search
                selection
                fluid
                label="Gün"
                name="day"
                width={4}
                options={optDay}
                onChange={(e, data) => stateHandler(e, data)}
                value={state.day}
                placeholder="GG"
                required
                wrapSelection={false}
              />
              <Form.Dropdown
                search
                selection
                fluid
                label="Ay"
                name="month"
                width={4}
                options={optMonth}
                onChange={(e, data) => stateHandler(e, data)}
                value={state.month}
                placeholder="AA"
                required
                wrapSelection={false}
              />
            </>
            <Form.Input
              fluid
              label="CVC"
              name="cvc"
              value={state.cvc}
              onChange={stateHandler}
              width={2}
              placeholder="XXX"
              type="password"
              required
            />
          </Form.Group>
          <Form.Checkbox
            label="Gizlilik sözleşmesi ve kullanım koşullarını okudum kabul ettim."
            name="terms"
            onClick={(e, data) => setState({ ...state, terms: data.checked })}
            required
          />
          <Button
            type="submit"
            onClick={() => {
              submit({
                cart: cart.map((item) =>
                  item ? { ...item, images: '', status: 'none' } : item
                ),
                credentials: { ...state, orderId: Date.now() },
              });
            }}
            disabled={!state.terms}>
            Onayla
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default PaymentBody;
