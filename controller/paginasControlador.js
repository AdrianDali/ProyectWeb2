import { Materias } from  '../models/Materias.js';

const paginaInicio = (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio',
  })
}

const paginaCreadores = (req, res) => {
  res.render('creadores', {
    pagina: 'Creadores',
  })
}

const paginaMaterias = async (req, res) => {
  //Obtener registros
  const materias = await Materias.findAll({
    attributes: ['nombre', 'creditos', 'imagen', 'descripcion'],
  })
  res.render('materias', {
    pagina: 'Materias',
    materias: materias,
  })
}

const paginaComentarios = (req, res) => {
  res.render('comentarios', {
    pagina: 'Comentarios',
  })
}

export { paginaInicio, paginaCreadores, paginaMaterias, paginaComentarios }
