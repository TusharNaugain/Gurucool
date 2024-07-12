import React from 'react';
import { TextField, Typography } from '@mui/material';

const AddressInfo = ({ formData, setFormData, errors }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <Typography variant="h5" component="h2">Step 2: Address Information</Typography>
      <TextField
        fullWidth
        label="Address Line 1"
        name="address1"
        value={formData.address1}
        onChange={handleChange}
        error={!!errors.address1}
        helperText={errors.address1}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Address Line 2"
        name="address2"
        value={formData.address2}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        fullWidth
        label="City"
        name="city"
        value={formData.city}
        onChange={handleChange}
        error={!!errors.city}
        helperText={errors.city}
        margin="normal"
      />
      <TextField
        fullWidth
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        error={!!errors.state}
        helperText={errors.state}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Zip Code"
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        error={!!errors.zip}
        helperText={errors.zip}
        margin="normal"
      />
    </div>
  );
};

export default AddressInfo;
