const {Schema, model} = require("mongoose")

const showSchema = new Schema(
    {
        title:{
            type: String,
            trim: true,
            required:[true, "title is required"]
        },
        creator:{
            type: String,
            trim: true,
            required: [true, "Creator is required"]
        },
        launched:{
            type: Number,
            required: [true, "A year is required"]
        },
        genre:{
            type:String
        },
        image:{
            type: String,
            required:[true, "An image is required"]
        },
        description:{
            type: String,
            required:[true, "A description is required"]
        }
    }
)

const Show = model("Show", showSchema)
module.exports = Show