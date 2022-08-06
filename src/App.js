import { useEffect, useState } from "react"
import Header from "./Header"
import Footer from "./Footer"
import CreateItem from "./CreateItem"
import ShowItems from "./ShowItems"


function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todoList")) || [])
  
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(items))
  }, [items])

  const handleAdd = (item) => {
    setItems(prevValue => ([...prevValue, item]))
  }

  const handleRemove = (id) => {
    setItems(prevValue => (
      prevValue.filter((value, index) => (index !== id))
    ))
  }

  console.log(items);

  return (
    <div className="App">
      <Header />
      <CreateItem handleAdd={handleAdd} />
      <ShowItems items={items} handleRemove={handleRemove} />
      <Footer />
    </div>
  );
}

export default App
