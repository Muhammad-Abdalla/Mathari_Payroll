<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

        let UserCreds = JSON.parse(sessionStorage.getItem('user-creds'));
        let UserInfo = JSON.parse(sessionStorage.getItem('user-info'));

        let msgHead = document.getElementById('msg');
        let greetHead = document.getElementById('greet');
        let signOutButton = document.getElementById('sign-out-btn');


        let signOut = () =>
        {
            sessionStorage.removeItem("user-creds");
            sessionStorage.removeItem("user-info");
            window.location.href = 'login.html';
        }

        let checkCred = () =>
        {
            if(!sessionStorage.getItem("user-creds"))
            // WATCH OUT FOR THIS CODE BELOW
            window.location.href = 'login.html'

            else
            {
                msgHead.innerText = `user with email "${UserCreds.email}" logged in`;
                greetHead.innerText = `Welcome ${userInfo.firstname + " " + userInfo.lastname}!`;   
            }
        }

        window.addEventListener('load', checkCred);
        signOutButton.addEventListener('click', signOut);
