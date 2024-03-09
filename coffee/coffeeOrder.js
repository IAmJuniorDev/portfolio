import OrderDetail from "./orderDetail";
import { useCoffeeContext } from "../../hooks/useCoffeeContext";

const CoffeeOrder = ()=>{
  const {dispatch} = useCoffeeContext();
  const handleDelete = ()=>{
    dispatch({type:'DELETE_ALL_COFFEE'});
  };
  const printPOS = ()=>{
    const module = document.querySelector('.forPrinter').innerHTML
    const print = window.open();
    print.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Print Order</title>
        <style>
          @media print {
            body {
              font-family: Arial, sans-serif;
              width: 58mm;
              margin: 0;
              padding: 10px 0;
            }

            .order-container{
              min-width:100%;
              max-height:90%;
              display:grid;
              padding:15px 5px;
            }
            
            .order-header{
                display:grid;
                width:100%;
            }
            
            .order-header b,
            .order-header p{
                justify-self: center;
                margin:5px 0;
            }
            
            .order-info{
                width:100%;
                border-collapse: collapse;
            }
            
            .edit-coffee-overflow{
                width:100%;
            }
            
            .order-info table{
                width:100%;
            }
            
            .order-info table tbody{
                width:100%;
            }
            
            .order-info tr{
                width:100%;
                display:grid;
                grid-template-columns: 60% 17% 23%;
            }
            
            .order-info td:nth-child(3){
                justify-self: end;
            }
            
            .coffeeTotalPrice{
                align-self: end;
                max-height:max-content;
                display:flex;
                justify-content: space-between;
                margin-top:20px;
            }
            
            .coffeeTotalPrice b{
                display:inline-block;
                margin:0;
            }
          }
        </style>
      </head>
      <body>
        ${module}
      </body>
    </html>
  `);
    print.document.close();
    print.focus();
    print.print();
  };
  return(
    <div className="coffeeOrder-layout">
      <div className="coffeeOrder-container">
        <h3>รายการสินค้า</h3>
        <OrderDetail />
        <div className="coffee-button">
          <ion-icon onClick={handleDelete} name="trash-bin-outline"></ion-icon>
          <button onClick={printPOS}>Print</button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeOrder;