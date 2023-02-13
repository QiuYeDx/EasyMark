import React, {useEffect} from "react";
import {Wrap, Container, TestButton} from "./styles.js";
import {useNavigate} from "react-router-dom";

function Demo() {
    const navigate = useNavigate();
    function handleEventClick(event) {
        alert("No Click!");
    }
    return (
        <Wrap>
            <Container>
                <TestButton onClick={handleEventClick}>测试一下</TestButton>
                <TestButton onClick={() => navigate(-1)}>返回</TestButton>
            </Container>
        </Wrap>
    );
}

export default Demo;
