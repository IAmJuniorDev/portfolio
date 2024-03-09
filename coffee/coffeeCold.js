import CardDetail from "./cardDetail";

const CoffeeCold = ({coffeeData,onCardClick})=>{
  return(
    <div className="coffee-container">
      <h3>- กาแฟเย็น -</h3>
      <div className="coffee-content">
        {[...coffeeData].map((coffee)=>(
          <CardDetail 
          key={coffee.id}
          id={coffee.id} 
          coffee={coffee} 
          imgSrc={'cold'}
          isFlipped={coffee.isFlipped}
          onCardClick={onCardClick} 
          />
        ))}
      </div>
    </div>
  )
}

export default CoffeeCold;