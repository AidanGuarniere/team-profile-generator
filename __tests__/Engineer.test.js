const Engineer = require("../lib/engineer");


test("creates an engineer object", () => {
    const engineer = new Engineer("Dave", "1", "dave@davemail.com", "Engineer", "davehub");
    expect(engineer.position).toBe("Engineer");
    expect(engineer.github).toBe("davehub")
  });

  test("returns engineer Github", () => {
    const engineer = new Engineer("Dave", "1", "dave@davemail.com", "Engineer", "davehub");
  
    expect(engineer.getGithub()).toHaveProperty("github");
  });

  test("returns engineer position", () => {
    const engineer = new Engineer("", "", "", "Engineer", "davehub");
  
    expect(engineer.getPosition()).toHaveProperty("position");

    expect(engineer.position).toBe("Engineer")

    console.log(engineer);

  });