import { Button, Card, CardContent, Grid } from "@mui/material";
import React, { Component } from "react";
import {
  AccountCircle,
  Settings,
  Notifications,
  People,
} from "@mui/icons-material";
import { IconButton } from "material-ui";
import { useNavigate } from "react-router-dom";

const OrgProfileMenu = (props) => {
  const navigateTo = useNavigate();
  const itemStyle = {
    color: "black",
    textTransform: "none",
  };
  const handleUserClick = () => {
    navigateTo("/userProfile");
  };
  const handleNotificationsClick = () => {
    console.log("clicked");
  };
  return (
    <Card sx={{ flexGrow: 1 }}>
      <CardContent>
        <Grid container spacing={1} direction="column">
          <Grid item xs={12}>
            <Button style={itemStyle}>General</Button>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleUserClick} style={itemStyle}>
              Users
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleNotificationsClick} style={itemStyle}>
              Notifications
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default OrgProfileMenu;
