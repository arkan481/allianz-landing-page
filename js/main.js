$(document).ready(function () {
  // setting all other quizzes except the first to be hidden
  $("#question-box-2").hide();
  $("#question-box-3").hide();
  $("#question-box-4").hide();
  $("#question-box-5").hide();

  $(".question-answers__choice--1").click(function () {
    markAnswered(".question-answers__choice--1", this);
    fadeInElement("#question-box-2");
    makeOpaque("#question-box-1");
  });

  $(".question-answers__choice--2").click(function () {
    markAnswered(".question-answers__choice--2", this);
    fadeInElement("#question-box-3");
    makeOpaque("#question-box-2");
  });

  $(".question-answers__choice--3").click(function () {
    markAnswered(".question-answers__choice--3", this);
    fadeInElement("#question-box-4");
    makeOpaque("#question-box-3");
  });

  $(".question-answers__choice--4").click(function () {
    markAnswered(".question-answers__choice--4", this);
    fadeInElement("#question-box-5");
    makeOpaque("#question-box-4");
  });

  $("#question-5-choice-a").click(function () {
    markAnswered(".question-answers__choice--5", this);
    makeOpaque("#question-box-5");
    fadeInElement("#dialog-a");
  });

  $("#question-5-choice-b").click(function () {
    markAnswered(".question-answers__choice--5", this);
    makeOpaque("#question-box-5");
    fadeInElement("#dialog-b");
  });

  $("#question-5-choice-c").click(function () {
    markAnswered(".question-answers__choice--5", this);
    makeOpaque("#question-box-5");
    fadeInElement("#dialog-c");
  });

  $(".modal").click(function () {
    $(".modal").fadeOut(1000);
  });
});

function openDialog(selector) {
  $(selector).dialog("open");
}

function markAnswered(parentSelector, element) {
  $(parentSelector).removeClass("answered");
  $(element).addClass("answered");
}

function fadeInElement(elSelector) {
  $(elSelector).fadeIn(1000);
}

function makeOpaque(elSelector) {
  $(elSelector).animate({ opacity: ".6" }, 2000);
}