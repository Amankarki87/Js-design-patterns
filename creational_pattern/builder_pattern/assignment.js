class Assignment {
    constructor() {
        this.make = function(builder) {
            builder.step1();
            builder.step2();
            builder.step3();
            builder.step4();
            return builder.get();
        }
    }
}

class AssignmentBuilder {
    constructor(subject,level,dueDate) {
        this.subject = null;
        this.step1 = function() {
            this.subject = new CreateAssignment();
        }

        this.step2 = function() {
            this.subject.addSubject(subject);
        }

        this.step3 = function() {
            this.subject.addLevel(level);
        }

        this.step4 = function() {
            this.subject.addDueDate(dueDate);
        }

        this.get = function() {
            return this.subject;
        }

    }
}

class CreateAssignment {
    constructor() {
        this.subject = null;
        this.level = null;
        this.dueDate = null;

        this.addSubject = function(subject) {
            this.subject = subject;
        }

        this.addLevel = function(level) {
            this.level = level;
        }

        this.addDueDate = function(date) {
            this.dueDate = date;
        }

        this.announcement = function() {
            console.log(`Your ${this.subject} subject assignment is: ${this.level}.It is due on ${this.dueDate}.`);
        }
    }
}

let assignmentBuilder = new AssignmentBuilder("chemistry","hard","22th August,2021");
let assignment = new Assignment();
let chemistryAssignment = assignment.make(assignmentBuilder);
chemistryAssignment.announcement();
