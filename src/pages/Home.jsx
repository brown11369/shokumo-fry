// import { Link } from "react-router-dom";
import Foodcard from "../components/Foodcard";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import "./home.css"
function Home() {

    return (
        <>
            <Menu />

            {/* <!-- ------- banner section ------- --> */}

            <section className="banner">
                <div className="slide">
                    <div className="slide">
                        <div className="slide_text">
                            <h1 className="title banner_title">1Get <span className="off">25%</span> Discount</h1>
                            <p className="banner_text">Subscribe to the Martfury mailing list
                                to receive updates on new arrivals, special offers
                                and our promotions.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide_text">
                        <h1 className="title banner_title"><span className="off"> Maharaja Bhog</span></h1>
                        <p className="banner_text">Subscribe to the Shokumofry || Maharaja Bhog at your fingertips.
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide_text">
                        <h1 className="title banner_title">Got a Joy?</h1>
                        <p className="banner_text2">Combo super Discount</p>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide_text">
                        <h1 className="title banner_title">4Get <span className="off">25%</span> Discount</h1>
                        <p className="banner_text">Subscribe to the Martfury mailing list
                            to receive updates on new arrivals, special offers
                            and our promotions.
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <div className="slide_text">
                        <h1 className="title banner_title">5Get <span className="off">25%</span> Discount</h1>
                        <p className="banner_text">Subscribe to the Martfury mailing list
                            to receive updates on new arrivals, special offers
                            and our promotions.
                        </p>
                    </div>
                </div>
            </section>

            {/* <!-- ------- free delivery section ------- --> */}

            <div className="box">
                <div className="container quality">
                    <div className="qua-com">
                        <i className="quafa fas fa-biking"></i>
                        <h3 className="heading">
                            Free Delivery
                        </h3>
                        <p className="quality_text">
                            For all oders over Rs. 350
                        </p>
                    </div>
                    <div className="qua-com">
                        <i className="quafa fas fa-hourglass-half"></i>
                        <h3 className="heading">
                            30 Min delivery
                        </h3>
                        <p className="quality_text">
                            Fast delivery
                        </p>
                    </div>
                    <div className="qua-com">
                        <i className="quafa fas fa-cash-register"></i>
                        <h3 className="heading">
                            Secure Payment
                        </h3>
                        <p className="quality_text">
                            100% secure payment
                        </p>
                    </div>
                    <div className="qua-com">
                        <i className="quafa fas fa-headset"></i>
                        <h3 className="heading">
                            24/7 Support
                        </h3>
                        <p className="quality_text">
                            Dedicated support
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- ------- top categories section ------- --> */}

            <div className="box">
                <div className="Categories">
                    <div className="heading">
                        Top Categories Of The Month
                    </div>
                    <div className="product_container">
                        <div className="product">
                            <img className="product_img" src="./media/img/1.png" />
                            <h3 className="product_heading">Rasgulla</h3>
                        </div>

                        <div className="product">
                            <img className="product_img" src="./media/img/2.png" />
                            <h3 className="product_heading">Lassi</h3>
                        </div>

                        <div className="product">
                            <img className="product_img" src="./media/img/3.png" />
                            <h3 className="product_heading">Malai Chaap</h3>
                        </div>

                        <div className="product">
                            <img className="product_img" src="./media/img/4.png" />
                            <h3 className="product_heading">Pizza</h3>
                        </div>

                        <div className="product">
                            <img className="product_img" src="./media/img/5.png" />
                            <h3 className="product_heading">Samosa</h3>
                        </div>

                        <div className="product">
                            <img className="product_img" src="./media/img/6.png" />
                            <h3 className="product_heading">Litti Chokha</h3>
                        </div>
                    </div>

                </div>
            </div>

            {/* ------------------------food items---------------------------------- */}


            <section className="box">
                <Foodcard/>
            </section>




            {/* <!-- ------- advertisement section ------- --> */}

            <section className="box">
                <div className="container ad-container">
                    <div className="ad">
                        <div className="ad_text">
                            <h3>Fresh Summer With<br />Pineapple juice</h3>
                            <span className="off">120 Rs./-</span><br />
                            <button className="homebtn">Shop Now</button>
                        </div>
                    </div>
                    <div className="ad">
                        <div className="ad_text">
                            <h3>Fresh Vegetable With<br />Healthy Body</h3>
                            <span className="off">120 Rs./-</span><br />
                            <button className="homebtn">Shop Now</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- ------- Deals Of The Day ------- --> */}

            <section className="box">
                <div className="container">

                    <div className="deals">

                        <div className="deals_day">
                            <div className="heading">Recipe Of The Day</div>
                            <div className="deals_box">
                                <img src="./media/img/Rabri Jalebi.png" className="deals_img" />
                                <div className="deals_text">
                                    <span className="slide_price">
                                        FRUITS
                                    </span>
                                    <h2 className="slide_heading">
                                        Rabri Jalebi
                                    </h2>
                                    <span className="slide_price">
                                        190 Rs.
                                    </span>
                                    <del>250 Rs.</del>
                                    <h4 className="slide_price">
                                        Status: In Stock
                                    </h4>
                                    <h6 className="slide_price">
                                        Expires in
                                    </h6>
                                    <span className="time">02</span>:
                                    <span className="time">09</span>:
                                    <span className="time">32</span>:
                                    <span className="time">02</span>





                                </div>
                            </div>

                        </div>

                        <div className="seller">
                            <div className="slide_day">

                                <div className="seller_slide">
                                    <div className="heading">Top 20 Best Seller
                                        <hr />
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/6.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">Homesoy Milk</h3>
                                                <span className="slide_price">390 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/4.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">MariGold</h3>
                                                <span className="slide_price">240 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/2.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">
                                                    Pineapple</h3>
                                                <span className="slide_price">130 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/1.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">Organic Oranges</h3>
                                                <span className="slide_price">420 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* <!--  --> */}

                                <div className="seller_slide">
                                    <div className="heading">Buy 1 Get 1 Free
                                        <hr />
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/3.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading"> Strawberries</h3>
                                                <span className="slide_price">390 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/5.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">Avocadoes</h3>
                                                <span className="slide_price">390 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/6.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">Australia Banana</h3>
                                                <span className="slide_price">390 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/7.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">Vita Coco</h3>
                                                <span className="slide_price">390 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/* <!--  --> */}

                                <div className="seller_slide">
                                    <div className="heading">Top 20 Best Seller
                                        <hr />
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/8.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">Homesoy Milk</h3>
                                                <span className="slide_price">390 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/9.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">MariGold</h3>
                                                <span className="slide_price">240 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/10.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">
                                                    Pineapple</h3>
                                                <span className="slide_price">130 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box1">
                                        <div className="box2">
                                            <img src="./media/img/11.png" className="slide_img" />
                                            <div className="text">
                                                <h3 className="slide_heading">Organic Oranges</h3>
                                                <span className="slide_price">420 Rs.</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* <!-- ------- new section ------- --> */}





            {/* <!-- ------- newsletter section ------- --> */}

            <section className="subscribe">
                <div className="content">
                    <h1 className="title sub_title">Get <span className="off">25%</span> Discount</h1>
                    <p className="subt">Subscribe to the Martfury mailing list
                        to receive updates on new arrivals, special offers
                        and our promotions.
                    </p>
                    <div className="search">
                        <input className="sub_inp" placeholder="Enter Your Email" />
                        <button className="homebtn sub_homebtn">Subscribe</button>
                    </div>
                </div>
                <div className="subimage">
                    <img className="meal" src="./media/img/meal.jpg" alt="meal" />
                </div>
            </section>
            <Footer />


        </>
    )
}

export default Home;