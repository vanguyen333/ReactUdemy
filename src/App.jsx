import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt=(max)=> {
  return Math.floor(Math.random() * (max + 1));
}

const Header=()=> {
  const description =  reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
       {description} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

const CoreConcept=(props)=>{
  return (
    <li>
      <img src={props.img} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

const App=()=> {
  return (
    <div>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcept 
          title="Components" 
          description="The core UI building block."
          img={componentsImg}
          />
          <CoreConcept 
          title="Props"/>
          <CoreConcept/>
          <CoreConcept/>
        </ul>
      </section>
      
      </main>
    </div>
  );
}

export default App;