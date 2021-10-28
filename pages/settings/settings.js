var generateUserTypeOptions = (function () {
  var radioOptions = [
    "YourAccount",
    "SecurityAndAccountAccess",
    "TermsOfUse",
    "PrivacyPolicy",
    "Notifications",
  ];

  customRadio("stationPersonelType", radioOptions, "services");
})();
