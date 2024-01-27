import { BASE_URL } from "@env";
// console.log("The base url is:",BASE_URL)
export const sendSmsVerification = async (phoneNumber) => {
    // console.log("The base url is:",BASE_URL)
    // console.log("The phone number is:",phoneNumber)
 try {
   const data = JSON.stringify({
     to: phoneNumber,
     channel: "sms",
   });

   const response = await fetch(`${BASE_URL}/start-verify`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   return json.success;
 } catch (error) {
   console.error(error);
   return false;
 }
};

const checkVerification = async (phoneNumber, code) => {
 try {
   const data = JSON.stringify({
     to: phoneNumber,
     code,
   });

   const response = await fetch(`${BASE_URL}/check-verify`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: data,
   });

   const json = await response.json();
   return json.success;
 } catch (error) {
   console.error(error);
   return false;
 }
};

module.exports = {
 sendSmsVerification,
 checkVerification,
};
