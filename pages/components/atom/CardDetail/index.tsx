import { Card, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons/lib/icons'
import Link from 'next/link'

type Props = {
    message : []
}

const CardDetail = (props : any) => {
    return(
        <Card className='w-[700px]' >
            <div className='flex justify-between items-center text-xl font-semibold'>
                <div>
                    <p>List :{props.title.list}</p>
                    <p>Quantity:{props.title.quantity}</p>
                </div>
                <div onClick={props.onClick}>
                    <DeleteOutlined />
                </div>
            </div>
        </Card>
    )
}

export default CardDetail;