import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home(props) {
  return (
    <div className="home">
        <div className="home__container">
            <img
              className="home__image"
              src="https://www.junglescout.com/wp-content/uploads/2021/06/feature_prime-day-e1651715066655.png" 
              alt=""
            />

            <div className="home__row">
                <Product
                    id="49538094"
                    title="the lean startup"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg"
                    rating={4}
                />
            </div>

            <div className="home__row">
                <Product
                    rating={7} />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.89}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"
                />
                <Product
                    id="4903850"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product />
            </div>
        </div>
      
    </div>
  );
}

export default Home
