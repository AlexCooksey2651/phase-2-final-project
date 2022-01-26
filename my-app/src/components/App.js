import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import SharkContainer from "./SharkContainer";
import SharkForm from "./SharkForm";
import LearnAndHelp from "./LearnAndHelp"
import Search from "./Search"



function App() {
    const [sharks, setSharks] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('http://localhost:3000/sharks')
            .then(response => response.json())
            .then(sharks => setSharks(sharks))
    }, [])

    function handleAddShark(newShark) {
      setSharks([...sharks, newShark])
    }

    function handleSearch(searchText) {
      setSearch(searchText)
    }

    const filteredSharks = sharks.filter(shark => shark.name.toLowerCase().includes(search.toLowerCase()))

    function handleUpdateSharks(updatedShark) {
      const updatedSharks = sharks.map(shark => {
        if (shark.id === updatedShark.id) {
          return updatedShark
        } else {
          return shark
        }
      })
      setSharks(updatedSharks)
    }

    return (
        <div className = "App" >
            <Header />
            <NavBar />
            <Search handleSearch={handleSearch}/>
            <Switch >
              <Route exact path="/learnandhelp">
                <LearnAndHelp />
              </Route>
              <Route exact path="/addshark">
                <SharkForm addShark={handleAddShark}/>
              </Route>
              <Route exact path="/">
                <SharkContainer sharks={filteredSharks} changeDonationAmount={handleUpdateSharks}/>
              </Route>
            </Switch>
            
        </div>
    )
}

export default App;
