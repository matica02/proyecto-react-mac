export const productos = [
    {
        id: 1,
        nombre: "Bugatti Chiron",
        precio: 150,
        img: "../img/bugatti.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:''
    },
    {
        id: 2,
        nombre: "Bentley Continental GT",
        precio: 130,
        img: "../img/bentley.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:''
        
    },
    {
        id: 3,
        nombre: "Lamborghini Aventador",
        precio: 120,
        img: "./img/lamborghini.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:''
    },
    {
        id: 4,
        nombre: "Porsche GT3RS",
        precio: 110,
        img: "../img/porsche.png" ,
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:''
    },
    {
        "id": 5,
        "nombre": "Audi R8",
        "precio": 100,
        "img": "../img/audir8.png",
        categoria:'VolkswagenGroup',
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
        categoria:'VolkswagenGroup',
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

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        const productosFiltrados = productos.filter((prod)=> prod.categoria === categoria)
        setTimeout(() => {
            resolve(productosFiltrados)
        }, 2000) 
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const productoFiltrado = productos.find((prod) => prod.id === parseInt(id))
        setTimeout(()=> {
            resolve(productoFiltrado)
        }, 2000)
    })
}