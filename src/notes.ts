export interface NotesType {
    key: number,
    title: string,
    content: string
}
const notes: NotesType [] =[
    {
      "key": 1,
      "title": "Introduction to Python",
      "content": "Python is a versatile programming language known for its readability and broad use in web development, data analysis, automation, and more."
    },
    {
      "key": 2,
      "title": "Getting Started with JavaScript",
      "content": "JavaScript is a powerful scripting language that enables dynamic content and interaction on websites, making it an essential tool for front-end developers."
    },
    {
      "key": 3,
      "title": "Understanding HTML",
      "content": "HTML, or HyperText Markup Language, is the standard language for creating web pages and web applications, providing the structure of websites."
    },
    {
      "key": 4,
      "title": "CSS Basics",
      "content": "CSS (Cascading Style Sheets) is a stylesheet language that allows developers to control the presentation of HTML elements on a webpage, including layout, colors, and fonts."
    },
    {
      "key": 5,
      "title": "Introduction to Databases",
      "content": "Databases are systems used to store, retrieve, and manage data efficiently, with common types including SQL databases like MySQL and NoSQL options like MongoDB."
    },
    {
      "key": 6,
      "title": "Version Control with Git",
      "content": "Git is a distributed version control system that helps developers track changes in code and collaborate more effectively through repositories like GitHub or Bitbucket."
    },
    {
      "key": 7,
      "title": "RESTful APIs",
      "content": "RESTful APIs allow web applications to communicate with servers using standard HTTP methods, facilitating data exchange and integration between systems."
    },
    {
      "key": 8,
      "title": "Testing with Selenium",
      "content": "Selenium is an open-source tool used for automating web browsers, widely employed in testing to simulate user interactions and ensure application functionality."
    },
    {
      "key": 9,
      "title": "Intro to Machine Learning",
      "content": "Machine learning is a subset of artificial intelligence that enables systems to learn from data and improve their accuracy over time without being explicitly programmed."
    },
    {
      "key": 10,
      "title": "DevOps and Continuous Integration",
      "content": "DevOps practices promote collaboration between development and operations teams, with continuous integration ensuring that code changes are automatically tested and deployed."
    }
  ]
  export default notes;