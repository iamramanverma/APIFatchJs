🛍️ Product Fetcher with API & DOM Manipulation
This project demonstrates how to fetch data from a public API using JavaScript's fetch() method and dynamically render product cards on a webpage using the DOM.

📂 Project Structure
less
Copy
Edit
📁 project-folder/
├── fetch.html       // HTML structure & styles
└── fetch.js         // JavaScript for API fetch and DOM rendering
🔍 Features
Fetches live product data from DummyJSON

Dynamically creates and displays product cards

Simple, responsive layout using Flexbox

Clean UI with basic CSS styling

🚀 How It Works
API Call
Using fetch() in fetch.js to retrieve product data:

js
Copy
Edit
fetch("https://dummyjson.com/products")
DOM Manipulation

Creates h1 headings and card containers for each product.

Appends elements to the #container div dynamically.

Styling

Flexbox layout for responsive card display

Custom styling for headings and product cards in <style> tag of fetch.html.

🖼️ Preview
Each product card displays:

✅ Product Title

💲 Price

📃 Description

⭐ Rating

🛠️ Tech Stack
HTML5

CSS3

JavaScript (Vanilla)

Fetch API

🧪 How to Use
Clone this repository:

bash
Copy
Edit
git clone https://github.com/your-username/product-fetcher.git
cd product-fetcher
Open fetch.html in your browser.

That’s it! 🎉 The page will automatically fetch and render the product data.

📌 Note
This project is built for learning purposes — understanding asynchronous JS (fetch), working with public APIs, and DOM manipulation.

💡 Future Improvements
Add loading indicators

Include error handling

Display product images

📬 Connect
If you found this helpful, feel free to ⭐️ the repo or connect with me on LinkedIn!
link in bio 🤝🪢
