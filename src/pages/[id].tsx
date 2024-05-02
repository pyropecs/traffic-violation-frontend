import { useChallan } from "@/context";
import {Button, Stack} from "@mantine/core"
import "@/styles/challan.module.css"
import { useRouter } from "next/router";
import {useEffect,useState } from "react"
const Challan =()=>{
const [challan,setChallan] = useState<any>({})
const router = useRouter()
const [isLoading,setLoading] = useState(false)
const query = router.query
const ready = router.isReady;
console.log(query.id)

async function getResponse(){
    setLoading(true)
   const response = await fetch(`https://traffic-backend-0p7s.onrender.com/get?challan_id=${query.id}`)
   const {result} = await response.json()
   setLoading(false)
const res = result[0]
   setChallan(res) 
}
useEffect( ()=>{
    if(ready) getResponse()
},[query.id])
if(isLoading ){
    return <>Loading ...</>
}


return(
<Stack justify="center" align="center" py="10px" px="20px" >
    <div style={{width:"50%",border:"2px solid black",alignItems:"center",display:"flex",flexDirection:"column",padding:"10px" }} className="column">

        <div className="d-flex justify-content-between">
            <strong>Invoice {challan.challan_id}</strong>
        </div>
        <div className="d-flex flex-col justify-content-center">
            <h4 className="align-center title">Goverment of country</h4>
        </div>
        <div className="d-flex justify-content-between">
            <div style={{display:"flex",gap:"20px",justifyContent:"space-between"}} >
                <div>Due Date:</div>
                <div>31/05/2024</div>
            </div>
            <div style={{display:"flex",gap:"20px",justifyContent:"space-between"}}>
                <span>Plate Number:</span>
                <span>{challan.plate_number}</span>
            </div>
            <div style={{display:"flex",gap:"20px",justifyContent:"space-between"}}>
              <span>Owner Name: </span>
            <span>{challan.owner_name}</span>
        </div>
        </div>
        <div style={{marginBlock:"10px"}}  className="d-flex flex-col justify-content-center">
            <img height="20vh" src="https://i.ibb.co/c8CQvBq/barcode.png" alt="bar code" style={{width:"200px"}} />
        </div>
        <table>
            <thead>
                <tr>
                <th scope="col left" colSpan={2}>Description</th>
                <th scope="col right">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td data-label="Account" colSpan={2}>{challan.violations}</td>
                <td data-label="Amount">{challan.fine_amount}</td>
                </tr>
            </tbody>
        </table>
        <hr/>
        <div className="d-flex justify-content-between">
            <strong>Payable by due date</strong>
            <span> Rs. {challan.fine_amount}</span>
        </div>
        <hr/>
        <div className="d-flex justify-content-between">
            <strong>Payable after due date</strong>
            <span> Rs.{Number(challan.fine_amount) + 500}</span>
        </div>
        <br/>
        <hr/>
    </div>
            <Button m="10px" type="submit" color="green" radius="xl"  size="sm" >
            Pay
        </Button>   
</Stack>
    )

}



export default Challan;
