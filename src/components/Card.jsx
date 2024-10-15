import { useNavigate } from "react-router-dom";

export default function Card({productId, content, price})
{
  let navigate = useNavigate()
  // console.log(product)
    return(
    //<div className="col-md-4" onClick={()=>{navigate('/detail/${props.product.id}');}}>
    <div className="col-md-4" onClick={()=>{navigate(`/detail/${productId}`);}}>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />

            <font color = "White">
              <h4>{content}</h4>
              <p>{price}</p>
            </font>
          </div>
    )
}