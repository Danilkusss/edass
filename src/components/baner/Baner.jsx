import imageBaner from './baners.png'

export default function Baner(){
    return(
        <section className="items">
            <div className="container">
                <div className="banner"> 
                    <img src={imageBaner} width="100%" alt="Баннер доставки"/>
                </div>
            </div>
        </section>
    )
}