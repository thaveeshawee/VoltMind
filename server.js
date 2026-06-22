const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("VoltMind Backend Running 🚀");
});

app.post("/ask", (req, res) => {

    const question = req.body.question || "";

    let answer = "";

    if(question.toLowerCase().includes("ferranti")){

        answer =
        "Ferranti Effect occurs in long transmission lines when the receiving-end voltage becomes higher than the sending-end voltage due to the charging current caused by line capacitance.";

    }
    else if(question.toLowerCase().includes("transformer")){

        answer =
        "A transformer transfers AC power from one circuit to another using electromagnetic induction between windings.";

    }
    else if(question.toLowerCase().includes("ohms law")){

        answer =
        "Ohm's Law states that current equals voltage divided by resistance.";

    }
    else{

        answer =
        `VoltMind received your question: "${question}". AI integration is the next step.`;
    }

    res.json({
        success: true,
        answer: answer
    });

});

app.listen(3000, () => {
    console.log("🚀 VoltMind Server running on port 3000");
});
