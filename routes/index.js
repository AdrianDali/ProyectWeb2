//const express = require('express');
import express from 'express';
import {
  paginaComentarios,
  paginaCreadores,
  paginaInicio,
  paginaMaterias,
} from '../controller/paginasControlador.js';


const rutas = express.Router()

rutas.get('/', paginaInicio)

rutas.get('/creadores', paginaCreadores)

rutas.get('/materias', paginaMaterias)

rutas.get('/comentarios', paginaComentarios)

export default rutas
