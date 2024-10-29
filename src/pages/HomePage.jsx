import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const dummyProducts = [
    {id: 1, title: "product1", content: "content1", price: 10000},
    {id: 2, title: "product2", content: "content2", price: 20000},
    {id: 3, title: "product3", content: "content3", price: 30000},
    {id: 4, title: "product4", content: "content4", price: 40000}
]
export default function HomePage(){
    const [products,setProducts] = useState(dummyProducts)
    let navigate = useNavigate();

    return(    
    <body>
        {products.map((product) => (<Card productId={product.id} title = {product.title} content={product.content} price={product.price}/>))}
    </body>)
}