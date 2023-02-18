function initializeWidget() {
  ZOHO.embeddedApp.on("PageLoad", function (data) {
    console.log(data);
    ZOHO.CRM.API.getAllRecords({
      Entity: "Contacts",
      sort_order: "desc",
      per_page: 1,
      page: 1,
    }).then(function (data) {
      try {
        var firstName = data.data[0].First_Name;
        var lastName = data.data[0].Last_Name;
        var email = data.data[0].Email;
        var phone = data.data[0].Phone;
        var regOrgName = data.data[0].Company;
        var street = data.data[0].Mailing_Street;
        var city = data.data[0].Mailing_City;
        var state = data.data[0].Mailing_State;
        var postcode = data.data[0].Mailing_Zip;
        var country = data.data[0].Mailing_Country;
        var title = data.data[0].Title;
        var f = document.createElement("iframe");
        var placeholder = (value) => (value ? value : "");
        var dataString = `firstName=${placeholder(
          firstName
        )}&lastName=${placeholder(lastName)}&bilContactName=${placeholder(
          firstName + " " + lastName
        )}&email=${placeholder(email)}&bilContactEmail=${placeholder(
          email
        )}&phone=${placeholder(phone)}&regOrgName=${placeholder(
          regOrgName
        )}&street=${placeholder(street)}&city=${placeholder(
          city
        )}&state=${placeholder(state)}&postcode=${placeholder(
          postcode
        )}&country=${placeholder(country)}&bilContactDesignation=${placeholder(
          title
        )}`;
        var url = `https://zfrmz.com/BknPlM3TBcsWtDn6Y4lN?${dataString}`;
        f.src = url;
        f.style.border = "none";
        f.style.height = "100%";
        f.style.width = "100%";
        f.style.transition = "all 0.5s ease";
        var d = document.getElementById(
          "zf_div_YScGpndCwUhuSJa4_ojEh2O8lmKthmabrzfU-2NAe1M"
        );
        d.appendChild(f);
        window.addEventListener(
          "message",
          function () {
            var evntData = event.data;
            if (evntData && evntData.constructor == String) {
              var zf_ifrm_data = evntData.split("|");
              if (zf_ifrm_data.length == 2) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
                var iframe = document
                  .getElementById(
                    "zf_div_YScGpndCwUhuSJa4_ojEh2O8lmKthmabrzfU-2NAe1M"
                  )
                  .getElementsByTagName("iframe")[0];
                if (
                  iframe.src.indexOf("formperma") > 0 &&
                  iframe.src.indexOf(zf_perma) > 0
                ) {
                  var prevIframeHeight = iframe.style.height;
                  if (prevIframeHeight != zf_ifrm_ht_nw) {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }
                }
              }
            }
          },
          false
        );
      } catch (e) {}
    })();
  });

  ZOHO.embeddedApp.init();
}
