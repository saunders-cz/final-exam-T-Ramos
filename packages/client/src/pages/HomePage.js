import { Container, Grid, Typography } from "@mui/material";
import React from "react";

export const HomePage = () => {
  return (
    <Container>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Thomas's Bar & Restaurant
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <img src="/img/restaurantphoto.jpg" alt="homephoto" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          About Us
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Grid item xs={9}>
          <Typography variant="body1" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis odio. Cras condimentum turpis vitae quam tristique
            condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Morbi sagittis est lorem, sed tempor
            augue aliquam eget. Curabitur lobortis tellus vel porta tempus.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis faucibus ullamcorper ipsum vitae
            convallis. Curabitur vestibulum neque non diam fermentum, quis
            laoreet justo laoreet. Donec ultricies nulla sit amet lacus
            bibendum, in dapibus lacus mollis. Etiam sed orci eu odio mattis
            mattis eu in augue. Ut ut orci varius, efficitur turpis sit amet,
            blandit mi. Quisque posuere, eros at consectetur fringilla, libero
            augue pellentesque lorem, ac commodo risus tortor ac ante.
          </Typography>
          <Typography variant="body1" align="justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nec iaculis odio. Cras condimentum turpis vitae quam tristique
            condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae; Morbi sagittis est lorem, sed tempor
            augue aliquam eget. Curabitur lobortis tellus vel porta tempus.
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Duis faucibus ullamcorper ipsum vitae
            convallis. Curabitur vestibulum neque non diam fermentum, quis
            laoreet justo laoreet. Donec ultricies nulla sit amet lacus
            bibendum, in dapibus lacus mollis. Etiam sed orci eu odio mattis
            mattis eu in augue. Ut ut orci varius, efficitur turpis sit amet,
            blandit mi. Quisque posuere, eros at consectetur fringilla, libero
            augue pellentesque lorem, ac commodo risus tortor ac ante.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} align="center">
        <Typography variant="h2" align="center">
          Business Hours
        </Typography>
        <Typography variant="h4" align="center">
          Monday: 9 a.m. - 5 p.m
        </Typography>
        <Typography variant="h4" align="center">
          Tuesday: 9 a.m. - 5 p.m
        </Typography>
        <Typography variant="h4" align="center">
          Wednesday: 9 a.m. - 5 p.m
        </Typography>
        <Typography variant="h4" align="center">
          Thursday: 9 a.m. - 5 p.m
        </Typography>
        <Typography variant="h4" align="center">
          Friday: 9 a.m. - 5 p.m
        </Typography>
        <Typography variant="h4" align="center">
          Saturday: 9 a.m. - 5 p.m
        </Typography>
        <Typography variant="h4" align="center">
          Sunday: CLOSED
        </Typography>
      </Grid>
    </Container>
  );
};
