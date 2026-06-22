async function answerQuestion() {

    const questionBox = document.getElementById("question");
    const answerBox = document.getElementById("answer");

    const q = questionBox.value.trim();

    if(q === ""){
        answerBox.innerHTML =
        "<h2>VoltMind</h2><p>Please enter a question.</p>";
        return;
    }

    answerBox.innerHTML =
    "<h2>VoltMind</h2><p>Thinking...</p>";

    try {

        const response = await fetch(
            "http://localhost:3000/ask",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    question: q
                })
            }
        );

        const data = await response.json();

        answerBox.innerHTML =
        `<h2>VoltMind</h2>
         <p>${data.answer}</p>`;

    }
    catch(error){

        answerBox.innerHTML =
        `<h2>Error</h2>
         <p>Cannot connect to VoltMind server.</p>`;

        console.error(error);
    }

}