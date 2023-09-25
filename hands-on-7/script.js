const login = async (username, password) => {
  // * fill here...
  const login_user = { username, password }; // ประกาศรับค่า object
  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/login", {
      // * fill here...
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_user), // แปลง login_user เป็น JSON ไปใน body
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${res.status} - ${data.message}`);
    }

    return data.accessToken;
  } catch (err) {
    alert(err);
  }
};

const getMyinfomation = async () => {
  const token = localStorage.getItem("token");

  try {
    const res = await fetch("https://api.learnhub.thanayut.in.th/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

const main = () => {
  const usernameInput = document.getElementById("username");

  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit");

  const getMyinfoButton = document.getElementById("get-info");

  getMyinfoButton.addEventListener("click", getMyinfomation);

  // getMyinfoButton.addEventListener("click", async (e) => {
  //   e.preventDefault();
  //   await getMyinfomation();
  // });

  submitButton.addEventListener("click", async (e) => {
    e.preventDefault();

    if (!passwordInput.value || !usernameInput.value) {
      alert("Please input something");
      return;
    }

    // * fill here...?
    const accessToken = await login(usernameInput.value, passwordInput.value);
    if (!accessToken) return; // เช็คถ้า accessToken error หรือ undefined return

    localStorage.setItem("token", accessToken);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  main();
});
