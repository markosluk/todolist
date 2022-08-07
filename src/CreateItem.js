import { useState, useRef } from "react"
import { FaPlus } from "react-icons/fa"

const CreateItem = ({handleAdd}) => {
    const [item, setItem] =useState({title:"", content:""})
    const titleRef = useRef()
    const contentRef = useRef()

    const handleItem = (e) => {
        const name = e.target.name
        const value = e.target.value
        setItem(prevValue => ({...prevValue, [name]: value}))
    }
    const handleKeyPress = (e) => {
        e.key === "Enter" && (e.preventDefault() || contentRef.current.focus())
    }
    const handleAddButton = (e) => {
        e.preventDefault()
        handleAdd(item)
        setItem({title: "", content: ""})
        titleRef.current.focus()
    }

  return (
    <div>
        <form className="create-item">
            <input type="text"
                autoFocus
                name="title"
                value={item.title}
                placeholder="title"
                onChange={handleItem}
                onKeyPress={handleKeyPress}
                ref={titleRef}
            />
            <textarea name="content"
                value={item.content}
                placeholder="content" 
                rows="3"
                onChange={handleItem}
                ref={contentRef}
            />
            <button onClick={handleAddButton}>
                <FaPlus size={28} />
            </button>
        </form>  
    </div>
    
  )
}

export default CreateItem