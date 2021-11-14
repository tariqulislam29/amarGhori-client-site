import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Reviews = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://thawing-springs-86113.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();


                }
            })
    }
    return (
        <div>
            <div className="add-details">

                <div className="add-selects">
                    <h2 className="text-center"> Add Review </h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col  my-3">
                            <input className="input-field1 input-field2" value={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                        </div>
                        <div className="col  my-3">
                            <textarea className="input-field1" rows="4" cols="50" {...register("review")} placeholder="Review" />
                        </div>

                        <div className="col my-3">
                            <input type="number" className="input-field1 input-field2"  {...register("rating")} placeholder="Rating" />
                        </div>

                        <input type="submit" className="input-btn" />
                    </form>




                </div>

            </div>
        </div>
    );
};

export default Reviews;