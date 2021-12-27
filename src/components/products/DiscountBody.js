import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Card, Container, Grid } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import PlaceHolder from '../../common/PlaceHolder';
import CardDiscountLabel from '../../common/CardDiscountLabel';
import CardDescription from '../../common/CardDescription';
import CardContent from '../../common/CardContent';

function CardComponent() {
  const product = useSelector((state) => state.product);
  const [state, setState] = useState([]);
  useEffect(() => {
    if (product.data)
      setState(
        product.data
          .filter((item) => item.discount > 0 && item.stock > 0 && item.publish)
          .sort((a, b) => b.discount - a.discount)
          .filter(
            (item, index, self) =>
              index ===
              self.findIndex((e) => e.productHeader === item.productHeader)
          )
      );
  }, [product.data]);

  return state.map && state.length > 0 ? (
    state.map((item) => (
      <Grid.Column key={item.productURL} mobile={16} tablet={8} computer={4}>
        <Card as={Link} to={item.productURL} style={{ margin: 'auto' }}>
          <CardDiscountLabel props={item} />
          <Card.Content>
            <Card.Header>{item.productHeader}</Card.Header>
            <Card.Meta>{item.productBody}</Card.Meta>
            <Card.Description>
              <CardDescription props={item} />
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <CardContent props={item} />
          </Card.Content>
        </Card>
      </Grid.Column>
    ))
  ) : (
    <PlaceHolder />
  );
}

function DiscountBody() {
  return (
    <React.Fragment>
      <Header style={{ marginBottom: '35px', textAlign: 'center' }}>
        İndirim kategorisi için bulunan sonuçlar
      </Header>
      <Container style={{ marginBottom: '50px ' }}>
        <Grid>
          <CardComponent />
        </Grid>
      </Container>
    </React.Fragment>
  );
}
export default DiscountBody;
