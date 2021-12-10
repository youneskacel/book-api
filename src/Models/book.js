import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    
    description : {
        type : String,
        required : true,
        trim : true
    },

    author : {
        type : String,
        required : true,
        trim : true
    },

    rating : {
        type : Number,
        required : true,
        default : 0,
        validate(value){
            if (value < 0 || value>5){
                throw new Error('Please insert rating between 0 and 5')
            }
        }
    },

    nbVoters : {
        type : Number,
        default : 0,
        validate(value){
            if (value < 0 ){
                throw new Error('Please insert number positive')
            }
        }
    },

    img : {
        type : String,
        default : "https://miro.medium.com/max/3200/1*xdo0UBpyszvD7-7EH4TkIA.png"
    }

},
 {timestamps : true
 })

const Book = mongoose.model('Book',bookSchema)

export default Book