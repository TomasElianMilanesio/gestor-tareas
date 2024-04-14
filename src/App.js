import LogoApp from './imagenes/logo-tareas.png';
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className="logo-contenedor">
        <img
        src={LogoApp} 
        className='logo'
        alt='Logo de la aplicacion'/>
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
     
      </div>
    </div>
  );
}

export default App;
