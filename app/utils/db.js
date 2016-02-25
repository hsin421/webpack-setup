
export function fetchTodo(cb) {
	setTimeout(() => cb(fakeTodos),
		2000);
}

export function fetchInitialTodos(cb) {
	setTimeout(() => cb(fakeTodos.slice(0,15)),
		800);
}

export function loadMore(lastIndex, cb) {
	setTimeout(() => cb(fakeTodos.slice(lastIndex, lastIndex + 15)),
		800);
}

var fakeTodos = [
	{content: 'Buy coffee bean'}, 
	{content: 'Drink Redbull'}, 
	{content: 'Call dad'},
	{content: 'Buy milk shake'}, 
	{content: 'Take Pills'}, 
	{content: 'Call mom'}
];