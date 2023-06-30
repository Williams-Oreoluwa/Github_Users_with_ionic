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
  useIonLoading,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import { useIonRouter } from "@ionic/react";
import { logoGithub, logInOutline } from "ionicons/icons";

const Login: React.FC = () => {
  const [isLoading, isLoaded] = useIonLoading();
  const router = useIonRouter();
  const loginPage = async (e: any) => {
    e.preventDefault();
    await isLoading("Logging in.");
    setTimeout(() => {
      isLoaded();
      router.push("/home", "root");
    }, 3000);
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
                <IonCard>
                  <IonCardContent>
                    <form action="" className="form" onSubmit={loginPage}>
                      <div className="text">
                        <h2 className="user-text" style={{ color: "black" }}>
                          Username or Email
                        </h2>
                        <IonInput
                          className="text-input ion-border-radius"
                          fill="outline"
                          labelPlacement="floating"
                          label="email or username"
                          type="email"
                        ></IonInput>
                      </div>

                      <div className="details">
                        <div className="data">
                          <h2
                            className="user-text"
                            color={"success"}
                            style={{ color: "black" }}
                          >
                            Password
                          </h2>
                          <IonRouterLink routerLink="/forgot+password">
                            Forgot Password
                          </IonRouterLink>
                        </div>
                        <IonInput
                          className="text-input"
                          fill="outline"
                          labelPlacement="floating"
                          label="password"
                          type="password"
                        ></IonInput>
                      </div>
                      <IonButton
                        type="submit"
                        expand="block"
                        className="ion-margin-top"
                        color={"success"}
                      >
                        Sign In
                        <IonIcon icon={logInOutline} slot="end"></IonIcon>
                      </IonButton>
                    </form>
                  </IonCardContent>
                </IonCard>
              </div>
              <div className="card-container">
                <IonCard>
                  <IonCardContent className="register-card">
                    <div className="register-details">
                      <h2>New to GitHub?</h2>
                      <IonRouterLink routerLink="/register">
                        Create an account
                      </IonRouterLink>
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
