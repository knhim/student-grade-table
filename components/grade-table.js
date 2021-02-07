class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    const tbody = document.querySelector('tbody');
    tbody.textContent = '';
    for (let i = 0; i < grades.length; i++) {
      tbody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }

    if (grades.length < 1) {
      this.noGradesElement.className = '';
    } else {
      this.noGradesElement.className = 'd-none';
    }
  }

  renderGradeRow(data, deleteGrade) {
    const trElement = document.createElement('tr')
    const tdName = document.createElement('td');
    const tdCourseName = document.createElement('td');
    const tdStudentGrade = document.createElement('td');
    const tdDelete = document.createElement('td');
    const deleteButton = document.createElement('button');

    deleteButton.className = 'btn btn-danger'
    tdName.textContent = data.name;
    tdCourseName.textContent = data.course;
    tdStudentGrade.textContent = data.grade;
    tdDelete.append(deleteButton);

    trElement.append(tdName, tdCourseName, tdStudentGrade, tdDelete);

    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener('click', () => {
      deleteGrade(data.id);
    });
    return trElement;
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
}
