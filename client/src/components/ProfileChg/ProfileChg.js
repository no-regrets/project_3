import React from 'react';
import { Modal, Button, Input, Container, Row, Col } from 'react-materialize';
import { InputField } from '../Form';

import "./ProfileChg.css";

function ProfileChg(props) {
	// console.log('Profile Props:' + JSON.stringify(props));
	return (
		<Modal className="black white-text"
			header="Profile"
			trigger={<p className="editBtn">Edit</p>}
			actions={
				<Container className="white btnRow">
						<Col s={5}><Button className="black saveBtn" modal="close" onClick={props.onClick}>Save</Button></Col>
						<Col s={5}><Button className="black closeBtn" modal="close">Close</Button></Col>
				</Container>
			}
		>
			<Container className="black">

				<Input className="black" s={12} type="select" label="Select Sex" value={props.state.sex} name="sex" onChange={props.onChange} defaultValue={props.state.sex}>
					<option value="male" onChange={props.onChange}>Male</option>
					<option value="female" onChange={props.onChange}>Female</option>
				</Input>

				<InputField className="black"
					value={props.state.weight}
					onChange={props.onChange}
					name="weight"
					placeholder="Weight (required)"
				/>
			</Container>
		</Modal>
	);
}

export default ProfileChg;
