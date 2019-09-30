class List {

    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data);
        console.log(this.data)
    }

}


class TodoList extends List {

}

const minhasTodos = new TodoList();

document.getElementById('novotodo').onclick = function () {
    minhasTodos.add('novo todo')
};


class TodoList {
    constructor() {
        this.todos = []
    }

    //quando utilizo o static no método ele só recebe e valores e faz operaçõs, não enxerga coisas fora do seu escopo
    static addTodos() {
        this.todos.push('novo todo');
    }
}

class Matematica {
    static soma(valor1, valor2) {
        return valor1 + valor2;
    }
}


console.log(Matematica.soma(1, 2));

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function (item) {
    return item*2;
});

console.log(newArr);

const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log('sum', sum);

const filter = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function (item) {
    return item === 6;
});

console.log(find);

const arr = [1, 4, 6 ,7 , 10, 37];

const map = arr.map(item => {
    return item * 2;
});

console.log(map);

const reduce = arr.reduce((total, index) => {
    return total + index;
});

console.log(reduce);

const filter = arr.filter(item => {
    return item % 2 === 0;
});

console.log('filter', filter);

const find = arr.find(item => {
    return item === 6;
});

console.log('find', find);


const soma  = (a = 3, b = 5) => a + b;


console.log(soma(1));


const usuario = {
    nome: 'Luan',
    idade: 26,
    endereco: {
        cidade: 'Brasília',
        uf: 'DF',
        bairro: 'Sobradinho 2'
    }
};

console.log(usuario);

const { nome, idade, endereco: { bairro, uf}} = usuario;

console.log(nome);
console.log(idade);
console.log(bairro);
console.log(uf);

function mostraNome( {nome, idade, endereco: {cidade}}) {
    console.log(nome, idade, cidade)
}

mostraNome(usuario);

const usuario = {
    nome: 'Luan',
    idade: 26,
    endereco: {
        numero: 26,
        cidade: 'Brasilia'
    }
};

const {nome, idade, ...resto} = usuario;

console.log(nome, idade, resto);


const arr = [1, 2, 4, 5];

const [a, b, ...c] = arr;

console.log(a , b , c);

//REST
function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 4, 5, 6, 7));

// SPREAD
const usuario1 = {
    nome: 'Luanzera',
    idade: 26
};

const usuario2 = {...usuario1, nome: 'Luan'};

console.log(usuario2);


const nome = 'luan', idade = 26;

const usuario = {
    idade,
    nome,
    empresa: 'Desempregado'
};

console.log(usuario);

console.log(`Olá eu me chamo ${nome}, e tenho ${idade} anos.`);