import { CheckCircle, Checks, CheckSquare, CheckSquareOffset, Clipboard, ListChecks, Trash } from 'phosphor-react';
import { useState } from 'react';
import { ITask } from "../../App";
import { NewTask } from '../NewTask/NewTask';
import styles from './TaskList.module.css';

interface Props {
  tasks: ITask[];
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}


export function TaskList({ tasks, onComplete, onDelete }: Props) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => (
          <NewTask
            key={task.id}
            task={task}
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <Clipboard size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>

      
  )
}