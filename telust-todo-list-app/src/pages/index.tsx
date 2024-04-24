import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";
import AddTodo from "@/features/add-todo.component";
import FilterTodoItems from "@/features/filter-todo-items.component";
import TodoList from "@/features/todo-list.component";
import theme from "@/theme";
import { AppInitialProps, AppProps } from "next/app";
const TodoListContext = dynamic(() => import("@/features/todo-list.context"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo List App</title>
        <meta name="description" content="Todo List app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="emotion-insertion-point" content="" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className={`${styles.main}`}>
          <h1>React Micro front-end Todo</h1>
          <TodoListContext>
            <AddTodo />
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyItems="center"
            >
              <Grid item xs={12}>
                <FilterTodoItems />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              paddingTop={4}
              maxHeight={400}
              overflow={"auto"}
            >
              <Grid item xs={12}>
                <TodoList />
              </Grid>
            </Grid>
          </TodoListContext>
        </main>
      </ThemeProvider>
    </>
  );
}
