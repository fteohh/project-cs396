const baseURL = 'http://localhost:8081';
let doctors;
let companions;

const initResetButton = () => {
    // if you want to reset your DB data, click this button:
    document.querySelector('#reset').onclick = ev => {
        fetch(`${baseURL}/reset/`)
            .then(response => response.json())
            .then(data => {
                console.log('reset:', data);
            });
    };
};

const showDetail = ev => {
    const id = ev.currentTarget.dataset.id;

    // find the current doctor from the doctors array:
    const doctor = doctors.filter(doctor => doctor._id === id)[0];
    
    // append the doctor template to the DOM:
    document.querySelector('#doctor').innerHTML = `
        <div id= "ind_doctor">
            <h2>${doctor.name}</h2>
            <br>
            <img src="${doctor.image_url}" />
            <p>Seasons: ${doctor.seasons}</p>
        </div>
        <div id="action-links">
            <a href="#" id="edit" onclick = editDoctor('${id}')>edit</a>
            <a href="#" id="delete" onclick = deleteDoctor('${id}')>delete</a>
        </div>
    `;

    fetch('/doctors/'+ `${id}` +'/companions')
    .then(response => response.json())
    .then(data => {
        companions = data;
        const listItems = data.map(item => `
                <div class="compan">
                    <img src="${item.image_url}" />
                    <p>${item.name}</p>
                    <div id="action-links">
                        <a href="#" id="edit" onclick = "editCompanion('${id}','${item._id}')">edit</a>
                        <a href="#" id="delete" onclick = "deleteCompanion('${item._id}')">delete</a>
                    </div>
                </div>`
        );
        document.getElementById('companions').innerHTML = `
            <div id ="companion-container">
                <h2>Companions</h2>
                ${listItems.join('')}
            <div>
            <br>
            <button type="button" onclick= addCompanion('${id}');>Add New Companion</button>`
    });
}

const attachEventHandlers = () => {
    // once the unordered list has been attached to the DOM
    // (by assigning the #doctors container's innerHTML),
    // you can attach event handlers to the DOM:
    document.querySelectorAll('#doc-list a').forEach(a => {
        a.onclick = showDetail;
    });
};

fetch('/doctors')
    .then(response => response.json())
    .then(data => {
        // store the retrieved data in a global variable called "doctors"
        doctors = data;
        ordering = doctors.length;
        const listItems = data.map(item => `
            <li>
                <a href="#" data-id="${item._id}">${item.name}</a>
            </li>`
        );
        document.getElementById('doc-list').innerHTML = `
            <ol>
                ${listItems.join('')}
            </ol>
            <button type="button" onclick= addDoctor();>Add New Doctor</button>`
    })
    .then(attachEventHandlers);


const addDoctor = () =>{
    document.querySelector('#doctor').innerHTML =
        `<span class="error" aria-live="polite"></span>
        <form>
            <!-- Name -->
            <label for="name">Name</label>
            <input type="text" id="name">
            <br>
            <br>

            <!-- Seasons -->
            <label for="seasons">Seasons</label>
            <input type="text" id="seasons">
            <br>
            <br>

            <!-- Ordering -->
            <label for="ordering">Ordering</label>
            <input type="text" id="ordering">
            <br>
            <br>

            <!-- Image -->
            <label for="image_url">Image</label>
            <input type="text" id="image_url">
            <br>
            <br>

            <!-- Buttons -->
            <button class="btn btn-main" id="create" onclick= processSave()>Save</button>
            
            <button class="btn" id="cancel" onclick = processCancel();>Cancel</button>
            <br>
            <br>
        </form>`;
    document.getElementById('companions').innerHTML =  ``;
};

const processCancel = ev =>{
    document.querySelector('#doctor').innerHTML = ``;
}

const processSave = ev => {
    // your code here:
    console.log("Save the doctor!")

    let seasons_str = document.querySelector('#seasons').value;
    seasons_str = seasons_str.split(", ");
    console.log(seasons_str)
    seasons_array = []
    seasons_str.forEach(elem =>{
        if (isNaN(parseInt(elem))== false){
            console.log(elem)
            seasons_array.push(parseInt(elem))
        }
        else {
            document.querySelector('.error').innerHTML= "Please verify that your seasons field is correct.";
            document.querySelector('.error').style.display = "block";
            return;
        }
    })
    console.log(seasons_array)

    if (document.querySelector('#name').value.length ==0){
        document.querySelector('.error').innerHTML= "Name is a required field.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    if ( isNaN(parseInt(document.querySelector('#ordering').value))){
        //console.log("not a number folks")
        document.querySelector('.error').innerHTML= "Please verify that your ordering field is correct.";
        document.querySelector('.error').style.display = "block";
        return;
    }

    else{
    fetch('/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": document.querySelector('#name').value,
            "seasons": seasons_array,
            "ordering": parseInt(document.querySelector('#ordering').value),
            "image_url":document.querySelector('#image_url').value
        })
    })
    .then (response => response.json())
    .then(doctor =>
        {
            fetch('/doctors')
                .then(response => response.json())
                .then(data => {
                    // store the retrieved data in a global variable called "doctors"
                    doctors = data;
                    ordering = doctors.length;
                    const listItems = data.map(item => `
                        <li>
                            <a href="#" data-id="${item._id}">${item.name}</a>
                        </li>`
                    );
                    document.getElementById('doc-list').innerHTML = `
                        <ol>
                            ${listItems.join('')}
                        </ol>
                        <button type="button" onclick= addDoctor();>Add New Doctor</button>`
                })
            .then(attachEventHandlers);
            document.querySelector('#doctor').innerHTML = `
                <div id= "ind_doctor">
                    <h2>${doctor.name}</h2>
                    <br>
                    <img src="${doctor.image_url}" />
                    <p>Seasons: ${doctor.seasons}</p>
                </div>
                <div id="action-links">
                    <a href="#" id="edit" onclick = editDoctor('${doctor._id}')>edit</a>
                    <a href="#" id="delete" onclick = deleteDoctor('${doctor._id}')>delete</a>
                </div>
            `;
        })
    }
      

    // don't forget to prevent the default
    // submit button behavior from firing:
    //ev.preventDefault();
};

const editDoctor = id => {
    console.log("edit!");
    console.log(id)
    const doctor = doctors.filter(doctor => doctor._id === id)[0];
    console.log(doctor.image_url)


    document.querySelector('#doctor').innerHTML =
        `<span class="error" aria-live="polite"></span>
        <form novalidate >
            <!-- Name -->
            <label for="name">Name</label>
            <input type="text" id="name" value="${doctor.name}">
            <br>
            <br>

            <!-- Seasons -->
            <label for="seasons">Seasons</label>
            <input type="text" id="seasons" value="${doctor.seasons}">
            <br>
            <br>

            <!-- Ordering -->
            <label for="ordering">Ordering</label>
            <input type="text" id="ordering" value="${doctor.ordering}">
            <br>
            <br>

            <!-- Image -->
            <label for="image_url">Image</label>
            <input type="text" id="image_url" value="${doctor.image_url}">
            <br>
            <br>

            <!-- Buttons -->
            <button class="btn btn-main" id="create" onclick= processEdit('${id}')>Save</button>
            
            <button class="btn" id="cancel" onclick = processCancelEdit('${id}');>Cancel</button>
            <br>
            <br>
        </form>`;
};

const processEdit = id => {
    console.log("patching!")
    // your code here:

    let seasons_str = document.querySelector('#seasons').value;
    seasons_str = seasons_str.split(", ");
    seasons_array = []
    seasons_str.forEach(elem =>{
        seasons_array.push(parseInt(elem))
    });

    if (document.querySelector('#name').value.length ==0){
        document.querySelector('.error').innerHTML= "Name is a required field.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    console.log(seasons_array[0])
    if (isNaN(seasons_array[0])) {
        console.log("not right folks")
        document.querySelector('.error').innerHTML= "Please verify that your seasons field is correct.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    if ( isNaN(parseInt(document.querySelector('#ordering').value))){
        console.log("not a number folks")
        document.querySelector('.error').innerHTML= "Please verify that your ordering field is correct.";
        document.querySelector('.error').style.display = "block";
        return;
    }

    else{

    fetch('/doctors/' + `${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": document.querySelector('#name').value,
            "seasons": seasons_array,
            "ordering": parseInt(document.querySelector('#ordering').value),
            "image_url":document.querySelector('#image_url').value
        })
    })
    .then (response => response.json())
    .then(doctor =>
        {
            fetch('/doctors')
                .then(response => response.json())
                .then(data => {
                    // store the retrieved data in a global variable called "doctors"
                    doctors = data;
                    const listItems = data.map(item => `
                        <li>
                            <a href="#" data-id="${item._id}">${item.name}</a>
                        </li>`
                    );
                    document.getElementById('doc-list').innerHTML = `
                        <ol>
                            ${listItems.join('')}
                        </ol>
                        <button type="button" onclick= addDoctor();>Add New Doctor</button>`
                })
            .then(attachEventHandlers);
            document.querySelector('#doctor').innerHTML = `
                <div id= "ind_doctor">
                    <h2>${doctor.name}</h2>
                    <br>
                    <img src="${doctor.image_url}" />
                    <p>Seasons: ${doctor.seasons}</p>
                </div>
                <div id="action-links">
                    <a href="#" id="edit" onclick = editDoctor('${id}')>edit</a>
                    <a href="#" id="delete" onclick = deleteDoctor('${id}')>delete</a>
                </div>
            `;
        })
    }
    // don't forget to prevent the default
    // submit button behavior from firing:
    id.preventDefault();
}

const processCancelEdit = id =>{
    const doctor = doctors.filter(doctor => doctor._id === id)[0];
    document.querySelector('#doctor').innerHTML = `
        <div id= "ind_doctor">
            <h2>${doctor.name}</h2>
            <br>
            <img src="${doctor.image_url}" />
            <p>Seasons: ${doctor.seasons}</p>
        </div>
        <div id="action-links">
            <a href="#" id="edit" onclick = editDoctor('${id}')>edit</a>
            <a href="#" id="delete" onclick = deleteDoctor('${id}')>delete</a>
        </div>
    `;
}

const deleteDoctor = id => {
    console.log("delete!")
    const doctor = doctors.filter(doctor => doctor._id === id)[0];
    if (confirm("Are you sure you want to delete " + `${doctor.name}` +"?") == true)
    {
        console.log("let's delete")

        fetch('/doctors/' + `${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                // send to catch block:
                throw Error(response.statusText);
            } else {
                // because the endpoint returns a 
                // null value, use the text() method
                // instead of the .json() method:
                return response.text();
            }
        })
        .then(doctor =>
            {
                fetch('/doctors')
                    .then(response => response.json())
                    .then(data => {
                        // store the retrieved data in a global variable called "doctors"
                        doctors = data;
                        const listItems = data.map(item => `
                            <li>
                                <a href="#" data-id="${item._id}">${item.name}</a>
                            </li>`
                        );
                        document.getElementById('doc-list').innerHTML = `
                            <ol>
                                ${listItems.join('')}
                            </ol>
                            <button type="button" onclick= addDoctor();>Add New Doctor</button>`
                    })
                .then(attachEventHandlers);
                document.querySelector('#doctor').innerHTML = ``;
                document.querySelector('#companions').innerHTML = ``;
            })

        // don't forget to prevent the default
        // submit button behavior from firing:
        id.preventDefault();
    }
};

//// EXTRA CREDIT
////
////
////

const addCompanion = id =>{
    document.querySelector('#companions').innerHTML =
        `<span class="error" aria-live="polite"></span>
        <form>
            <!-- Name -->
            <label for="name">Name</label>
            <input type="text" id="companion-name">
            <br>
            <br>

            <!-- Character -->
            <label for="character">Character</label>
            <input type="text" id="companion-character">
            <br>
            <br>

            <!-- Alive -->
            <label for="alive">Alive</label>
            <input type="text" id="companion-alive">
            <br>
            <br>

            <!-- Seasons -->
            <label for="seasons">Seasons</label>
            <input type="text" id="companion-seasons">
            <br>
            <br>

            <!-- Doctors -->
            <label for="doctors">Doctors</label>
            <input type="text" id="companion-doctors" value = "${id}">
            <br>
            <br>

            <!-- Image -->
            <label for="image_url">Image</label>
            <input type="text" id="companion-image_url">
            <br>
            <br>

            <!-- Buttons -->
            <button class="btn btn-main" id="create" onclick= processCompanionSave('${id}')>Save</button>
            <button class="btn" id="cancel" onclick = processCompanionCancel('${id}');>Cancel</button>
            <br>
            <br>
        </form>`;
};

const processCompanionCancel = id =>{
    console.log("companion cancel")
    fetch('/doctors/'+ `${id}` +'/companions')
    .then(response => response.json())
    .then(data => {
        companions = data;
        const listItems = data.map(item => `
                <div class="compan">
                    <img src="${item.image_url}" />
                    <p>${item.name}</p>
                    <div id="action-links">
                        <a href="#" id="edit" onclick = "editCompanion('${id}','${item._id}')">edit</a>
                        <a href="#" id="delete" onclick = "deleteCompanion('${item._id}')">delete</a>
                    </div>
                </div>` 
        );
        document.getElementById('companions').innerHTML = `
            <div id ="companion-container">
                <h2>Companions</h2>
                ${listItems.join('')}
            <div>
            <br>
            <button type="button" onclick= addCompanion('${id}');>Add New Companion</button>`
    });
}

const processCompanionSave = id => {
    // your code here:
    console.log("Save the companion!")

    let seasons_str = document.querySelector('#companion-seasons').value;
    seasons_str = seasons_str.split(", ");
    console.log(seasons_str)
    seasons_array = []
    seasons_str.forEach(elem =>{
        if (isNaN(parseInt(elem))== false){
            console.log(elem)
            seasons_array.push(parseInt(elem))
        }
        else {
            document.querySelector('.error').innerHTML= "Please verify that your seasons field is correct.";
            document.querySelector('.error').style.display = "block";
            return;
        }
    })
    console.log(seasons_array)

    if (document.querySelector('#companion-name').value.length ==0){
        document.querySelector('.error').innerHTML= "Name is a required field.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    if (document.querySelector('#companion-character').value.length ==0){
        document.querySelector('.error').innerHTML= "Please verify that your character field is correct.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    let alive;
    if (document.querySelector('#companion-alive').value.toLowerCase() =="true" || (document.querySelector('#companion-alive').value.toLowerCase() =="false")){
        if (document.querySelector('#companion-alive').value.toLowerCase() =="true")
        {
            alive = true;
        }
        else {
            alive = false;
        }
    }
    else{
        document.querySelector('.error').innerHTML= "Please verify that your alive field is correct.";
        document.querySelector('.error').style.display = "block";
        return;
    }

    fetch('/companions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": document.querySelector('#companion-name').value,
            "character": document.querySelector('#companion-character').value,
            "alive": alive,
            "seasons": seasons_array,
            "doctors": document.querySelector('#companion-doctors').value,
            "image_url":document.querySelector('#companion-image_url').value
        })
    })
    .then (response => response.json())
    .then(companion =>
        {
            fetch('/doctors/'+ `${id}` +'/companions')
            .then(response => response.json())
            .then(data => {
                companions = data;
                const listItems = data.map(item => `
                        <div class="compan">
                            <img src="${item.image_url}" />
                            <p>${item.name}</p>
                            <div id="action-links">
                                <a href="#" id="edit" onclick = "editCompanion('${id}', '${item._id}')">edit</a>
                                <a href="#" id="delete" onclick = "deleteCompanion('${item._id}')">delete</a>
                            </div>
                        </div>`
                );
                document.getElementById('companions').innerHTML = `
                    <div id ="companion-container">
                        <h2>Companions</h2>
                        ${listItems.join('')}
                    <div>
                    <br>
                    <button type="button" onclick= addCompanion('${id}');>Add New Companion</button>`
            });
        })

      

    // don't forget to prevent the default
    // submit button behavior from firing:
    //ev.preventDefault();
};

const editCompanion = (doc_id, com_id) => {
    console.log("edit!");
    const doctor = doctors.filter(doctor => doctor._id === doc_id)[0];
    console.log(doctor)

    const companion = companions.filter(companion => companion._id === com_id)[0];
    console.log(companion.alive)
    console.log(companion)


    document.querySelector('#companions').innerHTML =
        `<span class="error" aria-live="polite"></span>
        <form>
            <!-- Name -->
            <label for="name">Name</label>
            <input type="text" id="companion-name" value = "${companion.name}">
            <br>
            <br>

            <!-- Character -->
            <label for="character">Character</label>
            <input type="text" id="companion-character" value = "${companion.character}">
            <br>
            <br>

            <!-- Alive -->
            <label for="alive">Alive</label>
            <input type="text" id="companion-alive" value = "${companion.alive}">
            <br>
            <br>

            <!-- Seasons -->
            <label for="seasons">Seasons</label>
            <input type="text" id="companion-seasons" value = "${companion.seasons}">
            <br>
            <br>

            <!-- Doctors -->
            <label for="doctors">Doctors</label>
            <input type="text" id="companion-doctors" value = "${doc_id}">
            <br>
            <br>

            <!-- Image -->
            <label for="image_url">Image</label>
            <input type="text" id="companion-image_url" value = "${companion.image_url}">
            <br>
            <br>

            <!-- Buttons -->
            <button class="btn btn-main" id="create" onclick= processCompanionEdit('${com_id}')>Save</button>
            <button class="btn" id="cancel" onclick = processCompanionCancel('${doc_id}');>Cancel</button>
            <br>
            <br>
        </form>`;
};

const processCompanionEdit = id => {
    console.log("patching!")
    // your code here:
    // let doc_id= document.querySelector('#companion-doctors').value;
    // console.log(doc_id)

    let seasons_str = document.querySelector('#companion-seasons').value;
    seasons_str = seasons_str.split(", ");
    console.log(seasons_str)
    seasons_array = []
    seasons_str.forEach(elem =>{
        if (isNaN(parseInt(elem))== false){
            console.log(elem)
            seasons_array.push(parseInt(elem))
        }
        else {
            document.querySelector('.error').innerHTML= "Please verify that your seasons field is correct.";
            document.querySelector('.error').style.display = "block";
            return;
        }
    })
    console.log(seasons_array)

    if (document.querySelector('#companion-name').value.length ==0){
        document.querySelector('.error').innerHTML= "Name is a required field.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    if (document.querySelector('#companion-character').value.length ==0){
        document.querySelector('.error').innerHTML= "Please verify that your character field is correct.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    let alive;
    if (document.querySelector('#companion-alive').value.toLowerCase() =="true" || (document.querySelector('#companion-alive').value.toLowerCase() =="false")){
        if (document.querySelector('#companion-alive').value.toLowerCase() =="true")
        {
            alive = true;
        }
        else {
            alive = false;
        }
    }
    else{
        document.querySelector('.error').innerHTML= "Please verify that your alive field is correct.";
        document.querySelector('.error').style.display = "block";
        return;
    }
    
    fetch('/companions/' + `${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": document.querySelector('#companion-name').value,
            "character": document.querySelector('#companion-character').value,
            "alive": alive,
            "seasons": seasons_array,
            "doctors": document.querySelector('#companion-doctors').value,
            "image_url":document.querySelector('#companion-image_url').value
        })
    })
    .then (response => response.json())
    .then(companion =>
        {
            fetch('/doctors/'+ document.querySelector('#companion-doctors').value +'/companions')
            .then(response => response.json())
            .then(data => {
                companions = data;
                const listItems = data.map(item => `
                        <div class="compan">
                            <img src="${item.image_url}" />
                            <p>${item.name}</p>
                            <div id="action-links">
                                <a href="#" id="edit" onclick = "editCompanion('${id}','${item._id}')">edit</a>
                                <a href="#" id="delete" onclick = "deleteCompanion('${item._id}')">delete</a>
                            </div>
                        </div>`
                );
                document.getElementById('companions').innerHTML = `
                    <div id ="companion-container">
                        <h2>Companions</h2>
                        ${listItems.join('')}
                    <div>
                    <br>
                    <button type="button" onclick= addCompanion('${id}');>Add New Companion</button>`
            });
        })
    // don't forget to prevent the default
    // submit button behavior from firing:
    //id.preventDefault();
}

const deleteCompanion = id => {
    console.log("delete!")
    const companion = companions.filter(companion => companion._id === id)[0];
    if (confirm("Are you sure you want to delete " + `${companion.name}` +"?") == true)
    {
        console.log("let's delete")

        fetch('/companions/' + `${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                // send to catch block:
                throw Error(response.statusText);
            } else {
                // because the endpoint returns a 
                // null value, use the text() method
                // instead of the .json() method:
                return response.text();
            }
        })
        .then(companion =>
            {
                fetch('/doctors/'+ `${id}`)
                .then(response => response.json())
                .then(data => {
                    companions = data;
                    const listItems = data.map(item => `
                            <div class="compan">
                                <img src="${item.image_url}" />
                                <p>${item.name}</p>
                                <div id="action-links">
                                    <a href="#" id="edit" onclick = "editCompanion('${id}','${item._id}')">edit</a>
                                    <a href="#" id="delete" onclick = "deleteCompanion('${item._id}')">delete</a>
                                </div>
                            </div>`
                    );
                    document.getElementById('companions').innerHTML = `
                        <div id ="companion-container">
                            <h2>Companions</h2>
                            ${listItems.join('')}
                        <div>
                        <br>
                        <button type="button" onclick= addCompanion('${id}');>Add New Companion</button>`
                });
            })

        // don't forget to prevent the default
        // submit button behavior from firing:
        //id.preventDefault();
    }
};



// invoke this function when the page loads:
initResetButton();