import { IonContent, IonHeader, IonItem, IonLabel, IonPage, IonReorder, IonReorderGroup, IonTitle, IonToolbar, ItemReorderEventDetail } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonReorderGroup disabled={false}>
          <IonReorder>
            <IonItem>
              <IonLabel>T1</IonLabel>
            </IonItem>
          </IonReorder>
          <IonReorder>
            <IonItem>
              <IonLabel>T2</IonLabel>
            </IonItem>
          </IonReorder>
        </IonReorderGroup>
      </IonContent>
    </IonPage>
  );
};

export default Home;
