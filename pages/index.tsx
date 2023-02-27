import Head from 'next/head'
import Navbar from './../components/organ/Navbar/index'
import Button from './../components/atom/Button/index'
import Link from 'next/link'
import Image from 'next/image'
import foto from './assets/foto.png'
import CardPrimary from './../components/atom/Card'
import { RootContext } from './../components/reducer'
import { useContext, useState } from 'react'
import { Modal, Input } from 'antd'
import { ActionType } from './../components/reducer'

export default function Home() {

  const contex = useContext(RootContext)
  const {dispatch, state} = contex
  const [nama, setNama] = useState('')
  const [open, setOpen] = useState(false)
  const message = {
    id:Math.random(),
    title : nama,
    message : []
  }

  const handleDeleteGroup = (props : string) => {
    dispatch({type:ActionType.DELETE_GROUP, payload:props })
    localStorage.setItem('state', JSON.stringify(state))
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const handleOk = () => {
    dispatch({type:ActionType.ADD_GROUP, payload: message})
    setOpen(false);
    setNama('')
    localStorage.setItem('state', JSON.stringify(state))
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className='mx-36 pt-10 flex justify-between'>
          <h1 className='text-3xl font-semibold '>Actifity</h1>
          <Button
            onClick={handleOpen}
            className = 'text-lg font-semibold'
          >
            Tambah
          </Button>
        </div>
        <div className='flex justify-center gap-4 mx-36 flex-wrap mt-10'>
          {state.items[0]? 
          state.items.map((item, index) => 
          <div key={index}>
            <CardPrimary
              title = {item?.title}
              onClick = {()=> handleDeleteGroup(item.id)}
              body = {item?.message[0]?.list ? item.message[0].list : null}
              id = {item?.id}
            />
          </div> ) : 
          <Link href='/' onClick={handleOpen} >
            <Image src={foto} alt = 'home' width={500} />
          </Link>}
        </div>
        <Modal
            title = 'Add Group'
            open ={open}
            onCancel ={handleCancel} 
            onOk={handleOk}
        >
            <div>
                <p>Group Belanjaan</p>
                <Input
                    placeholder="Exp : Ulang Tahun"
                    size="large"
                    onChange={(e:any) =>  setNama(e.target.value)}
                    value = {nama}
                />
            </div>
        </Modal>
      </main>
    </>
  )
}
