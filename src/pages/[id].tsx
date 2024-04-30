import { useChallan } from "@/context";
import {Button, Stack} from "@mantine/core"

const Challan =()=>{
const details = useChallan()
const challan= details.challan;
console.log(challan)
return(
<Stack justify="center" align="center" py="10px" px="20px" >
	<div style={{width:"50%",border:"2px solid black",alignItems:"center",display:"flex",flexDirection:"column" }} className="column">

        <div className="d-flex justify-content-between">
            <strong>Invoice {challan.}</strong>
        </div>
        <div className="d-flex flex-col justify-content-center">
            <h4 className="align-center title">Quran Education Online</h4>
        </div>
        <div className="d-flex justify-content-between">
            <div className="d-flex flex-col">
                <span>Due Date:</span>
                <span>08/09/2022</span>
            </div>
            <div className="d-flex flex-col">
                <span>Account: 75-HBL</span>
                <span>HMC Taxila</span>
            </div>
        </div>
        <div  className="d-flex flex-col justify-content-center">
            <img height="20vh" src="https://i.ibb.co/c8CQvBq/barcode.png" alt="bar code" className="bar-code"/>
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
                <td data-label="Account" colSpan={2}>Electricity-319315001<br/>Consumption</td>
                <td data-label="Amount">500.0</td>
                </tr>
            </tbody>
        </table>
        <hr/>
        <div className="d-flex justify-content-between">
            <strong>Payable by due date</strong>
            <span>Rs. 14,530</span>
        </div>
        <hr/>
        <div className="d-flex justify-content-between">
            <strong>Payable after due date</strong>
            <span>14,580.0</span>
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
