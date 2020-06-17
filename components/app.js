class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);

    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;

  }

  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var average = 0;
    var total = 0;
    for (var i = 0; i < grades.length; i++) {
      total += grades[i].grade;
      average = Math.floor(total / grades.length);
    }
    this.pageHeader.updateAverage(average);
  }


  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "x-access-token": "amdTkuJE" },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade)
  }

  //methods to create grades
  createGrade(name, course, grade) {
    console.log(name, course, grade);
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
    },
      headers: { "x-access-token": "amdTkuJE" },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  //methods to delete grades
  deleteGrade(id) {
    console.log(id);
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }
}
