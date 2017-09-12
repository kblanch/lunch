module.exports = function(sequelize, DataTypes) {
    var Order = sequelize.define("order", {
        order_name: {
            type: DataTypes.STRING
        },
        order_code: {
            type: DataTypes.INTEGER
        },
        created_by: {
            type: DataTypes.STRING
        },
        group_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN
        },
        start_time: {
            type: DataTypes.DATE
        },
        end_time: {
            type: DataTypes.DATE
        },
        duration_hours: {
            type: DataTypes.INTEGER
        },
        duration_minutes: {
            type: DataTypes.INTEGER
        }
    });
   
    return Order
    };