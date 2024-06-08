import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Home } from '../components/Home';
import { Articles } from '../components/Articles';
import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Login } from '../components/Login';
import { ErrorPage } from '../components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';


export const AppRouter = () => {
  return (
    <Router>
      {/* Menú de navegación con Bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articulos">Artículos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/acerca-de">Acerca de</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Identifícate</NavLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Más
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Acción</a></li>
                  <li><a className="dropdown-item" href="#">Otra acción</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Algo más aquí</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Deshabilitado</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

      <section className='content'>
        {/* Configurar las rutas */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/inicio' element={<Home />}></Route>
          <Route path='/articulos' element={<Articles />}></Route>
          <Route path='/acerca-de' element={<About />}></Route>
          <Route path='/contacto' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
      </section>
    </Router>
  );
}