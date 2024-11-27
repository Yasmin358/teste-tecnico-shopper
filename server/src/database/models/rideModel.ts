import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import Driver from './driverModel';

class Ride extends Model {
    declare id: number;
    declare date: Date;
    declare origin: string;
    declare destination: string;
    declare distance: number;
    declare duration: string;
    declare value: number;
    declare costumer_id: number;
    declare driver_id: number;
}

Ride.init({
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    date: {
        type: DATE,
        allowNull: false,
    },
    origin: {
        type: STRING,
        allowNull: false,
    },
    destination: {
        type: STRING,
        allowNull: false,
    },
    distance: {
        type: INTEGER,
        allowNull: false,
    },
    duration: {
        type: STRING,
        allowNull: false,
    },
    value: {
        type: INTEGER,
        allowNull: false,
    },
    costumer_id: {
        type: INTEGER,
        allowNull: false,
    },
    driver_id: {
        type: INTEGER,
        allowNull: false, 
    }
  },
  {
    sequelize: db, 
    modelName: 'ride',
    timestamps: false,
  },
);

Ride.belongsTo(Driver, {
    as: 'driver_fk',
    foreignKey: 'driver_id',
});

Driver.hasMany(Ride, {
    as: 'driver_fk',
    foreignKey: 'driver_id',
})

export default Model;