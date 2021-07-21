const usuarios = [
    { nome: "Gildinei", tecnologias: ["HTML", "CSS"] },
    { nome: "Nicole", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Kiara", tecnologias: ["HTML", "Node.js"] }
];

for (let i = 0; i < usuarios.length; i++) {
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);
};