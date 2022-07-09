// const img = document.getElementById("image")
// img.addEventListener("click", () => {
//     img.classList.toggle ("disabled")
// })
const root = document.getElementById("root")
// const Avatar = (params) => {
//     return `
//         <picture>
//             <img id="image" src="https://randomuser.me/api/portraits/lego/${params.id}.jpg" alt="Avatar"> ${params.name}
//         </picture> 
//     `//dejar dinamica las imagenes y el nombre
// }

// root.innerHTML = Avatar ({id: '1', name: 'seba'})
// root.innerHTML += Avatar ({id: '2', name: 'lume'})

const r = React.createElement //createElement recibe 3 parametros. Trabajamos con funciones.
const Avatar = () => {
    const src = "https://randomuser.me/api/portraits/lego/1.jpg"
    return r("picture", {}, [r("img", {src, alt: 'Lego'}), 'Seba'])//que elemento creo, que atributo tiene y que hijos tiene
}

ReactDOM.render(r(Avatar), root)

const AvatarJSX = () => {
    const src = "https://randomuser.me/api/portraits/lego/2.jpg"
    return (
        <picture>
            <img src={src} alt='lego' /> Adrian
        </picture>
    )
}

ReactDOM.render(r(AvatarJSX), root)