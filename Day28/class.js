//Create a simple class with constructor and method.
class Student {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }

  showDetails() {
    console.log("Student Name: " + this.name);
    console.log("Student Mark: " + this.mark);
  }
}

const student1 = new Student("Saraswathi", 95);
student1.showDetails();
const student2=new Student("Priya",85)
student2.showDetails();