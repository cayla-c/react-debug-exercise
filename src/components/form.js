import React, { Component } from 'react';
import { Col, Form, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import '../styles/app.css';

class LoginForm extends Component {
  render() {
    return (
      <Form horizontal>
        <fieldset>
          <Col smOffset={4} sm={6} className='mt6x'>

            <FormGroup>
              <Col sm={8}><h3 className='text-left'>Sign in</h3></Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalEmail'>
              <Col sm={8}>
                <FormControl className='input-line'
                             type='email'
                             name='email'
                             placeholder='Email Address'
                             autoCapitalize='off'
                             autoCorrect='off' />
              </Col>
            </FormGroup>

            <FormGroup controlId='formHorizontalPassword'>
              <Col sm={8}>
                <FormControl className='input-line'
                             type='password'
                             name='password'
                             placeholder='Password' />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col sm={2} className='mt6x'>
                <button className='flat-button border-black'
                        type='submit'>Next
                        <Glyphicon className='pl2x' glyph='menu-right' />
                </button>
              </Col>
            </FormGroup>

          </Col>
        </fieldset>
      </Form>
    );
  }
}

export default LoginForm;
