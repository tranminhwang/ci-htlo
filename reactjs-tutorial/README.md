# Thêm reactjs vào website

Để thêm ReactJS vào website cũng như project của mình thì cần đến sự hỗ trợ của 2 fild CDN dưới đây:

```html
 <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></>

```

# Phân biệt giữa DOMElement với ReactElement

- Đối với DOMElement phải tạo thông qua `document.createElement(tag name)`
- Đối với ReactJS thì khi chúng ta link 2 file CDN ở trên thì sẽ có 1 object global có tên là `React` => cách tạo 1 ReactElement; `React.createElement(tag name, props, children)`

Ví dụ:

- Tạo 1 thẻ h1 hiển thị nội dung `Hello DOM` bằng DOMElement

```js
const h1DOM = document.createElement("h1");
h1DOM.className = "my-class";
h1DOM.innerText = "Hello DOM";
```

- Tạo 1 thẻ h1 hiển thị nội dung `Hello DOM` bằng ReactElement

```js
const h1React = React.createElement(
  "h1",
  {
    className: "my-class",
  },
  "Hello DOM"
);
h1DOM.innerText = "Hello DOM";
```

Tương tự dùng 2 cách trên để tạo 1 phẩn tử có nội dung như sau (
Xem code của file `index.html` trong folder `lesson-02` để có thể thực hiện render nội dung lên trang web)

```html
<ul class="list-container">
  <li>List Item 1</li>
  <li>List Item 2</li>
</ul>
```

# Render DOMElement và ReactElement

Phải dùng `ReactDOM` để render `React Element` vào trang web
Xem ví dụ trong file `index.html` của `lesson-02`

# JSX

Cơ bản là mình sẽ không thể nào tạo 1 trang web ReactJS lớn bằng các câu lệnh `React.createElement` được, vì nó rất phức tạp => `JSX` sinh ra để giải quyết vấn đề này

- Để tạo 1 element bằng `JSX` ta chỉ cần tạo 1 biến để lưu một element HTML bình thường trong 1 file `js`

```js
const ordersList = (
  <ol class="list-container">
    <li>List Item 1</li>
    <li>List Item 2</li>
  </ol>
);
```

Nhìn sơ qua có thể thấy viết JSX hệt như việc HTML, nhưng nhớ rằng đây là code Javascript, và cái đống HTML đang được viết trong file Javascript được gọi là JSX, Nó là một dạng mở rộng của JS giúp code JS biểu diễn các element của HTML trong JS dễ nhìn hơn, tương tự như cách chúng ta code HTMl bình thường (nhớ là đây là JSX và nó đang được bên trong file JS hoặc thẻ `script`)

=> Để Browser có thể hiểu được code JSX thì mình cần thành phần thứ 3 có tên là `Babel` để giúp convert JSX sang JS tương tự các element tạo bằng `React.createElement` ở trên

- Nhớ link thêm CDN này vào project

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Và thêm type cho thẻ script đang được code JSX một attribute có tên là `type`

```html
<script typex="text/babel">
  // JSX here....
</script>
```

Xem code ở trên được `babel` build ra JS như nào thì ở link này: `https://bit.ly/3TAaK6W`

# Các lưu ý của JSX

- Có thể cho phép chúng ta viết mã JS ngay bên trong các phần tử JSX
- Giúp chúng ta dễ tạo ra các React Element mà không cần dùng đến syntax `React.createElement`. Code khá giống với viết HTML
- `ReactDOM` chỉ render được 1 `JSX Element` (xem lại ví dụ ở file index.html trong folder lesson-02)

# Setup 1 project ReactJS bằng Tool

- Cài nodejs: `https://nodejs.org/en` (download về rồi click next cho đến khi finish)
- Kiểm tra nodejs: `node -v` (gõ vào terminal -> enter) ra version là đúng
- Kiểm tra npm: `npm -v` (gõ vào terminal -> enter) ra version là đúng
- Tới folder học dùng lệnh sau để tạo project React: `npx create-react-app my-app` (trong đó, `my-app` sẽ là tên folder của project mình. Có thể để tên như vậy cũng được) -> Enter đợi 1 lúc sẽ install xong
- `cd my-app` (thay `my-app` bằng tên project của mình đã tạo ở trên)
- `npm start`

# BTVN

Code trang `https://c4e-b6-lab.glitch.me/` vào file `App.js` của source `reactjs`
Không cần tách file, có thể code hết vào chung file `App.js`
