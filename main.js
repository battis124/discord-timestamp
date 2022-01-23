$(document).ready(function () {
  //start date picker
  $(".dateinput").datepicker({
    format: "dd.mm.yyyy",
    todayBtn: true,
    todayHighlight: true,
    weekStart: 1,
  });

  //prepare select fields
  for (var index = 1; index <= 31; index++) {
    $("#inputDays").append(
      '<option value="' + index + '">' + index + "</option>"
    );
  }
  for (var index = 1; index <= 24; index++) {
    $("#inputHours").append(
      '<option value="' + index + '">' + index + "</option>"
    );
    $("#planDateHours").append(
      '<option value="' + index + '">' + index + "</option>"
    );
  }
  for (var index = 1; index <= 60; index++) {
    $("#inputMinutes").append(
      '<option value="' + index + '">' + index + "</option>"
    );
    $("#planDateMinutes").append(
      '<option value="' + index + '">' + index + "</option>"
    );
  }

  //set date
  var data_now = new Date();

  $("#planDateDate").val(
    data_now.getDate() +
      "." +
      data_now.getMonth() +
      1 +
      "." +
      data_now.getFullYear()
  );
  $("#planDateHours option[value=" + data_now.getHours() + "]").attr(
    "selected",
    "selected"
  );
  $("#planDateMinutes option[value=" + data_now.getMinutes() + "]").attr(
    "selected",
    "selected"
  );

  //button to calculate timestamp
  $("#calculate").click(function (event) {
    console.log("calc");
    event.preventDefault();
    calculate_timestamp();
  });

  //button to plan timestamp
  $("#planDateSubmit").click(function (event) {
    console.log("plan");
    event.preventDefault();
    plan_timestamp();
  });

  function plan_timestamp() {
    var date = $("#planDateDate").val();
    var hours = $("#planDateHours").val();
    var minutes = $("#planDateMinutes").val();

    var date_split = date.split(".");

    var planned_date = new Date(
      date_split[2],
      parseInt(date_split[1]) - 1,
      date_split[0],
      hours,
      minutes
    );
    console.log(date_split, "planed date: ", planned_date);
    $("#planDateResult").val(
      "<t:" +
        ~~(planned_date.valueOf() / 1000) +
        ":R> | <t:" +
        ~~(planned_date.valueOf() / 1000) +
        ":F>"
    );
  }

  function calculate_timestamp() {
    var days = $("#inputDays").val();
    var hours = $("#inputHours").val();
    var minutes = $("#inputMinutes").val();

    var data_now = new Date();
    data_now.setTime(
      data_now.getTime() +
        days * 60 * 60 * 24 * 1000 +
        hours * 60 * 60 * 1000 +
        minutes * 60 * 1000
    );

    //  data_now.setDa(data_now.getDa + minutes)
    console.log(data_now, ~~(data_now.valueOf() / 1000), days, hours, minutes);

    $("#inputResult").val(
      "<t:" +
        ~~(data_now.valueOf() / 1000) +
        ":R> | <t:" +
        ~~(data_now.valueOf() / 1000) +
        ":F>"
    );
  }

  //$("#inputResult").val("qwqqe");
});
$.fn.datepicker.dates["en"] = {
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  daysShort: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"],
  daysMin: ["Niedz", "Pon", "Wt", "Śr", "Czw", "Pt", "Sob"],
  months: [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień",
  ],
  monthsShort: [
    "Sty",
    "Lut",
    "Marz",
    "Kwie",
    "Maj",
    "Czerw",
    "Lip",
    "Sier",
    "Wrze",
    "Paźd",
    "Lis",
    "Grudz",
  ],
  today: "Dziś",
  clear: "Clear",
  format: "mm/dd/yyyy",
  titleFormat: "MM yyyy" /* Leverages same syntax as 'format' */,
  weekStart: 0,
};
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).val()).select();
  document.execCommand("copy");
  $temp.remove();
}
