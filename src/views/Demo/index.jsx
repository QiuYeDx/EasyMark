import React, {useEffect} from "react";
import {Wrap, Container, TestButton} from "./styles.js";

function Demo() {
    function handleEventClick(event) {
        alert("No Click!");
    }
    return (
        <Wrap>
            <Container>
                <TestButton onClick={handleEventClick}>测试一下</TestButton>
            </Container>
        </Wrap>
    );
}

export default Demo;
