import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import API from './../utils/API';
import UserMetaDataForm from './../components/UserMetaDataForm/UserMetaDataForm';
import './Profile.css';

class Profile extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getUserInfo } = this.props.auth;
    if (!userProfile) {
      getUserInfo((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
    API.getSessions()
      .then(res =>
        this.setState({ sessions: res.data, drinkGoal: "", maxBAC: "", budget: "", drink: [] })
      )
      .catch(err => console.log(err));
  }

  handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
  }

  renderTableRows(array) {
    return array.map(session =>
      <tr>
        <td>{session._id}</td>
        {/* {this.renderTableColValues(item, this.cols)} */}
      </tr>
    );
  }

  render() {
    const { profile } = this.state;
    const { sessions } = this.state;
    console.log(sessions);
    // let parsedSessions = JSON.parse(sessions)
    return (
      <div className="container">
        <div className="profile-area">
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
            <br />
            {/* <pre>{JSON.stringify(sessions, null, 2)}</pre> */}
            <div>
              <div className="metaData">
                <UserMetaDataForm />
                <input type='submit' value="Submit" onClick={this.handleSubmit} />
              </div>
            </div>
            <div className="history-area">
              <table>
                <tr>
                  <th>Session ID</th>
                </tr>

                {/* {parsedSessions.map(session => {
                  return (
                    <tr>
                      <td>
                        {session._id}
                      </td>
                    </tr>
                  );
                })} */}
                {/* {this.renderTableRows(sessions)} */}

              </table>

            </div>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
