import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "react-bootstrap"
import { Nav } from "react-bootstrap";
import TabContents from "./components/TabContents";

const dummyProducts = [
  {id: 1, title: "product1", content: "content1", price: 10000},
  {id: 2, title: "product2", content: "content2", price: 20000},
  {id: 3, title: "product3", content: "content3", price: 30000},
  {id: 4, title: "product4", content: "content4", price: 40000}
]

export default function Detail(props) {
  let navigate = useNavigate()
  const[num,setNum] = useState(0);
  const title = "product1"
  let { 탭 } = useContext(Context1);


  localStorage.setItem("savedID", id);
  localStorage.setItem('seenProduct',JSON.stringify)
  
  localStorage.setItem("데이터이름", "데이터")
  let data = localStorage.getItem("savedID");


  useEffect(()=>{
    console.log(num);
  },[num])//제일 마지막에 동작함(페이지가 리로딩되거나 []안에 있는 변수에 변화가 있을 때 동작)
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes1.jpg`}
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
  