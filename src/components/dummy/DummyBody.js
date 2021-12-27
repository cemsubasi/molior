import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Reveal, Image, Grid } from 'semantic-ui-react';
import DummyItemProperties from './DummyItemProperties';

const DummyBody = () => {
  const product = useSelector((state) => state.product);
  let { pathname } = useLocation();
  const [dummyState, setDummyState] = useState({});
  const [message, setMessage] = useState(false);

  return product.data
    .filter((item) => '/' + item.productURL === pathname)
    .map((item) => (
      <Grid
        key={item.productURL}
        container
        stackable
        verticalAlign="middle"
        style={{ margin: '20px 0px 110px' }}>
        <Grid.Column width={10}>
          <Reveal animated="move right">
            <Reveal.Content visible>
              <Image src={item.images[0].data_url} size="large" />
            </Reveal.Content>
            <Reveal.Content hidden>
              <Image src={item.images[1].data_url} size="large" />
            </Reveal.Content>
          </Reveal>
        </Grid.Column>
        <Grid.Column
          floated="right"
          width={6}
          style={{
            marginLeft: '0px',
            borderLeft: '1px solid rgba(0,0,0,0.1)',
          }}>
          <DummyItemProperties
            dummyState={dummyState}
            message={message}
            item={item}
            setDummyState={setDummyState}
            setMessage={setMessage}
          />
        </Grid.Column>
      </Grid>
    ));
};

export default DummyBody;
