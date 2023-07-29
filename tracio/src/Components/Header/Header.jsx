import React, {useState} from "react";
import Notification from '../../Assets/Images/notification.svg';
import Face from '../../Assets/Images/face1.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useLocation } from 'react-router-dom';
import { Modal } from "react-bootstrap/";
import Button from 'react-bootstrap/Button';

const Header = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const headerTitle = useLocation();
    const{ pathname } = headerTitle;
    // console.log(pathname.split('/')[1])
    let title = pathname.split('/')[1].replace("-"," ");
    title = title.replace("-"," ");
    return (
        <>
            <div className="header-box-style">
                <h1 className="text-capitalize">{title}</h1>
                <div className="d-flex">
                    <Dropdown className="notification-dropdown">
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <img src={Notification} alt="notification" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">
                                <h2>Notification</h2>
                                <ul className="notificatio-list-style">
                                    <li>
                                        <h4>Lorem Ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus urna et erat euismod, 
                                            nec mattis dui vestibulum. Cras nec risus consectetur.</p>
                                        <span>13 Sep 2020 at 10:10 AM</span>
                                    </li>
                                    <li>
                                        <h4>Lorem Ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus urna et erat euismod, 
                                            nec mattis dui vestibulum. Cras nec risus consectetur.</p>
                                        <span>13 Sep 2020 at 10:10 AM</span>
                                    </li>
                                    <li>
                                        <h4>Lorem Ipsum dolor</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus urna et erat euismod, 
                                            nec mattis dui vestibulum. Cras nec risus consectetur.</p>
                                        <span>13 Sep 2020 at 10:10 AM</span>
                                    </li>
                                </ul>
                                <div className="view-notification">
                                    <Link to='/notifications'>View All</Link>
                                </div>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="d-flex user-dropdown">
                        <Dropdown.Toggle id="dropdown-basic">
                            <span>User123</span>
                            <img src={Face} alt="" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={handleShow}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <Modal
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
                >
                <Modal.Body className="p-4 body-style-wrap">
                    <h5>Do you want to Logout?</h5>
                </Modal.Body>
                <Modal.Footer className="modal-btn-group px-4 mb-4">
                    <Link className="btn btn-primary" to='/login'>Yes</Link>
                    <Button className="btn btn-secoundary" onClick={handleClose}>No</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Header;