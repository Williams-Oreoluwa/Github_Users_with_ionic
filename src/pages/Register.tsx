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
  IonRouterLink,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import { useIonRouter } from "@ionic/react";
import { logoGithub, logInOutline } from "ionicons/icons";

const Login: React.FC = () => {
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
                <h2>Sign in to GitHub</h2>
              </div>
            </IonCol>
          </IonRow>
          <IonRow class="ion-justify-content-center">
            <IonCol sizeSm="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="card-container">
                <IonCard className="register-card-main">
                  <IonCardContent>
                    <form action="" className="form" onSubmit={loginPage}>
                      <div className="text">
                        <h2 className="user-text" style={{ color: "black" }}>
                          First-Name
                        </h2>
                        <IonInput
                          className="text-input ion-border-radius"
                          fill="outline"
                          labelPlacement="floating"
                          label="Enter your first name"
                          type="text"
                        ></IonInput>
                        <h2 className="user-text" style={{ color: "black" }}>
                          Last-Name
                        </h2>
                        <IonInput
                          className="text-input"
                          fill="outline"
                          labelPlacement="floating"
                          label="Enter your last name"
                          type="text"
                        ></IonInput>
                        <h2 className="user-text" style={{ color: "black" }}>
                          E-mail
                        </h2>
                        <IonInput
                          className="text-input"
                          fill="outline"
                          labelPlacement="floating"
                          label="Enter your email"
                          type="email"
                        ></IonInput>
                        <h2 className="user-text" style={{ color: "black" }}>
                          Password
                        </h2>
                        <IonInput
                          className="text-input"
                          fill="outline"
                          labelPlacement="floating"
                          label="Enter your password"
                          type="password"
                        ></IonInput>
                        <h2 className="user-text" style={{ color: "black" }}>
                          Confirm Password
                        </h2>
                        <IonInput
                          className="text-input"
                          fill="outline"
                          labelPlacement="floating"
                          label="Confirm your password"
                          type="password"
                        ></IonInput>
                      </div>

                      <IonButton
                        type="submit"
                        expand="block"
                        className="ion-margin-top"
                        color={"success"}
                      >
                        Register
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
              <div className="card-container">
                <IonCard>
                  <IonCardContent className="register-card">
                    <div className="register-details">
                      <h2>Already have an account?</h2>
                      <IonRouterLink routerLink="/">Login</IonRouterLink>
                    </div>
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

export default Login;
