var phone = "7079355936";

var code = "+91";
const phoneValidation = (phone, code) => {
  for (var i = 0; i < phone.length; i++) {
    if (i == 0) {
      if (code == "+91" && phone[0] < 6) {
        console.log("phone numbe is not valid");
      } else {
        console.log("phone validation done ");
      }
    }
  }
};
phoneValidation();
