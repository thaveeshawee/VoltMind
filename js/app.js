function answerQuestion() {

    const questionBox =
    document.getElementById("question");

    const answerBox =
    document.getElementById("answer");

    const q =
    questionBox.value.trim();

    if(q === ""){

        answerBox.innerHTML =
        "<h2>VoltMind</h2><p>Please enter a question.</p>";

        return;
    }

    answerBox.innerHTML =
    "<h2>VoltMind</h2><p>Thinking...</p>";

    const lower =
    q.toLowerCase();

    if(lower.includes("ferranti")){

        answerBox.innerHTML =
        `<h2>Ferranti Effect</h2>
        <p>
        Ferranti Effect occurs in long transmission
        lines when the receiving-end voltage becomes
        higher than the sending-end voltage due to
        line capacitance.
        </p>`;

    }
    else if(lower.includes("transformer")){

        answerBox.innerHTML =
        `<h2>Transformer</h2>
        <p>
        A transformer transfers AC power between
        circuits through electromagnetic induction.
        </p>`;

    }
    else if(lower.includes("ohms law")){

        answerBox.innerHTML =
        `<h2>Ohm's Law</h2>
        <p>
        Voltage equals current multiplied by resistance.
        </p>`;

    }
    else{

        answerBox.innerHTML =
        `<h2>VoltMind</h2>
        <p>
        You asked:
        ${q}
        </p>`;

    }

}