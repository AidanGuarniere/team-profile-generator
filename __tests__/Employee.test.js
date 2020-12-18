const Employee = require('../lib/employee')

test('creates an employee object', () => {
    const employee = new Employee('Dave', '1', 'dave@davemail.com', 'Intern');
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('dave@davemail.com');
    expect(employee.position).toBe('Intern')

});