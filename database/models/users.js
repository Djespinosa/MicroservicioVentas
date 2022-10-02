module.exports = (sequelize, DataTypes) => {
    let alias = 'users'
    let cols = {
        document: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        roles_id: {
            type: DataTypes.UUID,
            allowNull: false
        }   
}
    let config = {
        tableName: 'users',
        timestamps: false
    }
    
    let users = sequelize.define(alias, cols, config);
    
    users.associate = function(models){
        users.belongsTo(models.roles,{
            as: "public.users.users_roles_id_fkey",
            foreignKey: "roles_id"
        })
    }
    return users;
};  
    