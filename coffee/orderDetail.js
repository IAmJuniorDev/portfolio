import { useEffect, useState } from "react";
import { useCoffeeContext } from "../../hooks/useCoffeeContext";
import OrderInfo from "./orderInfo";
import {v4 as uuidv4} from 'uuid';

const OrderDetail = ()=>{
  const{coffees,dispatch} = useCoffeeContext();
  const [totalPrice,setTotalPrice] = useState(0);
  useEffect(()=>{
    dispatch({type:'SET_COFFEES',payload:coffees})
  },[dispatch,coffees])
  useEffect(() => {
    const newTotalPrice = coffees.reduce((total, coffee) => total + coffee.price, 0);
    setTotalPrice(newTotalPrice);
  }, [coffees]);
  const formattedTotalPrice = totalPrice.toLocaleString();
  return(
    <div className="forPrinter">
      <div className="order-container" >
        <div className="order-header">
          <b>98 Cafe</b>
          <p>199 Moo 7 T.Phapai A.Sansai Chiangmai 50210 Tel.0812882000</p>
        </div>
        <div className="order-info">
          <table>
            <tbody>
              <tr>
                <td>Order</td>
                <td>Amt</td>
                <td>Price</td>
              </tr>
            </tbody>
          </table>
          <div className="edit-coffee-overflow">
            <table>
              <tbody>
                {[...coffees].map((coffee)=>(
                  <OrderInfo 
                    key={uuidv4()} 
                    coffee={coffee}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="coffeeTotalPrice">
          <b>Total</b>
          <b>{`${formattedTotalPrice} ฿`}</b>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail;