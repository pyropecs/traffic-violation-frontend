import { useChallan } from "@/context"
import {Stack,Text,Center,TextInput,Button} from "@mantine/core"
import {useState,useEffect} from "react"
import { useRouter } from "next/router"
const GetChallanDetails = ()=>{
const [challan,setChallan] = useState("")
// useEffect(()=>{
const details = useChallan()
const router = useRouter()

// },[])
return(
	<Stack w="100%" px="20px"  c="white"  h="40vh" gap="2px" style={{borderRadius:"24px",border:"2px solid black"}}>
		<Stack py="10px" px="10px" justify="center" align="center" gap="5px" w="100%" c="black">

			
		
			<Text ta="center" fz="24px" ff="Roboto" fw="500">Challan Details</Text>
			<Text fz="16px" ta="center" ff="Roboto" fw="400">After getting challan details you can further go online payment</Text>
		</Stack>
		<form onSubmit={async (e)=>{
			e.preventDefault()
		const response = await fetch(`http://localhost:3001/get?challan_id=${challan}`,{

		})
		const {result} = await response.json()
		const res = result[0]
		details.setChallan(res)
		router.push(`/${challan}`)
		}}>
		<TextInput onChange={(e)=>setChallan(e.target.value)} px="10px" name="challan" py="10px" label="enter the challan number" placeholder="Enter challen number" 
		styles={{
			label:{
				color:"black",
				textTransform:"capitalize",
				paddingBlock:"10px"
			}
		}}
		/>	
		<Center>
		<Button m="10px" type="submit" color="green" radius="xl"  size="sm" >
			Get Detail
		</Button>	
		</Center>				
		
		</form>


	</Stack>
	)


}


export default GetChallanDetails;
