import { Card, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons/lib/icons'
import Link from 'next/link'

const CardDetail = (props : any) => {
    return(
        <Card className='w-[700px]' >
            <div className='flex justify-between items-center text-xl font-semibold'>
                <p>Makan Siang</p>
                <DeleteOutlined />
            </div>
        </Card>
    )
}

export default CardDetail;