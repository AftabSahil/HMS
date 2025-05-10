import React from "react";

const AboutusDiscription = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>The SAGS-Care Story: Where Revolutionary Care Meets Human Connection</h3>
          <p>
            In 2010, a group of three visionary doctors asked a radical question: What if healthcare could feel as warm and comforting as being cared for by your own family? This simple yet revolutionary idea sparked the birth of SAGS-Care Medical Institute—a humble clinic founded not just to treat illnesses, but to nurture hope, dignity, and genuine healing.
            <br />
            From those early days in a small neighborhood practice, SAGS-Care has grown into a nationally recognized healthcare leader—but our heartbeat remains unchanged. We’ve pioneered groundbreaking innovations like AI-assisted diagnostics that personalize treatment plans, and telehealth platforms that bring expert care directly to our patients’ homes. Yet technology has never overshadowed our core belief: Medicine is as much about listening as it is about curing.
          </p>
          
          <p>
            Beyond our walls, we’ve launched initiatives like "Health for All"—free neighborhood clinics that provide screenings, vaccines, and education to underserved communities. Our mobile health units reach remote areas, because wellness shouldn’t be a privilege. These efforts have earned us accolades, including the National Award for Patient-Centered Excellence—but our true pride lies in quieter moments: a grandmother’s relieved smile after her first pain-free day in years, or a child’s laughter returning after successful treatment.

            Today, SAGS-Care stands as a testament to what healthcare could—and should—be. A place where:

            <p><b>Cutting-edge science walks hand-in-hand with old-fashioned compassion.<br />
            
            Every patient is seen as a person, not a chart.<br />
            
            "Good enough" is never good enough—we relentlessly push boundaries to redefine care.<br /></b></p>
            
            We’re not just another hospital. We’re a movement. A promise. A family. And we invite you to be part of this story—because at SAGS-Care, we’re not just changing healthcare. Together, we’re rewriting its very soul.
          </p>
          <p>Coding is fun!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
        </div>
      </div>
    </>
  );
};

export default AboutusDiscription;