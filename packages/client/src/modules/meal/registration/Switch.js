import { Grid, Switch } from "@mui/material";
import React, { useState } from "react";

export function MailSwitch() {
  const [switchOn, setSwitchOn] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid item>
        <label>Opt-In to our mailing list?</label>
        <Switch
          id="aSwitch"
          checked={switchOn}
          onChange={() => setSwitchOn(!switchOn)}
        />
        {switchOn && <p>Thank you for joining!</p>}
      </Grid>
    </Grid>
  );
}
