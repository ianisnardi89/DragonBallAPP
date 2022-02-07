import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));
const MenScreen = lazy(() => import("../pages/MenScreen"));
const WomenScreen = lazy(() => import("../pages/WomenScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
        <Routes>
          <Route end path="/men" element={<MenScreen />}></Route>
          <Route end path="/women" element={<WomenScreen />}></Route>
          <Route end path="/search" element={<SearchScreen />}></Route>

          <Route
            end
            path="/character/:id"
            element={<CharacterScreen />}
          ></Route>

          <Route path="*" element={<Navigate to="/men" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppRouter;
