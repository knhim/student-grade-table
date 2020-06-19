const pEle = document.querySelector('p');
const tableEle = document.querySelector('table');
const gradeTable = new GradeTable(tableEle, pEle);

//set header element to a variable , and created a new pageheader object w/headerEle as an argument
const headerEle = document.querySelector('header');
const pageHeader = new PageHeader(headerEle);

//queried the document for the form element, and instantiated GradeForm
const formElem = document.querySelector('form');
const gradeForm = new GradeForm(formElem);


const app = new App(gradeTable, pageHeader, gradeForm);
app.start();
