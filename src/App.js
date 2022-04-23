import {useState} from "react"
import {
  Categories,
  Collections,
  ContactUs,
  DiscoverCate,
  Features,
  Footer,
  Header,
  Navbar,
  Teams,
  Testimonials,
} from "./components";

const App = () => {
  const [darkMode,setDarkMode]=useState(false)
  return (
    <div className={`${darkMode?"dark":"light"}`}>
      <Navbar />
      <Header />
      <main className="dark:divide-y dark:divide-gray-700">
        <Categories />
        <DiscoverCate />
        <Collections />
        <Teams />
        <Testimonials />
        <ContactUs />
        <Features />
        <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
      </main>
    </div>
  );
};
export default App;
