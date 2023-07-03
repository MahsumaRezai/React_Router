import {useParams} from  'react-router-dom'
const Proudectdel=()=>{
    const params=useParams();
    console.log(params.productId)

    return (
        <section >
            <h3>information</h3>
            <p>{params.productId}</p>
        </section>
    )
}
export default Proudectdel;