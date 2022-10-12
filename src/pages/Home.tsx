import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonReorder, IonReorderGroup, IonTitle, IonToolbar, ItemReorderEventDetail } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const handleReorder = (event:CustomEvent<ItemReorderEventDetail>)=>{
    event.detail.complete()
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
          <IonCard>
            <IonCardHeader>
              <IonReorder>
                <IonTitle>Test 1</IonTitle>
              </IonReorder>
            </IonCardHeader>
            <IonCardContent>
              <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
                <IonItem>
                  <IonReorder>
                    <IonLabel>Hello 1</IonLabel>
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonReorder>
                    <IonLabel>Hello 2</IonLabel>
                  </IonReorder>
                </IonItem>
              </IonReorderGroup>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonReorder>
                <IonTitle>Test 2</IonTitle>
              </IonReorder>
            </IonCardHeader>
            <IonCardContent>
              <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
                <IonItem>
                  <IonReorder>
                    <IonLabel>World 1</IonLabel>
                  </IonReorder>
                </IonItem>
                <IonItem>
                  <IonReorder>
                    <IonLabel>World 2</IonLabel>
                  </IonReorder>
                </IonItem>
              </IonReorderGroup>
            </IonCardContent>
          </IonCard>
        </IonReorderGroup>
      </IonContent>
    </IonPage>
  );
};

export default Home;
