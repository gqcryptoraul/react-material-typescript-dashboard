import {
  Button,
  Container,
  Grid,
  Typography
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);





function Hero() {

  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid spacing={{ xs: 6, md: 10 }} justifyContent="center" alignItems="center" container>
        <Grid item md={10} lg={8} mx="auto">
       
          <TypographyH1 sx={{ mb: 2 }} variant="h1">
            Panel de Administracion de DatQbox
          </TypographyH1>
          <TypographyH2
            sx={{ lineHeight: 1.5, pb: 4 }}
            variant="h4"
            color="text.secondary"
            fontWeight="normal"
          >
            Plantilla React creada con una gran cantidad de potentes componentes Material-UI y Typescript
          </TypographyH2>
          <Button
            component={RouterLink}
            to="/management/profile/details"
            size="large"
            variant="contained"
          >
            Continuar
          </Button>
          </Grid>
      </Grid>
    </Container>
  );
}

export default Hero;
