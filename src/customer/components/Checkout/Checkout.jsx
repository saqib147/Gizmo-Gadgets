import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummery from "./OrderSummery";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const location = useLocation();
  const querySearch = new URLSearchParams(location.search);
  const stepFromUrl = parseInt(querySearch.get("step"), 10);

  // Set the default active step to 1 (Delivery Address), and use step from URL if valid
  const [activeStep, setActiveStep] = React.useState(
    !isNaN(stepFromUrl) && stepFromUrl >= 1 && stepFromUrl <= steps.length
      ? stepFromUrl - 1 // Convert to 0-based index
      : 1 // Default to step 1 (Delivery Address)
  );

  // Update activeStep when the URL parameter changes
  React.useEffect(() => {
    if (
      !isNaN(stepFromUrl) &&
      stepFromUrl >= 1 &&
      stepFromUrl <= steps.length
    ) {
      setActiveStep(stepFromUrl - 1); // Convert to 0-based index
    }
  }, [stepFromUrl]);

  const handleNext = () => {
    const nextStep = Math.min(activeStep + 1, steps.length - 1);
    setActiveStep(nextStep);
    // Update the URL with the new step
    window.history.pushState(null, "", `?step=${nextStep + 1}`); // Convert back to 1-based index
  };

  const handleBack = () => {
    const prevStep = Math.max(activeStep - 1, 0); // Change to 0 to prevent going below step 0
    setActiveStep(prevStep);
    // Update the URL with the new step
    window.history.pushState(null, "", `?step=${prevStep + 1}`); // Convert back to 1-based index
  };

  return (
    <div className="px-10 md:px-20">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length - 1 ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 1} // Disable back button on step 1 (Delivery Address)
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            </Box>

            <div className="mt-10">
              {activeStep === 1 ? <DeliveryAddressForm /> : <OrderSummery />}
            </div>
          </React.Fragment>
        )}
      </Box>
    </div>
  );
}
