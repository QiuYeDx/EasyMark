import React, {useEffect} from "react";
import {Wrap, DemoButton} from "./styles.js";

function Home() {
    return (
        <Wrap>
            <a href="#/demo">
                <DemoButton>
                    查看Demo
                </DemoButton>
            </a>
        </Wrap>
    );
  }

export default Home;