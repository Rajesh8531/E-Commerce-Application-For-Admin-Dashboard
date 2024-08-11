import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import NavBar from "./components/ui/nav-bar"
import getCategories from "./loaders/get-categories"
import CategoryPage from "./components/pages/category-page"
import StoreHomePage from "./components/pages/store-home-page"
import getFeaturedProductsWithBillboard from "./loaders/get-featured-products-with-billboard"
import getCategoryAndProducts from "./loaders/get-category-and-products"
import ProductPage from "./components/pages/product-page"
import getProductWithRelatedProduct from "./loaders/get-product-with-related-products"
import CartPage from "./components/pages/cart-page"


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<NavBar />} loader={getCategories}>
        <Route index element={<StoreHomePage />} loader={getFeaturedProductsWithBillboard} />
        <Route path="category/" >
          <Route path=":categoryId" element={<CategoryPage />} loader={getCategoryAndProducts} />
        </Route>
        <Route path="product/" >
          <Route path=":productId" element={<ProductPage />} loader={getProductWithRelatedProduct} />
        </Route>
        <Route path="cart" element={<CartPage />} />
      </Route>
    </>
  ))


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
