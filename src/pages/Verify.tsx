import {
  IonContent,
  IonButton,
  IonHeader,
  IonBackButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import { useIonRouter } from "@ionic/react";
import {
  logoGithub,
  logInOutline,
  backspaceOutline,
  banOutline,
  linkOutline,
  linkSharp,
  idCard,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";

const Verify: React.FC = () => {
  const router = useIonRouter();
  const loginPage = (e: any) => {
    e.preventDefault();
    router.push("/home", "root");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={"dark"} className="ion-grid">
          <IonButton slot="starts">
            <IonBackButton defaultHref="/login" />
          </IonButton>
          <div className="header">
            <IonIcon
              className="git-logo-header"
              icon={logoGithub}
              color={"light"}
            ></IonIcon>
            <IonTitle>GitHub</IonTitle>
          </div>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="ion-text-center ion-padding">
                <IonIcon className="git-logo" icon={logoGithub}></IonIcon>
                <h2>reset your password</h2>
              </div>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="card-container">
                <IonCard>
                  <IonCardContent>
                    <form action="" className="form" onSubmit={loginPage}>
                      <div className="text">
                        <h2 className="user-text" style={{ color: "black" }}>
                          Check your email for a link to reset your <br />{" "}
                          password. If it doesn’t appear within a few <br />{" "}
                          minutes, check your spam folder.
                        </h2>
                      </div>
                      <IonButton
                        type="submit"
                        expand="block"
                        className="ion-margin-top"
                        color={"light"}
                        routerLink="/"
                      >
                        return to sign-in
                        <IonIcon icon={linkSharp} slot="end"></IonIcon>
                      </IonButton>
                    </form>
                  </IonCardContent>
                </IonCard>
              </div>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="footer">
                <ul>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a className="contact-github" href="#">
                      Contact GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Verify;
