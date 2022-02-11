import Classes from './todo.module.css';
import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
 import Button from '@material-ui/core/Button';
 import Listofitem from './Listofitem';
 import EditIcon from '@material-ui/icons/Edit';
import { Alert } from 'bootstrap';
const Todo_List=()=>{
         const[inputstate,setinput]=useState("");
         const[edititem,setedit]=useState(null);
         const[icon,seticon]=useState(false);
    const[item,setinput1]=useState([]);
   const changeinput=(event)=>{
   
  let input=event.target.value;
  setinput(input);
    }
    
        
   
   const onSubmit=()=>{

    if(!inputstate){
      alert("plz fill data");
    }
    else if(inputstate&&icon===false){
      setinput1((oldval)=>{
        const addAllitem={id:new Date().getTime().toString(),name:inputstate}
          return [...oldval,addAllitem];
      });
      setinput("");
    }
    else{
      setinput1(
        item.map((elem)=>{
          if(elem.id===edititem){
            return {...elem,name:inputstate};
          }
          return elem;
        })
      )
      seticon(false);
    
    setinput('');
    setedit(null);
    }  

     
     
   };
   const deleteitem=(id)=>{
  setinput1((olditem)=>{
    return olditem.filter((arrele)=>{
      return id!==arrele.id;
    })
  })
   }
   const edititem1=(id)=>{
     seticon(true);
    const newitem=item.find((elem)=>{
      return elem.id===id;
    });
    setinput(newitem.name);
    setedit(id);
  }
      
  return(
          <>
          
          <div className={Classes.main}>
              <div className={Classes.main1}>
                  <h1>To Do List</h1>
                  
                  <input type="text" placeholder='Add item' value={inputstate} onChange={changeinput} />
                  {icon===false?<span className={Classes.add}>
                  /* <AddIcon className={Classes.icon} title="Add item" onClick={onSubmit}/>
                 </span>:
                 <EditIcon style={{color:"azure"}} onClick={onSubmit}/>
                 }
                  {/* <AddIcon className={Classes.icon} title="Add item"/> */}
                  
                  <ul>
                  {item.map((itemval)=>{
                    // return <Listofitem key={index} id={index}text={itemval} />;
                    return <Listofitem key={itemval.id} id={itemval.id}text={itemval.name} onselect={deleteitem} onedit={edititem1}/>;
                      })}
                  </ul>
              </div>
              
          </div>
          
          </>
      )
                      
   }
   export default Todo_List;
