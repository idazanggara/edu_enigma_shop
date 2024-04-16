function TodoService() {
    let todos = [
        {
            id: '1',
            task: 'Mokel',
            description: 'Adil mokel astagfirullah',
            status: true,
        }
    ];

    const create = (todo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (todo) {
                    todos = [...todos, todo];
                    resolve('Sukses tambah Todo');
                } else {
                    reject('Todo tidak boleh kosong')
                }
            }, 1500)
        });
    }

    const getAll = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (todos.length > 0) {
                    resolve(todos);
                } else {
                    reject('Error: Todos is empty')
                }
            }, 2000);
        })
    }

    const update = (todo) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (todo) {
                    todos = todos.map((t) => {
                        if (t.id === todo.id) {
                            return { ...todo }
                        }
                        return t;
                    });
                    resolve('Sukses update Todo');
                } else {
                    reject('Todo tidak boleh kosong')
                }
            }, 1500)
        });
    }

    return {
        getAll,
        create,
        update,
    }
}

export default TodoService;