import React, { useEffect } from "react";
import "./style.css";
import { useState } from "react";

 
const getlocalstorage=()=>{
    const lists = localStorage.getItem("mytodolist");
    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
    } 



const Todo = () => {
  const [Items, setItems] = useState("");
  const [Storeddata,setStoreddata]=useState((getlocalstorage()));
  const [editeditems,setediteditems] =useState("");
  const [toggle_button,settoggle_button]= useState(false);

  //............add items here........
  const addItems=()=>{
      if(!addItems){
          return("please fill the form ");

      }else if(addItems && toggle_button){
          setStoreddata(
              Storeddata.map((curelem)=>{
                  if(curelem.id===editeditems){
                      return {...curelem,name: Items};
                  }
                  return curelem;

              })

          );
          setItems("");
          setediteditems(null);
          settoggle_button(false);

      }
      else{
          const mynewData ={
              id: new Date().getTime().toString(),
              name:Items
          }
          setStoreddata([...Storeddata,mynewData]);  
          setItems("");
         
      }
  }
  //edit the item......
  const todo_edit=(index)=>{
      const item_edit= Storeddata.find((curelem)=>{
         return curelem.id===index;
      })
      setItems(item_edit.name)
      setediteditems(index);
      settoggle_button(true);


  }
  // delete the items
  const deleteItem=(index)=>{
      const updatedItem = Storeddata.filter((curelem)=>{
          return curelem.id !==index

      });
      setStoreddata(updatedItem);
  };

  // Remove all the items

  const removeAll=()=>{
       return setStoreddata([]);

  }
  //stored items in local storage.....
  useEffect(()=>{
      localStorage.setItem("mytodolist",JSON.stringify(Storeddata));
  },[Storeddata])


  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./fontawesome/notes_img.jpg" alt="pic" />
            <figcaption>Add your list here ✌</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Item"
              className="form-control"
              value={Items}
              onChange={(Event) => setItems(Event.target.value)}
            />
            {toggle_button ? (<i className="far fa-edit add-btn" onClick={addItems}></i>) : (<i className="fa fa-plus add-btn" onClick={addItems}></i>)}
           
          </div>
          {/* show our items here */}
          <div className="showItems">
              {Storeddata.map((curelem,index)=>{
                  return(
                    <div className="eachItem" key={curelem.id}>
                    <h3>{curelem.name}</h3>
                    <div className="todo-btn">
                      <i className="far fa-edit add-btn" onClick={()=>todo_edit(curelem.id)}></i>
                      <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curelem.id)}></i>
                    </div>
                  </div>
                  )
              })}
          </div>
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove all" onClick={removeAll}>
              <span>CHECK LISt</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
