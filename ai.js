async function askEarthAI() {
    const question = document.getElementById("question").value;
    const answerBox = document.getElementById("answer");

    if (!question.trim()) {
        answerBox.innerText = "Please enter a question.";
        return;
    }

    answerBox.innerText = "Thinking... 🤖";

    const API_KEY = "AIzaSyD0i_HghQrrm64OOqFRy8oqQrG4b5sEH_Y";

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `Explain in simple student-friendly language: ${question}`
                        }]
                    }]
                })
            }
        );

        const data = await response.json();

        if (data.candidates && data.candidates.length > 0) {
            answerBox.innerText =
                data.candidates[0].content.parts[0].text;
        } else {
            answerBox.innerText = "No response received.";
        }

    } catch (error) {
        console.error(error);
        answerBox.innerText = "Error connecting to Gemini API.";
    }
}