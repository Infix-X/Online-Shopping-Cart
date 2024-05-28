import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('buyer');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'seller') {
      navigate('/seller');
    } else {
      navigate('/buyer');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="firstname">Firstname:</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>
        <div>
          <label htmlFor="lastname">Lastname:</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="phone" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="role-selection">
          <label>
            <input
              type="radio"
              name="role"
              value="buyer"
              checked={role === 'buyer'}
              onChange={() => setRole('buyer')}
            />
            Buyer
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="seller"
              checked={role === 'seller'}
              onChange={() => setRole('seller')}
            />
            Seller
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
