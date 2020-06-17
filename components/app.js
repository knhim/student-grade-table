class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
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
  }

}
