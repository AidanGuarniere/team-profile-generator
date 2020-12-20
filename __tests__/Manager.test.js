const Manager = require("../lib/manager");


test("creates an manager object", () => {
    const manager = new Manager("Dave", "1", "dave@davemail.com", "Manager", "123-456");
    expect(manager.position).toBe("Manager");
    expect(manager.office).toBe("123-456")
  });

  test("returns manager office number", () => {
    const manager = new Manager("Dave", "1", "dave@davemail.com", "Manager", "123-456");
  
    expect(manager.getOffice()).toHaveProperty("office");
  });

  test("returns manager position", () => {
    const manager = new Manager("", "", "", "Manager", "dave university");
  
    expect(manager.getPosition()).toHaveProperty("position");

    expect(manager.position).toBe("Manager")

    console.log(manager);

  });