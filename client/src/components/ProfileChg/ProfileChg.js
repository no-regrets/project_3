import React  from "react";
import { Modal, Button  } from "react-materialize"


function ProfileChg() {
    return (
        <Modal
            header='Profile'
            trigger={<Button>Edit</Button>}
            actions={<div><Button modal="close">Close</Button><Button>Save</Button></div>} >
            <p>change sex/weight</p>
        </Modal>
    )
}

export default ProfileChg;