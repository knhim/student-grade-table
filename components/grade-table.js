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








}
