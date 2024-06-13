export const productos = [
    {
        id: 1,
        nombre: "Bugatti Chiron",
        precio: 150,
        img: "../img/bugatti.png",
        categoria:'Volkswagen Group',
        stock:'5',
        descripcion:''
    },
    {
        id: 2,
        nombre: "Bentley Continental GT",
        precio: 130,
        img: "../img/bentley.png",
        categoria:'Volkswagen Group',
        stock:'5',
        descripcion:''
        
    },
    {
        id: 3,
        nombre: "Lamborghini Aventador",
        precio: 120,
        img: "./img/lamborghini.png",
        categoria:'Volkswagen Group',
        stock:'5',
        descripcion:''
    },
    {
        id: 4,
        nombre: "Porsche GT3RS",
        precio: 110,
        img: "../img/porsche.png" ,
        categoria:'Volkswagen Group',
        stock:'5',
        descripcion:''
    },
    {
        "id": 5,
        "nombre": "Audi R8",
        "precio": 100,
        "img": "../img/audir8.png",
        categoria:'Volkswagen Group',
        stock:'5',
        descripcion:''
    },
    {
        id: 6,
        nombre: "Mercedes AMG GTR",
        precio: 90,
        img: "../img/mercedes.png",
        categoria:'Mercedes',
        stock:'5',
        descripcion:''
    },
    {
        id: 7,
        nombre: "BMW M4",
        precio: 80,
        img: "../img/m4.png",
        categoria:'BMW',
        stock:'5',
        descripcion:''
    },
    {
        id: 8,
        nombre: "Volkswagen Golf R",
        precio: 70,
        img: "../img/volkswagen.png",
        categoria:'Volkswagen Group',
        stock:'5',
        descripcion:''
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
}