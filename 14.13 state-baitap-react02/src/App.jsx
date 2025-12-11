import { useState } from "react";

// Don't change the component name "App"
export default function App() {
  {
    /* cach 1 */
  }

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  let alert = (
    <button onClick={activateHandler} className="action-btn">
      Activate
    </button>
  );
  let successMessage = <h3 className="success-message">Mode Activated!</h3>;

  if (isAlertVisible) {
    alert = (
      <div className="alert-box">
        <h2>Warning!</h2>
        <p>Are you sure you want to activate this mode?</p>
        <button onClick={confirmHandler} className="confirm-btn">
          Confirm
        </button>
        <button onClick={cancelHandler} className="cancel-btn">
          Cancel
        </button>
      </div>
    );
  } else if (isActivated) {
    alert = successMessage;
  } else if (!isActivated && !isAlertVisible) {
    alert = (
      <button onClick={activateHandler} className="action-btn">
        Activate
      </button>
    );
  }

  function activateHandler() {
    setIsAlertVisible(true);
  }

  function confirmHandler() {
    setIsAlertVisible(false);
    setIsActivated(true);
  }

  function cancelHandler() {
    setIsAlertVisible(false);
    setIsActivated(false);
  }

  return (
    <>
      {/* cach 1 */}
      {/* {alert} */}
      {/* cach 2 */}
      {!isActivated && !isAlertVisible && (
        <button onClick={activateHandler} className="action-btn">
          Activate
        </button>
      )}
      {isAlertVisible && (
        <div className="alert-box">
          <h2>Warning!</h2>
          <p>Are you sure you want to activate this mode?</p>
          <button onClick={confirmHandler} className="confirm-btn">
            Confirm
          </button>
          <button onClick={cancelHandler} className="cancel-btn">
            Cancel
          </button>
        </div>
      )}
      {isActivated && <h3 className="success-message">Mode Activated!</h3>}
    </>
  );
}
