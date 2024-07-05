const excuses = [
    "A two headed pinecone yelled at my sandwich in my house",
    "My cat decided to take a nap on my homework",
    "A squirrel stole my phone and wouldn't give it back",
    "My computer decided to update right before the deadline",
    " parade blocked the only road to my house",
    "My dog ate my homework",
    "I accidentally boarded a flight to the wrong city",
    "My shoes decided to fall apart while I was walking",
    "A mysterious fog covered everything and I got lost"
];

function generateExcuse() {
    const excuseElement = document.getElementById("excuse");
    const randomIndex = Math.floor(Math.random() * excuses.length);
    excuseElement.textContent = excuses[randomIndex];
}

window.onload = generateExcuse;
