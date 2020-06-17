var tableEle = document.querySelector('table');
var gradeTable = new GradeTable(tableEle);

//set header element to a variable , and created a new pageheader object w/headerEle as an argument
var headerEle = document.querySelector('header');
var pageHeader = new PageHeader(headerEle);

//queried the document for the form element, and instantiated GradeForm
var formElem = document.querySelector('form');
var gradeForm = new GradeForm(formElem);


var app = new App(gradeTable, pageHeader, gradeForm);
app.start();
