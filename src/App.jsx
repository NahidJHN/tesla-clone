import Header from "./components/Header/Header";
import style from "styled-components"
import Home from "./components/Home/Home"



function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}


const Container = style.div`
width:100wh;

`

export default App;
