import { VerifyOTP } from "../api/verifyOTP";
import { VerifyPhoneNumber } from "../api/verifyPhoneNumber";
const initialState = {
    mobileNumber:"",
    otp:[]
}

const reducer = (state = initialState, action:any) =>{
    switch(action.type){
        case 'VERIFYPHONE_NUMBER': return VerifyPhoneNumber(state.mobileNumber)
        case 'VERIFY_OTP': return VerifyOTP(state.otp)
    }
}

export default reducer;