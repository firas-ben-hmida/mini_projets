const apiKey = "your_api_key_here";

async function askGemini() {
    const input = document.getElementById("chatbot").value;
    const reponse = document.getElementById("response");

    try {
        const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + apiKey,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }]
        })
      }
    );

        const data = await response.json();
        const output = data.candidates?.[0]?.content?.parts?.[0]?.text || "Aucune réponse";
        reponse.innerText = output;

    } catch (error) {
        reponse.innerText = "Erreur : " + error;
    }
}
