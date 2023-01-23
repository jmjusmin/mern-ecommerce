import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  HeaderComponent,
  FooterComponent,
  ProtectedRoutesComponent,
  RoutesWithUserChatComponent,
} from "./components";
import {
  CartPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductListPage,
  RegisterPage,
  UserCartDetailsPage,
  UserOrderDetailsPage,
  UserOrderPage,
  UserProfilePage,
  AdminAnalyticsPage,
  AdminChatsPage,
  AdminCreateProductPage,
  AdminEditProductPage,
  AdminEditUserPage,
  AdminOrderDetailsPage,
  AdminOrdersPages,
  AdminProductsPage,
  AdminUserPage,
} from "./pages";

function App() {
  return (
    <Router>
      <HeaderComponent />
      <Routes>
        <Route element={<RoutesWithUserChatComponent />}>
          {/* public pages */}
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={"Page not exist 404"} />
        </Route>

        {/* user pages */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-order" element={<UserOrderPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
        </Route>

        {/* admin pages */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/users" element={<AdminUserPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />
          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPages />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />
          <Route path="/admin/chats" element={<AdminChatsPage />} />
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
        </Route>
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
