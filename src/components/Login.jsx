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
    <div className="login-container content" title="Descargue la última versión para una mejor experiencia." > 
      <form
        className="el-form login-form el-form--label-top"
        onSubmit={handleSubmit}
        style={{ width: "100%" }}
      >
        {/*<div
          className="content"
          title="Descargue la última versión para una mejor experiencia."
        >*/}
         
          <div className="login-welcome el-row">
            <span title="Bienvenido/a" className="login-welcome-text">
              Bienvenido/a
            </span>
            <div className="el-select language-select">
              <span className="el-select__text">Español</span>
              <div className="el-input el-input--suffix">
                <input
                  autoComplete="off"
                  placeholder="Idioma"
                  type="text"
                  title="Español"
                  className="el-input__inner"
                  style={{ paddingRight: "32px" }}
                  readOnly
                />
                <span className="el-input__suffix">
                  <span className="el-input__suffix-inner">
                    <i className="el-input__icon h-icon-angle_down_sm"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="el-form-item">
            <div className="el-form-item__content">
              <div className="el-input el-input--prefix">
                <input
                  autoComplete="username"
                  placeholder="Correo electrónico/Cuenta"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  maxLength="128"
                  className="el-input__inner"
                  style={{ paddingLeft: "32px" }}
                  required
                />
                <span className="el-input__prefix">
                  <i className="el-input__icon login-icon-user"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="item-password el-form-item is-required-right">
            <div className="el-form-item__content">
              <div className="el-input el-input--suffix">
                <input
                  autoComplete="off"
                  placeholder="Contraseña"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="el-input__inner"
                  style={{ paddingRight: "32px" }}
                  required
                />
                <span className="el-input__suffix">
                  <span className="el-input__suffix-inner">
                    <i className="el-input__icon h-icon-password_unvisible"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="el-form-item__content">
              <p className="register-btn">
                &nbsp;
                <button
                  onClick={handleForgotPassword}
                  style={{
                    cursor: "pointer",
                    color: "rgb(33, 150, 243)",
                    background: "none",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    textDecoration: "underline",
                  }}
                >
                  ¿Ha olvidado su contraseña?
                </button>
              </p>
            </div>
          </div>
          <div className="el-form-item" style={{ marginBottom: "4px" }}>
            <div className="el-form-item__content">
              <button
                type="submit"
                className="el-button login-btn el-button--primary"
              >
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
                  style={{
                    cursor: "pointer",
                    color: "rgb(33, 150, 243)",
                    background: "none",
                    border: "none",
                    padding: 0,
                    font: "inherit",
                    textDecoration: "underline",
                  }}
                >
                  Registrar
                </button>
              </p>
            </div>
          </div>
          <div className="qr-code">
            <div className="qr-code-div">
              <img
                src="Common/static/images/qrcode.svg"
                className="android"
                alt="QR Code"
              />
            </div>
            <div className="qr-code-div-title">
              <div className="title" title="Descargar aplicación">
                Descargar aplicación
              </div>
            </div>
          </div>
       
      </form>
     Descargue la última versión para una mejor experiencia.
    </div>
  );
};
