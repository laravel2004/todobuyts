import { Modal, Input } from "antd";
import React, { useState } from "react";

const ModalItem = (props : any) => {

    const [list, setList] = useState('');
    const [quantity, setQuantity] = useState('')

    return(
        <Modal
            title = 'Add Group'
            open ={props.open}
            onCancel ={props.cancel} 
            onOk={props.Ok}
        >
            <div>
                <p>Group List</p>
                <Input
                    placeholder="Exp : Beli Kado"
                    size="large"
                    onChange={(e) =>  setList(e.target.value)}
                />
                <Input
                    placeholder="1xxxxx"
                    size="large"
                    onChange={(e) =>  setQuantity(e.target.value)}
                />
            </div>
        </Modal>
    )
}

export default ModalItem;