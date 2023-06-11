import React from 'react';
import { ErrorMessage } from 'formik'

const CustomErrorMessage = ({ name }) => {
  return (
    <span className='text-red-500 mx-[2%]'>
        <ErrorMessage name="phone" component="span" />
    </span>
  )
}

export default CustomErrorMessage
