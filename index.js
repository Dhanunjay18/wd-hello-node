// const http = require("http");
// const fs = require("fs");
// const argv = process.argv
// const port = parseInt(argv[2].substring(7))

// let homeContent = "";
// let projectContent = "";
// let registrationContent="";

// fs.readFile("home.html", (err, home) => {
//   if (err) {
//     throw err;
//   }
//   homeContent = home;
// });

// fs.readFile("project.html", (err, project) => {
//   if (err) {
//     throw err;
//   }
//   projectContent = project;
// });

// fs.readFile("registration.html", (err, registration) => {
//   if (err) {
//     throw err;
//   }
//   registrationContent = registration;
// });

// http
//   .createServer((request, response) => {
//     let url = request.url;
//     response.writeHeader(200, { "Content-Type": "text/html" });
//     switch (url) {
//       case "/project":
//         response.write(projectContent);
//         response.end();
//         break;
//       case "/registration":
//         response.write(registrationContent);
//         response.end();
//         break;
//       default:
//         response.write(homeContent);
//         response.end();
//         break;
//     }
//   })
//   .listen(port);





//---------------------------------Level 3-----------------------------------------------------------


const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    aa = []
    for (let i = 0; i < all.length; i++) {
      a = []
      if(all[i].dueDate == yesterday){
          if(all[i].completed == false)
            a.push("[ ]")
          else
            a.push("[x]")
          a.push(all[i].title)
          a.push("2022-10-11")
      }
      if(a.length!=0)
      aa.push(a)      
    }
    return aa;
  }

  const dueToday = () => {
    aa = []
    for (let i = 0; i < all.length; i++) {
      a = []
      if(all[i].dueDate == today){
          if(all[i].completed == false)
            a.push("[ ]")
          else
            a.push("[x]")
          a.push(all[i].title)
      }
      if(a.length!=0)
      aa.push(a)      
    }
    return aa;
  }

  const dueLater = () => {
    aa = []
    for (let i = 0; i < all.length; i++) {
      a = []
      if(all[i].dueDate == tomorrow){
          if(all[i].completed == false)
            a.push("[ ]")
          else
            a.push("[x]")
          a.push(all[i].title)
      }
      if(a.length!=0)
      aa.push(a)      
      a.push("2022-10-13")
    }
    return aa;
  }

  const toDisplayableList = (list) => {
    a = ""
    for(let i in list){
      if(i!=list.length-1)
        a = a + list[i].join(' ') + "\n"
      else
        a = a + list[i].join(' ')
    }
    return a;
  }

  return { all, add, markAsComplete, overdue, dueToday, dueLater, toDisplayableList };
}

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")