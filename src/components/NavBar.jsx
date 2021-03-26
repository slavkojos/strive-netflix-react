import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import React from "react";

class NavBar extends React.Component {
  state = {
    input: "",
  };
  handleSearch = (e) => {
    // console.log(e.target.value);
    this.setState({ ...this.state.input });
    // console.log(this.state.input, "is my input");
    e.target.value === "" && this.search(this.state.input);
  };
  search = async (input) => {
    let url = "http://www.omdbapi.com/?apikey=3e47b3c0&s=";
    try {
      let response = await fetch({ url } + input);
      console.log(response);
      let data = await response.json();
      console.log(data);
      response.ok ? console.log("response ok") : alert("an error occured");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="../../public/index.html">
            {this.props.title}
          </Navbar.Brand>
          <Nav className="mr-auto">
            {this.props.links.map((link) => (
              <Nav.Link key={link} href={"#" + link.toLowerCase()}>
                {link}
              </Nav.Link>
            ))}
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              onChange={this.handleSearch}
              //   value={this.state.input}
            />
          </Form>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
