import React from "react";
import AppointmentForm from "../Components/AppointmentForm";
import AppointmentDescription from "../Components/AppointmentDiscription";

const Appointment = () => {
  return (
    <>
      <AppointmentDescription
        title={"Schedule Your Appointment | SAGS-Care Medical Institute"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
