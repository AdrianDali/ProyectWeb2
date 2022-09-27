import { Sequelize } from 'sequelize'
import db from '../config/db.js'

export const Materias = db.define('materias', {
  nombre: {
    type: Sequelize.STRING,
  },
  creditos: {
    type: Sequelize.INTEGER,
  },
  imagen: {
    type: Sequelize.STRING,
  },
  descripcion: {
    type: Sequelize.STRING,
  },
})
