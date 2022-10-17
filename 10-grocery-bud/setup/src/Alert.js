import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert, list }) => {

  // HOOKS
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000)
    return () => clearTimeout(timeout);
  }, [list]);

  // RETURN
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert
