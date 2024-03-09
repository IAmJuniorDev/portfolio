import CardDetail from "./cardDetail";

const CoffeeHot = ({coffeeData,onCardClick})=>{
  return(
    <div className="coffee-container">
      <h3>- กาแฟร้อน -</h3>
      <div className="coffee-content">
        {[...coffeeData].map((coffee)=>(
          <CardDetail 
            key={coffee.id}
            id={coffee.id}
            coffee={coffee}
            imgSrc={'hot'}
            isFlipped={coffee.isFlipped}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  )
}

export default CoffeeHot;