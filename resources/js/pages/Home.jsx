import react from "react";
import Layout from "./Layout";

function Home ({name}){
    return (
        <h3>Hello First Page  {name} </h3>
    )
}
Home.layout = page => <Layout children={page} />
export default  Home;
