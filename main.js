var tableEle = document.querySelector('table');
var gradeTable = new GradeTable(tableEle);

var app = new App(gradeTable);
app.start();
