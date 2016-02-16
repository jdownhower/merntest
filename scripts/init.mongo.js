var conn = new Mongo();
db = conn.getDB("bugsdb");

db.bugs.remove({});

db.bugs.insert({ id: "101", status: "Open", priority: "High", owner: "Fred", title: "Page Fault" });
db.bugs.insert({ id: "102", status: "Test", priority: "Low", owner: "Barney", title: "General Protection Fault" });

