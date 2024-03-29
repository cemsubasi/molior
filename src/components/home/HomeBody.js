import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Icon,
  Divider,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

import home_alt from '../../assets/images/home_alt.png';
import home_elbise from '../../assets/images/home_elbise.png';
import home_ust from '../../assets/images/home_ust.png';

const HomeBody = () => {
  return (
    <div>
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Elbise Modelleri
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Beğenebileceğinizi düşündüğümüz en yeni elbise modellerini
                burada topladık.
              </p>
              <Header as="h3" style={{ fontSize: '1.5em' }}>
                Tek Tek ve Özenle Seçildi
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yüzlerce modelin arasından sizin için seçtik.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image
                as={Link}
                to="/elbise"
                bordered
                rounded
                size="large"
                src={home_elbise}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button as={Link} to="/elbise" size="huge">
                Hemen İncele
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '0em' }} vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                <Icon name="whatsapp" /> Whatsapp İletişim Hattı
              </Header>
              <p style={{ fontSize: '1.33em' }}>053X XXX XX XX</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                <Icon name="fast shipping" /> 150 TL ve Üzerine Ücretsiz Kargo
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b>7</b> Gün İçerisinde Değişim Hakkı
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" width={6}>
              <Image
                bordered
                rounded
                size="large"
                src={home_ust}
                as={Link}
                to="/ust-giyim"
              />
            </Grid.Column>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Üst Giyim Modelleri
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Beğenebileceğinizi düşündüğümüz en yeni üst giyim modellerini
                burada topladık.
              </p>
              <Header as="h3" style={{ fontSize: '1.5em' }}>
                Tek Tek ve Özenle Seçildi
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yüzlerce modelin arasından sizin için seçtik.
              </p>
              <Grid.Column textAlign="center">
                <Button as={Link} to="/ust-giyim" size="huge">
                  Hemen İncele
                </Button>
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
          <Divider as={Link} to="/">
            Molior Boutique
          </Divider>
        </Divider>

        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: '2em' }}>
                Alt Giyim Modelleri
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Beğenebileceğinizi düşündüğümüz en yeni alt giyim modellerini
                burada topladık.
              </p>
              <Header as="h3" style={{ fontSize: '1.5em' }}>
                Tek Tek ve Özenle Seçildi
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yüzlerce modelin arasından sizin için seçtik.
              </p>
              <Grid.Column textAlign="center">
                <Button
                  as={Link}
                  to="/alt-giyim"
                  style={{ textAlign: 'center' }}
                  size="huge">
                  Hemen İncele
                </Button>
              </Grid.Column>
            </Grid.Column>
            <Grid.Column width={6} floated="right" textAlign="center">
              <Image
                bordered
                rounded
                style={{ margin: 'auto', textAlign: 'center', width: 'auto' }}
                as={Link}
                to="/alt-giyim"
                size="large"
                src={home_alt}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
};

export default HomeBody;
