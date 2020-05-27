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
  Row,
  FormGroup,
  Label,
  Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import { Link } from 'react-router-dom';
import oAuth from '../../providers/auth';
import { useHistory } from 'react-router-dom';

import logo from '../../layouts/moco/img/brand/edo.png';

const App = () => {
  const history = useHistory()
  const [model, setModel] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await oAuth.register(model);
      history.push('/');
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleChange = (e) => {
    setModel({ ...model, [e.target.name]: e.target.value });
  }

  const [modal, setModal] = useState(false);

  const termService = () => setModal(!modal);

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <div className="col-md-12 text-center my-3">
            
          </div>
          <Col lg="6" md="7">
            <CardGroup>
              <Card className="p-4">
                <div className="text-center">
                  <img src={logo} alt="Logo Edoo" style={{ width: "60%" }} />
                </div>
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <div className="text-center">
                      <h5>Daftarkan Sekolah Anda sekarang juga</h5>
                      <p className="text-muted">Selamat Datang</p>
                    </div>
                    <FormGroup>
                      <Input type="select" name="provinsi" id="exampleSelect">
                        <option>- Pilih Wilayah -</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Input type="select" name="jenjang" id="exampleSelect">
                        <option>- Pilih Jenjang -</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP</option>
                        <option value="SMA">SMA</option>
                        <option value="SMK">SMK</option>
                      </Input>
                    </FormGroup>

                    <FormGroup>
                      <Input type="select" name="sekolah" id="exampleSelect">
                        <option>- Pilih Sekolah -</option>
                        <option value="SD">SD</option>
                      </Input>
                    </FormGroup>

                    <label className="text-muted mb-3">Detail Sekolah</label>

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
                    <FormGroup check>
                      <Label check>
                        <Input type="checkbox" />{' '}
                        Dengan Menyetujui <Button color="link" className="px-0" onClick={termService}>Term of Service</Button> berikut, maka anda bersedia mengikuti ketentuan dari Aksaramaya
                      </Label>
                    </FormGroup>
                    <div className="form-group mt-2">
                      <ul style={{ fontSize:'13px' }}>
                        <li>Data Sekolah diambil dari Kemdikbud</li>
                        <li>Email yang di daftarkan, adalah email yang valid</li>
                        <li>Email yang di daftarkan, akan bisa digunakan untuk login ke sistem, Setelah di konfirmasi oleh pihak Aksaramaya</li>
                      </ul>
                    </div>
                    <Row className="text-center">
                      <Col xs="12">
                        <Button color="primary" onSubmit={handleSubmit} className="btn-login px-4">Daftar</Button>
                      </Col>
                      <Col xs="12" className="mt-2">Sekolah kalian sudah terdaftar ? Silahkan login { ' ' }
                        <Link to="/login" color="link" className="px-0">Disini</Link>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md="12" className="text-center">
            <footer className="footer my-5">
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

      <Modal isOpen={modal} toggle={termService}>
        <ModalHeader toggle={termService}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={termService}>Do Something</Button>{' '}
          <Button color="secondary" onClick={termService}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;
