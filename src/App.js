import logo from './logo.svg';
import './App.css';
import { Calculetter } from './Caluleter/Calculetter';
import { Covid } from './Covidtracker/Covid';
import { Weather } from './Weather/Weather';
// import Todolist from './TODOLIST/Todolist';
// import Hello from './componects/Hello';
// import { Functionalcomponet } from './componects/Functionalcomponet';
// import { Propscomponect } from './componects/Propscomponect';
// import PropsClascomponect from './componects/PropsClascomponect';
// import ClasscomponectPassTwoProps from './componects/ClasscomponectPassTwoProps';
// import Home from './componects/Home';
// import  Toggle  from './componects/Toggle';
// import { Form } from './componects/Form';
// import { ADummyApi } from './componects/ADummyApi';
// import { ControlledForm } from './componects/ControlledForm';

// import {add,subt,multi,divi} from './projectcomponects/Calulatter';
// import { Timer } from './projectcomponects/Timer';
// import { TimerPratice } from './projectcomponects/TimerPratice';
// import { Increment } from './projectcomponects/Increment';
// import { Fetchimage } from './projectcomponects/Fetchimage';

function App() {
  const name="sonali";
  return (
    <>
{/*      
     <Functionalcomponet/>
     <Hello/> */}
     {/* <Propscomponect  name4={name}/> */}
     {/* <Propscomponect text="hello sonali how are you"/> */}
     {/* <Propscomponect love="i love you"/>
     <PropsClascomponect text="yuvraj mohanty"/> */}
{/* 
     <ClasscomponectPassTwoProps text="i m a boy" intro={{age:'18'}}/>
     <Home/>
     <Toggle/>
     <Form/>
     <ADummyApi/>
     <ControlledForm/> */}
{/* 
<ul>

  <li>Adding two number = {add(4,5)}</li>
  <li>substaction two number = {subt(100,5)}</li>
  <li>multiply two number = {multi(4,5)}</li>
  <li>divided two number = {divi(4,5)}</li>
  
</ul> */}

{/* <Timer/>
<TimerPratice/>

<Increment/>


<ADummyApi/> */}
{/* 
<Fetchimage/> */}

{/* <Todolist/> */}

{/* <Calculetter/> */}

<div className='container text-center'>

  <h1>weather Tracker</h1>
{/* <Covid/> */}
<Weather/>

</div>

    
    </>
  );
}

export default App;
