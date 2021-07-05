import logo from './logo.svg';
import winter_spice_1 from './winter-spice-1.png';
import winter_spice_2 from './winter-spice-2.png';
import winter_spice_3 from './winter-spice-3.png';
import women_1 from './women_1.png';
import women_2 from './women_2.png';
import men_1 from './men_1.png';
import men_2 from './men_2.png';
import shop_1 from './shop_1.png';
import shop_2 from './shop_2.png';
import shop_3 from './shop_3.png';
import shop_4 from './shop_4.png';
import shop_5 from './shop_5.png';
import shop_6 from './shop_6.png';
import shop_7 from './shop_7.png';
import shop_8 from './shop_8.png';
import aboutus_big from './aboutus-big.png';
import aboutus_small from './aboutus-small.png';
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
          <div className="container">
         <div className="row winter-spice-1">
            <div className="col-md-6 col-sm-12">
              <div className="winter-spice">
            <h2>
              winter spice 2020
            </h2>
            <p>Infusion of summer pieces and cashmere silk blends.</p>
            <div className="shopnow"><a href="#">shop now</a></div>
            </div></div>
          
           
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
       <section>
          <div className="container">
             <div className="row">
               <div className="col-4">
                  <img src={women_1} />
               </div>
               <div className="col-4">
                  <h2 className="women-text">WOMEN</h2>
                  <img src={women_2} />
               </div>
               <div className="col-4">
               <img src={women_1} />
               </div>
            </div>
          </div>
       </section>
       <section>
          <div className="container">
             <div className="row">
               <div className="col-4">
                  <img src={men_1} />
               </div>
               <div className="col-4">
                  <h2 className="women-text">MEN</h2>
                  <img src={men_2} />
               </div>
               <div className="col-4">
               <img src={men_1} />
               </div>
            </div>
          </div>
       </section>
       <section>
          <div className="row">
             <div className="container shop-list">
                <h2 className="menu-text-center shop-list-title">TO GET  AND TO GIFT</h2>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img className="shop-list-image" src={shop_1} />
                     </div>
                    <a href="#"> <h3 className="shop-list-text">Zweiseitiger Wendemantel Mit Schmetterlingsxzds</h3></a>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img  className="shop-list-image" src={shop_2}/>
                     </div>
                     <h3 className="shop-list-text">Écharpe tisée avec bords contrastants et franges</h3>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img className="shop-list-image" src={shop_3} />
                     </div>
                     <h3 className="shop-list-text">Трикотажный Супер Мягкий Плед Контрастного Оттенка</h3>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img className="shop-list-image" src={shop_4} />
                     </div>
                     <h3 className="shop-list-text">Кардиган в Стиле Колор-Блок с V-Образным Воротником</h3>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img className="shop-list-image" src={shop_5} />
                     </div>
                     <h3 className="shop-list-text">Zweiseitiger Wendemantel Mit Schmetterlingsxzds</h3>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img className="shop-list-image" src={shop_6} />
                     </div>
                     <h3 className="shop-list-text">Écharpe tisée avec bords contrastants et franges</h3>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img className="shop-list-image" src={shop_7} />
                     </div>
                     <h3 className="shop-list-text">Трикотажный Супер Мягкий Плед Контрастного Оттенка</h3>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
                <div className="col-3 col-sm-6">
                   <div className="post">
                     <div className="post-image">
                     <img  className="shop-list-image" src={shop_8} />
                     </div>
                     <h3 className="shop-list-text">Кардиган в Стиле Колор-Блок с V-Образным Воротником</h3>
                     <span className="price"> $299</span>
                     <span className="discount">$79</span>
                   </div>
                </div>
             </div>
          </div>
       </section>
       <section>
          
             <div className="row m-t-100 grey">
               <div className="col-8">
                  <img className="aboutus-big" src={aboutus_big} />
               </div>
               <div className="col-4 ">
                  <div className="aboutus">
                  <h1 className="aboutus-title menu-text-center">ABOUT US </h1>
                  <div className="aboutus-text p-30">
                     <p>Aute et officia anim consectetur consequat velit minim irure Lorem ad. 
                        Officia nisi sunt est eiusmod occaecat excepteur velit reprehenderit occaecat cillum anim 
                        ad magna aliqua. Sint enim Lorem amet in tempor non ea duis cillum. 
                        Cillum consectetur in in aliqua. Nostrud minim duis cupidatat et ea sint. </p>
                  </div>
                  <div className="shopnow"><a href="#" > READ MORE </a></div>
                  </div>
               </div>
              <div className="aboutus-mini">
               <div className="aboutus-small">
                  <img src={aboutus_small} />
               </div>
               <div className="aboutus-small">
                  <img src={aboutus_small} />
               </div>
               </div>
             </div>
         
       </section>
       <section>
          <div className="container text-center subscribe-text">
             <h2>Subscribe</h2>
             <p>Sign up for emails and receive early access to new arrivals, sales, events + more.</p>
          </div>
          
    <div className="form-group">
      <form method="post">
        <input type="text"  placeholder="Enter your email address" className="subscribe"></input>
        <button type="submit" id="subscribe" className="shopnow">
          Subscribe
        </button>
      </form>
      <p>By signing up, you will receive Gobi Cashmere offers, promotions and other commercial messages.
      <br></br> You are also agreeing to Gobi Cashmere's <a href="#">Privacy Policy </a>.  You may unsubscribe at any time.</p>
    </div>
  
       </section>
       <section className="footer">
         <div className="row">
            <div className="footer-menu">
               <div className="footer-menu-item">
                  <div className="footer-item">
                     <h3>ABOUT US</h3>
                     <ul>
                        <li>Our History</li>
                        <li>Product Care</li>
                        <li>Store Location</li>
                        <li>Sustainability</li>
                     </ul>
                  </div>
                  <div className="footer-item">
                     <h3> POLICY</h3>
                     <ul>
                        <li>Shipping & Return Policy</li>
                        <li>Privacy Policy</li>
                        <li>Impressum</li>
                        <li>Return Portal</li>
                     </ul>
                  </div>
                  <div className="footer-item">
                     <h3>CUSTOMER SERVICE</h3>
                     <ul>
                        <li>General Terms and Conditions</li>
                        <li>Contact Us</li>
                        <li>News</li>
                        <li>FAQ</li>
                     </ul>
                  </div>
                  <div className="footer-item">
                     <h3>CUSTOMER SERVICE</h3>
                     <ul>
                        <li>General Terms and Conditions</li>
                        <li>Contact Us</li>
                        <li>News</li>
                        <li>FAQ</li>
                     </ul>
                  </div>
               </div>
               <div className="footer-item">
               <h3>FOLLOW US</h3>
                     <ul>
                        <li><img /></li>
                        <li> <img /></li>
                        <li><img /></li>
                        <li><img /></li>
                     </ul>
                  </div>
            </div>
         </div>
       </section>
    </div>
 </div>
    
  );
}

export default App;
