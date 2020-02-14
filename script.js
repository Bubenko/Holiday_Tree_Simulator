var branches = 8;
var base = 2;
var treeArea = $("#treeArea");

// New Tree Button toggle
$("#new").on("click", function() {
  var addBranches = $("#treeSize").val() - branches;
  branches = addBranches + branches;
  var addBase = $("#trunkSize").val() - base;
  base = addBase + base;
  treeArea.empty();
  drawBranches(branches);
  drawBase(base);
  changeColors();
  $("#powerVal").html("OFF");
});

// Draw Tree
function drawBranches(branches) {
  for (var i = 1; i <= branches; i++) {
    for (var j = 1; j <= i; j++) {
      treeArea.append("<span>^</span>");
    }
    treeArea.append("<br>");
  }
  $("span:contains(^)").css("color", "green");
}

function drawBase(base) {
  for (var n = 1; n <= 3; n++) {
    for (var b = 1; b <= base; b++) {
      treeArea.append("<span>|</span>");
    }
    treeArea.append("<br>");
  }
  $("span:contains(|)").css("color", "brown");
}

drawBranches(branches);
drawBase(base);

// ON OFF button + add yellow color
$("#power").on("click", function() {
  if ($("#powerVal").html() == "OFF") {
    $("span:contains(*)").off("click");
    $("span:contains(O)").off("click");
    $("span:contains(^)").off("click");

    $("span:contains(^)").on("click", function() {
      if ($(this)[0].textContent === "^") {
        $(this)[0].textContent = "O";
        $(this).css("color", "red");
      }
    });

    $("span:contains(O)").off("click");

    $("#powerVal").html("ON");
    $("span:contains(*)").css("color", "yellow");
  } else {
    changeColors();
    $("#powerVal").html("OFF");
    $("span:contains(*)").css("color", "gray");
  }
});

// Toggle change shapes for the first time
// Terminate colors on ON button
if ($("#powerVal").html() == "OFF") {
  changeColors();
} else {
  $("span:contains(*)").off("click");
  $("span:contains(O)").off("click");
  $("span:contains(^)").off("click");

  $("span:contains(^)").on("click", function() {
    if ($(this)[0].textContent === "^") {
      $(this)[0].textContent = "O";
      $(this).css("color", "red");
    }
  });
  $("span:contains(O)").off("click");
}

// Change colors and shapes on click
function changeColors() {
  $("span").on("click", function() {
    if ($(this)[0].textContent === "^") {
      $(this)[0].textContent = "O";
      $(this).css("color", "red");
    } else if ($(this)[0].textContent === "O") {
      $(this)[0].textContent = "*";
      $(this).css("color", "gray");
    } else if ($(this)[0].textContent === "*") {
      $(this)[0].textContent = "^";
      $(this).css("color", "green");
    }
  });
}
