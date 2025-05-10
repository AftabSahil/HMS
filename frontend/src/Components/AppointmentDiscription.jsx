import React from "react";

const AppointmentDescription = ({ title, imageUrl }) => {
  return (
    <>
    
      <div className="hero container">
      
        <div className="banner">
        <title>{title}</title>

          <p>
            <h2>Experience Effortless Booking with SAGS-Care</h2>
            At SAGS-Care, we’ve streamlined the process of accessing quality healthcare.
            With just a few simple clicks, you can book an appointment with our top-tier medical specialists—no need for phone calls or long hold times.
            Enjoy a smooth experience with instant confirmations, personalized doctor recommendations, and friendly reminders so you never miss a visit.
            We respect your time and understand your health is a priority. That’s why we’ve removed unnecessary red tape—placing you at the heart of your care journey.


            <strong>Schedule your visit now—it's quicker than ordering takeout.</strong>—it’s faster than ordering takeout.

            <br />

            <strong>Ready to begin?
              Scroll down to continue.</strong>

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
