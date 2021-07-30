# BasquetAprende
Repositorio del Videojuego Mayo-Agosto 2021
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScoreArea : MonoBehaviour
{
   public ParticleSystem winEffect;
   private void OnTriggerEnter(Collider other)
   {
       if (other.CompareTag("Ball") && GameController.instance.canScore == true) 
       {
           Debug.Log("CANASTA!");
           winEffect.Play();
       }
   }
}
