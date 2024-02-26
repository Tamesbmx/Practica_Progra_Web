// Array de tareas
const tasks = ["Hacer la compra", "Estudiar para el examen", "Llamar a Juan","ES DIFICIL PERO SI SE PUEDE" ];

function toggleTextDecoration(checkbox, label) {
    if (checkbox.checked) {
        label.classList.add('completed');
    } else {
        label.classList.remove('completed');
    }
}
// Obtener el formulario
const taskForm = document.getElementById('taskForm');

function Update_list() {
    taskForm.innerHTML = '';
    // Iterar sobre el array de tareas y crear los checkboxes
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        
        // Crear un nuevo elemento de input (checkbox)
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'task' + i; // Asignar un ID único a cada checkbox
        checkbox.name = 'task'; // Asignar el mismo nombre para agruparlos
        checkbox.value = task; // Asignar el valor de la tarea

        // Crear una etiqueta para la tarea
        const label = document.createElement('label');
        label.htmlFor = 'task' + i; // Asignar el mismo ID que el checkbox
        label.textContent = task; // Establecer el texto de la etiqueta
        label.id = 'label' + i; // Asignar un ID único a cada checkbox
        // Crear un salto de línea para separar los checkboxes
        const lineBreak = document.createElement('br');

        // Agregar el checkbox y la etiqueta al formulario
        taskForm.appendChild(checkbox);
        taskForm.appendChild(label);
        taskForm.appendChild(lineBreak);

        document.getElementById('task' + i).addEventListener('change', function() {
            toggleTextDecoration(this, document.getElementById('label'+ i));
        });
    }
}


function Add_task() {
   let new_task = document.getElementById('new_task').value;

   if (new_task == '') {
    alert('No espacio en blanco')
   } else {
    tasks.push(new_task);  
    Update_list();
    document.getElementById('new_task').value = '';
   }
}

Update_list();