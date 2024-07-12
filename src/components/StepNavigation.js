import React from 'react';
import { Button, Box } from '@mui/material';

const StepNavigation = ({ currentStep, handleNext, handleBack, isLastStep }) => {
  return (
    <Box mt={2}>
      {currentStep > 1 && (
        <Button onClick={handleBack} variant="contained" color="secondary" style={{ marginRight: '8px' }}>
          Back
        </Button>
      )}
      {!isLastStep ? (
        <Button onClick={handleNext} variant="contained" color="primary">
          Next
        </Button>
      ) : (
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      )}
    </Box>
  );
};

export default StepNavigation;
