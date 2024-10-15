import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Detail(productId) {
  let navigate = useNavigate()
  const[num,setNum] = useState(0)
  useEffect(()=>{
    console.log(num);
  },[num])//제일 마지막에 동작함(페이지가 리로딩되거나 []안에 있는 변수에 변화가 있을 때 동작)
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${productId}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            onClick={() =>{
              setNum(num + 1);
            }}
          />
          {num < 5 ? <div>지금 주문</div>: null}
        </div>
      </div>
    </div>
  );
  }
  