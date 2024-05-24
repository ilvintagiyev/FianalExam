import { useEffect, useState } from "react"
import "./Home.scss"
import { Link } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Home() {
  const [homedata, sethomedata] = useState([])
  const [search, setsearch] = useState('')
  useEffect(() => {
    getallproducts()
  }, [])

  async function getallproducts() {
    const res = await fetch("http://localhost:8585/products")
    const data = await res.json()
    sethomedata(data)
  }

  async function showsort() {
    sethomedata([...homedata.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))])
  }
  
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
    <link rel="icon" type="image/svg+xml" href="https://smallbusiness-production.s3.amazonaws.com/uploads/2017/03/Buying-and-selling-a-business-1568x1045.jpeg" />

      </Helmet>
  </HelmetProvider>
      <div className="section1">
        <h1>Shop With Us</h1><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum at <br /> iure natus, magni impedit?</p>
        <button >SHOPNOW</button>
        <button >CLUBMEMBERSHIP</button>
      </div>


      <div className="section2">
        <div className="text">
        <h4>POPULAR PRODUCTS</h4>
        <h1>OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Nisi corrupti pariatur, ducimus quam obcaecati maiores ullam tenetur sequi omnis, culpa maxime quaerat, eligendi necessitatibus perspiciatis nesciunt  <br /> dolorem deleniti repellat id.</p>
        <br />
        <br />
        <input type="text" placeholder="search" value={search} onChange={(e)=>setsearch(e.target.value)} />
        <button onClick={()=>showsort()}>SORT</button>
        </div>
        <div className="cards">
          {homedata.filter(x => x.name.toLowerCase().includes(search.toLowerCase() ))
          .map((x)=>(
                <div key={x._id} className="card">
                  <img src={x.image} alt="" />
                  <h2>{x.name}</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button>CART</button>
                  <button><Link to={`/Detail/${x._id}`}>Detail</Link></button>
                </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home