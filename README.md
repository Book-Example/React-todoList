# TodoList

# ToDoList

> UI 구성하기 - 10.2 (257p)
> 

### 1. Todo Template

화면을 가운데에 정렬시켜 주며, 앱 타이틀(일정 관리)을 보여줍니다.

chidren으로 내부 JSX를 props로 받아 와서 렌더링해 줍니다.

### 2. TodoInsert

새로운 항목을 입력하고 추가할 수 있는 컴포넌트 입니다.

state를 통해 인풋의 상태를 관리합니다.

### 3. TodoListItem

각 할 일 항목에 대한 정보를 보여주는 컴포넌트 입니다.

todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여줍니다.

### 4. TodoList

todos 배열을 props로 받아 온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의

TodoListItem 컴포넌트로 변환하여 보여 줍니다.

10.3.2 항목 추가 기능 구현하기

1. TodoInsert value 상태 관리하기 - 274p
2. todos 배열에 새 객체 추가하기 - 276p
3. TodoInsert에서 onSubmit 이벤트 설정하기 - 278p

10.3.3 지우기 기능 구현하기

1. 배열 내장 함수 filter
    
    > filter 함수는 기존의 배열은 그대로 둔 상태에서      
    > 특정 조건을 만족하는 원소들만 따로 추출하여 새로운 배열을 만들어 줍니다.     
2. todos 배열에서 id로 항목 지우기
3. TodoListItem에서 삭제 함수 호출하기

10.3.4 수정 기능 구현하기

1. onToggle 구현하기
2. TodoListItem에서 토글함수 호출하기

11.3 느려지는 원인 분석

- 자신이 전달받은 props가 변경될 떄
- 자신의 state가 바뀔 때
- 부모 컴포넌트가 Rerendering 될 때
- forceUpdate 함수가 실행될 때

✅ Rerendering이 불필요한 경우, Rerendering을 방지해주어야 한다.

Component의 Rerendering을 방지할 때는 React.memo라는 함수를 사용해서    
Component의 props가 바뀌지 않았다면, Rerendering하지 않도록 설정하여    
함수 Component의 Rerendering 성능을 최적화할 수 있다.

# npm install
✅ npm install sass    
✅ npm install react-icons    
✅ npm install classnames - 238p    
---
### The Art of React, 2nd (리액트를 다루는 기술) - 김민준 저 / 7쇄: 2021-08-20
