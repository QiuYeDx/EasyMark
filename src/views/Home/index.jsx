import React, {useEffect} from "react";
import {Wrap, Container, DemoButton} from "./styles.js";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return (
        <Wrap>
            <Container>
                <DemoButton onClick={() => navigate('demo')}>
                    查看Demo
                </DemoButton>
            </Container>
        </Wrap>
    );
  }

export default Home;