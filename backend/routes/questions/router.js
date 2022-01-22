
const express = require("express");
const { sendResponse, sendError } = require("../../controllers/common");
const QuestionsList = require("../../models/question");
const router = express.Router();

router.get("/",async (req,res)=>{
    try {
        const questions = await QuestionsList.findOne({lastest:true})
        res.json(sendResponse(questions))
    } catch (error) {
        res.json(sendError("Could not fetch questions"))

    }
})
router.get("/set", async (req,res)=>{
    try {
        const questionsLatest = await QuestionsList.findOne({lastest:true})
        questionsLatest.latest = false
        const {questions} = req.body
        const questionsList = new QuestionsList({
            questions:JSON.parse(questions),
            latest:true
        })
        await questionsList.save()
        res.json(sendResponse("Questions saved "))
    } catch (error) {
        res.json(sendError("Could not set questions"))

    }
})
module.exports = router;