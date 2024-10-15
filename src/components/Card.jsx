import { useNavigate } from "react-router-dom";

export default function Card({productId, title, content, price})
{
  let navigate = useNavigate()
  // console.log(product)
    return(
    //<div className="col-md-4" onClick={()=>{navigate('/detail/${props.product.id}');}}>
    <div className="col-md-4" onClick={()=>{navigate(`/detail/${productId}`);}}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${productId}.jpg`}
              width="80%"
            />

            <font color = "White">
              <h2>{title}</h2>
              <h4>{content}</h4>
              <p>{price}</p>
            </font>
          </div>
    )
}