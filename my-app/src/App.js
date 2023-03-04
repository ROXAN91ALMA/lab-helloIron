
import './App.css';
import logo from './assets/img/ironhack-logo.svg'
import menu from './assets/img/menu-top.svg'

  const Cards = [
    {
      title:"Declarative",
      description: "React makes it painless to create interactive Uls.",
      image: "images/icon1.png"
    },

    {
      title:"Components",
      description: "Build encapsulated components that manage their state.",
      image: "/images/icon2.png"
    },

    {
      title:"Single-Way",
      description: "A set of immutable values are passed to the components.",
      image: "images/icon3.png"
    },

    {
      title:"SJX",
      description: "Statically-typed. designed to run on modern browsers.",
      image: "images/icon4.png"
    }
  ];

  function CardItems(props) {
    return(
      <div className="card-items">
      
          <div key={props.card.title} className="card-items">
            <img src= {props.card.image} alt= "card-items" />
            <h3>{props.card.title}</h3>
            <p className='text-card'>{props.card.description}</p>
          </div>
    
      

      </div>
    )
  }





  function Navbar() {
    return (
      <div className="Navbar">
        <img className="logo-nav"src={logo} alt='logonav'/>
        <img className='menu-nav'src={menu} alt='logonav'/>
  
      </div>
    );
  }


  
function Header(props) {
 
 return (
  <div className='backgorund-header'>
    <h1 className='title-header'>
      {props.title}
    </h1>

    <p className='text-header'>
      {props.text}
    </p>
    
    <button className='button-awesome'>
        {props.button}
    </button> 
    
  </div>

 )
}

function App() {
 return (
  <> 
    <div className='App'>

      
      <Navbar />
      

      <Header

        title = {"Say hello to \nReactJS "}
    
        text = {"You will learn how to use \nthe most popular frontend library, \nand become a super Ninja developer."}
        
        button = {"Awesome!"}
        
      />

      
      <div className='card-iron'>
        {Cards.map((mappedCard) => <CardItems card={mappedCard} key={mappedCard.id} />)}
      </div>
        

    
    </div>

  </>

 )
}

export default App;
