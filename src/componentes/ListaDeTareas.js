import React, { useState, useEffect } from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from './Tarea';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  // Función para cargar las tareas guardadas del localStorage
  const cargarTareasGuardadas = () => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    }
  };

  // Cargar las tareas guardadas del localStorage cuando la aplicación se monta
  useEffect(() => {
    cargarTareasGuardadas();
  }, []);

  const agregarTarea = tarea => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      // Guardar las tareas actualizadas en el localStorage
      localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
    // Guardar las tareas actualizadas en el localStorage
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
    // Guardar las tareas actualizadas en el localStorage
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
