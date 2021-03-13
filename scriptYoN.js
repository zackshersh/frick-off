const API_url= 'https://yesno.wtf/api'
    async function getResponse() {
            const response = await fetch(API_url);
            const data = await response.json();
            const { answer, image} = data;
            console.log(data);
            

            document.getElementById("ans").textContent = answer
            document.getElementById("img").src = image
        }

        

        getResponse()

       