import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import {useState} from "react";
import axios from "axios";

const Tab1: React.FC = () => {

    const [joke, setJoke]= useState()

    function getAJokes(){

        axios.get("https://api.chucknorris.io/jokes/random")
            .then((response)=>{
                setJoke(response.data.value)
                console.log(response.data.value)

            })

    }


  return (
      <IonPage>
          <IonHeader>
              <IonToolbar>
                  <IonTitle>joke</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
              <p>{joke}</p>

              <IonHeader collapse="condense">
                  <IonToolbar>
                      <IonTitle size="large">Tab 1</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <ExploreContainer name="Tab 1 page"/>
              <IonButton onClick={getAJokes} className="btn btn-success">Change jokes</IonButton>

          </IonContent>
      </IonPage>
  )
      ;
};

export default Tab1;
