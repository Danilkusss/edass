import { useState } from 'react'
import './App.css'
import Header from './components/head/Header'
import Baner from './components/baner/Baner'
import { producct } from './products'
import Product from './components/products/Prodeuct'
import Foter from './components/footer/Foter'
// import Product from './components/Prodeuct'
// import { producct } from './products'

function App() {

  // const [Zakaz, SetZakaz] = useState()

  // function Zakazz(id){
    
  // }

  return (
    <>
      <Header />
      <Baner/>

      <section className='product'>
            <div className="menu-titile">
                <div className="title">
                    <h1 className="titles">
                        Наше меню
                    </h1>
                </div>
                <div className="category">
                    <p>
                        Открыть полное меню
                    </p>
                </div>
            </div>

            <div className='qq'>
              {producct.map((item) => {
                  return(
                    <Product key={item.id} src={item.src} old={item.OldPrice} title={item.title} price={item.price} />
                  )
                })
              }
            </div>
      </section>
        {/* <section classNameName='section-product'>

          <h2 classNameName='titile'>Меню для заказа</h2>

          <ul classNameName='card-list'>
            {producct.map((item) => {
              console.log(Zakaz)
              return(
                <li classNameName='listt' key={item.id}>
                  <Product zakazFunc={() => Zakazz(item.id)} src={item.src} title={item.title} text={item.text} weight={item.weight} price={item.price}/>
                </li>
              )
            })
            }
          </ul>
        </section> */}
        <Foter/>
      
    </>
  )
}


export default App
