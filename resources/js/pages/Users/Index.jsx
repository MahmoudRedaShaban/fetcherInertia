import { router } from '@inertiajs/react';
import React, { useState } from 'react'

export default function Index({users}) {


  const [firstName, setFirstName]  = useState();
  const [lastName, setLastName]  = useState();
  const [name, setaName]  = useState();
  const [email, setEmail]  = useState();
  const [type, setType]  = useState();
  const [country, setCountry]  = useState();
  const [password, setPassword]  = useState();

  const  handelOnSubmit = (e) => {
        e.preventDefault();
        router.post('/users',{
            first_name: firstName,
            last_name: lastName,
            name,
            type,
            country,
            password,
            email
        })

        setFirstName('')
        setLastName('')
        setCountry('')
        setEmail('')
        setaName('')
        setType('')
        setPassword('')
  }


    return (
    <>


    <div className="card">
        <div className="card-body p-8">
        <form onSubmit={handelOnSubmit} className='w-full items-center'>
        <input className='form-control' type="email"   name="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Email'/> <br/>
        <input className='form-control' type="text"   name="name" value={name} onChange={(e) => setaName(e.target.value)}  placeholder='Name'/><br/>
        <input className='form-control' type="text"   name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}  placeholder='Last anme '/><br/>
        <input className='form-control' type="text"   name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}  placeholder='First Name'/><br/>
        <input className='form-control' type="text"   name="type" value={type} onChange={(e) => setType(e.target.value)}  placeholder='type'/><br/>
        <input className='form-control' type="text"   name="country" value={country} onChange={(e) => setCountry(e.target.value)}  placeholder='Country'/><br/>
        <input className='form-control' type="password"   name="password" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='password'/><br/>
        <button>Create User</button>
    </form>
        </div>
    </div>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <h3>All Users</h3>
    <div className="items-center p-3">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    First NAme
                </th>
                <th scope="col" class="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Type
                </th>
                <th scope="col" class="px-6 py-3">
                        Country
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map(user=> (<tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.first_name}
                </th>
                <td class="px-6 py-4">
                {user.last_name}
                </td>
                <td class="px-6 py-4">
                {user.type}
                </td>
                <td class="px-6 py-4">
                {user.country}
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> |
                    <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</a>
                </td>
            </tr>))}

        </tbody>
    </table>
    </div>
</div>

    </>
  )
}
