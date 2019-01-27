import React from 'react';
import { Modal, Button, Input } from 'react-materialize';
import { InputField } from '../Form';

function ProfileChg(props) {
	// console.log('Profile Props:' + JSON.stringify(props));
	return (
		<Modal
			header="Profile"
			trigger={<Button>Update Stats</Button>}
			actions={
				<div>
					<Button modal="close">Close</Button>
                    <Button modal="close" onClick={props.onClick}>Save</Button>
				</div>
			}
		>
			<form>
			
			<Input s={12} type="select" label="Select Sex" value={props.state.sex} name="sex" onChange={props.onChange} defaultValue={props.state.sex}>
					<option value="male" onChange={props.onChange}>Male</option>
					<option value="female" onChange={props.onChange}>Female</option>
			</Input>
				
				<InputField
					value={props.state.weight}
					onChange={props.onChange}
					name="weight"
					placeholder="Weight (required)"
				/>
			</form>
		</Modal>
	);
}

export default ProfileChg;
