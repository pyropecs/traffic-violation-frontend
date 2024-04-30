
import {useContext,createContext, useState,Dispatch,SetStateAction} from "react"

const ChallanContext = createContext<any>({})

export const ChallanProvider = ({children}:{children:React.ReactNode})=>{
const [challan,setChallan] = useState({})

return(
<ChallanContext.Provider value={{
	challan,setChallan
}} >
	{children}
</ChallanContext.Provider>
	)

}

export const useChallan = ()=> useContext(ChallanContext)
