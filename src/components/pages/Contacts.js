import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Contacts extends Component {
    render() {
        return (
            <section className="my-5 py-5">
                <div className="container">
                    <div className="well well-sm">
                        <h3> <strong>Our Location</strong> </h3>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.8963572946823!2d25.285693206226178!3d54.68306946673175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd9419df4df72d%3A0x84cdab3f82f7f6fb!2sGediminas%20Castle%20Tower!5e0!3m2!1sen!2slt!4v1587827347277!5m2!1sen!2slt" style={{ border: '0', width: '100%', height: '350px', frameBorder: '0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        <div className="col-md-5">
                            <h4> <strong> Contact Us</strong> </h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="Phone" />
                                </div>
                                <textarea className="form-group" name="" id="" cols="30" rows="3" placeholder="  Message"></textarea>
                                <Link className="btn btn-outline-primary text-uppercase">
                                    {/* <i className="fa fa-paper-plane-o" aria-hidden="true"></i> */}
                                    <i className="fab fa-telegram-plane"></i> &nbsp; Send
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Contacts
