class App {
  handleGetGradesError(error) {
    console.error(error);
  }

  handleGetGradesSuccess(grades) {
    console.log(grades);
  }

  constructor() {
    this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError.bind(this);
  }

  getGrades() {

    return $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: {"x-access-token":"amdTkuJE"},
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    })
  }

  start() {
    this.getGrades();
  }

}
