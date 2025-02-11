type PetType = 'dog' | 'cat' | 'fish';

type Pet = {
  type: PetType,
  image: string,
  name: string,
  color: string,
  sex: 'Masculino' | 'Feminino'
};

const data: Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'Vira-Lata.jpg',
        name: 'Vira-Lata',
        color: 'Preto , Caramelo e Branco',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'Pinscher.jpg',
        name: 'Pinscher',
        color: 'Preto e Marrom',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'Salsicha.jpg',
        name: 'Salsicha',
        color: 'Marrom escuro e Marrom claro',
        sex: 'Masculino'
    },
    {
        type: 'dog',
        image: 'Shih Tzu.jpg',
        name: 'Shih Tzu',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
];

export const Pet = {
getAll: (): Pet[] => {
    return data;
},
getFromType: (type: PetType): Pet[] => {
 return data.filter(item => item.type === type);
},
getFromName: (name: string): Pet[] => {
return data.filter(item =>
     item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
}
};
