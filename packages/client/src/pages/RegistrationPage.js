import { Grid, Typography } from "@mui/material";
import { RegistrationForm } from "../modules/meal/registration/RegistrationForm";

export const RegistrationFormPage = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          Registration Form
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <RegistrationForm />
      </Grid>
    </>
  );
};
