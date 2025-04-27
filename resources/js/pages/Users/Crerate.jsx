import { useForm } from '@inertiajs/react'
import React from 'react'

export default function Crerate() {

    const {post, data, setData, errors, processing} = useForm({
        first_name: '',
        last_name: '',
        name: '',
        country: '',
        email: '',
        password :'',
        type:''
    })

    const handelSubmit = (e) => {
        e.preventDefault();

        post('/users', data)
    }
  return (
    <>
    <div>Crerate</div>
    {processing && <div>Processing...</div>}
        <form onSubmit={handelSubmit}>
            <input type="email" name="email" value={data.email} placeholder='Email' onChange={(e) => setData('email', e.target.value)} />
            {errors.email &&  <p>{errors.email}</p>}
            <input type="text" name="name" value={data.name} placeholder='Name' onChange={(e) => setData('name', e.target.value)} />
            {errors.name &&  <p>{errors.name}</p>}
            <input type="text" name="password" value={data.password} placeholder='Password' onChange={(e) => setData('password', e.target.value)} />
            {errors.password &&  <p>{errors.password}</p>}
            <input type="text" name="type" value={data.type} placeholder='type' onChange={(e) => setData('type', e.target.value)} />
            <input type="text" name="country" value={data.country} placeholder='country' onChange={(e) => setData('country', e.target.value)} />
            <input type="text" name="first_name" value={data.first_name} placeholder='first_name' onChange={(e) => setData('first_name', e.target.value)} />
            {errors.first_name &&  <p>{errors.first_name}</p>}
            <input type="text" name="last_name" value={data.last_name} placeholder='last_name' onChange={(e) => setData('last_name', e.target.value)} />
            <button>Create USer</button>
        </form>
    </>
  )
}
