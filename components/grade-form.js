class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    preventDefault();
    console.log('hi');
  }



}
