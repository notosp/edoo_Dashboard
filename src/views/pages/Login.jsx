import React, { useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import  { Link } from 'react-router-dom';
import oAuth from '../../providers/auth';
import { useHistory } from 'react-router-dom';

import logo from '../../layouts/moco/img/brand/edo.png';

const App = () => {
  const history = useHistory()
  const [model, setModel] = useState({
    email: 'yoviefp@gmail.com',
    password: '12345'
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await oAuth.login(model);
      history.push('/');
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleChange = (e) => {
    setModel({ ...model, [e.target.name]: e.target.value });
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <div className="col-md-12 text-center my-3">
            
          </div>
          <Col lg="4" md="7">
            <CardGroup>
              <Card className="p-4">
                <div className="text-center">
                  <img src={logo} alt="Logo Edoo" style={{ width: "60%" }} />
                </div>
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <div className="text-center">
                      <h5>Halaman Administrator</h5>
                      <p className="text-muted">Selamat Datang</p>
                    </div>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="email" onChange={handleChange} name="email" value={model.email} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="current-password" onChange={handleChange} name="password" value={model.password} />
                    </InputGroup>
                    <Row className="text-center">
                      <Col xs="12">
                        <Button color="primary" onSubmit={handleSubmit} className="btn-login px-4">Login</Button>
                      </Col>
                      <Col xs="12" className="mt-2">Sekolah kalian belum terdaftar ? Silahkan mendaftar 
                        <Link to="/register" color="link" className="px-0">Disini</Link>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <Row className="align-items-end">
          <Col md="12" className="text-center">
            <footer className="footer mt-5">
              <div className="container">
                <span className="text-muted">
                  Dashboard Design UI by Creative Development © Copyright{" "}
                  {new Date().getFullYear()}{" "}
                  <a style={{ color: "#02CBB5", textDecoration: 'none' }} href="https://aksaramaya.com">
                    Aksaramaya
                  </a>
                </span>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
