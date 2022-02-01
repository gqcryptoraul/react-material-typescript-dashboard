import { Typography } from '@mui/material';

function PageHeader() {
  const user =
  {
    name: 'Raul Gonzalez',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Ajustes de Usuario
      </Typography>
      <Typography variant="subtitle2">
        {user.name},{' '}
        Panel de configuración de usuario.
      </Typography>
    </>
  );
}

export default PageHeader;
