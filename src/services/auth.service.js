export const login = ({ email, password }) => {
  if (email === "a@a.com" && password === "123456789") {
    localStorage.setItem(
      "admin",
      JSON.stringify({
        user: "admin",
        token: "123"
      })
    );
    return true;
  } else {
    return false;
  }
};

export const logout = () => {
  if (localStorage.getItem("admin")) {
    localStorage.removeItem("admin");
    return true;
  } else {
    return false;
  }
};
