// import React, { useState } from 'react';
// import TodoItem from './TodoItem';

// const TodoList = ({todos}) => {
//     const [todos, setTodos] = useState([])
//     const [title, setTitle] = useState('')
//     const [content, setContent] = useState('')

//     const addTodo = (e) =>{
//     e.preventDefault()
//     const newTodo ={
//       title, content
//     }
//     setTodos([...todos, newTodo])
//   }
//     setTitle('')
//     setContent('')
//     return (
//         <div>
//             <div>
//       <h1>Создание задачи</h1>
//           <form className='myForm'>
//             <input className='myInput' type="text" placeholder='Название задачи'
//             value={title} onChange={e => setTitle(e.target.value)}/>
            
//             <input className='myInput' type='text' placeholder='Описание задачи'
//             value={content} onChange={e => setContent(e.target.value)}
//             />
//             <div>
//               <button className='myButton' onClick={addTodo}>Создать задачу</button>
//             </div>
            
//           </form>
//       </div>
//           <h1>Список задач</h1>
//           {todos.map((todo, index) =>
//             <TodoItem num={index} todo={todo}  key={index}/>
//             )}
//         </div>
//     );
// };

// export default TodoList;