import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class RegistrationForm extends React.Component {
  state = {
    users: [],
    user: {
      name: "",
      surname: "",
      email: "",
      password: "",
      birthday: "",
      address: "",
      city: "",
      postalCode: "",
    },
  };

  componentDidMount = async () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/agenda/"
      );
      let users = await response.json();
      console.log(users);
      this.setState({ users });
    } catch (error) {
      console.log(error);
    }
  };

  submituser = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/agenda/",
        {
          method: "POST",
          body: JSON.stringify(this.state.user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Registration successful!");
        this.setState({
          user: {
            name: "",
            surname: "",
            email: "",
            password: "",
            birthday: "",
            address: "",
            city: "",
            postalCode: "",
          },
        });
        this.fetchData();
      } else {
        alert("ERROR!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Row>
        <Col className="mx-auto" xs={6}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              this.submituser();
            }}
          >
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      name: e.target.value,
                    },
                  })
                }
                value={this.state.user.name}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Surname</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      surname: e.target.value,
                    },
                  })
                }
                value={this.state.user.surname}
                type="text"
                placeholder="Enter surname"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      email: e.target.value,
                    },
                  })
                }
                value={this.state.user.email}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      password: e.target.value,
                    },
                  })
                }
                value={this.state.user.password}
                type="text"
                placeholder="Enter password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      birthday: e.target.value,
                    },
                  })
                }
                value={this.state.user.birthday}
                type="datetime-local"
                placeholder="Enter birthday"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      address: e.target.value,
                    },
                  })
                }
                value={this.state.user.address}
                type="text"
                placeholder="Enter address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      city: e.target.value,
                    },
                  })
                }
                value={this.state.user.city}
                type="text"
                placeholder="Enter city"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                onChange={(e) =>
                  this.setState({
                    user: {
                      ...this.state.user,
                      postalCode: e.target.value,
                    },
                  })
                }
                value={this.state.user.postalCode}
                type="number"
                placeholder="Enter postalCode"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default RegistrationForm;
