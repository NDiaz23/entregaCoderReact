//CATEGORIAS
// 1- ROPA
// 2- CALZADO
// 3- ACCESORIOS
// 4- ESPECIALES


const productos = [
    {id: '1',
    nombre: 'PUMA Future Match FG/AG - S/C',
    descripcion:'Inspiradas en el estilo de juego de Neymar Jr., su diseño rediseñado de perfil medio combina ajuste y agilidad para que puedas crear jugadas sin restricciones durante los 90 minutos. El exterior FUZIONFIT360 de malla doble incluye PWRTAPE, que ofrece un ajuste y una sujeción aún más adaptables. La suela Dynamic Motion System de segunda generación, estable en el talón y flexible en el antepié, proporciona la tracción y agilidad necesarias para cambiar de dirección de forma impredecible. Libertad de movimiento. Libertad de juego. Libertad de creación.',
    precio: 6590,
    categoria: '2',
    stock: 12,
    imagen: 'https://f.fcdn.app/imgs/5358e7/menpi.uy/menpuy/97d7/original/catalogo/10718001-0-1/1920-1200/champion-puma-futbol-hombre-future-match-fg-ag-s-c.jpg'},

    {id: '2',
    nombre: 'Champion ADIDAS Predator 4',
    descripcion:'Gol por la escuadra o disparo ajustado al poste? La adidas Predator Accuracy se ha diseñado para que la pelota entre en la red con la máxima precisión y desde cualquier ángulo. Porque tan divertido es marcar como elegir por dónde hacerlo. Esta bota de fútbol presenta una cómoda parte superior de material sintético con un acabado ligeramente texturizado. La suela te proporciona un excelente control en campos de césped natural seco, tierra y césped artificial.',
    precio: 4990,
    categoria: '2',
    stock: 13,
    imagen: 'https://f.fcdn.app/imgs/2e5e55/menpi.uy/menpuy/8819/original/catalogo/HR1897-0-1/520x520/champion-adidas-futbol-hombre-predator-edge-4-s-c.jpg'},
    
    {id: '3',
    nombre: 'NIKE Futbol Zoom Vapor 15 Acad XXV',
    descripcion:'Celebre el 25.ş aniversario de una de nuestras botas más rápidas jamás creadas con las Vapor 15 Academy XXV. Los colores icónicos sinónimos de Mercurial complementan los toques de su historia decorada. El impresionante efecto cromado pone aún más electricidad en estos relámpagos cargados con Zoom Air.Para uso en superficies naturales y sintéticas.Plantilla acolchada',
    precio: 6490,
    categoria: '2',
    stock: 32,
    imagen: 'https://f.fcdn.app/imgs/f556bd/menpi.uy/menpuy/8ded/original/catalogo/FJ2040060-0-1/520x520/champion-nike-futbol-nino-zoom-vapor-15-acad-xxv-fgmg-mtlc-silver-s-c.jpg'},
    
    {id: '4',
    nombre: 'CAMPERA adidas ESSENTIALS FRENCH TERRY - BLACK/WHITE',
    descripcion:'Con la cantidad de cosas que tienes que hacer la mayoría de los días, necesitas algo que te acompañe en todas las transiciones. Te presentamos esta campera con capucha y cierre completo de adidas. Es el estilo deportivo clásico 101 con la marca adidas que destaca sobre una estructura sólida. Una sutil sorpresa llega cuando te subes la capucha: las 3 bandas se extienden de puño a puño y se extienden hasta la parte superior. Cuando acabes el día, el suave rizo francés te dejará en un estado de relajación total.',
    precio: 4290,
    categoria: '1',
    stock: 32,
    imagen: 'https://f.fcdn.app/imgs/4b4cf1/www.globalsports.com.uy/gls/d9cb/original/catalogo/ADIC0433-1132-3/1500-1500/campera-adidas-essentials-french-terry-black-white.jpg'
    },
    {id: '5',
    nombre: 'CAMPERA NEW BALANCE ACCELERATE - BLACK',
    descripcion:'El tiempo no te frenará con nuestra campera Accelerate en tu colección de prendas exteriores. Inspirada en la herencia de NB, esta campera para hombre presenta una franja en el pecho que rinde homenaje a nuestra prenda original de 1978. El tejido ligero proporciona protección contra el viento y el agua, mientras que los bolsillos y el cuello alto te mantienen cubierto. El diseño atlético ofrece un ajuste ceñido sin restringir el movimiento para una campera que no te frenará.',
    precio: 3990,
    categoria: '1',
    stock: 12,
    imagen: 'https://f.fcdn.app/imgs/4e98ae/www.globalsports.com.uy/gls/572a/webp/catalogo/NBMJ23236BK-1032-3/460x460/campera-new-balance-accelerate-black.jpg'
    },
    {id: '6',
    nombre: 'PELOTA NIKE STRIKE - Yellow',
    descripcion:'JUGÁ CON ORGULLO. La pelota de fútbol Nike Strike está lista para volar al fondo de la red. Una carcasa texturizada y ranuras estabilizadoras te ayudan a poner la pelota justo donde la querés. Las ranuras Nike Aerow Trac permiten un giro constante cuando la pelota está en el aire. La carcasa texturizada ofrece un gran tacto y sensación en el pie. La cámara de goma ayuda a mantener la presión y la forma del aire. Diseño de 12 paneles para un vuelo de pelota verdadero y preciso.',
    precio: 1990,
    categoria: '3',
    stock: 10,
    imagen: 'https://f.fcdn.app/imgs/ce73a4/www.globalsports.com.uy/gls/9ba9/webp/catalogo/NKDC2376-710-1/460x460/pelota-nike-strike-yellow.jpg'
    },
    {id: '7',
    nombre: 'PELOTA adidas ALL COURT 3.0 - Orange/Black',
    descripcion:'Lleva tus habilidades de la cancha al asfalto y viceversa. Esta pelota de básquet adidas funciona tanto para canchas cubiertas como al aire libre para que no tengas que preocuparte por llevar la pelota correcto. Su exterior resistente es suave al tacto y te ofrece la precisión necesaria en cada movimiento.',
    precio: 2890,
    categoria: '3',
    stock: 3,
    imagen: 'https://f.fcdn.app/imgs/858a35/www.globalsports.com.uy/gls/08bb/webp/catalogo/ADHM4975-3754-1/460x460/pelota-adidas-all-court-3-0-orange-black.jpg'
    },
    {id: '8',
    nombre: 'REMERA POLO PUMA URUGUAY CASUAL',
    descripcion:'Esta camiseta tiene un estilo clásico e incorpora tecnología de absorción que controla el sudor para mantenerte cómodo y listo para todo lo que te depare el día.',
    precio: 2790,
    categoria: '4',
    stock: 3,
    imagen: 'https://f.fcdn.app/imgs/b023ab/www.lacancha.uy/lcanuy/c548/webp/catalogo/768056_01_1/800x800/remera-polo-puma-uruguay-casual-remera-polo-puma-uruguay-casual.jpg'
    },
    {id: '9',
    nombre: 'CAMISETA DE FÚTBOL PUMA AUF URUGUAY HOME 22',
    descripcion:'CAMISETA DE URUGUAY 2022 Volviendo a nuestros origenes ganadores, Puma presenta la nueva camiseta que nos identificará en Qatar 2022.',
    precio: 2790,
    categoria: '4',
    stock: 13,
    imagen: 'https://f.fcdn.app/imgs/d56967/www.lacancha.uy/lcanuy/0fc5/webp/catalogo/770284_01_1/800x800/camiseta-de-futbol-puma-auf-uruguay-home-22-camiseta-de-futbol-puma-auf-uruguay-home-22.jpg'
    }
]


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(productos)
        },500)
    })
}