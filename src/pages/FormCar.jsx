import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function FormCar() {
  return (
    <div style={{ display: 'block', width: 600, padding: 30 }}>
      <h4>Web Cars</h4>
      <Form>
        <Form.Group>
          <Form.Label>Marca:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira a marca (montadora) do veículo. Ex.: Ford, Fiat, VolksWagen, Jeep... "
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ display:'block', padding: 10}}>Modelo:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Insira o modelo do veículo. Ex.: EcoSport, Palio, Fusca, Compass...  "
          />
        </Form.Group>
        <Form.Group>
          <Form.Label style={{ display:'block', padding: 10}}>Cor:</Form.Label>
          <Form.Control type="text" placeholder="Insira a cor do veículo" style={{ display: 'block', width: 200}} />
        </Form.Group>

        <Form.Group>
          <Form.Label style={{ display:'block', padding: 10}}>Ano de fabricação:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ano fabricação" style={{ display: 'block', width: 200}}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label style={{ display:'block', padding: 10}}>Ano do Modelo:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ano modelo" style={{ display: 'block', width: 200}}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label style={{ display:'block', padding: 10}}>Tipo de câmbio: </Form.Label>

          <Form.Select aria-label="Default select example" style={{ display: 'block', width: 200}}>
            <option>Tipo de câmbio</option>
            <option value="1">Manual</option>
            <option value="2">Automático</option>
            <option value="3">Automatizado</option>
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ display: 'block', margin: 15}}>
        Cadastre 
        </Button>
      </Form>
    </div>
  )
}
