import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import SharkContainer from "./SharkContainer";
import SharkForm from "./SharkForm";
import LearnAndHelp from "./LearnAndHelp"



function App() {
    const [sharks, setSharks] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/sharks')
            .then(response => response.json())
            .then(sharks => setSharks(sharks))
    }, [])

    return (
        <div className = "App" >
            <Header />
            <NavBar />
            <Switch >
              <Route exact path="/learnandhelp">
                <LearnAndHelp />
              </Route>
              <Route exact path="/addshark">
                <SharkForm />
              </Route>
              <Route exact path="/">
                <SharkContainer sharks={sharks} />
              </Route>
            </Switch>
        </div>
    )
}

export default App;
