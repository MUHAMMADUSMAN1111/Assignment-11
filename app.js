function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!(email && password)) {
        alert('FILL BOTH FEILD')
    }
    else if (!(email.includes('@'))) {
        alert('ENTER EMAIL')
    }
    else {
        console.log(email, password);
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                alert("WRONG INPUT")
                // ..
            });
    }
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!(email && password)) {
        alert('FILL BOTH FEILD')
    }
    else if (!(email.includes('@'))) {
        alert('ENTER EMAIL')
    }
    else if (!(password.length > 6)) {
        alert('ENTER STRONG PASSWARD')
    }
    else {
        console.log(email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
            });
    }
}