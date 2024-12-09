import { Outlet } from "react-router-dom";
import Footer from "../Footers/Footer";
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>


            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;