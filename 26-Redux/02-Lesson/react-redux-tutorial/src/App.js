import PostLists from "./features/post/PostLists";
import AddPostForm from "./features/post/AddPostForm";
function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostLists />
    </main>
  );
}

export default App;
