import {useState, useCallback, useRef} from 'react';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text: '리액트의 기초 알아보기',
      checked: true,
    },
    {
      id:2,
      text: '컴포넌트 스타일링 해보기',
      checked: true,
    },
    {
      id:3,
      text: '일정관리 앱 만들어 보기',
      checked: false,
    },
  ]);

  // 고윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },[todos],
  )

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    },[todos],
  );

  // 배열 내장함수 map을 사용하고 특정 id를 가지고 있는
  // 객체의 checked값을 반전시켰습니다. - 284p
  const onToggle = useCallback(
    id => {
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo,),
      );
    },[todos]
  );

  return (
   <div>
     <TodoTemplate>
     <TodoInsert onInsert={onInsert}/>
     <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
     </TodoTemplate>
   </div>
  );
}

export default App;
