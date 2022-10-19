import { loading } from "../../redux/actions";

export const COURSE_STUDENTS = "COURSE_STUDENTS";
export const LOGIN = "LOGIN";
export const SET_PAY_TO_CART = "SET_PAY_TO_CART";
export const DELETE_PAY_FROM_CART = "DELETE_PAY_FROM_CART";
export const GO_CHECKOUT ="GO_CHECKOUT"
export const DONT_GO_CHECKOUT ="DONT_GO_CHECKOUT"


// CREA PAGOS
export function createPay(pay) {
  return fetch("http://localhost:3001/payments", {
    method: "POST",
    body: JSON.stringify(pay),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((res) => { return res });
}

// TRAER TODOS LOS ESTUDIANTES con cursos
export function groupStudents() {
  return function (dispatch) {
    return fetch("http://localhost:3001/students")
      .then(res => res.json())
      .catch(error => console.error("Error:", error))
      .then(res => {
        dispatch({ type: COURSE_STUDENTS, payload: res });
      });
  }
}


// TODO LO RELACIONADO CON PAY
export function getAllPay(state, idUser, typeUser) {
  return fetch(`http://localhost:3001/payments/${state}/${idUser}/${typeUser}`)
    .then(res => res.json())
    .then(res => { return res })
    .catch(error => console.error("Error:", error))
}

// TRAE USUARIO COMO EL DE LOGIN
export function getUserPay(data) {
  return function (dispatch) {
    dispatch(loading())
    return fetch("http://localhost:3001/users/password", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((login) => {
        dispatch({ type: LOGIN, payload: login });
      });
  };
}

export function setPayToCart(data) {
  return (
    {
      type: "SET_PAY_TO_CART",
      payload: data
    }
  )
}

export function deletePayFromCart(data) {
  return (
    {
      type: "DELETE_PAY_FROM_CART",
      payload: data
    }
  )
}

export function goCheckout() {
  return (
    {
      type: "GO_CHECKOUT",
    }
  )
}

export function dontGoCheckout() {
  return (
    {
      type: "DONT_GO_CHECKOUT",
    }
  )
}