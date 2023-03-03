import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { Button, Modal, Input } from 'react-bootstrap'

function UnitList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: '#009DFF' }}>
          <h2>Condo Unit List</h2>
        </div>
        <div className="row">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <Input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search Student"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New Unit
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr className="sortable">
                  <th>#</th>
                  <th>Unit # </th>
                  <th>Unit Owner</th>
                  <th>Unit Tower</th>
                  <th>Unit Floor</th>
                  <th>Unit Size</th>
                  <th>Date Added</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>103</td>
                  <td>Rual Octo</td>
                  <td>Tower 1</td>
                  <td>1st Floor</td>
                  <td>20 sqm</td>
                  <td>2023-04-02</td>
                  <td>Vacant</td>
                  <td>
                    <a
                      href="#"
                      className="view"
                      title="View"
                      data-toggle="tooltip"
                      style={{ color: '#10ab80' }}
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                    <a href="#" className="edit" title="Edit" data-toggle="tooltip">
                      <i className="material-icons">&#xE254;</i>
                    </a>
                    <a
                      href="#"
                      className="delete"
                      title="Delete"
                      data-toggle="tooltip"
                      style={{ color: 'red' }}
                    >
                      <i className="material-icons">&#xE872; </i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <!--- Model Box ---> */}
        <div className="model_box">
          <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
            <Modal.Header closeButton>
              <Modal.Title>Add Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <div className="form-group">
                  <Input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group mt-3">
                  <Input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Country"
                  />
                </div>
                <div className="form-group mt-3">
                  <Input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter City"
                  />
                </div>
                <div className="form-group mt-3">
                  <Input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Enter Country"
                  />
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" className="btn btn-success">
                Add Record
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Model Box Finsihs */}
        </div>
      </div>
    </div>
  )
}

export default UnitList