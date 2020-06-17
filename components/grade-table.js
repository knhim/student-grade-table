class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    var tbody = document.querySelector('tbody');
    tbody.textContent = '';
    for (var i = 0; i < grades.length; i++) {
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }

    if (grades < 1) {
      this.noGradesElement.className = '';
    } else {
      this.noGradesElement.className = 'd-none';
    }
  }

  renderGradeRow(data, deleteGrade) {
    var trElement = document.createElement('tr')
    var tdName = document.createElement('td');
    var tdCourseName = document.createElement('td');
    var tdStudentGrade = document.createElement('td');
    var tdDelete = document.createElement('td');
    var deleteButton = document.createElement('button');

    deleteButton.className = 'btn btn-danger'
    tdName.textContent = data.name;
    tdCourseName.textContent = data.course;
    tdStudentGrade.textContent = data.grade;
    tdDelete.append(deleteButton);

    trElement.append(tdName, tdCourseName, tdStudentGrade, tdDelete);

    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener('click', function () {
      deleteGrade(data.id);
    });
    return trElement;
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
}
