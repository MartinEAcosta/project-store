import './styles/simpleCard.css';

export function SimpleCard () {
    return (
        <article>
            <div className='boxCard'>
                <figure>
                    <img src="../src/assets/productExample.png" className='productImage' alt="Imágen del Producto."/>
                </figure>
                <div className='description'>
                    <h1 className='productName'>Nombre del producto.</h1>
                    <p className='text'>Contiene <span className='contReviews'> xxx </span> reseñas.</p>
                    <div className='boxSection'>
                        <span className='price'>777.50 $</span>
                        <div>
                            <span className='calification'>5.0</span>
                            <img src="../src/assets/starIcon.png" className='starIcon' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}