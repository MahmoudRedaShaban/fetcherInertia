import React from 'react'
import Layout from "../Layout";
import {   Link, useForm  } from '@inertiajs/react'
import { useRoute } from 'ziggy'

function Show({user}) {
    const {delete: userDelete} = useForm()
    const handelDelete = () => {
        if (confirm('You are delete this users ? ')) {
            userDelete(route('users.destroy', user));
        }
    }

    const route = useRoute();
  return (
    <div>
        <h3>User    Details </h3>
        <div className="text-center bg-grey p-3 shadow-2xl">
            <h5>{user.name}</h5>
            <p>{user.type}</p>
            <p>{user.first_name}</p>
            <p>{user.last_name}</p>
            <p>{user.email}</p>
            <p>{user.country}</p>
        </div>
         <Link href={route('users.edit', user)}>Edit </Link>
         <button onClick={handelDelete}>Delete</button>
    </div>
  )
}

Show.layout = (page) => <Layout children={page} />

export default  Show;
