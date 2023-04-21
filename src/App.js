
import Form from "./components/UserFormDetailForm";

import useMultistepForm from "./hooks/useMultistepForm";
import UserFormDetailForm from "./components/UserFormDetailForm";
import NumberOfWheelForm from "./components/NumberOfWheelForm";
import TypeOfWheelForm from "./components/TypeOfWheelForm";
import SpecificModelForm from "./components/SpecificModelForm";
import DateRangeForm from "./components/DateRangeForm";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useLocalStorage from "./hooks/useLocalStorage";
import { useContext } from 'react';
import { FormStoreContext } from "./context/FormStore";
import UserList from "./components/UserList";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [info,setInfo] =  useContext(FormStoreContext)
  const [store,setStore] = useLocalStorage("store",[])
  const [list,setList] = useState(false)
  const {steps,currentStepIndex,step,back,next} =  
  useMultistepForm(
   [<UserFormDetailForm/>,
   <NumberOfWheelForm />,
   <TypeOfWheelForm />,
   <SpecificModelForm />,
   <DateRangeForm />,
   ])
   function handleForm(){
      setStore((pre)=>[...pre,info])
      setList((pre)=>!pre)
   }
   function handleNext(){
      setInfo((pre)=>({...pre,validate:false}))
      next()
   }
   
  return (
   
   
   <Container maxWidth="lg">
      {list ? <UserList /> : <div>{currentStepIndex+1}/{steps.length}

{step}

{currentStepIndex === steps.length -1 ? 
<Button
color="primary"
variant="contained"
fullWidth
onClick={handleForm}
disabled={(info.validate)? false :true}
>Submit</Button>
:
<Button
color="primary"
variant="contained"
fullWidth
onClick={handleNext}
disabled={(info.validate)? false :true}
>Next</Button>
}</div> }
      
      
   </Container>
  
  
  );
}

export default App;
