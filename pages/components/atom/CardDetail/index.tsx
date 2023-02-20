import { Card } from 'antd'
import { DeleteOutlined } from '@ant-design/icons/lib/icons'

type Props ={
    title : Title
    onClick : any
}

type Title = {
    list : string;
    quantity : string;
}

const CardDetail = (props : Props) => {
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