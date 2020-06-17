class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    var tbodyElement = this.tableElement.querySelector('tbody');
    tbodyElement.textContent = '';
    for (var i = 0; i < grades.length; i++) {
      var trElement = document.createElement('tr');
      var tdName = document.createElement('td');
      var tdCourseName = document.createElement('td');
      var tdStudentGrade = document.createElement('td');

      tdName.textContent = grades[i].name;
      tdCourseName.textContent = grades[i].course;
      tdStudentGrade.textContent = grades[i].grade;

      trElement.append(tdName, tdCourseName, tdStudentGrade);
      tbodyElement.append(trElement);
    }
  }

  renderGradeRow(data, deleteGrade) {
    var tbodyElement = this.tableElement.querySelector('tbody');

    console.log(deleteGrade);
    for (var i = 0; i < data.length; i++) {
      var trElement = document.createElement('tr')
      var tdName = document.createElement('td');
      var tdCourseName = document.createElement('td');
      var tdStudentGrade = document.createElement('td');

      tdName.textContent = data[i].name;
      tdCourseName.textContent = data[i].course;
      tdStudentGrade.textContent = data[i].grade;
    }
    //create Delete button and add an event listener
    var tdDeleteButton = document.createElement('button');
    tdDeleteButton.textContent = "DELETE";
    tdDeleteButton.addEventListener('click', deleteGrade(data.id));
    //return the created table row element
    return trElement;

  }

  deleteGrade(id) {
    console.log(id);
  }

}
