import { Container, Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation.js";

export const Layout = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};
