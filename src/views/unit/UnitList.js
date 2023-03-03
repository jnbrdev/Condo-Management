import React from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';
//For API Requests
import axios from 'axios';

class UnitList extends React.Component {
    // State array variable to save and show data
    constructor(props) {
        super(props)
        this.state = {
            data: [],

        }
    }
    componentDidMount() {
        //Get all users details in bootstrap table
        axios.get('http://localhost/save.php').then(res => {
            //Storing users detail in state array object
            this.setState({ data: res.data });

        });
        //initialize datatable
        $(document).ready(function () {
            setTimeout(function () {
                $('#example').DataTable();
            }, 1000);
        });
    }
    render() {
        //Datatable HTML
        return (
            <div className="MainDiv">
                <div class="jumbotron text-center">
                    <h3>Unit List</h3>
                </div>

                <div className="container">

                    <table id="example" class="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((result) => {
                                return (
                                    <tr>
                                        <td>{result.id}</td>
                                        <td>{result.email}</td>
                                        <td>{result.username}</td>
                                        <td>
                                            <button className="bg-info" onClick={e => { this.userdetails(result.id) }}> <i class="fas fa-eye"></i> </button>
                                            <button className="bg-warning"> <i class="fas fa-edit"></i> </button>
                                            <button className="bg-danger"> <i class="fas fa-trash"></i> </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default UnitList;