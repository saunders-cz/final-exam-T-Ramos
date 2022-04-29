import { Button, Container, Grid, TextField } from "@mui/material";
import { useFormik, Field } from "formik";
import { MailSwitch } from "./Switch";

import * as yup from "yup";

const initialValues = {
  name: "",
  email: "",
  address: "",
};

const validationSchema = yup.object({
  name: yup.string().required().label("Name"),
  email: yup
    .string()
    .email("Invalid email format")
    .required()
    .label("Email Address"),
  address: yup.string().required().label("Street Address"),
});

export const RegistrationForm = () => {
  const { values, errors, handleSubmit, handleBlur, handleChange, isValid } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: (values, helpers) => {
        console.log(values, helpers);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Name"
              error={!!errors.name}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Street Address"
              error={!!errors.address}
              helperText={errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              variant="outlined"
              label="Email Address"
              error={!!errors.email}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <MailSwitch />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" disabled={isValid === false}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};
