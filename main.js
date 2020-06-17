var tableEle = document.querySelector('table');
var gradeTable = new GradeTable(tableEle);

//set header element to a variable , and created a new pageheader object w/headerEle as an argument
var headerEle = document.querySelector('header');
var pageHeader = new PageHeader(headerEle);




var app = new App(gradeTable, pageHeader);
app.start();
