# BasquetAprende
Repositorio del Videojuego Mayo-Agosto 2021
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class MenuScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        Cursor.lockState = CursorLockMode.None;
        Cursor.visible = true;
    }

   public void PlayButton()
   {
       SceneManager.LoadScene(1);
   }

   public void Salir()
   {
       Application.Quit();
   }
}
