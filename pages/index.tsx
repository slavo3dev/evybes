import type { InferGetServerSidePropsType } from 'next'
import { loadAllProducts } from "../framework/shopify/product/loadAllProducts"


export async function getStaticProps() {
  const products = await loadAllProducts()
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

const Home = ( { products }: InferGetServerSidePropsType<typeof getStaticProps> ) =>
{
  
  console.log(products)
  return (
    <div>
      <h1>Kode Rag Shop</h1>
      { JSON.stringify(products) }
    </div>
  )
}

export default Home
