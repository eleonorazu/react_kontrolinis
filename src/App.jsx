import { NavigationElement } from "./commonComponents/NavigationElement";
import { Route, Routes } from "react-router-dom";
import { FetchBooks } from "./firstPage/FetchBooks";
import { RegistrationForm } from "./secondPage/RegistrationForm";
import { BookReview } from "./ThirdPage/BookReview";


function App() {

  return (
    <>
      <NavigationElement />
      <Routes>
        <Route path="/" element={<FetchBooks />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/bookreview" element={<BookReview />} />
        <Route path="/bookreview/:id" element={<BookReview />} />
      </Routes>
    </>
  );
};

export default App;
