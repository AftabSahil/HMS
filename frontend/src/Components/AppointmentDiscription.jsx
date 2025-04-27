import React from "react";

const AppointmentDescription = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <title>{title}</title>
        <p>
        Booking care at <strong>SAGS-Care</strong> is designed to be as simple as it should be.
          In just a few clicks, secure your spot with our top-tier specialists—no phone calls, no waiting on hold.
          Need urgent attention? Our priority slots ensure you’re seen the same day.

          Receive instant confirmations, tailored doctor matches, and friendly reminders so you never miss a visit.
          We know your time is precious, so we’ve stripped away the bureaucracy to put you back at the center of your care.
          Ready to take the first step? <strong>Schedule your visit now</strong>—it’s faster than ordering takeout.
        
        </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default AppointmentDescription;
