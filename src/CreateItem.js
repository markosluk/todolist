import { useState } from "react"
import { FaPlus } from "react-icons/fa"

const CreateItem = ({handleAdd}) => {
    const [item, setItem] =useState({title:"", content:""})
    const handleItem = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setItem(prevValue => ({...prevValue, [name]: value}))
    }
    const handleAddButton = (e) => {
        e.preventDefault();
        handleAdd(item);
        setItem({title: "", content: ""})
    }

  return (
    <div>
        <form className="create-item">
            <input type="text"
                autoFocus
                name="title"
                value={item.title}
                placeholder= "title"
                onChange = {handleItem}
            />
            <textarea name="content"
                value={item.content}
                placeholder="content" 
                rows="3"
                onChange = {handleItem}
            />
            <button onClick = {handleAddButton}>
                <FaPlus size={28} />
            </button>
        </form>  
    </div>
    
  )
}

export default CreateItem