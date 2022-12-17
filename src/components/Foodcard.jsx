import { useState, useEffect } from "react";

function Foodcard() {
    let [food, setFood] = useState()
    useEffect(() => {
        fetch("https://shokumo-api.onrender.com/food/")
            .then((response) => response.json())
            .then((data) => {
                setFood(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    const user = (JSON.parse(localStorage.getItem("user")))
    let cartData = { userid: user?.id };

    const buy = async (foooid) => {
        cartData.foodid=foooid;
        const response = await fetch("https://shokumo-api.onrender.com/cart/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartData)
        })
        const data = await response.json()
        console.log(data)
    }



    return (
        <>
            <div className="container-fluid min-vh-100" style={{ backgroundColor: "#e7e7e7", backgroundImage: "url(https://www.pngitem.com/pimgs/m/661-6611238_pink-flower-pattern-watercolor-design-floral-flowers-flower.png)", backgroundAttachment: "fixed" }}>
                <div className="d-flex justify-content-center gap-3 p-3 flex-row flex-wrap">
                    {
                        food?.map((item, ind) => {
                            return (
                                <div key={ind} className="card bg-light" style={{ width: "245px", boxShadow: "0px 0px 30px 2px rgba(0, 0, 0, 0.15)" }}>
                                    <img src={item?.image} className="card-img-top img-fluid" alt="..." style={{ height: "150px" }} />
                                    <div className="card-body">
                                        <h5 className="card-title text-capitalize">{item?.name}</h5>
                                        {/* <p className="card-text text-secondary">{
                                            item.description.substring(0, 120)}...</p> */}
                                            <span>₹{item?.price}</span>
                                        <div className="row">
                                            {/* <button className="btn btn-primary bg-warning border-0">{item?.price}</button> */}

                                            <button className="btn btn-primary bg-success" onClick={()=>{
                                                buy(item?._id)
                                            }}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* {pop && <Popup data={dish} visible={setPop}/>} */}
        </>
    )
}


export default Foodcard;
