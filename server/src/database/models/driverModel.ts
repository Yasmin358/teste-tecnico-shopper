import { Model, INTEGER, STRING, DOUBLE } from 'sequelize';
import db from '.';

class Driver extends Model {
    declare id: number;
    declare name: string;
    declare description: string;
    declare vehicle: string;
    declare taxa: number;
    declare KmMinimo: number;
}

Driver.init({
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: STRING,
        allowNull: false,
    },
    description: {
        type: STRING,
        allowNull: false,
    },
    vehicle: {
        type: STRING,
        allowNull: false,
    },
    rate: {
        type: DOUBLE,
        allowNull: false,
    },
    KmMinimo: {
        type: INTEGER,
        allowNull: false, 
    },
},
    {
        sequelize: db, 
        modelName: 'driver',
        timestamps: false,
    },
);

export default Driver;