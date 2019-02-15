const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// const GeoSchema = new Schema({
//     type:{
//         type:String,
//         default:"Point"
//     },
//     coordinates:{
//         type:[Number],
//         index:"2dsphere",
//     }
    
// })

const EmployeeSchema = new Schema({
    firstname: {
        type:String,
        required:[true, "firstname is required"]
    },
    middlename:{
        type:String,
        required:[true, "middlename is required"]
    },
    lastname:{
        type:String,
        required:[true, "lastname is required"]
    },
    gender:{
        type:String,
        required:[true, "gender is required"]
    },
    mobilenumber:{
        type:String,
        required:[true, "mobilenumber is required"]
    },
    address:{
        type:String,
        required:[true, "address is required"]
    },
    city:{
        type:String,
        required:[true, "city is required"]
    },
    state:{
        type:String,
        required:[true, "state is required"]
    },
    available: {
        type:Boolean,
        default:false,
    },
    // geometry:GeoSchema




});


module.exports = mongoose.model('Employee', EmployeeSchema);