import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import CardComponent from '../../common/CardComponent';

function DressBody() {
  return (
    <React.Fragment>
      <Header as="h3" style={{ marginBottom: '35px', textAlign: 'center' }}>
        Elbise kategorisi için bulunan sonuçlar
      </Header>
      <Container style={{ marginBottom: '50px ' }}>
        <Grid>
          <CardComponent category="elbise" />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default DressBody;
