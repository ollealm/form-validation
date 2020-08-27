const validateForm = () => {
  const name = document.forms["contact"]["name"].value;
  const email = document.forms["contact"]["e-mail"].value;
  const type = document.forms["contact"]["type"].value;
  const terms = document.forms["contact"]["terms"].checked;
  const message = document.forms["contact"]["message"].value;
  const regex = /\S+\@\S+\.\S+/; // kollar ???@???.???
  console.log(message);
  if (name === "") {
    document.getElementById("message-name").innerHTML = "Name can't be empty";
    return false;
  } else if (email === "") {
    document.getElementById("message-email").innerHTML = "Email can't be empty";
    return false;
  } else if (!regex.test(email)) {
    document.getElementById("message-email").innerHTML =
      "Enter a correct email";
    return false;
  } else if (type === "") {
    document.getElementById("message-type").innerHTML = "Select contact reason";
    return false;
  } else if (terms === false) {
    document.getElementById("message-terms").innerHTML = "Accept terms";
    return false;
  } else if (message === "") {
    document.getElementById("message").innerHTML = "Please, leave a message";
    return false;
  }
};
