import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

function ConfirmationPopup({ handleConfirm, handleCancel }) {
  return (
    <>
      <div className="overlay">
        <div className="overlay__background" />
        <div className="overlay__container">
          <div className="overlay__controls">
            <p>Changes you made may not be saved. Do you want to continue?</p>
            <button onClick={handleConfirm}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
}

const About = (props) => {
  const navigate = useNavigate();
  const [isBackButtonClicked, setIsBackButtonClicked] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleConfirm = () => {
    setIsConfirmationOpen(false);
    setIsBackButtonClicked(false);
    setShouldRedirect(true);
  };

  const handleCancel = () => {
    setIsConfirmationOpen(false);
    setIsBackButtonClicked(false);
  };

  useEffect(() => {
    if (shouldRedirect) {
      navigate(-1);
    }
  }, [shouldRedirect, navigate]);

  useEffect(() => {
    // window.onbeforeunload = onBackButtonEvent;
    window.history.pushState(null, null, window.location.pathname);
    window.addEventListener("popstate", onBackButtonEvent);
    return () => {
      window.removeEventListener("popstate", onBackButtonEvent);
      console.log("failure");
      // window.onbeforeunload = null;
    };
  }, [isBackButtonClicked]);

  const onBackButtonEvent = (e) => {
    setIsConfirmationOpen(true);
    setIsBackButtonClicked(true);
  };

  return (
    <div>
      {isConfirmationOpen && (
        <ConfirmationPopup
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      )}
      <div style={{ textAlign: "center", alignItems: "center" }}>About</div>
    </div>
  );
};

export default About;
