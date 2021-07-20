const usuarios = [
    { nome: "Gildinei", tecnologias: ["HTML", "CSS"] },
    { nome: "Nicole", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Kiara", tecnologias: ["HTML", "Node.js"] },
];


function checaSeUsuarioUsaCSS(usuario) {
    for (let i = 0; i < usuario.tecnologias.length; i++) {
        if (usuario.tecnologias[i] === "CSS") {
            return true;
        };
    };

    return false;
};

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    };
};