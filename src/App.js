import logo from "./logo.png";
import "./App.css";
import { Form, Button } from "react-bootstrap";

function App() {
  return (
    <div
      className="text-center"
      style={{
        position: "relative",
        backgroundImage: `url("https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"`,
        backgroundPosition: "center",
        color: "white",
      }}
    >
      {" "}
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{
          minHeight: "100vh",
          backgroundColor: "#000000ab",
        }}
      >
        <img src={logo} width="150px" style={{ margin: "0 auto" }} />

        <div className="py-5 text-center">
          <h1 className="display-1" style={{ backgroundColor: "#1954b0;" }}>
            Software Anti-Phishing{" "}
          </h1>
          <h2>
            Te simplificamos la toma de decisiones relacionadas con la
            ciberseguridad de tu empresa.{" "}
          </h2>
          {/* <h6>Evita millones de ataques de Ransomware, Compromiso de correo electrónico comercial y Recolección de credenciales eluden las costosas soluciones de seguridad del correo electrónico cada año. Están en las bandejas de entrada de sus usuarios en este momento. </h6> */}
        </div>
        <div className="col-md-6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Quiero más información
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default App;
