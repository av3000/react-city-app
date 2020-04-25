import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class NotFound extends Component {
    render() {
        return (
            <ComponentNotFound className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Ops! </h1>
                            <h3>Error 404 Page Not Found</h3>
                            <div className="error-details">
                                Sorry, an error occurred. The requested page was not found!
                            </div>
                            <div className="error-actions">
                                <Link className="btn btn-outline-primary btn-lg" to="/">
                                    <i className="fas fa-home">&nbsp; Back to Home</i>
                                </Link>
                                <Link className="btn btn-outline-secondary btn-lg" to="/contacts">
                                    <i className="fas fa-envelope">&nbsp; Support</i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        )
    }
}

export default NotFound

const ComponentNotFound = styled.div`
    .error-template {
        padding: 40px 15px;
        text-align: center;
    }

    .error-actions {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn {
        margin-right: 10px;
    }
`;