import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Add() {
  async function getAdded(val) {
    const res = await fetch("http://localhost:8585/products",{
      method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(val)
    })
    const data  = await res.json()
    return data
    
  }
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Add</title>
    <link rel="icon" type="image/svg+xml" href="https://smallbusiness-production.s3.amazonaws.com/uploads/2017/03/Buying-and-selling-a-business-1568x1045.jpeg" />

      </Helmet>
  </HelmetProvider>
      <Formik
       initialValues={{ name: '', price: '', image: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         price: Yup.string()
           .required('Required'),
         image: Yup.string().required('Required'),
       })}
       onSubmit={(values) => {
         setTimeout(() => {
           getAdded(values)
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name">Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <label htmlFor="image">Image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <button style={{color:"red"}} type="submit">ADD</button>
       </Form>
     </Formik>
    </>
  )
}

export default Add