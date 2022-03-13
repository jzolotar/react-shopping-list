import { useEffect } from 'react';
import { StyledAlert } from './styles/Alert.styled';
const Alert = ({ alert, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list, removeAlert]);
  return (
    <StyledAlert>
      <p className={alert.status}>{alert.text}</p>
    </StyledAlert>
  );
};

export default Alert;
