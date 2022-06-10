// Your JS code here

var subTypeElement = document.querySelector("#subscription");

var subDurationElement = document.querySelector("#months");

var result = document.querySelector(".result");

var subType = "basic";

var subDuration = Number(1);

subTypeElement.addEventListener("change", function (e) {
  subType = e.target.value;
  updateSubscriptionDiv();
  // console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
  subDuration = e.target.value;
  updateSubscriptionDiv();
  // console.log(subDuration);
});

var updateSubscriptionDiv = function () {
  var monthlyCost = Number(5);
  if (subType === "standard") {
    monthlyCost = Number(7);
  } else if (subType === "premium") {
    monthlyCost = Number(10);
  }
  var total = subDuration * monthlyCost;
  result.innerText = `You have chosen a ${subDuration} ${subType} plan at a cost of $${total} `;
};
