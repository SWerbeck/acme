const {
    db,
    Member,
    Facility,
    Booking
} = require('./db')




const seedDb=async()=>{
    await db.sync({force:true,logging:false});


    const Lucy = await Member.create({
        name: "Lucy",
        
        
    })
    

    
const Moe = await Member.create({
    name: "Moe",
    sponsor: Lucy.id
    
})

const Ethyl =await Member.create({
    name: "Ethyl",
    sponsor:Moe.id
}
)
const Larry=await Member.create({
    name:"Larry",
    sponsor:Lucy.id
})

const Tennis = await Facility.create({
    facilityName: "Tennis"
})

const PingPong = await Facility.create({
    facilityName: "Ping Pong"
})

const Marbles = await Facility.create({
    facilityName: "Marbles"
})

await Booking.create({
    bookerId: Lucy.id,
    facilityId: Marbles.id
})

await Booking.create({
    bookerId: Moe.id,
    facilityId: Tennis.id
})

await Booking.create({
    bookerId: Lucy.id,
    facilityId: Marbles.id
})



}



seedDb()