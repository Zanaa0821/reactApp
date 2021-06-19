import logo from './logo.svg';
import winter_spice_1 from './winter-spice-1.png';
import winter_spice_2 from './winter-spice-2.png';
import winter_spice_3 from './winter-spice-3.png';
import './App.css';

function App() {
  return (
    <div id="root">
    <div className="main-section">
       <section>
          <div className="header-section">
             <div className="header-area">
                <div className="row">
                   <div className="col-4 col-sm-6" >
                      <div className="menu-text-left">
                         <div className="lang">Global-English</div>
                      </div>
                   </div>
                   <div className="col-4 " >
                      <div className="menu-text-center">
                         <div className="header-link">Returning an order? </div>
                         <a href="#" className="header-click-more"> Click for more info</a>
                      </div>
                   </div>
                   <div className="col-4 col-sm-6" >
                      <div className="menu-text-right">
                         <div>
                            <a href="#" className="header-link">sign in</a>
                            <a href="#" className="header-link">sign up</a>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          <div className="banner">
             <div className="banner-text">
                <span className="summer">SUMMER</span>
                <div className="sale">Sale</div>
                <div className="sale-percent">
                   <div className="upto">upto</div>
                   <div className="sixty">60%</div>
                   <div className="ff">ff</div>
                </div>
                <div className="shopnow"><a href="#" > shop now </a></div>
             </div>
          </div>
       </section>
       <section>
         <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="winter-spice">
            <h2>
              winter spice 2020
            </h2>
            <p>Infusion of summer pieces and cashmere silk blends.</p>
            <div className="shopnow"><a href="#">shop now</a></div>
            </div></div>
            <div className="col-md-6 col-sm-12">
           
            <div className="col-4 col-sm-8">
        
            <img src={winter_spice_1} alt="BigCo Inc. logo"/>
            </div>
            <div className="col-2 col-sm-4">
            <img  src={winter_spice_2} alt="BigCo Inc. logo"/>
            <img src={winter_spice_3} alt="BigCo Inc. logo"/>
            
            </div>
            </div>
         </div>
       </section>
       <section></section>
    </div>
 </div>
    
  );
}

export default App;
