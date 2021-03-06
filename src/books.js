function add_book(books_group, name, img_url, id) {
    var books = (document.getElementById(books_group));
    var book = document.createElement("div");
    book.classList.add("book");
    var head = document.createElement("h1");
    head.textContent = name;
    book.appendChild(head);
    var image = document.createElement("img");
    book.appendChild(image);
    image.src = img_url;
    book.appendChild(document.createElement("br"));
    var text = document.createElement("p");
    text.textContent = id;
    book.appendChild(text);
    books.appendChild(book);
}
function add_book_2021_01() {
    var books_group = "books-2021-01";
    add_book(books_group, "鲁迅杂文精选", "https://m.media-amazon.com/images/I/514fDa3jQ+L.jpg", "B009Z5TEE4");
    add_book(books_group, "呐喊", "https://m.media-amazon.com/images/I/51un6ZRgZtL.jpg", "B009FRHRAA");
    add_book(books_group, "Modern Operating Systems", "https://www.pearsonhighered.com/assets/bigcovers/0/1/3/3/013359162X.jpg", "978-0133591620");
}
function add_book_2020() {
    var books_group = "books-2020";
    add_book(books_group, "Effective Java", "https://learning.oreilly.com/library/cover/9780137150021/250w/", "9780137150021");
    add_book(books_group, "江村经济：中国农民的生活", "https://pic.cp.com.cn/Images/2014/5/8/144112404800c8bcd-9_hwc268268.jpg", "978-7-100-02795-3");
    add_book(books_group, "Design Patterns: Elements of Reusable Object-Oriented Software", "https://images-na.ssl-images-amazon.com/images/I/51szD9HC9pL.jpg", "978-0201633610");
    add_book(books_group, "From Mathematics to Generic Programming", "https://images-na.ssl-images-amazon.com/images/I/5194c6yZKcL.jpg", "978-0321942043");
    add_book(books_group, "C Programming Language", "https://images-na.ssl-images-amazon.com/images/I/411ejyE8obL.jpg", "978-0131103627");
}
add_book_2021_01();
add_book_2020();
