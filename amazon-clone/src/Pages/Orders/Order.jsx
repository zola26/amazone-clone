import React,{useContext, useEffect, useState} from 'react'
import classes from './order.module.css'
import LayOut from "../../Components/LayOut/LayOut";
import { db } from '../../Utility/firebase';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
const Order = () => {
  const [{user}, dispatch] = useContext(DataContext)
  const [orders, setOrders] = useState([])
  
  useEffect(() => {
  if(user){
       db.collection("users")
          .doc(user.uid)
          .collection("orders")
          // .orderBy("created","desc")
          .onSnapshot((snapshot) =>{
              console.log(snapshot);
              setOrders(
                snapshot.docs.map((doc) =>({
                  id:doc.id,
                  data:doc.data(),

                }))
              )
  })
  
  }else{
  setOrders([])
  }

  },[])
  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.order_container}>
          <h2>Your Order</h2>
          {(orders?.length == 0) && (<div style={{padding:"20px"}}>
            You don't have Orders yet.
          </div>)}
          {/* ordered items */}
          <div>
            {
              orders?.map((eachOrder, i) =>{
                return(
                  <div key={i}>
                    <hr />
                    <p>Order ID: {eachOrder?.id}</p>
                    {
                      eachOrder?.data?.basket?.map(order=>{
                       return (<ProductCard
                        product={order}
                        // ratingcorr={}
                        flex={true}
                        key={order.id}
                        // renderDescturn={}
                        // renderAdd={}
                        />)
                      })
                    }
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Order
