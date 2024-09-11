import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import CreateListing from "./pages/CreateListing.jsx";
import UpdateListing from "./pages/UpdateListing.jsx";
import Listing from "./pages/Listing.jsx";
import Search from "./pages/Search.jsx";
import Listings from "./pages/Listings.jsx";

// دالة تقوم بإنشاء المسارات
export const createRoutes = () => {
    return [
        {
          route: "/",
          component: <Home />,
          key: "home",
        },
        {
          route: "/sign-in",
          component: <SignIn />,
          key: "sign-in",
        },
        {
          route: "/sign-up",
          component: <SignUp />,
          key: "sign-up",
        },
        {
          route: "/about",
          component: <About />,
          key: "about",
        },
        {
          route: "/listing/:id",
          component: <Listing />,
          key: "listing",
        },
        {
          route: "/search",
          component: <Search />,
          key: "search",
        },
        {
          route: "/listings",
          component: <Listings />,
          key: "listings",
        },
        // مسارات محمية باستخدام PrivetRoute
        {
          route: "/profile",
          component: <Profile />,
          key: "profile",
          private: true, // تعريف بأن هذا المسار محمي
        },
        {
          route: "/create-listing",
          component: <CreateListing />,
          key: "create-listing",
          private: true,
        },
        {
          route: "/update-listing/:id",
          component: <UpdateListing />,
          key: "update-listing",
          private: true,
        },
      ];
}
