import { useParams } from "react-router";
const ProductDetails = () => {
    const params = useParams();
    console.log(params.productId);
    return <section>
        <h1>The Products Detail</h1>
        <p>{params.productId}</p>
    </section>
    
}
export default ProductDetails;