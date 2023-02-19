import { Card, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { DeleteOutlined } from '@ant-design/icons/lib/icons'
import Link from 'next/link'
import Button from '../Button'

const CardPrimary = (props : any) => {
    return(
        <Card 
            title={props.title} 
            extra={<Link href="/detail"><EditOutlined /></Link>} 
            style={{ width: 300 }}
          >
            <p>{props.body}</p>
            <p>...</p>
            <div className='flex justify-end'>
              <Button
                onClick={props.onClick}
              >
                <DeleteOutlined />
              </Button>
            </div>
          </Card>
    )
}

export default CardPrimary;