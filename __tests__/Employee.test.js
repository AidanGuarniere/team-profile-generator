const Employee = require("../lib/employee");

test("creates an employee object", () => {
  const employee = new Employee("Dave", "1", "dave@davemail.com", "Intern");
  expect(employee.name).toBe("Dave");
  expect(employee.id).toBe("1");
  expect(employee.email).toBe("dave@davemail.com");
  expect(employee.position).toBe("Intern");
});

test("returns employee name", () => {
  const employee = new Employee("Dave", "", "", "");

  expect(employee.getName()).toHaveProperty("name");
});

test("returns employee id", () => {
  const employee = new Employee("", "1", "", "");

  expect(employee.getId()).toHaveProperty("id");
});

test("returns employee email", () => {
  const employee = new Employee("", "", "email", "");
  expect(employee.getEmail()).toHaveProperty("email");
});

test("returns employee position", () => {
  const employee = new Employee("", "", "", "Intern");

  expect(employee.getPosition()).toHaveProperty("position");

  expect(employee.getPosition()).toStrictEqual({"position": "Intern"});
});
