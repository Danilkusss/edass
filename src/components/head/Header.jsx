import "./header.css"

export default function Header(){
    return(
        <header>
        <div className="header-nav-and-info">
            <h1>Оригинальная кухня</h1>
            <div className="info">
                <div className="info-tel">
                    <div className="tel">
                        <i className="fi fi-rr-phone-call"></i>
                        <a href="tel:+">+7(999) 365-40-32</a>
                    </div>
                    <div className="tel">
                        <i className="fi fi-rr-phone-call"></i>
                        <a href="tel:+">+7(999) 365-40-32</a>
                    </div>
                </div>
                <div className="info-main">
                    <span>Наше местонахождение</span>
                    <address>Ул. 50 лет октября д.71</address>
                </div>
            </div>
        </div>
        <div className="line"></div>
      </header>
    )
}