import { createContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export const MainContext = createContext()

function Basket({children}) {
  const [basket, setbasket] = useState([])
  async function addbasket(item) {
    setbasket([...basket])
    
  }
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Basket</title>
          <link rel="icon" type="image/svg+xml" href="https://smallbusiness-production.s3.amazonaws.com/uploads/2017/03/Buying-and-selling-a-business-1568x1045.jpeg" />
        </Helmet>
      </HelmetProvider>

    <MainContext.Provider value={basket,setbasket,addbasket}>
      {children}
    </MainContext.Provider>
    </>
  )
}

export default Basket