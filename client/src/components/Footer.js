import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom ">
                </section>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="fst-italic fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>GoFood
                                </h6>
                                <p>
                                    Your one stop for all kinds of cravings 
                                </p>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/" className="text-reset">Pricing</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Settings</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Orders</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-reset">Help</Link>
                                </p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i>Address Here</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@example.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> Phone no 1 here</p>
                                <p><i className="fas fa-print me-3"></i> Phone no 2 here</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{ "backgroundColor": "rgba(0, 0, 0, 0.05)" }}>
                    © 2021 Copyright:
                    <Link className="text-reset fw-bold" to="https://mdbootstrap.com/">MDBootstrap.com</Link>
                </div>
            </footer>
        </div>
    )
}
