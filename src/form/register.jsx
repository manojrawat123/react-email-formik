import React, { useState } from 'react';
import * as yup from "yup";
import { Field, Formik, Form, ErrorMessage } from 'formik';
import CustomErrorMessage from "./CustomErrorMessage";

const validationSchema = yup.object({
    phone: yup.string()
    .matches(/^[0-9]{10}$/, 'Invalid Phone Number').required("This Field is required"),
    dob:yup.date()
    .required('Date of Birth is required')
    .max(new Date(), 'Date of Birth cannot be in the future')
    .test('valid-date-of-birth', 'Invalid Date of Birth', function (value) {
      const { path, createError } = this;
      const selectedDate = new Date(value);
      const currentDate = new Date();
      const minDate = new Date();
      minDate.setFullYear(currentDate.getFullYear() - 100); // Minimum age of 100 years
  
      if (selectedDate < minDate) {
        return createError({ path, message: 'You must be at least 100 years old' });
      }
  
      return true;
    }),
    course: yup.string().required("This Field is required")
  
  });




const Register = () => {
    const [photoName, setPhotoName] = useState()
  const [ photo, setPhoto] = useState()
  const [qCertificate, setqCertificate] = useState();
  const [qCertificateName, setqCertificateName] = useState();
  return (
    <>


 
    
      <div className="bg-orange-100 ">

<div className="h-[50px] text-3xl py-2 text-center bg-green-600 text-white sticky top-0">
    Registration Form
</div>
        
        <Formik 
        initialValues={{name: "", phone: "", email:"",mname: "", fname:"", dob:"",idNum:"", id:"",lastQualification:"",lastQualificationCertificate:"", photo:"" , debug:"", course:""    }}
        validationSchema={validationSchema}
        onSubmit={(value)=>{
          console.log(value)
          const config = { 
            Host : "smtp.elasticemail.com",
            Username : "your_username",
            Password : "your_password",
            To : 'munna.bahimbbs.123456789@gmail.com',
            From : `positive.mind.123456789@gmail.com`,
            Subject : "Customer Mail Alert!!",
            Body :`Name: ${value.name} <br> <br/>
            Phone Number: ${value.phone} <br><br/>
            Email: ${value.email} <br><br/>
            Mother Name: ${value.mname} <br><br/>
            Father Name: ${value.fname} <br> <br/>
            Date Of Birth: ${value.dob} <br> <br/>
            Id: ${value.id} <br><br/>
            Id Number: ${value.idNum} <br><br/>
            Last Qualification: ${value.lastQualification} <br><br/>
            Course: ${value.course} <br><br/>`,
          Attachments : [
            {
              name : `${photoName}`,
              data : `${photo}`
            },
          {
            name: `${qCertificateName}`,
            data: `${qCertificate}`
          }]
          }
          if (window.Email){
            window.Email.send(config).then((message)=>{
              console.log(message);
              if (message=== "OK"){
                alert("Mail Sent Sucessfully!!")
                // setSuccess("Message Send Sucessfully!!!")
              }
              
            }).catch((error)=>{
              console.log(error)
              alert("No Internet Connection!!")
            });
          }
        }}>
          <div className='flex justify-center '>
          <Form className='mx-auto py-4 border-4 border-gray-500 my-4 rounded-xl md:w-[50vw] sm:[75vw] w-[90vw] bg-gray-100'>
            {/* Name Field */}
            <label className='mx-[2%]'>Name:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="text" name="name"/><br /><br />
            <ErrorMessage name="name" component="div" />
            {/* Phone Field */}
            <label className='mx-[2%]'>Phone:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="number" name="phone"/><br />
            <CustomErrorMessage name="phone" /><br />

            {/* Email */}
            <label className='mx-[2%]'>Email:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="email" name="email"/><br /><br />
            
            {/* Father Name */}
            <label className='mx-[2%]'>Father Name:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="text" name="fname"/><br /><br />
            
            {/* Mother Name */}
            <label className='mx-[2%]'>Mother Name:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="text" name="mname"/><br /><br />
            
            {/* Date Of Birth */}
            <label className='mx-[2%]'>dob:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="date" name="dob"/><br /><br />
            
            {/* ID Number */}
            <label className='mx-[2%]'>Id No:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="text" name="idNum"/><br /><br />
            
            {/* Id */}
            <label className='mx-[2%]'>Id:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="text" name="id"/><br /><br />
            
            {/* Course */}
            <label className='mx-[2%]'>Course:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' as="select" name="course">
                <option value=''>------Select One Option ------</option>
                <option value="webDevlopment">Web Devlopment</option>
                <option value="App Devlopment">App Devlopment</option>
                <option value="Anroid Devlopment">Anroid Devlopment</option>
                <option value="Java">Java</option>
            </Field><br /><br />

            {/* Last Qualification */}
            <label className='mx-[2%]'>Last Qualification:</label> <br />
            <Field required className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' type="text" name="lastQualification"/><br /><br />
            
            <label className='mx-[2%]'>Last Qualification Certificate:</label> <br />
            <input 
              type="file" required 
              className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem]' name='lastqualificationcertificate'
              onChange={(event)=>{
              const file = event.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload=()=>{
              const base64 = reader.result.split(",")[1];
              setqCertificate(base64);}
              setqCertificateName(file.name)
        }} />
        <br /><br />

        {/* Upload Photo */}
            <label className='mx-[2%]'>Photo:</label> <br />
            <input 
        type="file"  required name='photo' 
        onChange={(event)=>{          
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.readAsDataURL(file)
          reader.onload = () => {
            const base64 = reader.result.split(",")[1];
            setPhoto(base64);
          };
          const fileName = file.name;
          const filePath = URL.createObjectURL(file);
          setPhotoName(fileName)
          setPhoto(filePath)
            
        }}
        className='w-[95%] mx-[2%] border border-solid border-gray-700 rounded outline-1 outline-green-500 h-[2rem] ' 
        />
        {/* Upload Photo End */}

        {/* Button  */}
        <div className='text-center mb-6'>
        <button type='submit'
          className='border border-solid border-blue-500 bg-transparent text-blue-700 font-semibold hover:bg-blue-500 hover:border-transparent hover:text-white py-2 px-4 rounded'>Submit</button>
        </div>
        {/* End */}
          </Form> 

          </div> 
        </Formik>
        </div>
    </>
  )
}

export default Register