import React, { Fragment, useState } from 'react'
import { Col, Container, Row, Card, Spinner } from 'react-bootstrap'
import _get from 'lodash/get'
import { useKPI } from './data'
import { usePermissions } from 'react-admin'
import './style.scss'
const Dashboard = () => {
  const { kpi, loading } = useKPI()
  const { permissions } = usePermissions()
  return (
    <Fragment>
      <Container className={'containerdash'}>
        <Row>
          <Col>
            {' '}
            <h4 className={'titleDashboard'}>
              Bienvenido al Sitio de Administración Web App Rancagua
            </h4>
          </Col>
        </Row>
        {loading ? (
          <div>
            <Spinner animation='border' role='status'>
              <span className='sr-only'>Cargando...</span>
            </Spinner>
          </div>
        ) : (
          <Row>
            {_get(permissions, 'kpi.total', false) && (
              <Col lg={4} md={6} sm={12} style={{ padding: '1rem' }}>
                <Card style={{ width: '100%', textAlign: 'center', background: 'aliceblue' }}>
                  <Card.Body>
                    <Card.Title>Tarjeta Vecino</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>Número TV Creadas </Card.Subtitle>
                    <Card.Text style={{ fontSize: '2rem', textAlign: 'center', color: 'blue' }}>
                      {_get(kpi, 'total', 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {_get(permissions, 'kpi.scans', false) && (
              <Col lg={4} md={6} sm={12} style={{ padding: '1rem' }}>
                <Card style={{ width: '100%', textAlign: 'center', background: 'aliceblue' }}>
                  <Card.Body>
                    <Card.Title>Tarjeta Vecino </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>Consultas Petrobras</Card.Subtitle>
                    <Card.Text style={{ fontSize: '2rem', textAlign: 'center', color: 'blue' }}>
                      {_get(kpi, 'scans', 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {_get(permissions, 'kpi.offline', false) && (
              <Col lg={4} md={6} sm={12} style={{ padding: '1rem' }}>
                <Card style={{ width: '100%', textAlign: 'center', background: 'aliceblue' }}>
                  <Card.Body>
                    <Card.Title>Tarjeta Vecino offline</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>Número TV Creadas</Card.Subtitle>
                    <Card.Text style={{ fontSize: '2rem', textAlign: 'center', color: 'blue' }}>
                      {_get(kpi, 'offline', 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
            {_get(permissions, 'kpi.users', false) && (
              <Col lg={4} md={6} sm={12} style={{ padding: '1rem' }}>
                <Card style={{ width: '100%', textAlign: 'center', background: 'aliceblue' }}>
                  <Card.Body>
                    <Card.Title>Rancagua Digital</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'> Usuarios App</Card.Subtitle>
                    <Card.Text style={{ fontSize: '2rem', textAlign: 'center', color: 'blue' }}>
                      {_get(kpi, 'users', 0)}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        )}
      </Container>
      <footer className=' footer fixed-bottom footer-light footer-shadow content container-fluid footerdash'>
        Información Actualizada {new Date().toLocaleDateString('es-CL', { dateStyle: 'full' })}
      </footer>
    </Fragment>
  )
}
export default Dashboard
