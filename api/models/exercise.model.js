const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema(
    {
        bodyPart: {
            type: String
        }, 
        equipment:{
            type: String
        },
        gifUrl:{
            type: String
        },
        name:{
            type: String
        },
        target:{
            type: String
        },
        secondaryMuscles:{
            type: [String]
        }, 
        instructions:{
            type: [String]
        },
        work: {
            reps: {
                type: Number,
                default: 0
            },
            sets: {
                type: Number,
                default: 0
            }
        },
        id: {
            type: String
        }
    }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
