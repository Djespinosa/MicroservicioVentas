module.exports = (sequelize, DataTypes) => {
    let alias = 'sales'
    let cols = {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        products_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        qty: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        sale_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        users_id: {
            type: DataTypes.UUID,
            allowNull: false
        }
}
    let config = {
        tableName: 'sales',
        timestamps: false
    }
    
    let sales = sequelize.define(alias, cols, config);
    
    sales.associate = function(models){
        sales.belongsTo(models.products,{
            as: "public.sales.sales_products_id_fkey",
            foreignKey: "products_id"
        });
        sales.belongsTo(models.users,{
            as: "public.sales.sales_users_id_fkey",
            foreignKey: "users_id"
        })
    }
    return sales;
    };
    