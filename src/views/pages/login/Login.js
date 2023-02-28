import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'
import './_loginstyle.scss'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
  return (
    <div className="container">
      <CContainer>
        <CRow className="wrapper">
          <CCol>
            <CCardGroup>
              <CCard className="loginform">
                <CCardBody>
                  <CForm>
                    <div className="userIcon">
                      <FaUserCircle />
                    </div>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <div className="formbutton">
                      <Link to="/dashboard" className="login">
                        <CRow>
                          <CCol xs={6}>
                            <CButton color="primary" className="btnlogin">
                              Login
                            </CButton>
                          </CCol>
                        </CRow>
                      </Link>
                      <Link to="/register" className="register">
                        <CRow>
                          <CCol xs={6}>
                            <CButton color="none" className="btnregister">
                              Register Now!
                            </CButton>
                          </CCol>
                        </CRow>
                      </Link>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
