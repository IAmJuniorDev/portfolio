
const OrderInfo = ({coffee})=>{
  const formattedPrice = coffee.price.toLocaleString();
  return(
    <tr>
      <td>{`${coffee.type} ${coffee.name} ${coffee.size}`}</td>
      <td>{`X ${coffee.amount}`}</td>
      <td>{`${formattedPrice} ฿`}</td>
    </tr>
  )
}

export default OrderInfo;