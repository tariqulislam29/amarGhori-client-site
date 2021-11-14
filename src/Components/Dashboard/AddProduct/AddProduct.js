import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddProduct.css'
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-springs-86113.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();


                }
            })
    }
    return (
        <div className="add-details">

            <div className="add-selects">
                <h2 className="text-center"> Add Product </h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="col  my-3">
                        <input className="input-field1 input-field2"  {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                    </div>
                    <div className="col  my-3">
                        <textarea className="input-field1" rows="4" cols="50" {...register("description")} placeholder="Description" />
                    </div>

                    <div className="col my-3">
                        <input type="number" className="input-field1 input-field2"  {...register("price")} placeholder="price" />
                    </div>
                    <div className="col  my-3">
                        <input className="input-field1 input-field2" {...register("img")} placeholder="image url" />
                    </div>

                    <input type="submit" className="input-btn" />
                </form>




            </div>

        </div>
    );
};

export default AddProduct;