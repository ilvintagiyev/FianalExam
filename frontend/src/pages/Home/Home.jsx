import {  useEffect, useState } from "react"
import "./Home.scss"
import { Link } from "react-router-dom"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Home() {
  // const {basket} = useContext()
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam <br /> assumenda ea quo cupiditate facere deleniti fuga officia.</p>
        <div className="buttons">
        <button className="basket"><p>SHOP NOW</p></button>
        <button className="clumber" >CLUB MEMBERSHIP</button>
        </div>
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
                 <div>
                 <button >Basket</button>
                  <button><Link to={`/Detail/${x._id}`}>Detail</Link></button>
                 </div>
                  <FavoriteBorderIcon></FavoriteBorderIcon>

                </div>
          ))}
        </div>
      </div>

<br />
<br />
<br />
<br />


      <div className="section3">
       <div className="allred">
       <div className="image">
             <img src="https://preview.colorlib.com/theme/selling/images/about_1.jpg.webp" alt="" />
        </div>
        <div className="texts">
          <h4>MERCHANT COMPANY </h4>
          <h1>About Us</h1>
          <p>Lorem ipsum dolor <br /> sit amet consectetur <br /> adipisicing elit. Quo aspernatur <br /> accusantium excepturi placeat ullam, error <br /> sed minima quas incidunt dolorum suscipit <br /> eaque repudiandae nostrum repellat <br /> impedit quibusdam, voluptatum <br /> asperiores odit.</p>
          <button style={{backgroundColor:"black", color:"white"}}>LEARN MORE</button>
        </div>
       </div>
      </div>



      <div className="section4">
        <div className="texts2">
           <h4>TEAM</h4>
           <h1>Leadership</h1>
        </div>
        <div className="allimages"></div>
        <div className="images1">
          <img src="https://preview.colorlib.com/theme/selling/images/person_2.jpg.webp" alt="" />
          <p>John Rooster</p>
          <span>CO-FOUNDER, PRESIDENT</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vel commodi eligendi laboriosam totam odio nisi pariatur voluptate, numquam corporis inventore dignissimos obcaecati molestiae beatae velit ut repudiandae minima ducimus.</p>
           <FacebookIcon></FacebookIcon>
           <TwitterIcon></TwitterIcon>
           <LinkedInIcon></LinkedInIcon>
           <InstagramIcon></InstagramIcon>

        </div>
        
        <div className="images2">
          <img src="https://preview.colorlib.com/theme/selling/images/person_3.jpg.webp" alt="" />
          <p>Tom-Sharp</p>
          <span>CO-FOUNDER, COO</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vel commodi eligendi laboriosam totam odio nisi pariatur voluptate, numquam corporis inventore dignissimos obcaecati molestiae beatae velit ut repudiandae minima ducimus.</p>
          <FacebookIcon></FacebookIcon>
           <TwitterIcon></TwitterIcon>
           <LinkedInIcon></LinkedInIcon>
           <InstagramIcon></InstagramIcon>
          
        </div>
        <div className="images3">
          <img src="https://preview.colorlib.com/theme/selling/images/person_4.jpg.webp" alt="" />
          <p>Winston-Hodson</p>
          <span>MARKETING</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore vel commodi eligendi laboriosam totam odio nisi pariatur voluptate, numquam corporis inventore dignissimos obcaecati molestiae beatae velit ut repudiandae minima ducimus.</p>
          <FacebookIcon></FacebookIcon>
           <TwitterIcon></TwitterIcon>
           <LinkedInIcon></LinkedInIcon>
           <InstagramIcon></InstagramIcon>
        </div>
      </div>




      <div className="section5">
        <div className="aboutus">
           <h3>ABOUT US</h3>
           <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Neque <br /> facere laudantium magnam <br /> voluptatum autem. Amet aliquid <br /> nesciunt veritatis aliquam.</p>
        </div>
        <div className="quicklinks">
           <h3>QUICK LINKS</h3>
        </div>
        <div className="followus">
           <h3>FOLLOW US</h3>
           <FacebookIcon></FacebookIcon>
           <TwitterIcon></TwitterIcon>
           <LinkedInIcon></LinkedInIcon>
           <InstagramIcon></InstagramIcon>
        </div>
        <div className="featuredproduct">
           <h3>FEATURED PRODUCT</h3>
           <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
           <p>Leather Brown Shoe</p>
           <p>$60.00</p>
           <button  style={{backgroundColor:"black", color:"white"}}>ADD TO CARD</button>
           
        </div>
      </div>
    </>
  )
}

export default Home