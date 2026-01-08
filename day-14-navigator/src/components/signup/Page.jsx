import React from 'react';

function Signup({ handleLogin }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Signup Page</h2>
      <button onClick={handleLogin}>Signup</button>
    </div>
  );
}

export default Signup;
