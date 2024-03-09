import { useState} from 'react';
import hotCoffeeImage from '../../images/coffee.jpg';
import coldCoffeeImage from '../../images/coldcoffee.jpg';
import { useCoffeeContext } from '../../hooks/useCoffeeContext';

const CardDetail = ({id,isFlipped,coffee,imgSrc,onCardClick})=>{
  const {dispatch} = useCoffeeContext();
  const coffeeImage = imgSrc === 'cold' ? coldCoffeeImage : hotCoffeeImage ;
  const [selectedSize,setSelectedSize] = useState(null);
  const [amount,setAmount] = useState(1);
  const handleSizeClick = (size,event) => {
    event.stopPropagation();
    setSelectedSize(size);
  }
  const handleRadio = (event)=>{
    event.stopPropagation();
  }
  const handlePlus =(event)=>{
    event.stopPropagation();
    setAmount(amount+1);
  }
  const handleSub = (event)=>{
    event.stopPropagation();
    if(amount>1){
      setAmount(amount-1)
    }
  }
  const handleSubmit = async(event)=>{
    event.stopPropagation();
    const coffeePrice = ()=>{
      switch(imgSrc==='cold'?'Cold':'Hot'){
        case 'Hot':
          switch(selectedSize){
            case 'S':
              return 45;
            case 'M':
              return 50;
            case 'L':
              return 55;
            default:return 0;
          }
        case 'Cold':
          switch(selectedSize){
            case 'S':
              return 50;
            case 'M':
              return 55;
            case 'L':
              return 60;
            default:return 0;
          }
        default:return 0;
      }
    }
    const newPrice = coffeePrice()*amount;
    if(selectedSize!==null && amount!==0){
      dispatch({
        type:'CREATE_COFFEE',
        payload:{
          name:coffee.name,
          size:selectedSize,
          amount:amount,
          type:imgSrc==="cold"?'Cold':'Hot',
          price:newPrice,
        },
      });
    }
    else alert('Some information did not include!!!');
    setSelectedSize(null);
    setAmount(1);
  }
  return(
    <div 
    className={`flip-card ${isFlipped?'flipped':''}`}
    onClick={(e)=>onCardClick(id,e)}
    >
      <div className="flip-card-inner">
        <div className="card-front">
          <img className="coffee-img-size" src={coffeeImage} alt="" />
          <h2>{coffee.name}</h2>
        </div>
        <div className="card-back">
          <h3>size</h3>
          <div className="radio-container">
            <span 
              className={`coffee-selection S ${selectedSize === 'S' ? 'size-clicked' : ''}`}
              onClick={(e) => handleSizeClick('S',e)}
            >
              <input 
                type="radio" 
                name='size' 
                value="S"
                checked={selectedSize==="S"}
                onChange={handleRadio}
              />
              <div>S</div>
            </span>
            <span 
              className={`coffee-selection M ${selectedSize === 'M' ? 'size-clicked' : ''}`}
              onClick={(e) => handleSizeClick('M',e)}
            >
              <input 
                type="radio" 
                name='size' 
                value="M"
                checked={selectedSize==="M"}
                onChange={handleRadio}
              />
              <div>M</div>
            </span>
            <span 
              className={`coffee-selection L ${selectedSize === 'L' ? 'size-clicked' : ''}`}
              onClick={(e) => handleSizeClick('L',e)}
            >
              <input 
                type="radio" 
                name='size' 
                value="L"
                checked={selectedSize==="L"}
                onChange={handleRadio}
              />
              <div>L</div>
            </span>
          </div>
          <div className="amount-container">
            <span 
              className='coffee-sub'
              onClick={(e)=>handleSub(e)}
            >
              <div>-</div>
            </span>
            <span><div>{amount}</div></span>
            <span 
              className='coffee-plus'
              onClick={(e)=>handlePlus(e)}
            >
              <div>+</div>
            </span>
          </div>
          <button type="submit" onClick={(e)=>handleSubmit(e)}>Add</button>
        </div>
      </div>
    </div>
  )
};

export default CardDetail;