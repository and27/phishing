import logo from './logo.svg';
import './App.css';
import { Form, Button } from 'react-bootstrap';

function App() {
  return (
    <div style={{position:"relative",backgroundImage:`url("https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');"`,  backgroundPosition: "center", color:"white"}} >
     <div className="d-flex align-items-center justify-content-center flex-column" style={{minHeight:"100vh", backgroundColor:"rgba(248, 247, 216, 0.5);",    
  
    width: "100%",
    height: "100%",}}>
       <div className="col-md-6 py-5 text-center">
         <h1 style={{fontSize:"80px"}}>Software Antiphishing </h1>
         <h6>millones de ataques de Ransomware, Compromiso de correo electrónico comercial y Recolección de credenciales eluden las costosas soluciones de seguridad del correo electrónico cada año. Están en las bandejas de entrada de sus usuarios en este momento. </h6>
       </div>
       <div className="col-md-6">
       <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email </Form.Label>
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
