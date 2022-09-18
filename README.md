### Project 개요
- 내용:
- 목적:
- 소요예상시간:

### 선행강의 듣기
- 바닐라 JS로 크롬앱 만들기
- 유튜브 클론코딩

## 0.0 이론공부
### 0.1 왜 React인가?
- 많은 대기업들이 프론트엔드를 개발할 때 사용한다.
  - 프론트엔트 분야는 효과적이고 안정적인 개발언어가 선호되므로
- 넓고 풍부한 커뮤니티와 자료가 있다.
  - JavaScript 생태계를 업고 있으며, React를 기반으로 framework가 만들어지고 있다.
### 0.2 ReactJS가 왜 필요한가?
- JavaScript보다 수월하게 UI를 Interactive하게 만듬.
- JavaScript vs. ReactJS: Counter 만들기
  - JavaScript 작업과정
    - HTML 만들기(span / button)
	- JavaScript로 개체 가져오기(getElementById / querySelector)
	- Event를 Listen하기(addEventListener)
	- function으로 HTML을 업데이트한다.(innerText)
  - JavaScript로 작업하다보면..
    - HTML을 지칭하는 Variable들과 AddEventListener가 난무하게 된다.
	- 카운터와 같은 간단한 기능에도 몇 줄의 코드를 작성해야 한다.
### 0.3 React와 ReactDom 파헤치기
- HTML에서 React 연습하기
  - unpkg 코드파일을 import하기
  ```html
  <script src="https://unpkg.com/react@17.0.2/umd/react.production.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.js"></script>
  ```
- React와 ReactDom이란,
  - React: React에서 제공하는 interactive한 요소가 담긴 library
  - ReactDom: React element를 HTML body에 삽입해주는 library
- React Element를 만드는 방법
  - 예시)
  ```javascript
  React.createElement("HTMLTAG", {[PROP]: [VALUE], ...}, "[CONTENT]");
  ```
  - `[PROP]`은 HTML태그의 속성을 말한다.
  - 만약 태그에 속성이 없다면 `{~}` 대신 `null`을 적는다.
- ReactDom으로 React Element를 HTML body에 구현하기
  1. body에 id가 `root`인 div container를 만든다.
  - 예시)
  ```html
  <body>
  	<div id="root"></div>
  </body>
  ```
  2. root를 id로 가져온다. (`getElementById`)
  3. `ReactDOM`으로 `div#root`에 Element를 추가한다.
  - 예시)
  ```javascript
  ReactDOM.render([ELEMENT],[ROOT]);
  ```
  4. 만약 여러 Element를 추가하고 싶다면 이를 한 div에 넣는다.
  ```javascript
  const container = React.createElement("div", null, [ELEMENTS,...]);
  ReactDOM.render(container, root);
  ```
 - 결론: ReactJS는 HTML의 컨트롤을 가져오기 위해   
역순으로 JavaScript로 HTML요소를 작성한다.
### 0.4 React에서 Event 다루는 과정 살펴보기
- `JavaScript`에서는
HTML을 작성하고   
HTML 요소를 variable에 저장하고,
이를 `.addEventListener`로 Event를 다룬다.
- `React`에서는 `.createElement`할 때 태그의 속성(Prop) 자리에 Event를 쓴다.
  - 예시)
  ```javascript
  React.createElement("HTMLTAG", {on[EVENT]: [Function], ...}, "[CONTENT]");
  ```
  - `on[EVENT]`는 기존 javascript Event 앞자리에 `on`을 넣는다.
  - `[Function]`은 보통 arrow function으로 처리한다.

* on[EVENT] 종류 알아보기
  - `onClick`
  - `onMouseEnter`
### 0.5 JSX 알아보기
- `JSX`(JavaScript XML): JavaScript와 HTML을 동시에 작성하는 방식.
- `Component`: React로 만든 App의 최소한의 단위.
  - HTML문을 return하는 함수나 Class 구조를 가진다.
  - Component를 사용하려면 HTML태그 안에 대문자로 시작해야 한다. 예) `<Title />`
- JSX는 여러 차례 재사용이 가능하다.
- HTML파일에서 JSX을 인식하게 하려면 Babel을 import하고 script의 type을 babel로 한다.
  - 예시)
  ```html
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel"> ...
  ```
- JSX와 HTML이 다른 점
  - JSX는 JavaScript 기반이므로 HTML Tag과 중복되는 이름들이 있으므로 유의해야 한다.
    - `<label for="~">` >> `<label htmlFor="~">`
    - `<div class="~">` >> `<div className="~">`
### 0.6 React에서 Variable나 Function 사용하기
- const나 let으로 variable 또는 function을 선언하고 이를, `{[NAME]}`로 불러오면 된다.
  - 예시1) Variable을 불러와 HTML에 render하기(최초 한번만)
  ```javascript
  let counter = 0;
  const Container = () => (
  	<h3>Total clicks: {counter}</h3>
  )
  ```
  - 예시2) Function을 불러와 Event를 Handling하기
  ```javascript
  function countUp() {
  	counter = counter + 1;
  )
  const Container = () => (
  	<button onClick={countUp}>Click me</button>
  )
  ```
## 1.0 React State
### 1.1 State란,
- Data가 저장되는 곳
- `React.useState([DATA])` -> `[DATA, MODIFIER]`
  - `[DATA]`는 State에 둘 데이터의 이름이다.
  - `[MODIFIER]`는 State 값에 변화를 줄 함수로 변화와 동시에 다시 render한다.
    - `[MODIFIER]`의 이름은 관례적으로 `set[DATA]`를 선호한다.
- 변수 선언은 Destruction을 통해 간편하게 하자.
```javascript
const [counter, modifier] = React.useState([Default]);
```
- `modifier`는 변화할 값을 넣는다.
  - `setCounter(counter + 1);`
  - 이전값을 확실히 보장받기 위해서는 modifier의 값을 function을 통해 return 받는 것이다.
  ```javascript
  const [counter, setCounter] = React.useState(0);
  ...
  setCounter((current) => current + 1);
  ```
### 1.2 State가 필요한 이유
- ReactDom을 호출하면 render와 함께 새로고침이 이뤄진다.
- 따라서 변동이 있을 때마다 render를 해줘야 하는데 이를 modifier가 해결해준다.
- javascript와 달리 body가 통으로 새로고침되기 보다   
React는 변동이 있는 부분만 새로고침이 된다.(빠르고 신속하다)
### 1.3 HTML Input을 React State로 만들기
- `<label>`과 `<input>` 만들기
```html
<label htmlFor="minutes">Minutes</label>
<input id="minutes"
       placeholder="Minutes"
       type="number"
/>
```
- 사용자가 input에 값을 입력할 때 자동으로 값이 반영되게 한다.
```javascript
const [minutes, setMinutes] = React.useState();
function onChange (event) {
	setMinutes(event.target.value);
}
```
```html
<input id="minutes"
       placeholder="Minutes"
       type="number"
       onChange={onChange}
       value={minutes}
/>
```
## 2.0 React Props
### 2.1 Props란,
- 부모 Component로부터 자식 Component에 data를 보내는 것.
  - 예시)
  ```javascript
  const Button (props) {
  	return (
		<button style={{fontSize: {props.fontSize}}}>{props.text}</button>
	)
  }
  <Button text={"~"} fontSize={~} />
  ```
- Component는 기본적으로 Function이다. 따라서, argument를 통해서 data를 보낼 수 있다.
- Component가 properties를 가지면 이를 dict 형식으로 받아 argument로 `props`을 보낸다.
- Destructuring을 통해 `props`를 직접 적기보다 안의 property 이름을 바로 variable로 사용한다.
### 2.2 Props가 쓰이는 이유
- Component를 재사용하는 과정에 디테일을 주고 싶을 때 효과적이다.
- Component 자체 특징은 공통적으로 받되 Props을 줌으로써 Tag의 속성이나 값을 variable로 정해 변화를 줄 수 있다.
### 2.3 Function Props & Memo
- Function도 Props를 통해 보낼 수 있다.
- 이때 Container에 들어가는 Function과 html 태그에 Event Listener를 넣는 것과 구분할 필요가 있다.
- 부모 Component 상태를 바꾸는 Modifier를 자식 Component에게 주면 자식뿐만 아니라 부모가 통째로 render된다.
- `React.Memo([Container])`를 통해 위의 경우에서 변동이 있는 내용만 render하도록 제한할 수 있다.
  - 예시)
  ```javascript
  const Button() { ... }
  const MemorizedButton = React.memo(Button)
  ...
  <MemorizedButton />
  ```
### 2.4 Prop Types
- Prop의 Types와 관련된 Error가 뜨도록 설정할 수 있다.
  - 다음 링크를 script한다.
  ```html
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  ```
- Container 밖에서 해당 Container의 Prop들의 DataTypes에 대해 설명한다.
  - 예시)
  ```javascript
  [ContainerName].propTypes = {
  	[PropName]: [PropType],
	...
  }
  ```
- 해당 package가 다루는 PropType에는 `Number`, `String`, `Boolean`,`Function`, `Array`, `Object`,  `Symbol`이 있다.
- 만약 Prop이 필수라면 `PropTypes.[PropType].isRequired`로 한다.
- 만약 Prop이 default값을 가져야 한다면 이는 Container의 Argument로 설정한다.
  - 예시)
  ```javascript
  const Button({ text, fontSize = 15 }) { ... }
  ```
## 3.0 React Hook
### 3.1 Hook란,
### 3.2 useEffect
- state가 변동이 있으면 해당 Container가 다시 로드하게 된다.
- 이때 최초 한번만 실행되거나 특정 조건에서만 실행되게 하고 싶다면 `useEffect`를 사용하자.
- `useEffect` 사용하는 방법
  - 예시)
  ```javascript
  import { useEffect } from "react";
  useEffect(() => { ~ }, [DEPENDENCIES]);
  ```
  - `useEffect(~)` 안에 function을 넣으면 된다.
  - 이때 `[DEPENDENCIES]` 안에 state을 넣으면 특정 state가 변동이 있을 때만 실행하게 된다.
    - 만약 `DEPENDENCIES`를 비우면(`[]`) 최초 한번만 실행된다.
	- 추가로 조건을 넣고 싶다면 `if`를 사용하자.
- CleanUp Function
  - Container가 사라질 때 트리거되는 함수
  ```javascript
  function Hello() {
  	...
	return () => { ~ };
  }
  ```
  - Container나 function이 return할 때 함수를 실행하면 된다.

### Create React App(CRA)
- CRA란,
  - React Project 관리자
- CRA의 장점
  - 개발 서버에 접근가능하다
  - 자동으로 refresh해준다
  - 즉각적으로 CSS 포함
  - publish할 때 코드 압축
- Create React App(CRA) 설치하기
  - nodeJS가 설치되어 있어야 한다.
  - `npx create-react-app [PROJECT_NAME]`

  