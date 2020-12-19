const Intern = require("../lib/intern");


test("creates an Intern object", () => {
    const intern = new Intern("Dave", "1", "dave@davemail.com", "Intern", "dave university");
    expect(intern.position).toBe("Intern");
    expect(intern.school).toBe("dave university")
  });

  test("returns Intern School", () => {
    const intern = new Intern("Dave", "1", "dave@davemail.com", "Intern", "dave university");
  
    expect(intern.getSchool()).toHaveProperty("school");
  });

  test("returns Intern position", () => {
    const intern = new Intern("", "", "", "Intern", "dave university");
  
    expect(intern.getPosition()).toHaveProperty("position");

    expect(intern.position).toBe("Intern")

    console.log(intern);

  });