import Item from "./Item"

const ShowItems = ({items, handleRemove}) => {
  return (
    <div className="show-items">
        {items.map((value, index) => (
            <Item key={index} 
                item={value}
                id={index}
                handleRemove={handleRemove}
            />
      ))}
    </div>
  )
}

export default ShowItems