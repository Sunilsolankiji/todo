import React, { Suspense } from "react";
import { RouteObject, Navigate } from "react-router-dom";
import { useLocation, useRoutes } from "react-router-dom";
// import { AuthGuard, AuthProvider, AdminGuard } from "../authGuard/AuthGuard";

const Auth = React.lazy(() => import("../pages/auth/Auth"));
const Login = React.lazy(() => import("../pages/auth/login/Login"));
const SignUp = React.lazy(() => import("../pages/auth/signUp/SignUp"));
const ForgotPassword = React.lazy(
  () => import("../pages/auth/forgotPassword/ForgotPassword")
);
const SignUpSuccess = React.lazy(
  () => import("../pages/auth/signUpSuccess/SignUpSuccess")
);
const Loader = React.lazy(() => import("../components/loader/Loader"));

const LayoutComponent = React.lazy(() => import("../pages/layout/Layout"));
const HomeComponent = React.lazy(() => import("../pages/home/Home"));
const TodoComponent = React.lazy(() => import("../pages/todo/Todo"));
const EditTodoComponent = React.lazy(() => import("../pages/edit-todo/EditTodo"));
const AddTodoComponent = React.lazy(() => import("../pages/add-todo/AddTodo"));

const UserProfileComponent = React.lazy(
  () => import("../pages/userProfile/UserProfile")
);

const PageNotFound = React.lazy(
  () => import("../pages/pageNotFound/PageNotFound")
);

const GetRoutes = () => {
  let routes: RouteObject[] = [
    {
      path: "auth",
      element: <Auth />,
      children: [
        { path: "", element: <Navigate to={"login"} /> },
        {
          path: "login",
          element: (
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "sign-up",
          element: (
            <Suspense fallback={<Loader />}>
              <SignUp />
            </Suspense>
          ),
        },
        {
          path: "forgot-password",
          element: (
            <Suspense fallback={<Loader />}>
              <ForgotPassword />
            </Suspense>
          ),
        },
        {
          path: "sign-up-success",
          element: <SignUpSuccess />,
        },
      ],
    },
    {
      path: "",
      element: (
        <Suspense fallback={<Loader />}>
          <LayoutComponent />
        </Suspense>
      ),
      children: [
        { path: "", element: <Navigate to={"/home"} /> },
        {
          path: "/home",
          element: (
            <Suspense fallback={<Loader />}>
              <HomeComponent />
            </Suspense>
          ),
        },
        {
          path: "/todo/:todoId",
          element: (
            <Suspense fallback={<Loader />}>
              <TodoComponent />
            </Suspense>
          ),
        },
        {
          path: "/edit-todo/:todoId",
          element: (
            <Suspense fallback={<Loader />}>
              <EditTodoComponent />
            </Suspense>
          ),
        },
        {
          path: "/add-todo",
          element: (
            <Suspense fallback={<Loader />}>
              <AddTodoComponent />
            </Suspense>
          ),
        },
        {
          path: "/user/profile",
          element: <UserProfileComponent />,
        },
      ],
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Loader />}>
          <PageNotFound />
        </Suspense>
      ),
    },
  ];
  return useRoutes(routes);
};

const Routing: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <GetRoutes />
      </Suspense>
    </>
  );
};

export default Routing;
