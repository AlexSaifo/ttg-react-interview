import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { TodoActions } from '../actions';
import AddTodo from '../components/AddTodo';
import TaskList from '../components/TaskList';
import { Box, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      backgroundColor: theme.palette.background.default,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[3],
      margin: '1rem',
    },
    title: {
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main,
    },
  })
);

const TodoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.todo.tasks);
  const todoActions = new TodoActions();

  const handleAddTask = () => {
    dispatch(todoActions.loadTodos());
  };

  const handleDeleteTask = (id: number) => {
    dispatch(todoActions.removeTodo(id));
  };

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        My Todo List
      </Typography>

      <AddTodo onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </Paper>
  );
};

export default TodoList;
