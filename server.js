require("dotenv").config();

const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const path = require("path");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/ask", async (req, res) => {

    try {

        const question = req.body.question;

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content:
                    "You are VoltMind, an engineering tutor. Explain concepts clearly and simply."
                },
                {
                    role: "user",
                    content: question
                }
            ]
        });

        res.json({
            success: true,
            answer: response.choices[0].message.content
        });

    } catch(err) {

        console.error(err);

        res.json({
            success: false,
            answer: "VoltMind AI is currently unavailable."
        });

    }

});
app.listen(3000, () => {
    console.log("🚀 VoltMind Server running on port 3000");
});
