const list =  JSON.parse(localStorage.getItem('list'))


//     [
//     {
//         id: 'id1',
//         title: 'Learn CSS',
//         done: true,
//     },
//     {
//         id: 'id2',
//         title: 'Learn JS',
//         done: false,
//     },
//     {
//         id: 'id3',
//         title: 'Learn React',
//         done: false,
//     },
//     {
//         id: 'id4',
//         title: 'Get a job',
//         done: false,
//     },
// ];

const listElement = document.getElementById('list');
const todoInput = document.getElementById('todoInput');

function render() {
    listElement.innerHTML = null;
    list.forEach(el => {
        const listItem = document.createElement('li');
        listItem.setAttribute('class', el.done ? 'done' : 'progress');
        const listItemText = document.createTextNode(el.title);
        listItem.appendChild(listItemText);

        const buttonItem = document.createElement('button');
        buttonItem.setAttribute('id', el.id);
        const buttonItemText = document.createTextNode('Done');
        buttonItem.appendChild(buttonItemText);

        const buttonDelete = document.createElement('button');
        buttonDelete.setAttribute('id', el.id);
        const buttonDeleteText = document.createTextNode('Delete');
        buttonDelete.appendChild(buttonDeleteText);

        listItem.appendChild(buttonItem);
        listItem.append(buttonDelete);
        listElement.appendChild(listItem);



    });
}

render();

listElement.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const id = event.target.id;
        for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
                list[i].done = !list[i].done;
            }
        }
        updateLocalStorage()
        render();
    }
});


const addToList = () => {
    const todoInputValue = todoInput.value;
    list.push(
        {
            id: Math.random().toString(),
            title: todoInputValue,
            done: false,
        }
    );
    updateLocalStorage()

    render();

    todoInput.value = '';
};

const updateLocalStorage = () =>  localStorage.setItem('list', JSON.stringify(list));
