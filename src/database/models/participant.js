
const { DataTypes } = require('sequelize')

const attributes = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  }
}


const options = {
  tableName: 'Participants',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  underscored: true
}

const create = database => database.define(
  'Participant',
  attributes,
  options
)

module.exports = {
  create
}