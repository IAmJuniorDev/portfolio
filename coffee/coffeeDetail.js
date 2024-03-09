import {useState,useEffect} from 'react';
import CoffeeHot from "./coffeeHot";
import CoffeeCold from "./coffeeCold";

const CoffeeDetail = ()=>{
  const [hotCoffeeName,setHotCoffeeName] = useState([
    {id:1,name:"Espresso",isFlipped:false},
    {id:2,name:"Americano",isFlipped:false},
    {id:3,name:"Capucino",isFlipped:false},
    {id:4,name:"Macchiato",isFlipped:false},
    {id:5,name:"Mocca",isFlipped:false},
    {id:6,name:"Latte",isFlipped:false},
    {id:7,name:"Fatewhite",isFlipped:false},
    {id:8,name:"Affogato",isFlipped:false},
  ])
  const [coldCoffeeName,setColdCoffeeName] = useState([
    {id:9,name:"Espresso",isFlipped:false},
    {id:10,name:"Americano",isFlipped:false},
    {id:11,name:"Capucino",isFlipped:false},
    {id:12,name:"Macchiato",isFlipped:false},
    {id:13,name:"Mocca",isFlipped:false},
    {id:14,name:"Latte",isFlipped:false},
    {id:15,name:"Fatewhite",isFlipped:false},
    {id:16,name:"Affogato",isFlipped:false},
  ])
  const [flippedHotCard, setFlippedHotCard] = useState(null);
  const [flippedColdCard, setFlippedColdCard] = useState(null);
  const handleCardClick = (coffeeType, cardId, event) => {
    event.stopPropagation();
    if (coffeeType === 'hot') {
      if (flippedHotCard !== null && flippedHotCard !== cardId) {
        setHotCoffeeName((prevCoffee) =>
          prevCoffee.map((card) =>
            card.id === flippedHotCard ? { ...card, isFlipped: false } : card
          )
        );
        setFlippedHotCard(null);
      }
      setHotCoffeeName((prevCoffee) =>
        prevCoffee.map((card) =>
          card.id === cardId ? { ...card, isFlipped: !card.isFlipped } : card
        )
      );
      setFlippedHotCard((prevCard) => (prevCard === cardId ? null : cardId));
      if (flippedColdCard !== null) {
        setColdCoffeeName((prevCoffee) =>
          prevCoffee.map((card) =>
            card.id === flippedColdCard ? { ...card, isFlipped: false } : card
          )
        );
        setFlippedColdCard(null);
      }
    }else if (coffeeType === 'cold') {
      if (flippedColdCard !== null && flippedColdCard !== cardId) {
        setColdCoffeeName((prevCoffee) =>
          prevCoffee.map((card) =>
            card.id === flippedColdCard ? { ...card, isFlipped: false } : card
          )
        );
        setFlippedColdCard(null);
      }
      setColdCoffeeName((prevCoffee) =>
        prevCoffee.map((card) =>
          card.id === cardId ? { ...card, isFlipped: !card.isFlipped } : card
        )
      );
      setFlippedColdCard((prevCard) => (prevCard === cardId ? null : cardId));
      if (flippedHotCard !== null) {
        setHotCoffeeName((prevCoffee) =>
          prevCoffee.map((card) =>
            card.id === flippedHotCard ? { ...card, isFlipped: false } : card
          )
        );
        setFlippedHotCard(null);
      }
    }
  };
  const handleClickOutside = (event) => {
    if (!event.target.classList.contains('flip-card')) {
      setHotCoffeeName((prevCoffee) =>
        prevCoffee.map((card) => ({ ...card, isFlipped: false }))
      );
      setColdCoffeeName((prevCoffee) =>
        prevCoffee.map((card) => ({ ...card, isFlipped: false }))
      );
      setFlippedHotCard(null);
      setFlippedColdCard(null);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return(
    <div className="coffeeDetail-container">
      <CoffeeHot 
        coffeeData={hotCoffeeName}
        onCardClick={(id,e)=>handleCardClick("hot",id,e)}
      />
      <CoffeeCold
        coffeeData={coldCoffeeName}
        onCardClick={(id,e) => handleCardClick("cold", id,e)}
      />
    </div>
  )
}

export default CoffeeDetail;