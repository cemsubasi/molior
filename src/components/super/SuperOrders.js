import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SuperHeader from './SuperHeader';
import { GetAllOrders, AddAnOrder } from '../../store/actions/order';
import { Popup, Image, Icon, Container, Table } from 'semantic-ui-react';

function SuperOrders(props) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const order = useSelector((state) => state.order.data);
  const [state, setState] = useState([]);
  useEffect(() => dispatch(GetAllOrders()), []);
  useEffect(() => {
    if (order) setState(order.reverse());
  }, [order]);

  function setStatus(orderId, id, cartIndex, arg) {
    dispatch(
      AddAnOrder({
        orderId: orderId,
        id: id,
        cartIndex: cartIndex,
        arg: arg,
      })
    );
    setInternalStatus(orderId, cartIndex, arg);
    // axiosCall('put', '/order')
    //   .then((result) => )
    //   .catch((err) => console.log('error: ', err));
  }

  function setInternalStatus(orderId, cartIndex, arg) {
    setState(
      state.map((each) =>
        each.orderId === orderId
          ? {
              ...each,
              cartList: each.cartList.map((e) =>
                e.cartIndex === cartIndex ? { ...e, status: arg } : e
              ),
            }
          : each
      )
    );
  }

  function findImg(header) {
    let tost = product.data.find((each) => each.productHeader === header);
    if (tost) return tost.images[0].data_url;
  }

  return (
    <SuperHeader>
      <Container style={{ margin: '4em 0' }}>
        <Table color="pink" celled striped structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell rowSpan="2">Müşteri</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Ürün</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Beden</Table.HeaderCell>
              <Table.HeaderCell colSpan="3">Durum</Table.HeaderCell>
              <Table.HeaderCell rowSpan="2">Buttonlar</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell>Onay</Table.HeaderCell>
              <Table.HeaderCell>İptal</Table.HeaderCell>
              <Table.HeaderCell>Fiyat</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {state.map &&
              state.map((each, index) => (
                <React.Fragment key={index}>
                  <Table.Row>
                    <Table.Cell
                      style={{ wordBreak: 'break-all' }}
                      rowSpan={each.cartList.length}>
                      Id: {each.orderId}
                      <br />
                      Ad: {each.name + ' ' + each.surname}
                      <br />
                      Tel: {each.phone}
                      <br />
                      Adres: {each.address}
                      <br />
                      {each.country}/{each.state}
                    </Table.Cell>
                    <Table.Cell>
                      {each.cartList[0] && (
                        <Link to={each.cartList[0].productURL}>
                          <Popup
                            trigger={
                              <Image
                                src={findImg(each.cartList[0].productHeader)}
                                avatar
                              />
                            }>
                            <Image
                              src={findImg(each.cartList[0].productHeader)}
                            />
                          </Popup>
                          {each.cartList[0].productHeader}
                        </Link>
                      )}
                    </Table.Cell>
                    <Table.Cell textAlign="right">
                      {each.cartList[0] && each.cartList[0].size}
                    </Table.Cell>
                    <Table.Cell
                      onClick={() =>
                        setStatus(
                          each.orderId,
                          each.cartList[0].id,
                          each.cartList[0].cartIndex,
                          'accepted'
                        )
                      }
                      textAlign="center">
                      <Icon
                        name="checkmark"
                        size="large"
                        color={
                          each.cartList[0].status === 'accepted'
                            ? 'green'
                            : null
                        }
                        style={{
                          color: 'rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    </Table.Cell>
                    <Table.Cell
                      onClick={() =>
                        setStatus(
                          each.orderId,
                          each.cartList[0].id,
                          each.cartList[0].cartIndex,
                          'rejected'
                        )
                      }
                      textAlign="center">
                      <Icon
                        name="checkmark"
                        size="large"
                        color={
                          each.cartList[0].status === 'rejected' ? 'red' : null
                        }
                        style={{
                          color: 'rgba(0, 0, 0, 0.1)',
                        }}
                      />
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Icon name="try" size="large" color="green" />
                      {each.cartList[0].totalPrice}
                    </Table.Cell>
                    <Table.Cell
                      textAlign="center"
                      rowSpan={each.cartList.length}>
                      button
                    </Table.Cell>
                  </Table.Row>
                  {each.cartList &&
                    each.cartList.map(
                      (e, index) =>
                        index > 0 && (
                          <Table.Row key={index}>
                            <Table.Cell>
                              <Link to={e.productURL}>
                                <Popup
                                  trigger={
                                    <Image
                                      src={findImg(e.productHeader)}
                                      avatar
                                    />
                                  }>
                                  <Image src={findImg(e.productHeader)} />
                                </Popup>
                                {e.productHeader}
                              </Link>
                            </Table.Cell>
                            <Table.Cell textAlign="right">{e.size}</Table.Cell>
                            <Table.Cell
                              onClick={() =>
                                setStatus(
                                  each.orderId,
                                  e.id,
                                  e.cartIndex,
                                  'accepted'
                                )
                              }
                              textAlign="center">
                              <Icon
                                name="checkmark"
                                size="large"
                                color={e.status === 'accepted' ? 'green' : null}
                                style={{
                                  color: 'rgba(0, 0, 0, 0.1)',
                                }}
                              />
                            </Table.Cell>
                            <Table.Cell
                              onClick={() =>
                                setStatus(
                                  each.orderId,
                                  e.id,
                                  e.cartIndex,
                                  'rejected'
                                )
                              }
                              textAlign="center">
                              <Icon
                                name="checkmark"
                                size="large"
                                color={e.status === 'rejected' ? 'red' : null}
                                style={{
                                  color: 'rgba(0, 0, 0, 0.1)',
                                }}
                              />
                            </Table.Cell>
                            <Table.Cell textAlign="center">
                              <Icon name="try" size="large" color="green" />
                              {e.totalPrice}
                            </Table.Cell>
                          </Table.Row>
                        )
                    )}
                </React.Fragment>
              ))}
          </Table.Body>
        </Table>
      </Container>
    </SuperHeader>
  );
}

export default SuperOrders;
