import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import CardComponent from '../../common/CardComponent';

function BottomBody() {
  return (
    <React.Fragment>
      <Header style={{ marginBottom: '35px', textAlign: 'center' }}>
        Alt giyim kategorisi için bulunan sonuçlar
      </Header>
      <Container style={{ marginBottom: '50px ' }}>
        <Grid>
          <CardComponent category="alt-giyim" />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default BottomBody;
