'use client';

import Image from "next/image";
import styles from "./page.module.css";
import useGetTodos from "@/hooks/useGetTodos";
import "./style.css"
import { Todo } from "@/types";
import useUpdateTodo from "@/hooks/useUpdateTodo";

export default function Home() {
  const { todos, isLoading, error } = useGetTodos();
  const { updateTodo } = useUpdateTodo();

  const handleChangeTodo = (todo: Todo) => {
    updateTodo({ ...todo, completed: !todo.completed});
  };
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          {isLoading && <p>Loading...</p>}
          {!isLoading && error && <p>Error: {error}</p>}
          {!isLoading && !error && todos ? (
            <ul>
              {todos.map((todo) => (
                
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                  <input type="checkbox" key={todo.id} checked={todo.completed} onChange={() => handleChangeTodo(todo)} />
                  {todo.title}
                </li>
              ))}
            </ul>
          ) : <p>There are not pending tasks</p>
          }
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
