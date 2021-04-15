
export const VerifyPhoneNumber = (phoneNumber: string) => {
  return new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      const onlyNumber = /^\d+$/;
      const valid =
        phoneNumber.match(onlyNumber) &&
        phoneNumber.length >= 9 &&
        phoneNumber.length <= 10;
      if (valid) {
        resolve({ data: phoneNumber });
        alert(`Your OTP for your ${phoneNumber} is: 1369`);
      } else {
        reject("Invalid phone number");
      }
    },2000);
  });
};
