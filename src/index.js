import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./reset.css";

//bootstrap 사용
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

//layout
import CusLayout from "./layout/CusLayout";
import ManagerLayout from "./layout/ManagerLayout";

//page 연결
import NotFound from "./pages/NotFound";

import LoginPage from "./pages/LoginPage";
import LoadingPage from "./pages/LoadingPage";

import CusMainPage from "./pages/cus/CusMainPage";

import ProductListPage from "./pages/cus/product/ProductListPage";
import ProductDetailsPage from "./pages/cus/product/ProductDetailsPage";

import ProductComparePage from "./pages/cus/product/ProductComparePage";

import CusOrderPage from "./pages/cus/CusOrderPage";

import CusAsInputPage from "./pages/cus/as/CusAsInputPage";

import CusTalkPage from "./pages/cus/CusTalkPage";
import CusProductTalkPage from "./pages/cus/CusProductTalkPage";
import CusMyPage from "./pages/cus/mypage/CusMyPage";
import CusMyPageDocs from "./pages/cus/mypage/CusMyPageDocs";

import ConnectPage from "./pages/ConnectPage";

import ManMainPage from "./pages/man/ManMainPage";
import ManCusPage from "./pages/man/cus/CusPage";
import ManAsPage from "./pages/man/as/AsPage";
import ManTalkPage from "./pages/man/talk/TalkPage";

import CallMainPage from "./pages/man/call/CallMainPage"; //통화리스트
import CallMissListPage from "./pages/man/call/CallMissListPage"; //부재중리스트
import CallDetailsPage from "./pages/man/call/CallDetailsPage"; //개별 통화 요약
import CallScriptPage from "./pages/man/call/CallScriptPage"; //개별 통화 스크립트

import CusDetailsPage from "./pages/man/cus/CusDetailsPage"; // 고객 개별 상세페이지

import Home from "./pages/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: "/cus",
    element: <CusLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <CusMainPage /> },

      { path: "product", element: <ProductListPage /> },
      { path: "product/:id", element: <ProductDetailsPage /> },
      { path: "order", element: <CusOrderPage /> },

      { path: "compare", element: <ProductComparePage /> },

      { path: "asinput", element: <CusAsInputPage /> },

      { path: "talk", element: <CusTalkPage /> },
      { path: "producttalk", element: <CusProductTalkPage /> },

      { path: "mypage", element: <CusMyPage /> },
      { path: "mypage/documents", element: <CusMyPageDocs /> },

      { path: "login", element: <LoginPage /> },
      { path: "callback", element: <LoadingPage /> },
      { path: "connect", element: <ConnectPage /> },
    ],
  },
  {
    path: "/manager",
    element: <ManagerLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <ManMainPage /> },
      { path: "cus", element: <ManCusPage /> },
      { path: "cus/:id", element: <CusDetailsPage /> },
      { path: "as", element: <ManAsPage /> },
      { path: "talk", element: <ManTalkPage /> },
      { path: "call", element: <CallMainPage /> },
      { path: "calllist/call/:id", element: <CallDetailsPage /> },
      { path: "call/calllist/:id/script", element: <CallScriptPage /> },
      { path: "callmiss", element: <CallMissListPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
