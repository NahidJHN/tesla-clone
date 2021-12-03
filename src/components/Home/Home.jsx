import React from "react";
import styled from "styled-components";
import Section from "./Section";
const home = () => {
    return (
        <Container>
            <Section
                leftButton="Order now "
                rightButton="Learn more"
                backgroundImage="model-s.jpg"
                text="Model-S"
                description="Order oniline for Touchless Delivary"
            />
            <Section
                leftButton="Order now "
                rightButton="Learn more"
                backgroundImage="model-3.jpg"
                text="Model-3"
                description="Order oniline for Touchless Delivary"
            />
            <Section
                leftButton="Order now "
                rightButton="Learn more"
                backgroundImage="model-x.jpg"
                text="Model-X"
                description="Order oniline for Touchless Delivary"
            />
            <Section
                leftButton="Order now "
                rightButton="Learn more"
                backgroundImage="model-y.jpg"
                text="Model-Y"
                description="Order oniline for Touchless Delivary"
            />
            <Section
                leftButton="Order now "
                rightButton="Learn more"
                backgroundImage="solar-panel.jpg"
                text="Solar Panel"
                description="We provide best solar panel for you"
            />
            <Section
                leftButton="Order now "
                rightButton="Learn more"
                backgroundImage="solar-roof.jpg"
                text="Solar Roof"
                description="We provide best solar roof for you"
            />
            <Section
                leftButton="Order now "
                backgroundImage="accessories.jpg"
                text="Accessories"
            />
        </Container>
    );
};

export default home;

const Container = styled.div`
  height: 100vh;
`;
