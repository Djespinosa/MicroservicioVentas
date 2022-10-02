module.exports = (sequelize, DataTypes) => {
    let alias = 'roles'
    let cols = {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        }   
}
    let config = {
        tableName: 'roles',
        timestamps: false
    }
    
    let roles = sequelize.define(alias, cols, config);
    
    roles.associate = function(models){
        roles.hasMany(models.users,{
            as: "public.users.users_roles_id_fkey",
            foreignKey: "roles_id"
        })
    }
    return roles;
};  
    