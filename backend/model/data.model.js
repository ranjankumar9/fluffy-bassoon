const mongoose = require("mongoose")


const dataSchema = mongoose.Schema({
    text:{type:String, required:true},
    duration: {type:String, required:true}
},{
    versionKey:false
})

const datamodel = mongoose.model(
    "datadetail", dataSchema
)

module.exports = {
    datamodel
}