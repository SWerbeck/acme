const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/acme-country-club-db')

const Member=db.define('member',{
    name:{type:Sequelize.STRING,
    allowNull:false},
    id:{type:Sequelize.UUID,
    primaryKey:true,
    defaultValue: Sequelize.UUIDV4}
})
const Facility  = db.define('facility', {
    facilityName: {type: Sequelize.STRING,
    allowNull: false},
    id:{type:Sequelize.UUID,
        primaryKey:true,
        defaultValue: Sequelize.UUIDV4}
})
const Booking=db.define('booking',{ 
    id:{type:Sequelize.UUID,
    primaryKey:true,
    defaultValue: Sequelize.UUIDV4

}
})


Member.hasMany(Booking)
Booking.belongsTo(Member)

Facility.hasMany(Booking)
Booking.belongsTo(Facility)

Member.belongsTo(Member,{as:'sponsor'})
Member.hasMany(Member,{foreignKey: 'sponsorId', as: 'sponsored'})


module.exports = {
    db,
    Member,
    Booking,
    Facility
}