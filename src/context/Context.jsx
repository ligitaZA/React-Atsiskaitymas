import { createContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({children}) => {

  const [something, setSomething] = useState([]);

  useEffect(() => {

  })

  const addSomething = () => {
    fetch('http://localhost:5000/'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    }
    .then(res => res.json()
    .then(data => {
      setSomething()
    }))
  }
}
return (
  <Context.Provider
    value={{
      something,
      addSomething
    }}
    >
      {children}
    </Context.Provider>
)

export { Provider };
export default Context;