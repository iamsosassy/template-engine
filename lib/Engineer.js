// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(name, id, email, office) {
        this.name = name;
        this.role = "Engineer";
        this.id = id;
        this.email = email;
        this.office = office;
    }
}
module.exports = Engineer;