import { FaTrash } from 'react-icons/fa'

const Item = ({id, item, handleRemove}) => {
  return (
    <div className="item">
    <h1>{item.title}</h1>
    <p>{item.content}</p>
    <button onClick={() => (handleRemove(id))}>
        <FaTrash size={20} />
    </button>
    </div>
  )
}

export default Item