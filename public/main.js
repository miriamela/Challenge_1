"use strict";
const input = document.querySelector(".js-input");
const output = document.querySelector(".js-output");
const submit = document.querySelector(".js-submit");
const historyBtn = document.querySelector(".js-request");
const table = document.querySelector(".js-table");
const baseURL = "http://localhost:80";

let stamps = [];

const onClick = (ev) => {
  ev.preventDefault();
  let data = input.value;
  const arrData = data.split(" ");
  input.value = "";
  getResult(arrData);
};
const onRequest = (ev) => {
  ev.preventDefault();
  console.log("click");
  fetch(`${baseURL}/numbers`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      table.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        table.innerHTML += `
        <tr>
          <td>${data[i].call}</td>
          <td>${data[i].date}</td>
          <td>${data[i].url}</td>
        <tr>
        `;
      }
    });
};

const getResult = (arrData) => {
  fetch(`${baseURL}/numbers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: arrData,
    }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      output.innerHTML = data.result;
    });
};
historyBtn.addEventListener("click", onRequest);
submit.addEventListener("click", onClick);
