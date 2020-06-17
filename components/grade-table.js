class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    // var tbodyElement = this.tableElement.querySelector('tbody');
    // tbodyElement.textContent = '';
    // for (var i = 0; i < grades.length; i++) {
    //   var trElement = document.createElement('tr');
    //   var tdName = document.createElement('td');
    //   var tdCourseName = document.createElement('td');
    //   var tdStudentGrade = document.createElement('td');

    //   tdName.textContent = grades[i].name;
    //   tdCourseName.textContent = grades[i].course;
    //   tdStudentGrade.textContent = grades[i].grade;

    //   trElement.append(tdName, tdCourseName, tdStudentGrade);
    //   tbodyElement.append(trElement);
    // }
    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade(grades));
    }

  }

  renderGradeRow(data, deleteGrade) {
    var trElement = document.createElement('tr')
    var tdName = document.createElement('td');
    var tdCourseName = document.createElement('td');
    var tdStudentGrade = document.createElement('td');
    var tdDelete = document.createElement('td');
    var tdDeleteButton = document.createElement('button');

    tdName.textContent = data.name;
    tdCourseName.textContent = data.course;
    tdStudentGrade.textContent = data.grade;

    trElement.append(tdName, tdCourseName, tdStudentGrade);
    this.tableElement.lastElementChild.append(trElement);

    tdDeleteButton.textContent = "DELETE";
    tdDeleteButton.addEventListener('click', function () {
      deleteGrade(data.id);
    });


    return trElement;

  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  deleteGrade(id) {
    console.log(id);
  }

}
