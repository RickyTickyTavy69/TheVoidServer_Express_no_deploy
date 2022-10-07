import pkg from "mongoose"
const {Schema, model} = pkg;

const postschema = new Schema({
    image: {
        type: String
    },
    songlink: {
        type: String
    },
    text: {
        type: String,
        required: true
    }
})
const PostModel = model("Post", postschema);

export default PostModel;

