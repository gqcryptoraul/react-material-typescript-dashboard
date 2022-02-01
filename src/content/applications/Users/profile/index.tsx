
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import { Grid, Container } from '@mui/material';

import ProfileCover from './ProfileCover';
import RecentActivity from './RecentActivity';
import Feed from './Feed';
import PopularTags from './PopularTags';
import MyCards from './MyCards';
import Addresses from './Addresses';

function ManagementUserProfile() {

  const user = {
    savedCards: 7,
    name: 'Raul Gonzalez',
    coverImg: '/static/images/placeholders/covers/5.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description: 'Mas de 20 años de experiencia en desarrollo de aplicaciones Bajo distintas tecnologias. Desarrollo Web Backend con Python, Django Rest API Framework y PostgreSQL, Frontent:Node JS, React, Nextapp, Chakra-ui,Typescript,Javascript,AWS Visual Studio .Net -C# .NET , Sap CrystalReports, Android Studio,Flutter, Microsoft SQLServer, Oracle, MySQL, PostsgreSQL, Python, NodeJ , Python, Django Reset Framework,Php,HTML, CSS3, JavaScript, JQuery y JQueryMobile, Visual Studio Code',
    jobtitle: 'Web Developer',
    location: 'Anaco, Venezuela',
    followers: '256'
  };

  return (
    <>
      <Helmet>
        <title>Gestión - Detalles del usuario</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
          <Grid item xs={12} md={4}>
            <RecentActivity />
          </Grid>
          <Grid item xs={12} md={8}>
            <Feed />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularTags />
          </Grid>
          <Grid item xs={12} md={7}>
            <MyCards />
          </Grid>
          <Grid item xs={12} md={5}>
            <Addresses />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default ManagementUserProfile;
