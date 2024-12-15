const answers = {
    q1: " Elle définit le titre affiché dans l'onglet du navigateur.",
    q2:"HyperText Markup Language",
    q3:"img",
    q4:"alt",
    q5:"id",
    q6:"font-size",
    q7:"font-weight: bold",
    q8:"alert('Hello World')",
    q9:"object",
    q10:"Toutes les réponses ci-dessus",
    q11:"ol",
    q12:"target='_blank'",
    q13:"back-color",
    q14:"false"

};

function calculateScore() {
    const form = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');
    let score = 0;
    let totalQuestions = Object.keys(answers).length;
    let feedback = "";

    Object.keys(answers).forEach((question) => {
        const userAnswer = form[question].value;
        if (userAnswer === answers[question]) {
            score++;
        } else {
            feedback += `<p>Question ${question.slice(1)} : La bonne réponse est <strong>${answers[question]}</strong>.</p>`;
        }
    });

    resultDiv.style.display = 'block';
    resultDiv.innerHTML = `<p>Vous avez obtenu ${score} sur ${totalQuestions}.</p>` + feedback;
}