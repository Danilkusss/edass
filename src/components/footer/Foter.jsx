import './foter.css'

export default function Foter(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>Оригинальная кухня</h4>
                        <ul>
                            <li><a href="#">Доставка блюд на дом или в офис в городе Тимашевск.</a></li>
                            <li><a href="tel:+">+7(999) 365-40-32</a></li>
                            <li><a href="tel:+">+7(999) 365-40-32</a></li>
                            
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Доставка</h4>
                        <ul>
                            <li><a href="#">График работы: ежедневно с<br/> 11:00 до 23:00, без перерывов и<br/> выходных.</a></li>
                        </ul>
                        
                    </div>
                    <div className="footer-col">
                        <h4>Социальные сети</h4>
                        <div className="social-links">
                            <a className="vk" href=""><i className="fab fa-vk-f "></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}