// Business Logic

function Account(
  firstName,
  lastName,
  initialDepo,
  deposit,
  withdraw,
  currentBalance
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.initialDepo = initialDepo;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.currentBalance = currentBalance;
}
Account.prototype.fullName = function () {
  return this.firstName + " " + this.lastName + " " + this.initialDepo;
};
// UI Logic
$(document).ready(function () {
  $("form#bank-account").submit(function (event) {
    event.preventDefault();
    const firstName = $("input#first-name").val();
    const lastName = $("input#last-name").val();
    const initialDepo = parseInt($("input#initial-deposit").val());
    const deposit = parseInt($("input#deposit").val());
    const withdraw = parseInt($("input#withdraw").val());
    const currentBalance = initialDepo + deposit - withdraw;
    let account = new Account(
      firstName,
      lastName,
      initialDepo,
      deposit,
      withdraw,
      currentBalance
    );
    $("#output").text("Your current Balance:" + account.currentBalance);
  });
});
