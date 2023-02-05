import React from 'react';
import './App.css';

export default class App extends React.Component {

  state = {
    fields: {},
    errors: {}
  }

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;


    if (!fields["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "Cannot be empty";
    }

    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstname"] = "Only letters";
      }
    }

    if (!fields["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "Cannot be empty";
    }

    if (typeof fields["lastname"] !== "undefined") {
      if (!fields["lastname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["lastname"] = "Only letters";
      }
    }

    if (!fields["mobile"]) {
      formIsValid = false;
      errors["mobile"] = "Cannot be empty";
    }

    if (typeof fields["mobile"] !== "undefined") {
      if (!fields["mobile"].match(/^(0|91)?[6-9][0-9]{9}$/)) {
        formIsValid = false;
        errors["mobile"] = "Invalid Phone Number";
      }
    }

    if (!fields["dob"]) {
      formIsValid = false;
      errors["dob"] = "Cannot be empty";
    }

    if (typeof fields["dob"] !== "undefined") {
      if (!fields["dob"].match(/(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/)) {
        formIsValid = false;
        errors["dob"] = "Enter in dd/mm/yyyy format and valid date";
      }
    }

    if (!fields["gender"]) {
      formIsValid = false;
      errors["gender"] = "Please select Gender";
    }


    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf('@');
      let lastDotPos = fields["email"].lastIndexOf('.');

      if (!(lastAtPos < lastDotPos && lastAtPos > 0
        && fields["email"].indexOf('@@') === -1 &&
        lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  }


  handleSubmit = (e) => {
    e.preventDefault();
    if (this.handleValidation())
      alert("form submitted successfully")
  }


  handleUpdate(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }



  render() {
    return (
      <div className="center">
        <div className="contents">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
              type="text"
              placeholder="First Name"
              onChange={this.handleUpdate.bind(this, "firstname")}
              value={this.state.fields["firstname"]}
            />
            <span style={{ color: "red" }}>
              <br />
              {this.state.errors["firstname"]}
            </span>
            <br />

            <input
              type="text"
              placeholder="Last Name"
              onChange={this.handleUpdate.bind(this, "lastname")}
              value={this.state.fields["lastname"]}
            />
            <span style={{ color: "red" }}>
              <br />
              {this.state.errors["lastname"]}
            </span>
            <br />

            <input
              type="select"
              placeholder="Date Of Birth"
              onChange={this.handleUpdate.bind(this, "dob")}
              value={this.state.fields["dob"]}
            />
            <span style={{ color: "red" }}>
              <br />
              {this.state.errors["dob"]}
            </span>
            <br />

            <select name="gender" onChange={this.handleUpdate.bind(this, "gender")}
              value={this.state.fields["gender"]}>
              <option value="">Gender</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
              <option value="Prefer not to answer">
                Prefer not to Answer
              </option>
            </select>
            <span style={{ color: "red" }}>
              <br />
              {this.state.errors["gender"]}
            </span>
            <br />

            <input
              type="text"
              placeholder="Mobile Number"
              onChange={this.handleUpdate.bind(this, "mobile")}
              value={this.state.fields["mobile"]}
            />
            <span style={{ color: "red" }}>
              <br />
              {this.state.errors["mobile"]}
            </span>
            <br />

            <input
              type="text"
              placeholder="Email"
              onChange={this.handleUpdate.bind(this, "email")}
              value={this.state.fields["email"]}
            />
            <span style={{ color: "red" }}>
              <br />
              {this.state.errors["email"]}
            </span>
            <br />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


