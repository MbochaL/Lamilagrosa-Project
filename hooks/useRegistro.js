import  React,{ useState } from "react";
import Router from "next/router";

export const useRegistro = () => {
    //stores the form fields
  const [userRegistro, setUserRegistro] = useState({
    user: "",
    email: "",
    direcciones: "",
    password: "",
    passwordConfirm: "",
  });

  //estado que maneja el tipo de error
  const [tipoError, setTipoError] = useState("");
  const [errorUsuario, setErrorUsuario] = useState("");
  const [errorEmail, setErrorEmail] = useState("")

  //state that saves the error message to print on the screen
  const [mensaje, setMensaje] = useState("");

  const handlerSubmitRegistro=async (e)=>{
    e.preventDefault();

    try {
        if(userRegistro.password === userRegistro.passwordConfirm && userRegistro.password.length !== 0){
          if(userRegistro.direcciones.length!==0){
            if(errorUsuario==="correcto"){
              if(errorEmail==="correcto"){
                const config={
                  method:"POST",
                  headers:{
                      "content-type":"application/json"
                  },
                  body:JSON.stringify(userRegistro)
              }
              const res=await fetch("https://lamilagrosa-app.herokuapp.com/api/registro",config);
              const respuesta= await res.json();
              //verifica si data es igual a registro exitoso, se registro bien
              if(respuesta.data==="registro exitoso"){
                setTipoError("correcto");
                setMensaje("Usuario registrado correctamente");
                Router.push("/login");
              }

              }else{
                setTipoError("error");
                setMensaje("El email no esta disponible y/o es campo esta vacio");
              }
            }else{
              setTipoError("error");
              setMensaje("El usuario no esta disponible y/o es campo esta vacio");
            }
          }else{
            setTipoError("error");
            setMensaje("el campo dirección es obligatorio");
          }
        }else{
          setTipoError("error");
          setMensaje("Las contraseñas no coinciden o el campo password esta vacio  ");
        }
    } catch (error) {
        
    }
  }


  //stores the data entered in each field of the form
  const hendlerInputChangeRegistro=async (e)=> {
    setUserRegistro({
      ...userRegistro,
      [e.target.id]: e.target.value,
    });

    //verifica si el usaurio esta disponible
    if(e.target.id==="user"){
      setTipoError("");
      setMensaje("");
      if(e.target.value.length !== 0 && e.target.value.length >=5 && e.target.value.length <= 10){
        console.log(e.target.id.length);
        console.log(e.target.id);
        const buscarUser={
          user:e.target.value
        }
        const config={
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify(buscarUser)
      }
        const res=await fetch("https://lamilagrosa-app.herokuapp.com/api/getUser",config);
        const respuesta= await res.json();
        if(respuesta.user==="disponible"){
            setErrorUsuario("correcto");
            setTipoError("correcto");
            setMensaje("Usuario Disponible");
        }else{
          setErrorUsuario("error");
          setTipoError("error");
          setMensaje("user no disponible");
      }
      }else{
          setErrorUsuario("error");
          setTipoError("error");
          setMensaje("El campo usuario esta vacio y/o es muy corto");
      }
    }

    if(e.target.id==="email"){
      setTipoError("");
      setMensaje("");
      if(e.target.value.length !== 0 && e.target.value.length >=5 && e.target.value.length <= 45){
        const buscarEmail={
          email:e.target.value
        }
        const config={
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify(buscarEmail)
      }
        const res=await fetch("https://lamilagrosa-app.herokuapp.com/api/getEmail",config);
        const respuesta= await res.json();
        if(respuesta.email==="disponible"){
            setErrorEmail("correcto");
            setTipoError("correcto");
            setMensaje("Email Disponible");
        }else{
            setErrorEmail("error");
            setTipoError("error");
            setMensaje("email no disponible");
        }
      }else{
          setErrorUsuario("error");
          setTipoError("error");
          setMensaje("El campo email esta vacio y/o es muy corto");
      }
    }
  }

  return [hendlerInputChangeRegistro,handlerSubmitRegistro,userRegistro,tipoError,mensaje,errorEmail,errorUsuario];
}
