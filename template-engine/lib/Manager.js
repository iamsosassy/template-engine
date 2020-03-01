// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, office) {
        this.name = name;
        this.role = "Manager";
        this.id = id;
        this.email = email;
        this.office = office;
    }
}
module.exports = Manager;