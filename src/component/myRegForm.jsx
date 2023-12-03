import React, { useState } from 'react';
import { register } from '../action/user';

const MyRegForm = () => {
 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Имя пользователя обязательно';
    }
    if (!email.trim()) {
      errors.email = 'Email обязателен';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Введите корректный email';
    }
    if (!password.trim()) {
      errors.password = 'Пароль обязателен';
    } else if (password.length < 6) {
      errors.password = 'Пароль должен содержать не менее 6 символов';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    
    setUsername('');
    setEmail('');
    setPassword('');
    setErrors({});
  };

  return (
    <div className="myForm">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Имя пользователя:
            <input className="myInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          </label>
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>
            Электронная почта:
            <input className="myInput" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>
            Пароль:
            <input className="myInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </label>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <button className="myButton" onClick={()=> register(username, email, password)}>Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default MyRegForm;