import React from "react";
import { Typography } from "@mui/material";

const Confirmation = ({ formData }) => {
  return (
    <div>
      <Typography variant="h5" component="h2">
        Step 3: Confirmation
      </Typography>
      <div>
        <Typography variant="h6" component="h3">
          Personal Information
        </Typography>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Phone: {formData.phone}</p>
      </div>
      <div>
        <Typography variant="h6" component="h3">
          Address Information
        </Typography>
        <p>Address Line 1: {formData.address1}</p>
        <p>Address Line 2: {formData.address2}</p>
        <p>City: {formData.city}</p>
        <p>State: {formData.state}</p>
        <p>Zip Code: {formData.zip}</p>
      </div>
    </div>
  );
};

export default Confirmation;
