import React from 'react';
import WeightInput from './../../components/WeightInput/WeightInput';
import SexDropdown from './../../components/SexDropdown/SexDropdown';

class UserMetaDataForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A form was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <WeightInput />
          <SexDropdown />
        </form>
      );
    }
  }

  export default UserMetaDataForm;