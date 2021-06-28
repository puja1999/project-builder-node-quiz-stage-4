const mongoose = require('mongoose'), Schema = mongoose.Schema;

const {Answer} = require('../model/ansModel')
const {Option} = require('../model/optModel')
const QuestionSchema = new Schema({
    question: String,
    answer: [{type: Schema.Types.ObjectId, ref: "answers"}],
    option: [{type: Schema.Types.ObjectId, ref: "options"}]
})

const Question = mongoose.model("question", QuestionSchema)

module.exports = {Question};