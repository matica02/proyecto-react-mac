export const productos = [
    {
        id: 1,
        nombre: "Bugatti Chiron",
        precio: 150,
        img: "../img/bugatti.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:'El Bugatti Chiron es el sucesor del Bugatti Veyron y el máximo exponente automotriz de la cultura de los excesos. Con una producción limitada a 500 ejemplares, este superdeportivo fabricado de manera artesanal, equipa un propulsor de 1.500 CV que le permite alcanzar una velcidad máxima de 420 km/h.'
    },
    {
        id: 2,
        nombre: "Bentley Continental GT",
        precio: 130,
        img: "../img/bentley.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:'El Bentley Continental GT es el modelo más deportivo que comercializa la firma británica Bentley. Se trata de un coupé en configuración 2+2 plazas que se caracteriza por ofrecer un concepto donde priman el máximo lujo y las más altas prestaciones.'
        
    },
    {
        id: 3,
        nombre: "Lamborghini Aventador",
        precio: 120,
        img: "./img/lamborghini.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:'El Lamborghini Aventador es un automóvil superdeportivo biplaza de dos puertas de tijera, con motor central-trasero montado longitudinalmente y de tracción en las cuatro ruedas, producido por el fabricante italiano Lamborghini, subsidiaria del Grupo Volkswagen.'
    },
    {
        id: 4,
        nombre: "Porsche GT3RS",
        precio: 110,
        img: "../img/porsche.png" ,
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:'El 911 GT3 RS es el modelo más radicalmente deportivo y puro de la gama de la firma alemana, con una aerodinámica y chasis pensados para su utilización en circuito, pero homologado para su uso legal en carretera. Su excelente tiempo de 7:42 en el antiguo circuito de Nürburgring, demuestran cuál es su auténtico hábitat.'
    },
    {
        "id": 5,
        "nombre": "Audi R8",
        "precio": 100,
        "img": "../img/audir8.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:'El Audi R8 se comercializa con un único propulsor, un V10 atmosférico de 5,2 litros, con lubricación por cárter seco e inyección directa. Se ofrece en dos niveles de potencia, 570 CV y 620 CV. En ambos casos, el motor sólo se puede asociar a una caja de cambios S tronic de doble embrague y siete relaciones.'
    },
    {
        id: 6,
        nombre: "Mercedes AMG GTR",
        precio: 90,
        img: "../img/mercedes.png",
        categoria:'Mercedes',
        stock:'5',
        descripcion:'El GT R es la segunda variante más potente del AMG GT para calle. Con una potencia máxima de 585 CV (577 HP; 430 kW) a las 6250 rpm y un par máxima de 700 N·m (516 lb·pie) a las 5500 rpm, con lo que es capaz de alcanzar una velocidad máxima de 318 km/h.'
    },
    {
        id: 7,
        nombre: "BMW M4",
        precio: 80,
        img: "../img/m4.png",
        categoria:'BMW',
        stock:'5',
        descripcion:'El BMW M4 es un auto deportivo de alto rendimiento que ha cautivado a los entusiastas de la marca desde su introducción en el mercado. Como parte de la línea M de BMW, el M4 se distingue por su poderoso motor, su agresivo diseño y su excelente desempeño en la pista.'
    },
    {
        id: 8,
        nombre: "Volkswagen Golf R",
        precio: 70,
        img: "../img/volkswagen.png",
        categoria:'VolkswagenGroup',
        stock:'5',
        descripcion:'El Volkswagen Golf R es el más potente de la gama Golf, con una potencia de 320 CV, con tracción total y un cambio automático de doble embrague. También está disponible con carrocería familiar.'
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