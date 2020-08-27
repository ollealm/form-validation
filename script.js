const validateForm = () => {
  const name = document.forms["contact"]["name"].value;
  const email = document.forms["contact"]["e-mail"].value;
  const type = document.forms["contact"]["type"].value;
  const terms = document.forms["contact"]["terms"].checked;
  const message = document.forms["contact"]["message"].value;
  const regex = /\S+\@\S+\.\S+/; // kollar ???@???.???

  if (name === "") {
    document.getElementById("message-name").innerHTML = "Name can't be empty";
    document.getElementById("name-id").focus();
    return false;
  } else {
    document.getElementById("message-name").innerHTML = "";
  }

  if (email === "") {
    document.getElementById("message-email").innerHTML = "Email can't be empty";
    document.getElementById("e-mail-id").focus();
    return false;
  } else if (!regex.test(email)) {
    document.getElementById("message-email").innerHTML =
      "Enter a correct email";
    document.getElementById("e-mail-id").focus();
    return false;
  } else {
    document.getElementById("message-email").innerHTML = "";
  }

  if (type === "") {
    document.getElementById("message-type").innerHTML = "Select contact reason";
    document.getElementById("private").focus();
    return false;
  } else {
    document.getElementById("message-type").innerHTML = "";
  }

  if (terms === false) {
    document.getElementById("message-terms").innerHTML = "Accept terms";
    document.getElementById("terms").focus();
    return false;
  } else {
    document.getElementById("message-terms").innerHTML = "";
  }

  if (message.length < 5) {
    document.getElementById("message").innerHTML =
      "Please, leave a message. <br>(Minimum 5 charaters)";
    document.getElementById("message-input").focus();
    return false;
  } else {
    document.getElementById("message").innerHTML = "";
  }
};
