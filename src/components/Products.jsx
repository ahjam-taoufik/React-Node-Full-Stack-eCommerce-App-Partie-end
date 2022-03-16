import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import { popularProducts } from '../data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterproducts, setfilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? ` http://localhost:5000/api/products?category=${cat}`
            : 'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch (error) {}
    }; //end function

    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setfilterProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setfilterProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilterProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilterProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);




  console.log('from product component =========================');
  console.log(filterproducts);
  

  return (
    <Container>

      {  cat
        ?filterproducts.map((item) => (<Product item={item} key={item._id} />))  
        :products.slice(0,8).map((item) => (<Product item={item} key={item._id} />))  
      }
     

    </Container>
  );
};

export default Products;
