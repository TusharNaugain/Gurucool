import React, { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import StepNavigation from './components/StepNavigation';
import useLocalStorage from './components/hooks/UseLocalStorage';
import { Container, Typography, Paper } from '@mui/material';
import './App.css';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useLocalStorage('formData', {
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const validateStep = (step) => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (step === 2) {
      if (!formData.address1) newErrors.address1 = 'Address Line 1 is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.state) newErrors.state = 'State is required';
      if (!formData.zip) newErrors.zip = 'Zip Code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} className="flash-card">
        <Typography variant="h4" component="h1" gutterBottom>
          Multi-Step Form
        </Typography>
        {currentStep === 1 && <PersonalInfo formData={formData} setFormData={setFormData} errors={errors} />}
        {currentStep === 2 && <AddressInfo formData={formData} setFormData={setFormData} errors={errors} />}
        {currentStep === 3 && <Confirmation formData={formData} />}
        <StepNavigation
          currentStep={currentStep}
          handleNext={handleNext}
          handleBack={handleBack}
          isLastStep={currentStep === 3}
        />
      </Paper>
    </Container>
  );
};

export default App;
