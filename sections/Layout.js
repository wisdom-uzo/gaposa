import { Footer, Navbar } from "../components";

export default function Layout({children}) {
    return (
     <div className=" relative overflow-hidden">
      <Navbar />
        <div className="">
          {children} 
        </div>
       <Footer />
         
    </div>)
}