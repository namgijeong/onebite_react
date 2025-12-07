import { useSearchParams } from "react-router-dom";

const Home = () => {
    //쿼리스트링 데이터를 받아오는법
    const [params, setParams] = useSearchParams();
    console.log(params.get("value"));
    
    return <div>Home</div>
}

export default Home;