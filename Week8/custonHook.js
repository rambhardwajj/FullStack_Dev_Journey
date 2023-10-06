

// custom hook , this is used for code reusablity and 
// we can also use the value once generated into another components using 
// swr , useSwr
function useTodos( ){
	const [todos, setTodos] = useState([]);
	const [loading , setLoading ] = useState(true);

	useEffect(()=>{
		const getTodo = async () =>{
			const res = await fetch("https://localhost:3000/todo/todos" , {
				headers: { Authorization : `Bearer ${localStorage.getItem("token")}`}
			});
			const data = await res.json();
			setTodos(data);
			setLoading(false);
		} 
		return {
			loading, 
			todos: todos
		}
	})
}