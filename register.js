import {
  auth,
  createUserWithEmailAndPassword,
  db,
  doc,
  onAuthStateChanged,setDoc
} from "./firbaseConfig.js";



onAuthStateChanged(auth,(user) => {
    if (user) {
        const uid = user.uid;
        console.log("uid===>",uid)
        // window.location.href = "./profiel.html";
        // console.log('User uid-->', uid)
        // loader_container.style.display = 'none'
        // createAccountContainer.style.display = 'none'
        // content_container.style.display = 'block'
        // getPosts()
        // const info = await getUserInfo(uid)
        // welcome.innerHTML = `Welcome ${info.name}`
        // ...
    } else {
        console.log("user Sign Out");
        // console.log('User is not logged in')
        // loader_container.style.display = 'none'
        // createAccountContainer.style.display = 'block'
        // content_container.style.display = 'none'

    }
});


const registerForm = document.querySelectorAll("#register-form")[0];
// const registerBtn = document.querySelectorAll("#register-btn")[0];
registerForm.addEventListener('submit',(e) =>{
    e.preventDefault();
       // Show the loader
       loader.classList.remove('d-none');
       let userName = document.querySelectorAll("#user-name")[0].value;
    let email = document.querySelectorAll("#email-register")[0].value;
    let password = document.querySelectorAll("#password-register")[0].value;
  
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("user-register", user);
        const userInfo = {
            userName,
            email,
            uid: user.uid,
        };
        
        const todoRef = doc(db, "todos", user.uid);
        console.log("todoRef", todoRef);
        await setDoc(todoRef, userInfo);
        
        // Hide the loader
        loader.classList.add('d-none');
        
        window.location.href = "./profiel.html";
        console.log("user Sign Up");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
        // ..
    });
})

// const register = (e) => {
    //   e.preventDefault();
    //   let userName = document.querySelectorAll("#user-name")[0].value;
    //   let email = document.querySelectorAll("#email-register")[0].value;
    //   let password = document.querySelectorAll("#password-register")[0].value;
    
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then(async (userCredential) => {
        //       const user = userCredential.user;
        //       console.log("user-register", user);
        //       const userInfo = {
            //         userName,
            //         email,
            //         uid: user.uid,
            //       };
            
            //       const ecomUserRef = doc(db, "ecom_user", user.uid);
            //       console.log("ecomUserRef", ecomUserRef);
            //       await setDoc(ecomUserRef, userInfo);
            //       console.log("user Sign Up");
            //     })
            //     .catch((error) => {
                //       const errorCode = error.code;
                //       const errorMessage = error.message;
                //       console.log("error", error);
                //       // ..
                //     });
                // };
                // registerBtn.addEventListener("submit", register);
                
                // const registerBtn = document.querySelectorAll("#register-btn")[0];
                
                //  const register = () =>{
                    //     let userName = document.querySelectorAll("#user-name")[0].value;
                    //     let emailReg = document.querySelectorAll("#email-register")[0].value;
    //     let passwordReg = document.querySelectorAll("#password-register")[0].value;
    
    //     const userObj = {
        //         emailReg,
        //         userName;
        //     }
        
        // const auth = getAuth();
        // createUserWithEmailAndPassword(auth, emailReg, passwordReg)
        //   .then((userCredential) => {
            //     // Signed in
            //     const user = userCredential.user;
            //     console.log("user-register",user);
            //     // ...
            
            //   })
            //   .catch((error) => {
                //     const errorCode = error.code;
                //     const errorMessage = error.message;
                //     console.log("error",error);
                //     // ..
                //   });
                //  }
                
                //  registerBtn.addEventListener("click",register)
