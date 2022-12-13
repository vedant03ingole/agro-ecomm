import React from 'react'
import { useForm } from "react-hook-form"
import getCommerce from '../lib/commerce'

const Checkout = () => {

    const commerce = getCommerce()

    const { register, handleSubmit } = useForm()
    const onSubmit = data => console.log(data)


    //fetching countries list


    return (
        <div>
            <h1> Checkout</h1>
            <form onSubmit={handleSubmit(data => console.log({...data}))}>
                <input type="text" placeholder='firstname' {...register("firstname", {required: true})} className="forminputs" />
                <input type="text" placeholder='lastname' {...register("lastname", {required: true})} className="forminputs" />
                <input type="text" placeholder='address' {...register("address", {required: true})} className="forminputs" />
                <input type="email" placeholder='email' {...register("email", {required: true})} className="forminputs" />
                <input type="text" placeholder='city' {...register("city", {required: true})} className="forminputs" />
                <input type="number" placeholder='zip' {...register("zip", {required: true})} className="forminputs" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Checkout