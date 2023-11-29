const getPeliculas = async () => {
    const respuesta = await fetch('https://62baf49a573ca8f8328f90d9.mockapi.io/peliculas')
    const datos = await respuesta.json();
    return datos
}

let peliculas ;



getPeliculas().then((res) => {
    peliculas = res
    mostrarCards()
})

const contenedorPeliculas = document.querySelector('#Peliculas')

function mostrarCards() {
    contenedorPeliculas.innerHTML = ""
    peliculas.forEach(pelicula => {
        const col = document.createElement('div')
        col.className = "col"
        const contenido = `
        <div class="card" style="width: 18rem;">
        <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}">
        <div class="card-body">
        <h5 class="card-title">${pelicula.titulo}</h5>
                    <p class="card-text">${pelicula.descripcion}</p>
                    <a href="#" class="btn btn-danger" onsubmit="deletePeliculas()">Borrar Pelicula</a>
                </div>
            </div>
            `
            col.innerHTML = contenido
            contenedorPeliculas.appendChild(col)
        });
    }
    
    
const deletePeliculas = async (id) => {
    const respuesta = await fetch(`https://62baf49a573ca8f8328f90d9.mockapi.io/peliculas/${id}`, {
        method: 'DELETE',
    })
    const datos = await respuesta.json()
    return datos
}
const agregarPelicula = async (e) => {
    e.preventDefault()
    const titulo = document.querySelector('#tituloPelicula').value
    const descripcion = document.querySelector('#descripcionPelicula').value
    const imagen = document.querySelector('#urlImagen').value
    
    const respuesta = await fetch('https://62baf49a573ca8f8328f90d9.mockapi.io/peliculas', {
        method: 'POST',
        body: JSON.stringify({ titulo, descripcion, imagen})
    })
}

// const postPeliculas = async () => {
//     const respuesta = await fetch('https://62baf49a573ca8f8328f90d9.mockapi.io/peliculas', {
    //         method: 'POST',
//     })
//     const datos = await respuesta.json();
//     console.log(datos)
//     return datos
// }

// let prueba = postPeliculas()