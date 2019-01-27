import React from 'react';
import { Modal, Button, Input } from 'react-materialize';
import { InputField, FormBtn } from '../Form';
import DropDown from '../DropDown/DropDown';
import API from '../../utils/API';

function ProfileChg(props) {
	console.log('Profile Props:' + JSON.stringify(props));
	return (
		<Modal
			header="Profile"
			trigger={<Button>Update Stats</Button>}
			actions={
				<div>
					<Button modal="close">Close</Button>
				</div>
			}
		>
			<form>
			
					<Input s={12} type="select" label="Select Sex">
						<option value="1">Male</option>
						<option value="2">Female</option>
					</Input>
				
				<InputField
					value={props.weight}
					onChange={props.handleInputChange}
					name="weight"
					placeholder="Weight (required)"
				/>
				<FormBtn
					// disabled={!(this.state.author && this.state.title)}
					onClick={props.sayHello}
				>
					Save
				</FormBtn>
			</form>
			<button onClick={props.sayHello}>Hello</button>
		</Modal>
	);
}

export default ProfileChg;
