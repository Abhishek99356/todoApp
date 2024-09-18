const { default: mongoose } = require("mongoose");
const require = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        tittle:{
            type:String,
            require:true,
            maxLength:50,
        },
        description: {
            type:String,
            required:true,
            maxLength:50,
        },
    }
)