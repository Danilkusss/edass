import './Product.css'

export default function Product({src, old, title, price}){
    return(
                <div className="itemss">
                    <div className="imgs-item">
                        <img src={src} width="100%" alt="шашлычек"/>
                    </div>
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    <div className="price-add-item">
                        <div className="price">
                            <h5>
                                {old}
                            </h5>
                            <h3>
                                {price}
                            </h3>
                        </div>
    
                        <div className="add-item">
                            <button>В КОРЗИНУ</button>
                        </div>
                    </div>
                </div>
    )
}