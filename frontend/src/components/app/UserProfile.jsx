import { Avatar, Button, IconButton, Typography, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MaleIcon from "@mui/icons-material/Male";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Grid from "@mui/material/Grid2";
import useConversation from "../../zustad/useConversation";

const UserProfile = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      style={{
        width: "300px",
        height: "100%",
        backgroundColor: "#fff",
        padding: "16px",
      }}
    >
      {/* Profile Header */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Avatar
          alt="Michael Wong"
          src={selectedConversation?.profilePic}
          sx={{ width: 80, height: 80 }}
        />
        <Typography variant="h6" component="h2" gutterBottom>
          {selectedConversation?.fullName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {`@${selectedConversation?.username}`}
        </Typography>
        {/* Social Icons */}
        <Grid
          container
          justifyContent="center"
          spacing={1}
          sx={{ marginTop: "8px" }}
        >
          <Grid item="true">
            <IconButton size="small" color="primary">
              {/* Replace with actual icons for Facebook, Twitter, LinkedIn */}
              <i className="fab fa-facebook"></i>
            </IconButton>
          </Grid>
          <Grid item="true">
            <IconButton size="small" color="primary">
              <i className="fab fa-twitter"></i>
            </IconButton>
          </Grid>
          <Grid item="true">
            <IconButton size="small" color="primary">
              <i className="fab fa-linkedin"></i>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ margin: "16px 0" }} />

      {/* Contact Info */}
      <Grid container spacing={2}>
        <Grid item="true" xs={12}>
          <Typography variant="body2" color="textSecondary">
            Mobile
          </Typography>
          <Grid container alignItems="center">
            <PhoneIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: "8px" }}>
              +430 332 4567
            </Typography>
          </Grid>
        </Grid>

        <Grid item="true" xs={12}>
          <Typography variant="body2" color="textSecondary">
            Email
          </Typography>
          <Grid container alignItems="center">
            <EmailIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: "8px" }}>
              mizko@gmail.com
            </Typography>
          </Grid>
        </Grid>

        <Grid item="true" xs={12}>
          <Typography variant="body2" color="textSecondary">
            Date of Birth
          </Typography>
          <Grid container alignItems="center">
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: "8px" }}>
              02/12/1990
            </Typography>
          </Grid>
        </Grid>

        <Grid item="true" xs={12}>
          <Typography variant="body2" color="textSecondary">
            Gender
          </Typography>
          <Grid container alignItems="center">
            <MaleIcon fontSize="small" />
            <Typography variant="body1" sx={{ marginLeft: "8px" }}>
              {selectedConversation?.gender}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ margin: "16px 0" }} />

      {/* Shared Media */}
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="body2" color="textSecondary">
          Shared Media
        </Typography>
        <Button variant="text" size="small">
          See All
        </Button>
      </Grid>

      <Grid container spacing={1} sx={{ marginTop: "8px" }}>
        <Grid item="true" xs={4}>
          <PlayCircleOutlineIcon fontSize="large" sx={{ width: "100%" }} />
        </Grid>
        <Grid item="true" xs={4}>
          <PlayCircleOutlineIcon fontSize="large" sx={{ width: "100%" }} />
        </Grid>
        <Grid item="true" xs={4}>
          <PlayCircleOutlineIcon fontSize="large" sx={{ width: "100%" }} />
        </Grid>
      </Grid>
    </div>
  );
};

export default UserProfile;
