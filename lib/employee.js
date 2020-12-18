class Employee {
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position = position;
    }

    getGeneralInfo() {
        return{
            name:this.name,
            id: this.id, 
            email: this.email
        };
    }
}

module.exports = Employee