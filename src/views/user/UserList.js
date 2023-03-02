import React from 'react'
import { CRow, CToastBody, CButton, CContainer, CTable } from '@coreui/react'
//import { DocsExample } from 'src/components'
const columns = [
  {
    key: 'email',
    label: 'Email',
    _props: { scope: 'col' },
  },
  {
    key: 'unit_no',
    label: 'Unit #',
    _props: { scope: 'col' },
  },
  {
    key: 'fname',
    label: 'First Name',
    _props: { scope: 'col' },
  },
  {
    key: 'lname',
    label: 'Last Name',
    _props: { scope: 'col' },
  },
  {
    key: 'contact_no',
    label: 'contact #',
    _props: { scope: 'col' },
  },
  {
    key: 'role',
    label: 'Role',
    _props: { scope: 'col' },
  },
  {
    key: 'date_registered',
    label: 'Date Registered',
    _props: { scope: 'col' },
  },
  {
    key: 'status',
    label: 'Status',
    _props: { scope: 'col' },
  },
  {
    key: 'actions',
    label: 'Actions',
    _props: { scope: 'col' },
  },
]
const items = [
  {
    email: 'test@email.com',
    unit_no: '2453',
    fname: 'Juan',
    lname: 'Luna',
    contact_no: '0909090909',
    role: 'Owner',
    date_registered: '02/15/2023',
    status: 'Active',
    actions: <CButton href="/billings/waterbilllist">Edit</CButton>,
    _cellProps: { id: { scope: 'row' } },
  },
]

const UserList = () => {
  return (
    <CContainer>
      <CRow>
        <CTable
          bordered
          className="user-list-table"
          color="light"
          columns={columns}
          items={items}
          tableHeadProps={{ color: 'dark' }}
        />
      </CRow>
    </CContainer>
  )
}

export default UserList
