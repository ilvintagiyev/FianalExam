import { useEffect, useState } from "react"
import "./Detail.scss"
import { useParams } from "react-router-dom"
function Detail() {
  const {id} = useParams()
  const [detail, setdetail] = useState([])
  useEffect(() => {
    detailshow()
  }, [])

  async function detailshow() {
    const res =await fetch(`http://localhost:8585/products/${id}`)
    const data = await res.json()
    setdetail(data)
  }
  
  return (
    <>
    <table>

      <div className="detail">
        <img src={detail.image} alt="" />
        <h2>{detail.name}</h2>
      </div>
    </table>
    </>
  )
}

export default Detail