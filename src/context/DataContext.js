import { createContext } from "react";
import { useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {

    const [data, setData] = useState({})
    const [search, setSearch] = useState('Berlin')
    const [input, setInput] = useState("")

    useEffect(() => {

        const apiKey = 'e9a52710e7a3d2c9da91287969102a28'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
       
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json) 
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
      }, [search]);

    return (
        <DataContext.Provider value={{data, search, setSearch, input, setInput}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;