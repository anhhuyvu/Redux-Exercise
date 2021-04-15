
export const VerifyOTP = (otp:string[]) => {
    return new Promise<{data:string}>((resolve,reject) =>{
        setTimeout(() => {
            const your_otp =['1','3','6','9'];
            const valid = otp.length===your_otp.length &&
            otp.every((value,index) => value === your_otp[index]);
            

            if (valid){
                resolve({data:'success'});
            }
            else{
                reject('Invalid OTP');
            }
        },2000)
    });
};