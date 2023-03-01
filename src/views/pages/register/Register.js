import React from 'react'
import '../../../all-views-scss/_registerstyle.scss'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CDropdown,
  CForm,
  CFormInput,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  return (
    <CContainer className="registercontainer">
      <CRow className="wrapper">
        <CCol>
          <CCard className="registerform">
            <CCardBody>
              <CForm>
                <h1>Create Account</h1>
                <CCol className="text-divider"> Personal Information</CCol>
                <CRow className="row">
                  <CCol className="col-md-6">
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Firstname" autoComplete="firstname" />
                    </CInputGroup>
                  </CCol>
                  <CCol className="col-md-6">
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Lastname" autoComplete="lastname" />
                    </CInputGroup>
                  </CCol>
                </CRow>
                <CRow className="row">
                  <CCol className="col-md-6">
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormSelect className="costum-select">
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </CFormSelect>
                    </CInputGroup>
                  </CCol>
                  <CCol className="col-md-6">
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Nationality" autoComplete="Nationality" />
                    </CInputGroup>
                  </CCol>
                </CRow>
                <CRow className="row">
                  <CCol className="col-md-6">
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Contact Number" autoComplete="contactNum" />
                    </CInputGroup>
                  </CCol>
                  <CCol className="col-md-6">
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput type="date" />
                    </CInputGroup>
                  </CCol>
                </CRow>
                <CCol className="create-acc">
                  <CButton color="primary">Create Account</CButton>
                </CCol>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Register
