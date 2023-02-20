import { Input, Modal } from "antd";
import React, { useState } from "react";

const ModalsGroup = (props:any) => {

    const [nama, setNama] = useState('')
    return (
        <Modal
            title = 'Add Group'
            open ={props.open}
            onCancel ={props.cancel} 
            onOk={props.Ok}
        >
            <div>
                <p>Group Belanjaan</p>
                <Input
                    placeholder="Exp : Ulang Tahun"
                    size="large"
                    onChange={(e) =>  setNama(e.target.value)}
                />
            </div>
        </Modal>
    )
}

export default ModalsGroup