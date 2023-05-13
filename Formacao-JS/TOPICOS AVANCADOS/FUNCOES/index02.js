function funcao01() {
    console.log(this);
};

const funcao02 = () => {
    console.log(this);
};

const samuel = {
    nome: 'Marcos',
    funcao01,
    funcao02
};

samuel.funcao01();
samuel.funcao02();