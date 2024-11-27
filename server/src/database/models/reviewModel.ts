import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Driver from './driverModel';

class Review extends Model {
    declare id: number;
    declare comment: string;
    declare rating: number;
    declare id_driver: number;
}

Review.init({
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    comment: {
        type: STRING,
        allowNull: false,
    },
    rating: {
        type: INTEGER,
        allowNull: false, 
    },
    id_driver: {
        type: INTEGER,
        allowNull: false, 
    },
},
{
    sequelize: db, 
    modelName: 'review',
    timestamps: false,
    underscored: true
},
);

Review.belongsTo(Driver, {
    as: 'driver_fk',
    foreignKey: 'id_driver',
});

Driver.hasMany(Review, {
    as: 'driver_fk',
    foreignKey: 'id_driver',
})
