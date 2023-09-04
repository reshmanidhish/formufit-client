import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Container,
    Form, FormGroup, Input,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from "reactstrap";
// core components
import {useState} from "react";
import Header from "../../components/Headers/Header";
import classnames from "classnames";
import "./styles.scss"

const MyAccount = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    return (<>
            <Header breadcrumbName="Your Account" breadcrumbIcon="fas fa-user"/>
            {/* Page content */}
            <Container fluid className="container-body profile">
                {/* Table */}
                <div className="" style={{ height: '100vh' }}>
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="bg-transparent">
                                <h1 className="profile_title">Your Account</h1>
                            </CardHeader>
                            <CardBody>
                                <div>

                                    <Nav tabs className="nav-tabs-custom ">
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab === "1",
                                                })}
                                                onClick={() => {
                                                    toggleTab("1")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="fas fa-home"></i></span>
                                                <span className="d-none d-sm-block nav-tab-header">Account</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab === "2",
                                                })}
                                                onClick={() => {
                                                    toggleTab("2")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block nav-tab-header">Contact</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab === "3",
                                                })}
                                                onClick={() => {
                                                    toggleTab("3")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block nav-tab-header">Subscriptions</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className={classnames({
                                                    active: activeTab === "4",
                                                })}
                                                onClick={() => {
                                                    toggleTab("4")
                                                }}
                                            >
                                                <span className="d-block d-sm-none"><i
                                                    className="far fa-user"></i></span>
                                                <span className="d-none d-sm-block nav-tab-header">Payments</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <TabContent activeTab={activeTab} className="py-2 text-muted">
                                        <TabPane tabId="1">
                                            <Row>
                                                <Col sm="12">
                                                    <Form>
                                                        <div className="pl-lg-4 mt-2">
                                                            <Row>
                                                                <Col lg="6">
                                                                    <FormGroup>
                                                                        <label
                                                                            className="form-control-label"
                                                                            htmlFor="input-username"
                                                                        >
                                                                            Username
                                                                        </label>
                                                                        <Input
                                                                            className="form-control-alternative"
                                                                            defaultValue="lucky.jesse"
                                                                            id="input-username"
                                                                            placeholder="Username"
                                                                            type="text"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col lg="6">
                                                                    <FormGroup>
                                                                        <label
                                                                            className="form-control-label"
                                                                            htmlFor="input-email"
                                                                        >
                                                                            Email address
                                                                        </label>
                                                                        <Input
                                                                            className="form-control-alternative"
                                                                            id="input-email"
                                                                            placeholder="jesse@example.com"
                                                                            type="email"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                            <Row>
                                                                <Col lg="6">
                                                                    <FormGroup>
                                                                        <label
                                                                            className="form-control-label"
                                                                            htmlFor="input-first-name"
                                                                        >
                                                                            First name
                                                                        </label>
                                                                        <Input
                                                                            className="form-control-alternative"
                                                                            defaultValue="Lucky"
                                                                            id="input-first-name"
                                                                            placeholder="First name"
                                                                            type="text"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                                <Col lg="6">
                                                                    <FormGroup>
                                                                        <label
                                                                            className="form-control-label"
                                                                            htmlFor="input-last-name"
                                                                        >
                                                                            Last name
                                                                        </label>
                                                                        <Input
                                                                            className="form-control-alternative"
                                                                            defaultValue="Jesse"
                                                                            id="input-last-name"
                                                                            placeholder="Last name"
                                                                            type="text"
                                                                        />
                                                                    </FormGroup>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </TabPane>
                                        <TabPane tabId="2" >
                                            <Row>
                                                <Col sm="12">
                                                    <Form>
                                                        <div className="pl-lg-4 mt-2">



                                                <Row>
                                                    <Col md="12">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-address"
                                                            >
                                                                Address
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                                                                id="input-address"
                                                                placeholder="Home Address"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-city"
                                                            >
                                                                City
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue="New York"
                                                                id="input-city"
                                                                placeholder="City"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Country
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                defaultValue="United States"
                                                                id="input-country"
                                                                placeholder="Country"
                                                                type="text"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4">
                                                        <FormGroup>
                                                            <label
                                                                className="form-control-label"
                                                                htmlFor="input-country"
                                                            >
                                                                Postal code
                                                            </label>
                                                            <Input
                                                                className="form-control-alternative"
                                                                id="input-postal-code"
                                                                placeholder="Postal code"
                                                                type="number"
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                        </div>
                                                    </Form>
                                                </Col>
                                            </Row>
                                        </TabPane>

                                    </TabContent>


                                    {/*<Nav tabs>*/}
                                    {/*    <NavItem>*/}
                                    {/*        <NavLink*/}
                                    {/*            className={activeTab === 'account' ? 'active' : ''}*/}
                                    {/*            onClick={() => toggleTab('account')}*/}
                                    {/*        >*/}
                                    {/*            Account*/}
                                    {/*        </NavLink>*/}
                                    {/*    </NavItem>*/}
                                    {/*    <NavItem>*/}
                                    {/*        <NavLink*/}
                                    {/*            className={activeTab === 'profile' ? 'active' : ''}*/}
                                    {/*            onClick={() => toggleTab('profile')}*/}
                                    {/*        >*/}
                                    {/*            Profile*/}
                                    {/*        </NavLink>*/}
                                    {/*    </NavItem>*/}
                                    {/*    <NavItem>*/}
                                    {/*        <NavLink*/}
                                    {/*            className={activeTab === 'subscriptions' ? 'active' : ''}*/}
                                    {/*            onClick={() => toggleTab('subscriptions')}*/}
                                    {/*        >*/}
                                    {/*            Subscriptions*/}
                                    {/*        </NavLink>*/}
                                    {/*    </NavItem>*/}
                                    {/*    <NavItem>*/}
                                    {/*        <NavLink*/}
                                    {/*            className={activeTab === 'payments' ? 'active' : ''}*/}
                                    {/*            onClick={() => toggleTab('payments')}*/}
                                    {/*        >*/}
                                    {/*            Payments*/}
                                    {/*        </NavLink>*/}
                                    {/*    </NavItem>*/}
                                    {/*</Nav>*/}
                                    {/*<TabContent activeTab={activeTab}>*/}
                                    {/*    <TabPane tabId="account">*/}
                                    {/*        <p>Account content goes here.</p>*/}
                                    {/*    </TabPane>*/}
                                    {/*    <TabPane tabId="profile">*/}
                                    {/*        <p>Profile content goes here.</p>*/}
                                    {/*    </TabPane>*/}
                                    {/*    <TabPane tabId="subscriptions">*/}
                                    {/*        <p>Subscriptions content goes here.</p>*/}
                                    {/*    </TabPane>*/}
                                    {/*    <TabPane tabId="payments">*/}
                                    {/*        <p>Payments content goes here.</p>*/}
                                    {/*    </TabPane>*/}
                                    {/*</TabContent>*/}
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </Row>
                </div>
            </Container>
        </>);
};

export default MyAccount;
