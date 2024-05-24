import { useEffect, useState } from "react";
import "./Admin.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Admin() {
const [allproducts, setallproducts] = useState([]);
useEffect(() => {
  showallproducts()
}, []);


async function showallproducts() {
  const res =await fetch("http://localhost:8585/products")
  const data = await res.json()
  setallproducts(data)

}

async function deleteproducts(id) {
  const res = await fetch("http://localhost:8585/products/" +id, { method: 'DELETE' })
  const data = await res.json()
  showallproducts(data)
}
  
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Admin</title>
    <link rel="icon" type="image/svg+xml" href="https://smallbusiness-production.s3.amazonaws.com/uploads/2017/03/Buying-and-selling-a-business-1568x1045.jpeg" />

      </Helmet>
  </HelmetProvider>
    <table>
      <thead>
        <tr>
          <th>image</th>
          <th>name</th>
          <th>options</th>
        </tr>
      </thead>
      <tbody>
        {allproducts.map((x)=>(

        <tr key={x._id}>
          <td><img src={x.image} alt="" /></td>
          <td>{x.name}</td>
          <td><button style={{color:"red"}} onClick={()=>deleteproducts(x._id)}>Delete</button></td>
        </tr>
        ))}

      </tbody>

    </table>

    </>
  )
}

export default Admin