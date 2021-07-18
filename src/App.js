import React from 'react';

import { Products, Navbar, Cart, ProductPage, Checkout } from './components';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, Link, useLocation} from 'react-router-dom';

const API = "http://805eb1aed13c.ngrok.io/api/";
let booksCount = 0; 

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function GetProducts() {
  let query = useQuery()
  const[products, setProducts] = useState()

  const[cart, setCart] = useState();  

  useEffect(() => {
    async function fetchProducts() {
      let url
      console.log(query.get("category"))
      if (!query.get("category")) {
        url = "http://805eb1aed13c.ngrok.io/api/products"
      } else {
        url = "http://805eb1aed13c.ngrok.io/api/products?category=" + query.get("category")
      }
      let result = await fetch(url);
      result = await result.json();
      setProducts(result);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCart() {
      let result = await fetch("http://805eb1aed13c.ngrok.io/api/cart?id=1");
      result = await result.json();
      booksCount = result[2];
      setCart(result);
    }
    fetchCart();
  }, []);

  const handleOnAddToCart = async (bookID) => {
    let response = await fetch("http://805eb1aed13c.ngrok.io/api/cart/update?id=1&bookss_id=" + bookID + "&bookss_count=1", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify('')
    });
    let result = await response.json()

    booksCount = result[2];
  }

  if (products === undefined) {
    return null;
  }

  if (cart === undefined) {
    return null;
  }

  return (
    <>
      <Navbar booksCount={booksCount}/> 
      <Products cart={cart} products = {query.get("category") ? products[0] : products['data']} OnAddToCart={handleOnAddToCart} />
    </>
  )
}

function GetProductPage() {
  let {id} = useParams();

  const[product, setProduct] = useState();

  const[cart, setCart] = useState();  

  useEffect(() => {
    async function fetchProducts() {
      let result = await fetch("http://805eb1aed13c.ngrok.io/api/products/" + String(id));
      result = await result.json();
      setProduct(result);
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCart() {
      let result = await fetch("http://805eb1aed13c.ngrok.io/api/cart?id=1");
      result = await result.json();
      booksCount = result[2];
      setCart(result);
    }
    fetchCart();
  }, []);

  const handleOnAddToCart = async (bookID) => {
    let response = await fetch("http://805eb1aed13c.ngrok.io/api/cart/update?id=1&bookss_id=" + bookID + "&bookss_count=1", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify('')
    });
    let result = await response.json()

    booksCount = result[2];
  }

  if (product === undefined) {
    return null;
  }

  if (cart === undefined) {
    return null;
  }

  return (
    <>
      <Navbar booksCount={booksCount}/>  
      <ProductPage cart={cart} product = {product['data']} OnAddToCart={handleOnAddToCart}/>
    </>
  );
}

function CartPage() {
  const [cart, setCart] = useState();

  useEffect(() => {
    async function fetchCart() {
      let result = await fetch("http://805eb1aed13c.ngrok.io/api/cart?id=1");
      result = await result.json();
      booksCount = result[2];
      setCart(result);
    }
    fetchCart();
  }, []);

  const handleOnAddToCart = async (bookID) => {
    let response = await fetch("http://805eb1aed13c.ngrok.io/api/cart/update?id=1&bookss_id=" + bookID + "&bookss_count=1", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify('')
    });
    let result = await response.json()

    booksCount = result[2];
  }

  const handleOnDeleteFromCart = async (bookID) => {
    let getResult = await fetch("http://805eb1aed13c.ngrok.io/api/cart?id=1");
    getResult = await getResult.json();
    let books = getResult[0]['products'];
    let response
    for (let i = 0; i < books.length; i++) {
      if ((books[i]['bookss_id'] === bookID)&&(books[i]['bookss_count'] <= 1)) {
        response = await fetch("http://805eb1aed13c.ngrok.io/api/cart/delete?id=1&bookss_id=" + bookID, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify('')
        });
      } else if ((books[i]['bookss_id'] === bookID)&&(books[i]['bookss_count'] > 1)) {
        response = await fetch("http://805eb1aed13c.ngrok.io/api/cart/update?id=1&bookss_id=" + bookID + "&bookss_count=-1", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json;charset=utf-8'
          },
          body: JSON.stringify('')
        });
      }
    }
    let result = await response.json();
    booksCount = result[2];
  }

  if (cart === undefined) {
    return null;
  }

  return(
    <>
      <Navbar booksCount={booksCount}/>
      <Cart cart={cart} OnAddToCart={handleOnAddToCart} OnDeleteFromCart={handleOnDeleteFromCart} booksCount={booksCount}/>
    </>
  )
}

function CheckoutPage() {
  const [cart, setCart] = useState();

  useEffect(() => {
    async function fetchCart() {
      let result = await fetch("http://805eb1aed13c.ngrok.io/api/cart?id=1");
      result = await result.json();
      booksCount = result[2];
      setCart(result);
    }
    fetchCart();
  }, []);

  const handleSubmitInformation = async ( info ) => {
    let response = await fetch("http://805eb1aed13c.ngrok.io/api/cart/submit?order_id=" + 1 +"&name=" + String(info.name) + "&id=" + 1 + "&surname=" + String(info.surname) + "&patronymic=" + String(info.patronymic) + "&telephone=" + String(info.phone)+ "&email=" + String(info.email) + "&address=" + String(info.city) + " " + String(info.street) + " " + String(info.house) + " " + String(info.appartments), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify('')
    });
    let result = await response.json()
  }

  if (cart === undefined) {
    return null;
  }

  return(
    <>
      <Navbar booksCount={booksCount}/>
      <Checkout cart={cart} handleSubmitInformation={handleSubmitInformation}/>
    </>
  )
}

export default function App() {

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <GetProducts />
          </Route>
          <Route exact path="/products/:id">
            <GetProductPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
    </Router>
  );
}