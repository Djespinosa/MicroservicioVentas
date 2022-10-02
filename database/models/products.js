module.exports = (sequelize, DataTypes) => {
    let alias = 'products'
    let cols = {
        description: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
   
}
    let config = {
        tableName: 'products',
        timestamps: false
    }
    
    let products = sequelize.define(alias, cols, config);
    
    products.associate = function(models){
        products.hasMany(models.sales,{
            as: "public.sales.sales_products_id_fkey",
            foreignKey: "products_id"
        })
    }
    return products;
};  
    