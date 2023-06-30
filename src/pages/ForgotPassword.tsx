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
  IonFooter,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import { logoGithub, logInOutline } from "ionicons/icons";
import { useIonRouter } from "@ionic/react";
const ForgotPassword: React.FC = () => {
  const router = useIonRouter();
  const chechVerification = (e: any) => {
    e.preventDefault();
    router.push("/verify", "forward");
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
        <IonGrid>
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
                    <form
                      action=""
                      className="form"
                      onSubmit={chechVerification}
                    >
                      <div className="text">
                        <h4 className="user-text">
                          Enter your user account's verified email address and
                          we will send you a 
                          password reset link.
                        </h4>
                        <IonInput
                          className="text-input ion-border-radius"
                          fill="outline"
                          labelPlacement="floating"
                          label="Enter your email address"
                          type="email"
                        ></IonInput>
                      </div>

                      <IonButton
                        type="submit"
                        expand="block"
                        className="ion-margin-top"
                        color={"success"}
                      >
                        Send password reset email
                        <IonIcon icon={logInOutline} slot="end"></IonIcon>
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

export default ForgotPassword;
