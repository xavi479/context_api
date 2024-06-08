import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario y la autenticación
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);

    // Supongamos que la autenticación es exitosa:
    navigate('/dashboard'); // Redirigir a la página de destino
  };

  const handleForgotPassword = () => {
    // Maneja la navegación a la página de recuperación de contraseña
    navigate('/forgot-password');
  };

  const handleRegister = () => {
    // Navega a la página de registro
    navigate('/register');
  };

  return (
    <div className="login-container content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form className="el-form login-form el-form--label-top" onSubmit={handleSubmit} style={{ width: '80%', margin: '0 auto', maxWidth: '400px', textAlign: 'center' }}>
        <div className="login-welcome el-row" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <span title="Bienvenido/a" className="login-welcome-text" style={{ flexGrow: 1, textAlign: 'left' }}> <h1>Bienvenido/a</h1></span>
          <select className="form-select" aria-label="Default select example" style={{ height: '35px', padding: '0 10px', width: '120px', textAlign: 'center' }}>
            <option selected>Idioma</option>
            <option value="1">Español</option>
            <option value="2">English</option>
            <option value="3">Français</option>
          </select>
        </div>
        
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="card-body" style={{ textAlign: 'left' }}>
          <button
            onClick={handleForgotPassword}
            className="card-link card-link-button"
            style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', textDecoration: 'underline' }}
          >
            ¿Ha olvidado su contraseña?
          </button>
        </div>

        <div className="el-form-item" style={{ marginBottom: '10px' }}>
          <div className="el-form-item__content">
            <button type="submit" className="el-button login-btn el-button--primary">
              Iniciar sesión
            </button>
          </div>
        </div>

        <div className="item-register el-form-item">
          <div className="el-form-item__content">
            <p className="register-btn">
              ¿Aún no se ha registrado?&nbsp;
              <button
                onClick={handleRegister}
                style={{ cursor: 'pointer', color: 'rgb(33, 150, 243)', background: 'none', border: 'none', padding: 0, font: 'inherit', textDecoration: 'underline' }}
              >
                Registrar
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
