const productos = [
    {id: '1',
    nombre: 'PUMA Future Match',
    descripcion:'Champion Puma Futbol Hombre Future Match FG/AG - S/C',
    precio: 2000,
    categoria: 'Categoria 1',
    stock: 12,
    imagen: 'https://f.fcdn.app/imgs/5358e7/menpi.uy/menpuy/97d7/original/catalogo/10718001-0-1/1920-1200/champion-puma-futbol-hombre-future-match-fg-ag-s-c.jpg'},

    {id: '2',
    nombre: 'Champion ADIDAS Predator 4',
    descripcion:'Champion Adidas Futbol Hombre Predator Edge 4',
    precio: 3000,
    categoria: 'Categoria 2',
    stock: 13,
    imagen: 'https://f.fcdn.app/imgs/2e5e55/menpi.uy/menpuy/8819/original/catalogo/HR1897-0-1/520x520/champion-adidas-futbol-hombre-predator-edge-4-s-c.jpg'},
    
    {id: '3',
    nombre: 'NIKE Futbol Zoom Vapor 15 Acad XXV',
    descripcion:'Champion Nike Futbol Zoom Vapor 15 Acad XXV FGMG Mtlc Silver - S/C',
    precio: 2300,
    categoria: 'Categoria 3',
    stock: 32,
    imagen: 'https://f.fcdn.app/imgs/f556bd/menpi.uy/menpuy/8ded/original/catalogo/FJ2040060-0-1/520x520/champion-nike-futbol-nino-zoom-vapor-15-acad-xxv-fgmg-mtlc-silver-s-c.jpg'}
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}