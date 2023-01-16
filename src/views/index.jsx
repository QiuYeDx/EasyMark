import React, {useEffect} from "react";
import {Wrap} from "./styles.js";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Demo from "./Demo/index.jsx";
import Home from "./Home/index.jsx";
// import Side from "./Side";

function App() {
    return (
        <Wrap>
            {/* <Side/> */}
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/demo" element={<Demo/>}/>
                </Routes>
            </Router>
        </Wrap>
    );
};

export default App;