import React, { useState } from 'react';
import RequestResetCode from './RequestCode';
import VerifyCodeAndResetPassword from './ResetPassword';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);

  const handleCodeSent = (email) => {
    setEmail(email);
    setStep(2);
  };

  return (
    <div>
      {step === 1 && <RequestResetCode onCodeSent={handleCodeSent} />}
      {step === 2 && <VerifyCodeAndResetPassword email={email} />}
    </div>
  );
};

export default ForgotPassword;
