$(document).ready(function () {
  for (var index = 1; index <= 31; index++) {
    $("#inputDays").append(
      '<option value="' + index + '">' + index + "</option>"
    );
  }
  for (var index = 1; index <= 24; index++) {
    $("#inputHours").append(
      '<option value="' + index + '">' + index + "</option>"
    );
  }
  for (var index = 1; index <= 60; index++) {
    $("#inputMinutes").append(
      '<option value="' + index + '">' + index + "</option>"
    );
  }

  $("#calculate").click(function (event) {
    event.preventDefault();
    calculate_timestamp();
  });

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
$(".dateinput").datepicker({
  format: "dd.mm.yyyy",
  todayBtn: true,
  todayHighlight: true,
  weekStart: 1,
});
