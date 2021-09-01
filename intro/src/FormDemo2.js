import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";

export default class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };

  handlerChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({ [name]: value });
  };

  handlerSubmit = (event) => {
    event.preventDefault();
    alertify.success(this.state.email + " added to Database");
    alertify.success(this.state.password + " added to Database");
    alertify.success(this.state.description + " added to Database");
    alertify.success(this.state.city + " added to Database");
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handlerSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.handlerChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Enter Description"
              onChange={this.handlerChange}
            />
          </FormGroup>
        <FormGroup>
            <Label for="city">City</Label>
            <Input type="select" id="city" name="city" onChange={this.handlerChange}>
                <option>Malatya</option>
                <option>İstanbul</option>
                <option>Edirne</option>
                <option>Gaziantep</option>
                <option>Trabzon</option>
                <option>İzmir</option>
                <option>Ankara</option>
                </Input>
        </FormGroup>
        <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
