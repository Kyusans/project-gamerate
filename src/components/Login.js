import { useState } from 'react';
import { Form, Button, Container, FloatingLabel, Card } from 'react-bootstrap';
import "./css/site.css";

const Login = () => {
    const [schoolId, setSchoolId] = useState("");
    const [password, setPassword] = useState("");

    const openSignUpModal = ()=>{
        console.log("Hello from modal");
    }
    
    return ( 

        <Container fluid="md" className="centered">
            <Card className="card-thin">
                <Card.Body className="card-body">
                    <h2 className="text-center mt-4">Login</h2>
                    <Form className="text-center">
                        <Form.Group>
                            <FloatingLabel className="fatter-text mt-4 centered-label" label="School Id">
                                <Form.Control
                                    className="form-control"
                                    type="text"
                                    placeholder="School Id"
                                    value={schoolId}
                                    onChange={(e) => setSchoolId(e.target.value)}
                                />
                            </FloatingLabel>

                            <Form.Group className="mt-2">
                                <FloatingLabel className="fatter-text centered-label" label="Password">
                                    <Form.Control 
                                        className="form-control"
                                        type="text"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                        </Form.Group>

                        <Button className="button-large mt-3 btn-lg big-height btn-success"><div className="text-small">Login</div></Button>
                        
                        <p className="mt-3">Don't have an account?<button className="link-button" onClick={openSignUpModal}>Sign Up</button> </p>
                    </Form>
                </Card.Body>
            </Card>
        </Container>

     );
}
 
export default Login;
