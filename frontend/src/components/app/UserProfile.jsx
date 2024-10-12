import { Avatar, Button, IconButton, Typography, Divider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MaleIcon from '@mui/icons-material/Male';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Grid from '@mui/material/Grid2';

const UserProfile = () => {
  return (
    <div style={{ width: '300px',height: "100%" ,backgroundColor: '#fff', borderRadius: '8px', padding: '16px' }}>
      {/* Profile Header */}
      <Grid container justifyContent="center" alignItems="center" direction="column">
        <Avatar
          alt="Michael Wong"
          src="https://your-image-url.jpg"
          sx={{ width: 80, height: 80 }}
        />
        <Typography variant="h6" component="h2" gutterBottom>
          Michael Wong
        </Typography>
        <Typography variant="body2" color="textSecondary">
          UX/UI Designer
        </Typography>
        {/* Social Icons */}
        <Grid container justifyContent="center" spacing={1} sx={{ marginTop: '8px' }}>
          <Grid item>
            <IconButton size="small" color="primary">
              {/* Replace with actual icons for Facebook, Twitter, LinkedIn */}
              <i className="fab fa-facebook"></i>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size="small" color="primary">
              <i className="fab fa-twitter"></i>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton size="small" color="primary">
              <i className="fab fa-linkedin"></i>
            </IconButton>
          </Grid>
        </Grid>
        {/* Edit Profile Button */}
        <Button
          variant="outlined"
          startIcon={<EditIcon />}
          sx={{ marginTop: '16px', textTransform: 'none' }}
        >
          Edit Profile
        </Button>
      </Grid>

      <Divider sx={{ margin: '16px 0' }} />

      {/* Contact Info */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Mobile
          </Typography>
          <Grid container alignItems="center">
            <PhoneIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: '8px' }}>
              +430 332 4567
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Email
          </Typography>
          <Grid container alignItems="center">
            <EmailIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: '8px' }}>
              mizko@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Date of Birth
          </Typography>
          <Grid container alignItems="center">
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: '8px' }}>
              02/12/1990
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Gender
          </Typography>
          <Grid container alignItems="center">
            <MaleIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: '8px' }}>
              Male
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ margin: '16px 0' }} />

      {/* Shared Media */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="textSecondary">
          Shared Media
        </Typography>
        <Button variant="text" size="small">
          See All
        </Button>
      </Grid>

      <Grid container spacing={1} sx={{ marginTop: '8px' }}>
        <Grid item xs={4}>
          <PlayCircleOutlineIcon fontSize="large" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={4}>
          <PlayCircleOutlineIcon fontSize="large" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={4}>
          <PlayCircleOutlineIcon fontSize="large" sx={{ width: '100%' }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
