import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { HomeScreen } from "./screens/homeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
