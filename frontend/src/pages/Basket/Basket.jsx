import "./Basket.scss"
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Basket() {
  return (
    <>
<HelmetProvider>
      <Helmet>
        <title>Basket</title>
    <link rel="icon" type="image/svg+xml" href="https://smallbusiness-production.s3.amazonaws.com/uploads/2017/03/Buying-and-selling-a-business-1568x1045.jpeg" />

      </Helmet>
  </HelmetProvider>
    </>
  )
}

export default Basket